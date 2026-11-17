import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { COURSES } from '@/data/courses';
import {
  GraduationCap,
  ArrowRight,
  BookOpen,
  Shield,
  ShieldCheck,
  Landmark,
  Briefcase,
  FileCheck2,
  Building2,
  Award,
  Train,
  Compass,
  MonitorPlay,
} from 'lucide-react';

interface CoursesListProps {
  onOpenEnquiry: (courseName?: string) => void;
}

const CARD_THEMES = [
  {
    gradient: 'from-[#FCA753] via-[#F97E56] to-[#F36163]',
    btnGradient: 'from-[#FB8C52] to-[#F25B60]',
    accentText: 'text-[#F06458]',
    shadow: 'shadow-[0_18px_36px_-12px_rgba(243,97,99,0.42)]',
    ringProgress: 28,
  },
  {
    gradient: 'from-[#F15A8B] via-[#E5357E] to-[#D71D79]',
    btnGradient: 'from-[#EB4483] to-[#D61C78]',
    accentText: 'text-[#DC247A]',
    shadow: 'shadow-[0_18px_36px_-12px_rgba(215,29,121,0.42)]',
    ringProgress: 42,
  },
  {
    gradient: 'from-[#D834B8] via-[#BA29B1] to-[#9824A8]',
    btnGradient: 'from-[#C82EB4] to-[#9A24A8]',
    accentText: 'text-[#B128AE]',
    shadow: 'shadow-[0_18px_36px_-12px_rgba(152,36,168,0.42)]',
    ringProgress: 56,
  },
  {
    gradient: 'from-[#9E59E8] via-[#8346DD] to-[#6B3AD0]',
    btnGradient: 'from-[#8D4DE2] to-[#6C3AD0]',
    accentText: 'text-[#7E43DA]',
    shadow: 'shadow-[0_18px_36px_-12px_rgba(107,58,208,0.42)]',
    ringProgress: 68,
  },
  {
    gradient: 'from-[#6C7DF0] via-[#5374EA] to-[#3E76E4]',
    btnGradient: 'from-[#5E78ED] to-[#3E75E4]',
    accentText: 'text-[#4D74E8]',
    shadow: 'shadow-[0_18px_36px_-12px_rgba(62,118,228,0.42)]',
    ringProgress: 80,
  },
  {
    gradient: 'from-[#45B8EA] via-[#34B6DE] to-[#2BC2D4]',
    btnGradient: 'from-[#3CB7E4] to-[#2AC1D4]',
    accentText: 'text-[#2DAED6]',
    shadow: 'shadow-[0_18px_36px_-12px_rgba(43,194,212,0.42)]',
    ringProgress: 92,
  },
];

const getCourseIcon = (courseId: string) => {
  switch (courseId) {
    case 'tnpsc-group-1':
      return Landmark;
    case 'tnpsc-group-2':
      return Briefcase;
    case 'tnpsc-group-4':
      return FileCheck2;
    case 'tnsurb-si':
      return Shield;
    case 'tnsurb-pc':
      return ShieldCheck;
    case 'banking':
      return Building2;
    case 'ssc':
      return Award;
    case 'rrb':
      return Train;
    case 'upsc':
      return Compass;
    case 'junior-ias':
      return GraduationCap;
    case 'trb':
      return BookOpen;
    case 'online':
      return MonitorPlay;
    default:
      return GraduationCap;
  }
};

export const CoursesList: React.FC<CoursesListProps> = ({ onOpenEnquiry }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categories = [
    { id: 'ALL', label: 'All Courses' },
    { id: 'TNPSC', label: 'TNPSC (Group 1, 2, 4)' },
    { id: 'TNSURB', label: 'TNSURB (Police SI & PC)' },
    { id: 'UPSC', label: 'UPSC & Junior IAS' },
    { id: 'BANKING', label: 'Banking (IBPS/SBI)' },
    { id: 'SSC', label: 'SSC Ministries' },
    { id: 'RRB', label: 'RRB Railways' },
    { id: 'TRB', label: 'TRB Teachers' },
    { id: 'ONLINE', label: 'Online Batches' },
  ];

  const filtered = COURSES.filter((c) => {
    if (selectedCategory === 'ALL') return true;
    return c.category === selectedCategory;
  });

  return (
    <div className="w-full bg-white">
      {/* Banner */}
      <section className="bg-[#F4F7FC] text-[#26344D] py-16 px-4 sm:px-6 border-b border-[#E5EAF2]">
        <div className="max-w-7xl mx-auto space-y-4 text-left">
          <Breadcrumb
            items={[{ label: 'Courses' }]}
          />
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E5EAF2] text-[#102A78] text-xs font-semibold uppercase tracking-widest shadow-2xs">
            <GraduationCap className="w-4 h-4 text-[#E31B23]" />
            <span>Comprehensive Academic Offerings</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#102A78]">
            Competitive Examination Programs
          </h1>
          <p className="text-base sm:text-lg text-[#64748B] max-w-3xl leading-relaxed">
            Engineered with syllabus-mapped textbooks, daily OMR evaluations, and direct mentorship from serving and retired civil officers.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-10">
        
        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#102A78] text-white shadow-xs'
                  : 'bg-white text-[#102A78] hover:bg-slate-50 border border-[#E5EAF2]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Courses Listing Cards — Layered Gradient Frame Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
          {filtered.map((course, idx) => {
            const theme = CARD_THEMES[idx % CARD_THEMES.length];
            const CourseIcon = getCourseIcon(course.id);
            const stepNum = String(idx + 1).padStart(2, '0');
            const radius = 17;
            const circumference = 2 * Math.PI * radius;
            const dashOffset = circumference - (theme.ringProgress / 100) * circumference;

            return (
              <div
                key={course.id}
                className={`relative rounded-[24px] bg-gradient-to-br ${theme.gradient} ${theme.shadow} overflow-hidden flex flex-col pt-5 pb-7 pr-6 sm:pr-7 transition-all duration-300 hover:-translate-y-1.5 group`}
              >
                {/* Subtle Decorative Curved Sheen Layers (matching reference geometry) */}
                <div
                  className="pointer-events-none absolute -top-10 -left-10 w-52 h-52 rounded-full bg-white/[0.14]"
                  aria-hidden="true"
                />
                <div
                  className="pointer-events-none absolute -bottom-16 -right-12 w-56 h-56 rounded-full bg-black/[0.08]"
                  aria-hidden="true"
                />

                {/* Top Gradient Header Bar: Category Label + Circular Ring Progress */}
                <div className="relative z-10 flex items-center justify-between pl-6 pr-0 pb-4">
                  <div className="space-y-0.5">
                    <span className="block font-sans text-lg font-extrabold tracking-wider text-white uppercase leading-none">
                      {course.category}
                    </span>
                    {course.badge && (
                      <span className="block text-[10px] font-semibold text-white/85 tracking-wide">
                        {course.badge}
                      </span>
                    )}
                  </div>

                  {/* Circular Progress Ring Badge */}
                  <div className="relative w-11 h-11 flex items-center justify-center shrink-0 translate-x-2">
                    <svg className="w-11 h-11 -rotate-90" viewBox="0 0 42 42" aria-hidden="true">
                      <circle
                        cx="21"
                        cy="21"
                        r={radius}
                        fill="none"
                        stroke="rgba(255,255,255,0.26)"
                        strokeWidth="2.2"
                      />
                      <circle
                        cx="21"
                        cy="21"
                        r={radius}
                        fill="none"
                        stroke="#FFFFFF"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={dashOffset}
                      />
                    </svg>
                    <span className="absolute text-[10px] font-extrabold text-white tracking-tight">
                      {stepNum}
                    </span>
                  </div>
                </div>

                {/* Flush-Left Floating White Inner Card Sheet */}
                <div className="relative z-10 flex-1 bg-gradient-to-r from-[#F4F6FA] via-white to-white rounded-r-[26px] rounded-tl-[8px] rounded-bl-[8px] shadow-[8px_14px_24px_-6px_rgba(15,23,42,0.24)] px-6 pt-7 pb-5 flex flex-col items-center text-center justify-between gap-4">
                  <div className="flex flex-col items-center space-y-3 w-full">
                    {/* Centered Colored Outline Icon */}
                    <div className={`w-12 h-12 flex items-center justify-center ${theme.accentText} transition-transform duration-300 group-hover:scale-110`}>
                      <CourseIcon className="w-9 h-9 stroke-[1.6]" />
                    </div>

                    {/* Course Title */}
                    <h3 className="font-sans text-[17px] font-extrabold text-[#334155] group-hover:text-[#102A78] transition-colors leading-snug">
                      <Link to={course.route}>{course.name}</Link>
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-[#64748B] line-clamp-3 leading-relaxed">
                      {course.shortDescription}
                    </p>

                    {/* Learning Mode Pills */}
                    <div className="flex items-center justify-center gap-1.5 flex-wrap pt-1">
                      {course.learningModes.slice(0, 3).map((mode) => (
                        <span
                          key={mode}
                          className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-50 text-slate-600 border border-slate-200/80"
                        >
                          {mode.startsWith('100%') ? 'Live Classes' : mode.split(' ')[0]}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Row */}
                  <div className="w-full pt-3.5 border-t border-slate-100 flex items-center justify-between gap-2">
                    <Link
                      to={course.route}
                      className={`text-xs font-bold ${theme.accentText} hover:opacity-80 inline-flex items-center gap-1 group/btn transition-opacity`}
                    >
                      <span>View Curriculum</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>

                    <button
                      onClick={() => onOpenEnquiry(course.name)}
                      className={`px-3.5 py-1.5 rounded-full bg-gradient-to-r ${theme.btnGradient} text-white text-[11px] font-bold tracking-wide hover:opacity-95 transition-opacity cursor-pointer shadow-xs`}
                    >
                      Enquire
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Counseling Prompt Box */}
        <div className="bg-[#F4F7FC] text-[#26344D] rounded-3xl p-8 sm:p-10 border border-[#E5EAF2] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-2 text-left">
            <h3 className="font-serif text-2xl font-bold text-[#102A78]">
              Need personalized guidance on exam eligibility?
            </h3>
            <p className="text-xs sm:text-sm text-[#64748B]">
              Our academic counselors in Tenkasi and statewide centers can review your age, degree, and study background to suggest the ideal program.
            </p>
          </div>

          <button
            onClick={() => onOpenEnquiry()}
            className="px-6 py-3.5 rounded-xl bg-[#102A78] hover:bg-[#174A9C] text-white font-bold text-xs uppercase tracking-wider shrink-0 transition-colors cursor-pointer shadow-sm"
          >
            Speak With an Advisor
          </button>
        </div>

      </div>
    </div>
  );
};
