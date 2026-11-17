import puppeteer from 'puppeteer';

async function run() {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 1000 });
  await page.goto('http://localhost:4173/', { waitUntil: 'networkidle0' });
  const el = await page.$('#why-taf');
  if (el) {
    await el.screenshot({ path: 'shots/why-taf-pinned.png' });
    console.log('Saved shots/why-taf-pinned.png');
  } else {
    console.log('Element #why-taf not found');
  }
  await browser.close();
}

run().catch(console.error);
