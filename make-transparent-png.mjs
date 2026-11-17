import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { spawn, execFileSync } from 'node:child_process';

function findChrome() {
  const local = process.env.LOCALAPPDATA ? path.join(process.env.LOCALAPPDATA, 'Google/Chrome/Application/chrome.exe') : null;
  const c = [
    process.env.CHROME_PATH,
    'C:/Program Files/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
    local,
    'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'
  ];
  const f = c.find(p => p && fs.existsSync(p));
  if (!f) throw new Error('no Chrome found');
  return f;
}

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function run() {
  const profile = path.join(os.tmpdir(), 'chrome-alpha-' + Date.now());
  fs.mkdirSync(profile, { recursive: true });
  const portFile = path.join(profile, 'DevToolsActivePort');

  const child = spawn(findChrome(), [
    '--headless=new',
    `--user-data-dir=${profile}`,
    '--remote-debugging-port=0',
    '--no-first-run',
    '--no-default-browser-check',
    '--disable-extensions',
    'about:blank'
  ], { stdio: 'ignore', windowsHide: true });

  const kill = () => {
    try { execFileSync('taskkill', ['/PID', String(child.pid), '/T', '/F'], { stdio: 'ignore' }); } catch {}
  };

  try {
    let port = null;
    for (let i = 0; i < 100 && !port; i++) {
      await sleep(100);
      try { port = parseInt(fs.readFileSync(portFile, 'utf8'), 10) || null; } catch {}
    }
    if (!port) throw new Error('Chrome did not start');

    const ver = await (await fetch(`http://127.0.0.1:${port}/json/version`)).json();
    const ws = new WebSocket(ver.webSocketDebuggerUrl);
    await new Promise((r, j) => { ws.addEventListener('open', r, { once: true }); ws.addEventListener('error', j, { once: true }); });

    let id = 0;
    const pend = new Map();
    ws.addEventListener('message', e => {
      const m = JSON.parse(e.data);
      if (m.id && pend.has(m.id)) { pend.get(m.id)(m); pend.delete(m.id); }
    });

    const send = (method, params = {}, sessionId) => new Promise(r => {
      const i = ++id;
      pend.set(i, r);
      ws.send(JSON.stringify({ id: i, method, params, sessionId }));
    });

    const { result: { targetId } } = await send('Target.createTarget', { url: 'about:blank' });
    const { result: { sessionId } } = await send('Target.attachToTarget', { targetId, flatten: true });

    await send('Runtime.enable', {}, sessionId);

    // Read input image as base64
    const inputPath = path.resolve('public/images/plant-decor.jpg');
    const base64Jpg = fs.readFileSync(inputPath).toString('base64');
    const dataUri = `data:image/jpeg;base64,${base64Jpg}`;

    const evalResult = await send('Runtime.evaluate', {
      expression: `
        new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);

            const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = imgData.data;

            // Remove white background with smooth alpha feathering
            for (let i = 0; i < data.length; i += 4) {
              const r = data[i];
              const g = data[i + 1];
              const b = data[i + 2];

              // Check closeness to white
              const minVal = Math.min(r, g, b);

              if (minVal > 240) {
                // Pure white background -> fully transparent
                data[i + 3] = 0;
              } else if (minVal > 220) {
                // Feather edge: smooth gradient from 220 to 240
                const alphaFactor = (240 - minVal) / 20;
                data[i + 3] = Math.round(data[i + 3] * alphaFactor);
              }
            }

            ctx.putImageData(imgData, 0, 0);
            resolve(canvas.toDataURL('image/png'));
          };
          img.onerror = (e) => reject('Failed to load image');
          img.src = '${dataUri}';
        })
      `,
      awaitPromise: true,
      returnByValue: true
    }, sessionId);

    const pngDataUrl = evalResult.result ? (evalResult.result.value || (evalResult.result.result && evalResult.result.result.value)) : null;
    if (!pngDataUrl) {
      console.log('evalResult was:', JSON.stringify(evalResult));
      return;
    }
    const base64Data = pngDataUrl.replace(/^data:image\/png;base64,/, '');
    fs.writeFileSync('public/images/plant-decor.png', Buffer.from(base64Data, 'base64'));
    console.log('Successfully saved public/images/plant-decor.png');
  } finally {
    kill();
  }
}

run().catch(console.error);
