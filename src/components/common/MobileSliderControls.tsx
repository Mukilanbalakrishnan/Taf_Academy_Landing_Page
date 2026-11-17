import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface MobileSliderControlsProps {
  scrollRef: React.RefObject<HTMLDivElement | null>;
  total: number;
  label?: string;
  hideAbove?: 'sm' | 'md' | 'lg';
  autoPlayMs?: number;
}

export const MobileSliderControls: React.FC<MobileSliderControlsProps> = ({
  scrollRef,
  total,
  label = 'Swipe cards',
  hideAbove = 'md',
  autoPlayMs = 2000,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);
  const isPausedRef = useRef(false);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const updateActive = () => {
      const children = Array.from(el.children) as HTMLElement[];
      if (children.length === 0) return;

      const containerCenter = el.scrollLeft + el.clientWidth / 2;
      let closestIdx = 0;
      let closestDist = Infinity;

      children.forEach((child, idx) => {
        const childCenter = child.offsetLeft + child.offsetWidth / 2;
        const dist = Math.abs(childCenter - containerCenter);
        if (dist < closestDist) {
          closestDist = dist;
          closestIdx = idx;
        }
      });

      setActiveIndex(closestIdx);
    };

    const pause = () => {
      isPausedRef.current = true;
    };
    const resume = () => {
      isPausedRef.current = false;
    };

    updateActive();
    el.addEventListener('scroll', updateActive, { passive: true });
    el.addEventListener('touchstart', pause, { passive: true });
    el.addEventListener('touchend', resume, { passive: true });
    el.addEventListener('mouseenter', pause);
    el.addEventListener('mouseleave', resume);
    window.addEventListener('resize', updateActive);

    return () => {
      el.removeEventListener('scroll', updateActive);
      el.removeEventListener('touchstart', pause);
      el.removeEventListener('touchend', resume);
      el.removeEventListener('mouseenter', pause);
      el.removeEventListener('mouseleave', resume);
      window.removeEventListener('resize', updateActive);
    };
  }, [scrollRef, total]);

  const scrollToIndex = (nextIdx: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const children = Array.from(el.children) as HTMLElement[];
    const target = children[nextIdx];
    if (target) {
      const targetLeft =
        target.offsetLeft - (el.clientWidth - target.offsetWidth) / 2;
      el.scrollTo({ left: Math.max(0, targetLeft), behavior: 'smooth' });
      setActiveIndex(nextIdx);
    }
  };

  // Auto-advance every 2 seconds when horizontally scrollable (mobile slider active)
  useEffect(() => {
    if (!autoPlayMs || total <= 1) return;

    const timer = setInterval(() => {
      const el = scrollRef.current;
      if (!el || isPausedRef.current) return;
      // Only auto-slide when horizontal slider is actually active (mobile/tablet)
      if (el.scrollWidth <= el.clientWidth + 4) return;

      const nextIdx = (activeIndexRef.current + 1) % total;
      scrollToIndex(nextIdx);
    }, autoPlayMs);

    return () => clearInterval(timer);
  }, [scrollRef, total, autoPlayMs]);

  if (total <= 1) return null;

  const slideTo = (direction: 'prev' | 'next') => {
    const nextIdx =
      direction === 'next'
        ? (activeIndex + 1) % total
        : (activeIndex - 1 + total) % total;
    scrollToIndex(nextIdx);
  };

  const visibilityClass =
    hideAbove === 'sm' ? 'sm:hidden' : hideAbove === 'lg' ? 'lg:hidden' : 'md:hidden';

  const progressPct = Math.min(100, ((activeIndex + 1) / total) * 100);

  return (
    <div className={`${visibilityClass} flex items-center justify-between gap-3`}>
      <div className="flex items-center gap-2.5">
        <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-[#F4F7FC] border border-[#E5EAF2] text-[11px] font-extrabold text-[#102A78] tabular-nums">
          {activeIndex + 1} / {total}
        </span>
        <div className="flex flex-col gap-1">
          <span className="text-[11px] font-semibold text-[#64748B] leading-none">
            {label}
          </span>
          <div className="w-20 h-1 rounded-full bg-slate-200 overflow-hidden">
            <div
              className="h-full rounded-full bg-[#102A78] transition-all duration-300"
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <button
          type="button"
          onClick={() => slideTo('prev')}
          aria-label="Previous card"
          className="w-9 h-9 rounded-full bg-white border border-[#E5EAF2] text-[#102A78] flex items-center justify-center shadow-2xs active:scale-95 transition-all cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={() => slideTo('next')}
          aria-label="Next card"
          className="w-9 h-9 rounded-full bg-white border border-[#E5EAF2] text-[#102A78] flex items-center justify-center shadow-2xs active:scale-95 transition-all cursor-pointer"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
