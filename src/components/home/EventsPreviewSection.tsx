import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  ArrowRight,
  MapPin,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { ACADEMY_EVENTS, AcademyEvent } from '@/data/events';
import { ResponsiveCategoryFilter } from '@/components/common/ResponsiveCategoryFilter';

interface EventVisualConfig {
  bgGradient: string;
  blobColor: string;
  pillBg: string;
  pillText: string;
  auraColor: string;
}

const EVENT_CONFIGS: Record<string, EventVisualConfig> = {
  '18th-year-celebration': {
    bgGradient: 'from-blue-50/90 via-sky-100/60 to-indigo-50/80',
    blobColor: 'bg-blue-400/20',
    pillBg: 'bg-blue-600/10 text-blue-800 border-blue-200/60',
    pillText: 'Historic Milestone',
    auraColor: 'from-blue-200/40 via-sky-200/20 to-transparent',
  },
  'state-achievers-felicitation': {
    bgGradient: 'from-amber-50/90 via-yellow-100/60 to-orange-50/80',
    blobColor: 'bg-amber-400/20',
    pillBg: 'bg-amber-600/10 text-amber-900 border-amber-200/60',
    pillText: 'Annual Mega Event',
    auraColor: 'from-amber-200/40 via-yellow-200/20 to-transparent',
  },
  'tnusrb-stars-parade': {
    bgGradient: 'from-emerald-50/90 via-teal-100/60 to-cyan-50/80',
    blobColor: 'bg-emerald-400/20',
    pillBg: 'bg-emerald-600/10 text-emerald-900 border-emerald-200/60',
    pillText: 'Uniform Service Honour',
    auraColor: 'from-emerald-200/40 via-teal-200/20 to-transparent',
  },
  'civil-services-orientation': {
    bgGradient: 'from-purple-50/90 via-violet-100/60 to-fuchsia-50/80',
    blobColor: 'bg-purple-400/20',
    pillBg: 'bg-purple-600/10 text-purple-900 border-purple-200/60',
    pillText: 'Statewide Guidance',
    auraColor: 'from-purple-200/40 via-violet-200/20 to-transparent',
  },
  'alumni-conclave': {
    bgGradient: 'from-rose-50/90 via-pink-100/60 to-orange-50/80',
    blobColor: 'bg-rose-400/20',
    pillBg: 'bg-rose-600/10 text-rose-900 border-rose-200/60',
    pillText: 'Officer Mentorship',
    auraColor: 'from-rose-200/40 via-pink-200/20 to-transparent',
  },
  'samacheer-syllabus-workshop': {
    bgGradient: 'from-teal-50/90 via-cyan-100/60 to-emerald-50/80',
    blobColor: 'bg-teal-400/20',
    pillBg: 'bg-teal-600/10 text-teal-900 border-teal-200/60',
    pillText: 'Academic Blueprint',
    auraColor: 'from-teal-200/40 via-cyan-200/20 to-transparent',
  },
};

export const EventsPreviewSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const activeIdxRef = useRef(0);

  // Expanded event dataset matching reference cards
  const allEvents: (AcademyEvent & { visualConfig: EventVisualConfig })[] = [
    {
      ...ACADEMY_EVENTS[0],
      visualConfig: EVENT_CONFIGS['18th-year-celebration'],
    },
    {
      ...ACADEMY_EVENTS[1],
      visualConfig: EVENT_CONFIGS['state-achievers-felicitation'],
    },
    {
      ...ACADEMY_EVENTS[2],
      visualConfig: EVENT_CONFIGS['tnusrb-stars-parade'],
    },
    {
      ...ACADEMY_EVENTS[3],
      visualConfig: EVENT_CONFIGS['civil-services-orientation'],
    },
    {
      id: 'alumni-conclave',
      title: 'Bureaucrats & Alumni Mentorship Conclave',
      category: 'Functions',
      badge: 'Alumni Network',
      dateLabel: 'Annual Alumni Gathering',
      location: 'Madurai & Chennai Convention Centers',
      summary: 'Serving IAS, IPS, DSP and Sub-Collector alumni return to mentor current batch aspirants.',
      description: 'An elite congregation of our successful alumni serving in state and central cadres.',
      coverImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=80',
      gallery: [],
      highlights: ['Mentorship by serving officers', 'Panel on public administration'],
      visualConfig: EVENT_CONFIGS['alumni-conclave'],
    },
    {
      id: 'samacheer-syllabus-workshop',
      title: 'Samacheer Kalvi Mastery & Book-Back Blueprint',
      category: 'Institutional Seminars',
      badge: 'Academic Excellence',
      dateLabel: 'Special Subject Workshop',
      location: 'Statewide Regional Hubs',
      summary: 'Comprehensive line-by-line strategy session decoding TN State Board school textbooks for maximum marks.',
      description: 'Faculty masterclasses guiding students through core syllabus topics.',
      coverImage: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1000&q=80',
      gallery: [],
      highlights: ['Textbook analysis', 'Question pattern decoding'],
      visualConfig: EVENT_CONFIGS['samacheer-syllabus-workshop'],
    },
  ];

  const categories = ['All', 'Functions', 'Achiever Program', 'Institutional Seminars'];

  // Display 5 flagship events when 'All' is selected for perfect 5-card arch
  const filteredEvents =
    selectedCategory === 'All'
      ? allEvents.slice(0, 5)
      : allEvents.filter((evt) => evt.category === selectedCategory);

  const scrollToSlide = (nextIdx: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const children = Array.from(el.children) as HTMLElement[];
    const target = children[nextIdx];
    if (target) {
      const targetLeft =
        target.offsetLeft - (el.clientWidth - target.offsetWidth) / 2;
      el.scrollTo({ left: Math.max(0, targetLeft), behavior: 'smooth' });
      activeIdxRef.current = nextIdx;
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current || filteredEvents.length === 0) return;
    const total = filteredEvents.length;
    const nextIdx =
      direction === 'right'
        ? (activeIdxRef.current + 1) % total
        : (activeIdxRef.current - 1 + total) % total;
    scrollToSlide(nextIdx);
  };

  // Auto-advance every 2 seconds when horizontally scrollable (mobile/tablet slider)
  useEffect(() => {
    activeIdxRef.current = 0;
  }, [selectedCategory]);

  useEffect(() => {
    if (isPaused || filteredEvents.length <= 1) return;
    const timer = setInterval(() => {
      const el = scrollRef.current;
      if (!el) return;
      if (el.scrollWidth <= el.clientWidth + 4) return;
      const nextIdx = (activeIdxRef.current + 1) % filteredEvents.length;
      scrollToSlide(nextIdx);
    }, 2000);
    return () => clearInterval(timer);
  }, [isPaused, filteredEvents.length]);

  /**
   * Inverted U (∩) Arch Curve Styling:
   * Center Apex Card sits elevated with 0deg rotation and shadow-2xl.
   * Flanking cards curve downward with subtle outward tilts:
   * Left: counter-clockwise tilt (-3.5deg to -7deg), dipped downward
   * Right: clockwise tilt (+3.5deg to +7deg), dipped downward
   */
  const getCardArchClass = (index: number, total: number) => {
    if (total === 1) {
      return 'lg:-translate-y-2 lg:scale-[1.02] shadow-2xl ring-1 ring-[#174A9C]/10';
    }
    if (total === 2) {
      return index === 0
        ? 'lg:translate-y-2 lg:-rotate-[2.5deg] origin-bottom lg:z-10 hover:lg:translate-y-0 hover:lg:rotate-0'
        : 'lg:translate-y-2 lg:rotate-[2.5deg] origin-bottom lg:z-10 hover:lg:translate-y-0 hover:lg:rotate-0';
    }
    if (total === 3) {
      if (index === 0) {
        return 'lg:translate-y-6 lg:-rotate-[4.5deg] origin-bottom lg:z-10 hover:lg:translate-y-1 hover:lg:rotate-0 hover:lg:scale-[1.02] hover:lg:z-30';
      }
      if (index === 1) {
        return 'lg:-translate-y-4 lg:rotate-0 lg:scale-[1.04] lg:z-20 shadow-2xl ring-1 ring-[#174A9C]/15 hover:lg:-translate-y-6 hover:lg:scale-[1.06] hover:lg:z-30';
      }
      return 'lg:translate-y-6 lg:rotate-[4.5deg] origin-bottom lg:z-10 hover:lg:translate-y-1 hover:lg:rotate-0 hover:lg:scale-[1.02] hover:lg:z-30';
    }

    // 5-Card Inverted U Arch
    const mid = (total - 1) / 2;
    const diff = index - mid;

    if (Math.abs(diff) < 0.6) {
      // Center Apex Card (Highest)
      return 'lg:-translate-y-3 xl:-translate-y-4 lg:rotate-0 lg:scale-[1.04] lg:z-20 shadow-2xl ring-1 ring-[#174A9C]/15 hover:lg:-translate-y-5 hover:lg:scale-[1.06] hover:lg:z-30';
    } else if (Math.abs(diff) < 1.6) {
      // Mid-level Flanking Cards
      const rot = diff < 0 ? 'lg:-rotate-[3deg] xl:-rotate-[3.5deg]' : 'lg:rotate-[3deg] xl:rotate-[3.5deg]';
      return `lg:translate-y-3 xl:translate-y-4 ${rot} origin-bottom lg:z-15 hover:lg:translate-y-0 hover:lg:rotate-0 hover:lg:scale-[1.03] hover:lg:z-30`;
    } else {
      // Outer Dipped Flanking Cards
      const rot = diff < 0 ? 'lg:-rotate-[6deg] xl:-rotate-[6.5deg]' : 'lg:rotate-[6deg] xl:rotate-[6.5deg]';
      return `lg:translate-y-8 xl:translate-y-10 ${rot} origin-bottom lg:z-10 hover:lg:translate-y-2 hover:lg:rotate-0 hover:lg:scale-[1.02] hover:lg:z-30`;
    }
  };

  return (
    <section
      className="bg-[#FAF9F6] pt-14 sm:pt-16 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 border-b border-[#E5EAF2] select-none relative overflow-hidden"
      id="academy-events"
    >
      {/* ----------------- ORGANIC BACKGROUND SHAPE BLOBS (Matching Reference) ----------------- */}
      
      {/* Left Huge Royal Blue Organic Disc (Matching Blue Circle in Reference) */}
      <div className="absolute -left-28 sm:-left-36 top-1/4 w-[340px] sm:w-[460px] h-[340px] sm:h-[460px] rounded-full bg-[#3B82F6]/25 pointer-events-none z-0 blur-xl" />

      {/* Top-Right Vibrant Lime / Emerald Blob (Matching Green Blob in Reference) */}
      <div className="absolute -top-16 -right-20 w-[300px] sm:w-[420px] h-[300px] sm:h-[420px] rounded-full bg-[#22C55E]/20 pointer-events-none z-0 blur-2xl" />

      {/* Bottom-Right Soft Rose / Coral Curve (Matching Pink Curve in Reference) */}
      <div className="absolute -bottom-16 right-1/4 w-[320px] sm:w-[400px] h-[200px] rounded-t-full bg-[#F43F5E]/15 pointer-events-none z-0 blur-2xl" />

      <div className="w-full max-w-[1520px] mx-auto space-y-6 sm:space-y-8 relative z-10">
        
        {/* Section Header: Clean & Editorial */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-left">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#174A9C]">
              <Calendar className="w-4 h-4 text-[#E31B23]" />
              <span>Campus Life & Conclaves</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-black text-[#102A78] tracking-tight">
              Academy Events & Felicitations
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] font-medium">
              Historic convocations, officer gold medal ceremonies, and grassroots guidance summits across Tamil Nadu.
            </p>
          </div>

          <Link
            to="/events"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#102A78] hover:bg-[#174A9C] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md shrink-0 cursor-pointer group"
          >
            <span>View All Events</span>
            <ArrowRight className="w-4 h-4 text-[#FFDE59] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* ----------------- TOP TOOLBAR: CATEGORY FILTER & NAVIGATION ARROWS ----------------- */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 py-3 border-y border-[#E2E8F0]/70">
          
          {/* Category Filter (Dropdown on Mobile, Pill Row on Desktop) */}
          <ResponsiveCategoryFilter
            options={categories.map((cat) => ({ id: cat, label: cat }))}
            value={selectedCategory}
            onChange={(val) => {
              setSelectedCategory(val);
              if (scrollRef.current) {
                scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
              }
            }}
            ariaLabel="Filter academy events"
            variant="soft"
          />

          {/* Carousel Navigation (< > Arrows) (Moved to Top) */}
          <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
            <button
              onClick={() => scroll('left')}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-slate-300 bg-white hover:bg-slate-50 text-[#102A78] flex items-center justify-center shadow-xs hover:shadow-md transition-all cursor-pointer active:scale-95"
              title="Previous Events"
              aria-label="Previous Events"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-slate-300 bg-white hover:bg-slate-50 text-[#102A78] flex items-center justify-center shadow-xs hover:shadow-md transition-all cursor-pointer active:scale-95"
              title="Next Events"
              aria-label="Next Events"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ----------------- CAROUSEL CARDS: MOBILE 1-CARD AUTO-SLIDER + DESKTOP INVERTED U ARCH (∩) ----------------- */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="flex items-center justify-start lg:justify-center gap-0 md:gap-4 xl:gap-5 overflow-x-auto scrollbar-none pt-10 sm:pt-14 pb-20 sm:pb-28 md:px-2 snap-x snap-mandatory scroll-smooth"
        >
          {filteredEvents.map((evt, index) => {
            const config = evt.visualConfig;
            const archClass = getCardArchClass(index, filteredEvents.length);

            return (
              <div
                key={evt.id}
                className="w-full md:w-auto shrink-0 snap-center flex justify-center px-3 md:p-0"
              >
              <div
                className={`w-full max-w-[310px] sm:w-[275px] lg:w-[255px] xl:w-[270px] 2xl:w-[280px] h-[450px] sm:h-[465px] rounded-[2.2rem] bg-white p-5 sm:p-5.5 shadow-xl hover:shadow-2xl border border-black/5 transition-all duration-500 ease-out flex flex-col justify-between shrink-0 group cursor-pointer ${archClass}`}
              >
                {/* ----------------- TOP PREVIEW BOX (Pastel Gradient with Floating Pills & Glow) ----------------- */}
                <div
                  className={`w-full h-[195px] sm:h-[205px] rounded-2xl bg-gradient-to-br ${config.bgGradient} p-3.5 sm:p-4 relative overflow-hidden flex flex-col justify-between border border-black/5`}
                >
                  {/* Subtle Ambient Aura */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-tr ${config.auraColor} pointer-events-none`}
                  />

                  {/* Top Floating Tags Bar */}
                  <div className="relative z-10 flex items-center justify-between gap-2">
                    <span className="text-[9.5px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/85 backdrop-blur-xs text-[#102A78] border border-white/60 shadow-2xs">
                      {evt.category}
                    </span>

                    <div className="flex items-center gap-1 text-[9.5px] font-semibold text-[#64748B] bg-white/80 backdrop-blur-xs px-2 py-0.5 rounded-full border border-white/50">
                      <MapPin className="w-2.5 h-2.5 text-[#174A9C] shrink-0" />
                      <span className="truncate max-w-[70px]">
                        {evt.location.split(',')[0].split('&')[0].trim()}
                      </span>
                    </div>
                  </div>

                  {/* Center Content: Realistic Image with Soft Glass Frame */}
                  <div className="relative z-10 my-auto flex items-center justify-center">
                    <div className="w-full h-24 rounded-xl overflow-hidden shadow-sm relative group-hover:scale-105 transition-transform duration-300">
                      <img
                        src={evt.coverImage}
                        alt={evt.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      <span className="absolute bottom-1.5 left-2 text-[9.5px] font-bold text-white tracking-wide truncate pr-2">
                        {evt.dateLabel}
                      </span>
                    </div>
                  </div>

                  {/* Bottom Action / Highlight Tag (Matching "Create a run" / "Literature" Pills in Reference) */}
                  <div className="relative z-10 flex justify-end">
                    <span
                      className={`text-[9.5px] font-extrabold px-2.5 py-0.5 rounded-full border shadow-2xs ${config.pillBg}`}
                    >
                      {config.pillText}
                    </span>
                  </div>
                </div>

                {/* ----------------- BOTTOM EDITORIAL TYPOGRAPHY ----------------- */}
                <div className="flex-1 flex flex-col justify-between pt-3.5">
                  <div className="space-y-1">
                    <h3 className="font-serif text-base sm:text-lg font-bold text-[#102A78] leading-snug group-hover:text-[#174A9C] transition-colors line-clamp-2">
                      {evt.title}
                    </h3>
                    <p className="text-xs text-[#64748B] font-medium leading-relaxed line-clamp-2">
                      {evt.summary}
                    </p>
                  </div>

                  {/* Bottom "Learn More >" Link (Exact Reference Copy) */}
                  <div className="pt-2.5">
                    <Link
                      to="/events"
                      className="text-xs font-bold text-[#102A78] group-hover:text-[#E31B23] inline-flex items-center gap-1.5 transition-colors group/link"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

              </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
