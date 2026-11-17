import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { COURSES, CourseDetail } from '@/data/courses';
import {
  GraduationCap,
  ArrowRight,
  BookOpen,
  Calendar,
  CheckCircle2,
  Sparkles,
  Layers,
  MapPin,
  Shield,
} from 'lucide-react';

interface CoursesListProps {
  onOpenEnquiry: (courseName?: string) => void;
}

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

        {/* Courses Listing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#E5EAF2] hover:border-[#102A78]/30 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Image Frame */}
              <div className="relative h-48 overflow-hidden bg-[#F4F7FC]">
                <img
                  src={course.heroImage}
                  alt={course.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102A78]/80 via-transparent to-transparent" />
                
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded bg-[#102A78]/90 text-white text-[10px] font-bold uppercase tracking-wider border border-[#102A78]/30">
                    {course.category}
                  </span>
                  {course.badge && (
                    <span className="px-2.5 py-0.5 rounded bg-[#E6B422] text-[#102A78] text-[10px] font-extrabold uppercase tracking-wider shadow-xs">
                      {course.badge}
                    </span>
                  )}
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-bold text-[#102A78] group-hover:text-[#174A9C] transition-colors leading-snug">
                    <Link to={course.route}>
                      {course.name}
                    </Link>
                  </h3>
                  <p className="text-xs text-[#64748B] line-clamp-3 leading-relaxed">
                    {course.shortDescription}
                  </p>
                </div>

                {/* Eligibility & Modes */}
                <div className="space-y-2 pt-2 border-t border-[#E5EAF2] text-xs">
                  <div className="flex items-start gap-1.5 text-[#26344D]">
                    <strong className="text-[#102A78] shrink-0">Eligibility:</strong>
                    <span className="line-clamp-1">{course.eligibility.education}</span>
                  </div>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {course.learningModes.map((mode) => (
                      <span
                        key={mode}
                        className="text-[10px] font-medium px-2.5 py-0.5 rounded-full bg-[#F4F7FC] text-[#102A78] border border-[#E5EAF2]"
                      >
                        {mode.split(' ')[0]}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-3 border-t border-[#E5EAF2] flex items-center justify-between gap-3">
                  <Link
                    to={course.route}
                    className="text-xs font-bold text-[#102A78] hover:text-[#174A9C] flex items-center gap-1 group/btn transition-colors"
                  >
                    <span>View Curriculum</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>

                  <button
                    onClick={() => onOpenEnquiry(course.name)}
                    className="px-3.5 py-2 rounded-xl bg-[#102A78] hover:bg-[#174A9C] text-white text-xs font-bold transition-colors cursor-pointer shadow-2xs"
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            </div>
          ))}
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
