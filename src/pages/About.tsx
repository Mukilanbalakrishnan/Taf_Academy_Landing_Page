import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import {
  Award,
  BookOpen,
  Building,
  Calendar,
  CheckCircle2,
  Compass,
  GraduationCap,
  HeartHandshake,
  MapPin,
  Shield,
  Sparkles,
  Users,
  Target,
  ArrowRight,
} from 'lucide-react';
import { OFFICIAL_CONTACT } from '@/data/contact';
import { ACHIEVEMENTS_SUMMARY } from '@/data/achievements';
import { NETWORK_SUMMARY } from '@/data/branches';

export const About: React.FC<{ onOpenEnquiry: () => void }> = ({ onOpenEnquiry }) => {
  return (
    <div className="w-full bg-white">
      {/* Page Header Banner */}
      <section className="bg-[#F4F7FC] text-[#26344D] py-16 px-4 sm:px-6 border-b border-[#E5EAF2]">
        <div className="max-w-7xl mx-auto space-y-4 text-left">
          <Breadcrumb
            items={[{ label: 'About Us' }]}
          />
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E5EAF2] text-[#102A78] text-xs font-semibold uppercase tracking-widest shadow-2xs">
            <GraduationCap className="w-4 h-4 text-[#E31B23]" />
            <span>Institutional Legacy Since 2009</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#102A78]">
            About TAF IAS Academy
          </h1>
          <p className="text-base sm:text-lg text-[#64748B] max-w-3xl leading-relaxed">
            Founded with the unwavering vision of democratizing civil services mentoring, TAF IAS Academy stands as Tamil Nadu's foremost competitive coaching institution.
          </p>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 space-y-20">
        
        {/* Section 1: Academy Overview */}
        <section id="academy" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-5 text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#102A78]">
              <span className="w-2 h-2 rounded-full bg-[#E31B23]" />
              <span>Who We Are</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#102A78] leading-tight">
              A Premier Academy Born to Serve Every Aspirant
            </h2>
            <p className="text-sm sm:text-base text-[#26344D] leading-relaxed">
              TAF IAS Academy was established in <strong>August 2009</strong> with a clear, uncompromising objective: to provide state-of-the-art competitive examination guidance to candidates across Tamil Nadu, with particular dedication to rural, agricultural, and economically disadvantaged backgrounds who could not afford expensive metro coaching centers.
            </p>
            <p className="text-sm sm:text-base text-[#26344D] leading-relaxed">
              Over the last 15+ years, what began as a humble classroom in Tenkasi has expanded into an extraordinary educational movement comprising a claimed network of <strong>92 branch centers</strong>, residential hostel campuses in Tenkasi and Thanjavur, and an authentic publishing house — <strong>Aamu Publication</strong>.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              <div className="bg-[#F4F7FC] p-4 rounded-2xl border border-[#E5EAF2]">
                <div className="font-serif text-2xl font-bold text-[#102A78]">{ACHIEVEMENTS_SUMMARY.totalSelections}</div>
                <div className="text-xs text-[#64748B] font-semibold mt-1">Government Officers</div>
              </div>
              <div className="bg-[#F4F7FC] p-4 rounded-2xl border border-[#E5EAF2]">
                <div className="font-serif text-2xl font-bold text-[#102A78]">92 Centers</div>
                <div className="text-xs text-[#64748B] font-semibold mt-1">Network Across TN</div>
              </div>
              <div className="bg-[#F4F7FC] p-4 rounded-2xl border border-[#E5EAF2]">
                <div className="font-serif text-2xl font-bold text-[#102A78]">15+ Years</div>
                <div className="text-xs text-[#64748B] font-semibold mt-1">Academic Pedagogy</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-[#E5EAF2]">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80"
                alt="TAF IAS Academy Students in Session"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102A78]/90 via-[#102A78]/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-bold text-[#E6B422] uppercase tracking-widest">
                  Tenkasi Campus
                </span>
                <p className="font-serif text-lg font-bold">
                  Where Dedication Meets Structured Academic Discipline
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Founder Tribute */}
        <section id="founder" className="bg-[#F4F7FC] rounded-3xl p-8 sm:p-14 border border-[#E5EAF2] shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Founder Portrait Frame (4 Cols) */}
            <div className="lg:col-span-4 flex flex-col items-center text-center space-y-4">
              <div className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-3xl overflow-hidden border-4 border-white shadow-md bg-white">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
                  alt="Founder Mr. J. Aagasa Moorthy"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#102A78]">
                  Mr. J. Aagasa Moorthy
                </h3>
                <p className="text-xs font-bold text-[#E31B23] uppercase tracking-wider mt-0.5">
                  Founder & Director, TAF IAS Academy
                </p>
                <p className="text-[11px] text-[#64748B] mt-1">
                  Visionary Academician & Civil Services Mentor
                </p>
              </div>
            </div>

            {/* Founder Editorial Content (8 Cols) */}
            <div className="lg:col-span-8 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#102A78]">
                <Sparkles className="w-4 h-4 text-[#E31B23]" />
                <span>Founder's Message & Leadership</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#102A78] leading-tight">
                "Our Purpose is to Place Honest, Capable Officers in Every Seat of Governance."
              </h2>
              <p className="text-sm sm:text-base text-[#26344D] leading-relaxed">
                When Mr. J. Aagasa Moorthy initiated the academy in 2009 in Tenkasi (originally established as Akash IAS Academy before evolving into TAF IAS Academy), competitive exam preparation in Tamil Nadu was heavily concentrated in state capitals. Rural candidates faced severe disadvantages — lack of updated materials in Tamil, absence of objective test series, and high living costs in Chennai.
              </p>
              <p className="text-sm sm:text-base text-[#26344D] leading-relaxed">
                With relentless energy, Founder Aagasa Moorthy personally authored study materials, conducted line-by-line textbook analysis, and travelled to colleges and remote towns to conduct free orientation seminars. His belief that <em>"Hard work guided by authentic syllabus mastery will always defeat privilege"</em> continues to anchor every lecture and test at TAF IAS Academy.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-[#102A78]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#102A78]" />
                  <span>Grassroots Mentorship</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#102A78]" />
                  <span>Tamil Medium Advocacy</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#102A78]" />
                  <span>Ethical Civil Service Ethics</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Section 3: Vision and Mission */}
        <section id="vision-mission" className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#102A78]">
              Vision & Mission
            </h2>
            <p className="text-sm text-[#64748B]">
              The foundational compass steering our academic institution into the future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-[#F4F7FC] text-[#26344D] rounded-3xl p-8 sm:p-10 border border-[#E5EAF2] shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white text-[#102A78] border border-[#E5EAF2] flex items-center justify-center shadow-2xs">
                <Target className="w-6 h-6 text-[#E31B23]" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#102A78]">
                Our Vision
              </h3>
              <p className="text-sm text-[#64748B] leading-relaxed">
                To build an equitable Tamil Nadu where socioeconomic background and geographical location are never barriers to entering premier civil, administrative, and uniformed services. We envision our alumni serving across state and central departments with impeccable integrity, competence, and public empathy.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E5EAF2] shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#F4F7FC] text-[#102A78] border border-[#E5EAF2] flex items-center justify-center">
                <Compass className="w-6 h-6 text-[#102A78]" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#102A78]">
                Our Mission
              </h3>
              <p className="text-sm text-[#64748B] leading-relaxed">
                To engineer syllabus-accurate, line-by-line study kits through Aamu Publication; deliver relentless daily OMR-based mock tests; maintain affordable accessible study centers in every district; and provide holistic physical and mental training that transforms aspirants into top state rank-holders.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Our 15-Year Journey Timeline */}
        <section id="journey" className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#102A78]">
              Our 15+ Years Milestones
            </h2>
            <p className="text-sm text-[#64748B]">
              Key moments shaping the evolution of TAF IAS Academy from 2009 to the present.
            </p>
          </div>

          <div className="relative border-l-2 border-[#102A78]/20 ml-4 md:ml-32 space-y-10 pl-6 md:pl-10">
            {[
              {
                year: 'August 2009',
                title: 'Inception in Tenkasi',
                desc: 'Founded by Mr. J. Aagasa Moorthy with a single dedicated classroom in Tenkasi to mentor southern Tamil Nadu rural aspirants for TNPSC and Police examinations.',
              },
              {
                year: '2012 — 2015',
                title: 'Creation of Aamu Publication',
                desc: 'Launched Aamu Publication to author authentic bilingual textbooks, solving the acute shortage of high-standard Samacheer Kalvi competitive materials.',
              },
              {
                year: '2016 — 2019',
                title: 'Statewide Expansion & Residential Hostels',
                desc: 'Inauguration of intensive residential campus in Thanjavur and expansion of physical branches across Madurai, Salem, Cuddalore, Villupuram, and Tirunelveli.',
              },
              {
                year: '2020 — 2023',
                title: 'Digital Portal & 16,000+ Selections Milestone',
                desc: 'Launched live interactive online classroom portal alongside physical centers, crossing the landmark milestone of 16,000+ verified government service selections.',
              },
              {
                year: 'Present & Beyond',
                title: '92-Branch Statewide Network & Junior IAS Program',
                desc: 'Expanding access across all 38 districts with 92 branch claims, alongside pioneering the Junior IAS school and collegiate leadership curriculum.',
              },
            ].map((m) => (
              <div key={m.year} className="relative group">
                <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-[#102A78] group-hover:scale-125 transition-transform" />
                <span className="font-mono text-xs font-bold text-[#102A78] uppercase tracking-widest">
                  {m.year}
                </span>
                <h3 className="font-serif text-xl font-bold text-[#102A78] mt-1">
                  {m.title}
                </h3>
                <p className="text-sm text-[#64748B] leading-relaxed mt-1 max-w-2xl">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Institutional Callout */}
        <section className="bg-[#F4F7FC] text-[#26344D] rounded-3xl p-8 sm:p-12 border border-[#E5EAF2] text-center space-y-6 shadow-xs">
          <h3 className="font-serif text-2xl sm:text-4xl font-bold text-[#102A78]">
            Experience the TAF IAS Academy Advantage
          </h3>
          <p className="text-sm sm:text-base text-[#64748B] max-w-2xl mx-auto leading-relaxed">
            Visit our Head Office in Tenkasi or your nearest regional branch for free syllabus counselling and sample material review.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenEnquiry}
              className="px-6 py-3.5 rounded-xl bg-[#102A78] hover:bg-[#174A9C] text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-sm"
            >
              Book Admission Counselling
            </button>
            <Link
              to="/centers"
              className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-[#102A78] text-xs font-bold uppercase tracking-wider border border-[#E5EAF2] hover:border-[#102A78]/30 transition-colors shadow-2xs"
            >
              Locate 92 Centers
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
};
