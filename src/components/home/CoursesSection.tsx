import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  GraduationCap,
} from 'lucide-react';
import { COURSES } from '@/data/courses';

interface CoursesSectionProps {
  onOpenEnquiry: (courseName?: string) => void;
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({ onOpenEnquiry }) => {
  const [activeTab, setActiveTab] = useState<'ALL' | 'TNPSC' | 'TNSURB' | 'UPSC' | 'CENTRAL' | 'ONLINE'>('ALL');
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const filteredCourses = COURSES.filter((course) => {
    if (activeTab === 'ALL') return true;
    if (activeTab === 'TNPSC') return course.category === 'TNPSC';
    if (activeTab === 'TNSURB') return course.category === 'TNSURB';
    if (activeTab === 'UPSC') return course.category === 'UPSC';
    if (activeTab === 'CENTRAL') return ['BANKING', 'SSC', 'RRB', 'TRB'].includes(course.category);
    if (activeTab === 'ONLINE') return course.category === 'ONLINE';
    return true;
  });

  // Reset activeIndex when filter changes
  useEffect(() => {
    setActiveIndex(0);
  }, [activeTab]);

  const total = filteredCourses.length;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) handleNext();
    else if (diff < -50) handlePrev();
    touchStartX.current = null;
  };

  const tabOptions = [
    { id: 'ALL', label: 'All Courses' },
    { id: 'TNPSC', label: 'TNPSC' },
    { id: 'TNSURB', label: 'TNSURB' },
    { id: 'UPSC', label: 'UPSC & Junior IAS' },
    { id: 'CENTRAL', label: 'Banking & SSC' },
    { id: 'ONLINE', label: 'Online Batches' },
  ];

  return (
    <section
      className="bg-[#F8FAFD] py-16 sm:py-20 px-4 sm:px-8 lg:px-12 border-b border-[#E5EAF2] select-none overflow-hidden relative"
      id="courses"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Subtle ambient lighting for 3D depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="w-full max-w-[1720px] mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-left">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#174A9C]">
              <span className="w-2 h-2 rounded-full bg-[#E31B23]" />
              <span>Interactive Program Discovery</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#102A78] tracking-tight">
              Explore Our Competitive Courses
            </h2>
          </div>

          <Link
            to="/courses"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#102A78] hover:text-[#E31B23] uppercase tracking-wider transition-colors shrink-0"
          >
            <span>All Programs ({COURSES.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {tabOptions.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-tight whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#102A78] text-white shadow-xs'
                    : 'bg-white text-[#26344D] hover:bg-gray-100 border border-[#E5EAF2]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* 3D Cover Flow Carousel Stage */}
        <div className="relative w-full h-[530px] sm:h-[560px] flex items-center justify-center overflow-visible [perspective:1600px]">
          
          <div className="relative w-full h-full flex items-center justify-center">
            {filteredCourses.map((course, index) => {
              // Calculate relative offset from active item
              let offset = index - activeIndex;
              // Handle wrap-around for smooth looping
              if (offset > total / 2) offset -= total;
              if (offset < -total / 2) offset += total;

              const isVisible = Math.abs(offset) <= 2;
              const isCenter = offset === 0;

              // Transformation values: Active card is strictly scale: 1.0 (no upscale texture blur)
              let x = 0;
              let scale = 1;
              let rotateY = 0;
              let zIndex = 0;
              let opacity = 0;

              if (offset === 0) {
                x = 0;
                scale = 1.0; // 1:1 native pixel rendering, ZERO blur
                rotateY = 0;
                zIndex = 35;
                opacity = 1;
              } else if (offset === -1) {
                x = -250;
                scale = 0.88;
                rotateY = 12;
                zIndex = 25;
                opacity = 0.85;
              } else if (offset === 1) {
                x = 250;
                scale = 0.88;
                rotateY = -12;
                zIndex = 25;
                opacity = 0.85;
              } else if (offset === -2) {
                x = -470;
                scale = 0.76;
                rotateY = 22;
                zIndex = 15;
                opacity = 0.50;
              } else if (offset === 2) {
                x = 470;
                scale = 0.76;
                rotateY = -22;
                zIndex = 15;
                opacity = 0.50;
              } else {
                x = offset > 0 ? 700 : -700;
                scale = 0.6;
                rotateY = offset > 0 ? -25 : 25;
                zIndex = 5;
                opacity = 0;
              }

              return (
                <motion.div
                  key={course.id}
                  animate={{
                    x,
                    scale,
                    rotateY,
                    zIndex,
                    opacity: isVisible ? opacity : 0,
                  }}
                  transition={{
                    duration: 0.45,
                    ease: [0.25, 1, 0.5, 1],
                  }}
                  onClick={() => {
                    if (!isCenter) setActiveIndex(index);
                  }}
                  style={{
                    transformOrigin: 'center center',
                    backfaceVisibility: 'hidden',
                    WebkitFontSmoothing: 'antialiased',
                    textRendering: 'optimizeLegibility',
                    transformStyle: isCenter ? 'flat' : 'preserve-3d',
                  }}
                  className={`absolute w-[300px] sm:w-[340px] h-[485px] sm:h-[510px] bg-white rounded-[28px] overflow-hidden border border-[#E5EAF2] flex flex-col justify-between select-none ${
                    isCenter
                      ? 'shadow-2xl cursor-default ring-1 ring-[#102A78]/15'
                      : 'shadow-lg cursor-pointer hover:opacity-95'
                  }`}
                >
                  {/* Top Image Frame */}
                  <div className="relative h-[215px] w-full overflow-hidden bg-slate-900 shrink-0">
                    <img
                      src={course.heroImage}
                      alt={course.name}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Category Pill Tag floating top-left */}
                    <div className="absolute top-3.5 left-3.5">
                      <span className="px-3 py-1 rounded-full bg-[#102A78] text-white text-[10px] font-extrabold uppercase tracking-wider shadow-md">
                        {course.category}
                      </span>
                    </div>

                    {/* Batch Tag floating top-right */}
                    {course.badge && (
                      <div className="absolute top-3.5 right-3.5">
                        <span className="px-2.5 py-1 rounded-full bg-[#E31B23] text-white text-[9px] font-bold uppercase tracking-wider shadow-md truncate max-w-[130px]">
                          {course.badge}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Card Content (Crystal-Clear Text Rendering) */}
                  <div className="p-5 flex-1 flex flex-col justify-between text-left space-y-3 bg-white">
                    <div>
                      {/* Course Title — Full 2 lines to avoid truncation */}
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-[#102A78] leading-snug line-clamp-2 min-h-[50px]">
                        {course.name}
                      </h3>

                      {/* Subtitle with Icon */}
                      <div className="flex items-center gap-1.5 text-xs text-[#174A9C] font-semibold mt-1 truncate">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#E31B23] shrink-0" />
                        <span className="truncate">
                          {course.targetPosts && course.targetPosts[0]
                            ? course.targetPosts[0]
                            : 'State & Central Civil Services'}
                        </span>
                      </div>

                      {/* Curriculum Preview */}
                      <div className="pt-2">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#102A78] block">
                          Curriculum
                        </span>
                        <p className="text-xs text-[#26344D] font-normal line-clamp-2 leading-relaxed mt-0.5">
                          {course.shortDescription}
                        </p>
                      </div>
                    </div>

                    {/* 3-Column Metrics Grid */}
                    <div className="grid grid-cols-3 gap-2 py-2 px-2.5 rounded-xl bg-[#F4F7FC] border border-[#E5EAF2] text-center">
                      <div>
                        <span className="text-[9px] uppercase tracking-wider text-[#64748B] font-bold block">
                          Format
                        </span>
                        <strong className="text-xs font-bold text-[#102A78] truncate block mt-0.5">
                          {course.learningModes[0] ? course.learningModes[0].split(' ')[0] : 'Classroom'}
                        </strong>
                      </div>

                      <div className="border-x border-[#E5EAF2]">
                        <span className="text-[9px] uppercase tracking-wider text-[#64748B] font-bold block">
                          Eligibility
                        </span>
                        <strong className="text-xs font-bold text-[#102A78] truncate block mt-0.5">
                          {course.category === 'TNPSC' && course.name.includes('4') ? 'SSLC' : 'Degree'}
                        </strong>
                      </div>

                      <div>
                        <span className="text-[9px] uppercase tracking-wider text-[#64748B] font-bold block">
                          Legacy
                        </span>
                        <strong className="text-xs font-bold text-[#E31B23] truncate block mt-0.5">
                          16k+ Ranks
                        </strong>
                      </div>
                    </div>

                    {/* Bottom Action Row: Admissions on left, Round Action Button on right */}
                    <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                      <div>
                        <span className="text-[9px] uppercase tracking-wider text-[#64748B] font-bold block">
                          Admissions 2026
                        </span>
                        <strong className="text-sm font-extrabold text-[#102A78]">
                          Batch Open
                        </strong>
                      </div>

                      {/* Circular Action Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenEnquiry(course.name);
                        }}
                        className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#102A78] hover:bg-[#E31B23] text-white flex items-center justify-center shadow-md hover:scale-105 transition-all cursor-pointer group/circle shrink-0"
                        title={`Enquire for ${course.name}`}
                      >
                        <ArrowRight className="w-5 h-5 group-hover/circle:translate-x-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Left Circular Arrow Button */}
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-6 lg:left-10 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white hover:bg-[#102A78] text-[#102A78] hover:text-white border border-[#E5EAF2] shadow-xl flex items-center justify-center transition-all cursor-pointer hover:scale-110"
            aria-label="Previous Course"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Circular Arrow Button */}
          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-6 lg:right-10 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white hover:bg-[#102A78] text-[#102A78] hover:text-white border border-[#E5EAF2] shadow-xl flex items-center justify-center transition-all cursor-pointer hover:scale-110"
            aria-label="Next Course"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Carousel Indicator Dots */}
        <div className="flex items-center justify-center gap-2 pt-2">
          {filteredCourses.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                activeIndex === idx
                  ? 'w-8 h-2.5 bg-[#102A78] shadow-sm'
                  : 'w-2.5 h-2.5 bg-[#E5EAF2] hover:bg-gray-400'
              }`}
              aria-label={`Jump to course slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
