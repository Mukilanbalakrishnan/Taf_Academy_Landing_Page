import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

interface HeroSectionProps {
  onOpenEnquiry: (courseTitle?: string) => void;
}

interface BannerSlide {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  highlightText: string;
  specs: { label: string; value: string }[];
  ctaText: string;
  href: string;
  courseKey: string;
  bgGradient: string;
  accentColor: string;
  tagColor: string;
  badgeBg: string;
  bgImage: string;
}

const BANNER_SLIDES: BannerSlide[] = [
  {
    id: 'tnpsc-2026',
    badge: 'TAMIL NADU PUBLIC SERVICE COMMISSION',
    title: 'TNPSC GROUP 1, 2/2A & 4 RECRUITMENT 2026',
    subtitle: 'Mission 2026 Comprehensive Prelims + Mains Intensive Regular & Weekend Batches',
    highlightText: '12,000+ VACANCIES EXPECTED',
    specs: [
      { label: 'Study Books', value: 'Aamu Line-by-Line Series' },
      { label: 'Evaluation', value: 'Daily OMR State Rank Tests' },
      { label: 'Network', value: '92 Centers Across TN' },
      { label: 'Medium', value: 'Tamil & English Batches' },
    ],
    ctaText: 'Enrol for 2026 Batch',
    href: '/courses/tnpsc/group-1',
    courseKey: 'TNPSC Group 1, 2/2A & 4',
    bgGradient: 'from-[#08183A] via-[#0E2863] to-[#174A9C]',
    accentColor: '#FFD700',
    tagColor: 'bg-red-500/20 text-red-200 border-red-400/30',
    badgeBg: 'bg-[#FFDE59] text-[#0B1E48]',
    bgImage: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1920&q=80',
  },
  {
    id: 'tnsurb-si-pc',
    badge: 'TAMIL NADU UNIFORMED SERVICES (TNSURB)',
    title: 'POLICE SUB-INSPECTOR (SI) & CONSTABLE 2026',
    subtitle: 'Written Exam Mastery + Direct Daily Ground Physical Training by Retired DSPs',
    highlightText: '8,500+ SELECTIONS IN POLICE SERVICES',
    specs: [
      { label: 'Physical Training', value: 'Daily Ground Drills' },
      { label: 'Accommodation', value: 'Tenkasi & Thanjavur Hostels' },
      { label: 'Mock Drills', value: '100+ Timed OMR Exams' },
      { label: 'Medical Guidance', value: 'Free Physical Screening' },
    ],
    ctaText: 'Join SI / PC Batch',
    href: '/courses/tnsurb/si',
    courseKey: 'TNSURB Sub-Inspector & Constable',
    bgGradient: 'from-[#071633] via-[#0D245A] to-[#163B7B]',
    accentColor: '#FFC107',
    tagColor: 'bg-amber-500/20 text-amber-200 border-amber-400/30',
    badgeBg: 'bg-[#FFC107] text-[#08183A]',
    bgImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80',
  },
  {
    id: 'upsc-civil-services',
    badge: 'UNION PUBLIC SERVICE COMMISSION',
    title: 'UPSC CIVIL SERVICES 2026-27 & JUNIOR IAS',
    subtitle: 'Delhi Methodology Mentorship for IAS, IPS, IFS & IRS Aspirants & Early School Youth',
    highlightText: 'IAS • IPS • IFS OFFICER MENTORSHIP',
    specs: [
      { label: 'Answer Writing', value: 'Daily Evaluated Mains Drills' },
      { label: 'Foundation', value: 'Junior IAS from 6th to Degree' },
      { label: 'Faculty', value: 'Delhi Standard Subject Experts' },
      { label: 'Guidance', value: 'One-on-One Officer Interaction' },
    ],
    ctaText: 'Book Free Officer Guidance',
    href: '/courses/upsc',
    courseKey: 'UPSC Civil Services & Junior IAS',
    bgGradient: 'from-[#0A1938] via-[#102766] to-[#1B3E88]',
    accentColor: '#60A5FA',
    tagColor: 'bg-blue-500/20 text-blue-200 border-blue-400/30',
    badgeBg: 'bg-[#FFD166] text-[#0C1B3E]',
    bgImage: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1920&q=80',
  },
  {
    id: 'scholarship-test',
    badge: 'STATEWIDE MERIT TALENT SEARCH 2026',
    title: 'TAF SCHOLARSHIP ENTRANCE TEST 2026',
    subtitle: 'Score High & Win Up To 100% Fee Concession Across All 38 Districts of Tamil Nadu',
    highlightText: '₹50 LAKHS SCHOLARSHIP POOL',
    specs: [
      { label: 'Test Mode', value: 'Offline at All 92 Branches' },
      { label: 'Analytics', value: 'State Percentile Scorecard' },
      { label: 'Mentorship', value: 'Free Faculty Counseling' },
      { label: 'Exam Fee', value: '₹0 Zero Registration Charge' },
    ],
    ctaText: 'Register for Scholarship',
    href: '/notifications',
    courseKey: 'TAF Statewide Scholarship Test',
    bgGradient: 'from-[#0F1E4A] via-[#18367F] to-[#2250B8]',
    accentColor: '#34D399',
    tagColor: 'bg-emerald-500/20 text-emerald-200 border-emerald-400/30',
    badgeBg: 'bg-[#48BB78] text-[#064E3B]',
    bgImage: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1920&q=80',
  },
  {
    id: 'aamu-books',
    badge: 'AAMU PUBLICATION OFFICIAL STUDY MATERIAL',
    title: 'SAMACHEER KALVI 6th - 12th LINE-BY-LINE',
    subtitle: 'The Gold Standard Question Bank & Textbooks for All TNPSC & Police Exams',
    highlightText: '5,00,000+ COPIES DISTRIBUTED',
    specs: [
      { label: 'Coverage', value: '100% Line-by-Line Syllabus' },
      { label: 'Previous Qs', value: 'Unit-wise 10-Yr Solved Papers' },
      { label: 'Specialists', value: 'Prepared by 50+ Top Faculty' },
      { label: 'Delivery', value: 'Express Doorstep Courier' },
    ],
    ctaText: 'Explore & Order Books',
    href: '/books',
    courseKey: 'Aamu Publication Books',
    bgGradient: 'from-[#0B1E48] via-[#122F77] to-[#1D4A9E]',
    accentColor: '#F59E0B',
    tagColor: 'bg-amber-500/20 text-amber-200 border-amber-400/30',
    badgeBg: 'bg-[#FBBF24] text-[#78350F]',
    bgImage: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1920&q=80',
  },
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenEnquiry }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const navigate = useNavigate();

  // Auto-shuffle carousel timer (every 2 seconds)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % BANNER_SLIDES.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + BANNER_SLIDES.length) % BANNER_SLIDES.length);
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % BANNER_SLIDES.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  const activeSlide = BANNER_SLIDES[currentIndex];

  const handleSlideClick = (slide: BannerSlide) => {
    if (slide.href.startsWith('/courses') || slide.href === '/books') {
      navigate(slide.href);
    } else {
      onOpenEnquiry(slide.courseKey);
    }
  };

  return (
    <section
      className="relative w-full bg-[#08183A] select-none overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="Institutional Highlights Carousel"
    >
      {/* Full-Bleed 100% Width Banner Slider (Edge-to-Edge, Zero Side Gap) */}
      <div className="relative w-full min-h-[400px] sm:min-h-[440px] md:min-h-[480px] lg:min-h-[520px] xl:min-h-[540px] flex items-center overflow-hidden">
        
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide.id}
            initial={{ opacity: 0, scale: 0.99 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.01 }}
            transition={{ duration: 0.45, ease: 'easeInOut' }}
            className={`absolute inset-0 bg-gradient-to-r ${activeSlide.bgGradient} flex items-center`}
          >
            {/* Background Texture & Right Image Blend */}
            <div
              className="absolute inset-0 bg-cover bg-right md:bg-center mix-blend-overlay opacity-25"
              style={{ backgroundImage: `url(${activeSlide.bgImage})` }}
            />

            {/* Contrast Vignette Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#071633] via-[#071633]/90 to-transparent md:to-[#071633]/30" />

            {/* Architectural Landmark Graphic on the Right (Veranda RACE style) */}
            <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[50%] overflow-hidden pointer-events-none">
              <img
                src={activeSlide.bgImage}
                alt={activeSlide.title}
                className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity transform scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#071633]/40 to-[#071633]" />
            </div>

            {/* Banner Content Layout (Typography, Vacancy Box & Action CTAs) */}
            <div className="relative z-10 w-full lg:w-[65%] xl:w-[60%] px-5 sm:px-12 md:px-16 lg:px-20 xl:px-24 pt-9 pb-16 sm:py-14 text-left space-y-4 sm:space-y-5">
              
              {/* Category Pill Tag */}
              <div className="inline-flex items-center gap-2">
                <span
                  className={`text-[10px] sm:text-xs font-extrabold uppercase tracking-widest px-3.5 py-1 rounded-full border shadow-xs ${activeSlide.tagColor}`}
                >
                  {activeSlide.badge}
                </span>
              </div>

              {/* High-Impact Exam Title */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
                {activeSlide.title}
              </h1>

              {/* Subtitle */}
              <p className="text-xs sm:text-sm md:text-base text-blue-100 font-medium leading-relaxed max-w-2xl line-clamp-2">
                {activeSlide.subtitle}
              </p>

              {/* Vacancies / Highlights Badge Box (Bright Yellow / Amber Pill - Just like Veranda RACE) */}
              <div className="inline-flex items-center gap-2">
                <div
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl font-extrabold text-sm sm:text-lg md:text-xl tracking-tight shadow-md flex items-center gap-2 ${activeSlide.badgeBg}`}
                >
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                  <span>{activeSlide.highlightText}</span>
                </div>
              </div>

              {/* 4 Feature Specification Badges (Grid Pill Checklist) */}
              <div className="grid grid-cols-2 gap-2 sm:gap-2.5 max-w-xl pt-1">
                {activeSlide.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex items-center gap-2 bg-white/10 backdrop-blur-xs border border-white/15 rounded-lg px-2.5 sm:px-3 py-1.5 text-white"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FFDE59] shrink-0" />
                    <div className="text-[11px] sm:text-xs truncate">
                      <span className="text-blue-200 hidden sm:inline">{spec.label}: </span>
                      <strong className="font-semibold text-white">{spec.value}</strong>
                    </div>
                  </div>
                ))}
              </div>

              {/* Banner Action CTA Buttons */}
              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSlideClick(activeSlide);
                  }}
                  className="px-6 sm:px-8 py-3 rounded-xl bg-white hover:bg-gray-100 text-[#0B1E48] font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-lg hover:shadow-xl flex items-center gap-2 cursor-pointer group"
                >
                  <span>{activeSlide.ctaText}</span>
                  <ArrowRight className="w-4 h-4 text-[#E31B23] group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenEnquiry(activeSlide.courseKey);
                  }}
                  className="hidden sm:inline-flex items-center gap-1.5 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/25 text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <span>Free Enquiry</span>
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Left Circular Navigation Arrow (desktop/tablet; touch-swipe + bottom dots on mobile) */}
        <button
          onClick={handlePrev}
          className="hidden sm:flex absolute left-4 sm:left-6 md:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/35 hover:bg-black/70 text-white backdrop-blur-md border border-white/25 items-center justify-center transition-all cursor-pointer shadow-xl hover:scale-110"
          aria-label="Previous Banner Slide"
        >
          <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
        </button>

        {/* Right Circular Navigation Arrow */}
        <button
          onClick={handleNext}
          className="hidden sm:flex absolute right-4 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/35 hover:bg-black/70 text-white backdrop-blur-md border border-white/25 items-center justify-center transition-all cursor-pointer shadow-xl hover:scale-110"
          aria-label="Next Banner Slide"
        >
          <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
        </button>

        {/* Bottom Slide Indicator Dots / Expanding Capsule */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {BANNER_SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(idx);
              }}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                currentIndex === idx
                  ? 'w-9 h-2.5 bg-white shadow-md'
                  : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/80'
              }`}
              aria-label={`Jump to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
