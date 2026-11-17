import React from 'react';
import { useParams, useLocation, Link, Navigate } from 'react-router-dom';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { COURSES, CourseDetail as CourseType } from '@/data/courses';
import {
  GraduationCap,
  Clock,
  BookOpen,
  CheckCircle2,
  Calendar,
  Layers,
  ArrowRight,
  ShieldCheck,
  Building,
  Sparkles,
  Phone,
  FileText,
  MapPin,
} from 'lucide-react';
import { OFFICIAL_CONTACT } from '@/data/contact';

interface CourseDetailPageProps {
  onOpenEnquiry: (courseName?: string) => void;
  overrideSlug?: string;
}

export const CourseDetailPage: React.FC<CourseDetailPageProps> = ({
  onOpenEnquiry,
  overrideSlug,
}) => {
  const { category, slug } = useParams<{ category?: string; slug?: string }>();
  const location = useLocation();

  // Find course either by matching path or slug
  let course: CourseType | undefined;

  if (overrideSlug) {
    course = COURSES.find(c => c.slug === overrideSlug || c.id === overrideSlug);
  } else if (slug) {
    course = COURSES.find(c => c.slug === slug || c.id === `${category}-${slug}`);
  } else {
    // Try matching by pathname
    course = COURSES.find(c => c.route === location.pathname);
  }

  // Fallback check
  if (!course) {
    // Try matching last segment of pathname
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const lastSegment = pathSegments[pathSegments.length - 1];
    course = COURSES.find(c => c.slug === lastSegment || c.id === lastSegment);
  }

  if (!course) {
    return <Navigate to="/courses" replace />;
  }

  const relatedCourses = COURSES.filter(c => c.id !== course?.id && (c.category === course?.category || c.category === 'TNPSC')).slice(0, 3);

  return (
    <div className="w-full bg-white">
      {/* Hero Header */}
      <section className="bg-[#F4F7FC] text-[#26344D] py-16 px-4 sm:px-6 border-b border-[#E5EAF2]">
        <div className="max-w-7xl mx-auto space-y-6 text-left">
          <Breadcrumb
            items={[
              { label: 'Courses', href: '/courses' },
              { label: course.category, href: '/courses' },
              { label: course.name },
            ]}
          />

          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-white text-[#102A78] text-xs font-bold uppercase tracking-wider border border-[#E5EAF2] shadow-2xs">
              {course.category}
            </span>
            {course.badge && (
              <span className="px-3 py-1 rounded-full bg-[#E6B422] text-[#102A78] text-xs font-extrabold uppercase tracking-wider shadow-2xs">
                {course.badge}
              </span>
            )}
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#102A78] leading-tight">
            {course.name}
          </h1>

          <p className="text-base sm:text-lg text-[#64748B] max-w-3xl leading-relaxed">
            {course.fullDescription}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={() => onOpenEnquiry(course?.name)}
              className="px-8 py-3.5 rounded-xl bg-[#102A78] hover:bg-[#174A9C] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-[#E6B422]" />
              <span>Enroll / Admission Enquiry</span>
            </button>
            <a
              href={OFFICIAL_CONTACT.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-[#102A78] text-xs font-bold uppercase tracking-wider border border-[#E5EAF2] hover:border-[#102A78]/30 transition-colors flex items-center gap-2 shadow-2xs"
            >
              <span>Instant WhatsApp Counselling</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 space-y-16">
        
        {/* Grid: 8 Cols Details, 4 Cols Sticky Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Info (8 Cols) */}
          <div className="lg:col-span-8 space-y-12 text-left">
            
            {/* Target Posts */}
            <div className="bg-white rounded-3xl p-8 border border-[#E5EAF2] shadow-xs space-y-4">
              <h2 className="font-serif text-2xl font-bold text-[#102A78] flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-[#102A78]" />
                <span>Designated Government Posts</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {course.targetPosts.map((post) => (
                  <div key={post} className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F4F7FC] border border-[#E5EAF2] text-xs font-semibold text-[#102A78]">
                    <CheckCircle2 className="w-4 h-4 text-[#102A78] shrink-0" />
                    <span>{post}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Curriculum Breakdown */}
            <div className="bg-white rounded-3xl p-8 border border-[#E5EAF2] shadow-xs space-y-6">
              <div className="space-y-1">
                <h2 className="font-serif text-2xl font-bold text-[#102A78] flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-[#102A78]" />
                  <span>Curriculum & Examination Pattern</span>
                </h2>
                <p className="text-xs text-[#64748B]">
                  Comprehensive syllabus modules structured strictly according to official commission blueprints.
                </p>
              </div>

              <div className="space-y-6">
                {course.curriculumHighlights.map((stage, idx) => (
                  <div key={stage.title} className="border border-[#E5EAF2] rounded-2xl p-6 bg-[#F4F7FC]/60 space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-[#E5EAF2]">
                      <h3 className="font-serif text-lg font-bold text-[#102A78]">
                        {stage.title}
                      </h3>
                      <span className="text-[10px] font-mono uppercase font-bold text-[#102A78] px-2.5 py-0.5 rounded-full bg-white border border-[#E5EAF2]">
                        Module 0{idx + 1}
                      </span>
                    </div>
                    <ul className="space-y-2 text-xs text-[#26344D]">
                      {stage.topics.map((t) => (
                        <li key={t} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#102A78] shrink-0 mt-1.5" />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Pedagogical Features */}
            <div className="bg-white rounded-3xl p-8 border border-[#E5EAF2] shadow-xs space-y-4">
              <h2 className="font-serif text-2xl font-bold text-[#102A78]">
                Key Classroom & Training Features
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {course.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5 text-xs text-[#26344D] leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Study Material & Publishing Wing */}
            <div className="bg-[#F4F7FC] text-[#26344D] rounded-3xl p-8 border border-[#E5EAF2] space-y-4 shadow-xs">
              <div className="flex items-center gap-2 text-[#102A78]">
                <BookOpen className="w-5 h-5 text-[#E31B23]" />
                <span className="text-xs font-bold uppercase tracking-widest">
                  Study Materials by Aamu Publication
                </span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#102A78]">
                Included Study Kit & Question Banks
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                {course.studyMaterials}
              </p>
              <div className="pt-2">
                <Link
                  to="/books"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#102A78] hover:text-[#174A9C] uppercase tracking-wider"
                >
                  <span>Preview Course Books</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>

          {/* Sticky Sidebar (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Quick Summary Card */}
            <div className="bg-[#F4F7FC] rounded-3xl p-6 border border-[#E5EAF2] shadow-xs space-y-5 sticky top-24 text-left">
              <h3 className="font-serif text-xl font-bold text-[#102A78] border-b border-[#E5EAF2] pb-3">
                Course Quick Facts
              </h3>

              <div className="space-y-4 text-xs">
                <div>
                  <span className="text-[#64748B] block">Educational Eligibility:</span>
                  <span className="font-semibold text-[#102A78] text-sm">{course.eligibility.education}</span>
                </div>

                <div>
                  <span className="text-[#64748B] block">Age Limit / Category Concessions:</span>
                  <span className="font-semibold text-[#102A78]">{course.eligibility.ageLimit}</span>
                </div>

                <div>
                  <span className="text-[#64748B] block">Learning Formats:</span>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {course.learningModes.map((mode) => (
                      <span key={mode} className="text-[10px] px-2.5 py-0.5 rounded-full bg-white text-[#102A78] border border-[#E5EAF2] font-medium shadow-2xs">
                        {mode}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-3 rounded-2xl border border-[#E5EAF2] space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#102A78]">
                    Batch Availability
                  </span>
                  <p className="text-[11px] text-[#64748B]">
                    {course.batchesInfo}
                  </p>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <button
                  onClick={() => onOpenEnquiry(course?.name)}
                  className="w-full py-3.5 rounded-xl bg-[#102A78] hover:bg-[#174A9C] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
                >
                  Apply / Request Fee Details
                </button>

                <Link
                  to="/centers"
                  className="w-full py-2.5 rounded-xl border border-[#E5EAF2] bg-white text-[#102A78] hover:bg-slate-50 text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 shadow-2xs"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#102A78]" />
                  <span>Find Nearest Batch Center</span>
                </Link>
              </div>

              <div className="text-[10px] text-[#64748B] text-center leading-relaxed">
                Fees and batch timings vary by learning format and residential hostel options. Inquire directly for verified official schedules.
              </div>
            </div>

          </div>

        </div>

        {/* Related Courses Section */}
        {relatedCourses.length > 0 && (
          <div className="space-y-6 pt-10 border-t border-[#E5EAF2]">
            <h3 className="font-serif text-2xl font-bold text-[#102A78] text-left">
              Explore Related Competitive Programs
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedCourses.map((rel) => (
                <div key={rel.id} className="bg-white rounded-2xl p-6 border border-[#E5EAF2] hover:border-[#102A78]/30 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-3 text-left">
                  <div>
                    <span className="text-[10px] font-bold uppercase text-[#102A78]">{rel.category}</span>
                    <h4 className="font-serif text-lg font-bold text-[#102A78] mt-1">
                      <Link to={rel.route}>{rel.name}</Link>
                    </h4>
                    <p className="text-xs text-[#64748B] line-clamp-2 mt-1">{rel.shortDescription}</p>
                  </div>
                  <Link to={rel.route} className="text-xs font-bold text-[#102A78] hover:text-[#174A9C] flex items-center gap-1 pt-2 border-t border-[#E5EAF2]">
                    <span>View Program</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
