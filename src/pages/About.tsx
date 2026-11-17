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
  TrendingUp,
  Star,
  Globe,
  MessageSquare,
  ChevronDown,
} from 'lucide-react';
import { OFFICIAL_CONTACT } from '@/data/contact';
import { ACHIEVEMENTS_SUMMARY } from '@/data/achievements';
import { NETWORK_SUMMARY } from '@/data/branches';

export const About: React.FC<{ onOpenEnquiry: () => void }> = ({ onOpenEnquiry }) => {
  return (
    <div className="w-full bg-white select-none">
      
      {/* ----------------- BREADCRUMB NAVIGATION ----------------- */}
      <div className="bg-[#FAF9F6] border-b border-[#E5EAF2] py-3.5 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Breadcrumb items={[{ label: 'About Us' }]} />
          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5EAF2] text-[#102A78] text-[11px] font-bold uppercase tracking-wider shadow-2xs">
            <GraduationCap className="w-3.5 h-3.5 text-[#E31B23]" />
            <span>Legacy Since 2009</span>
          </div>
        </div>
      </div>

      {/* ----------------- SECTION 1: ABOUT US SHOWCASE (Exact Reference Match) ----------------- */}
      <section id="academy" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-white overflow-hidden border-b border-[#E5EAF2]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: DYNAMIC 2-PHOTO COLLAGE + FLOATING STATS BADGES */}
          <div className="lg:col-span-6 w-full">
            <div className="relative w-full max-w-[520px] sm:max-w-[560px] h-[480px] sm:h-[530px] mx-auto">
              
              {/* Main Photo 1: Upper-Left Rounded Card */}
              <div className="absolute top-10 sm:top-12 left-0 w-[220px] sm:w-[260px] h-[280px] sm:h-[320px] rounded-[2rem] overflow-hidden shadow-xl border border-black/5 z-10 group">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80"
                  alt="TAF IAS Academy Aspirants Mentoring Session"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102A78]/60 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3.5 left-4 right-4 text-white">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FFDE59]">
                    Tenkasi Campus
                  </span>
                  <p className="text-xs font-bold leading-tight truncate">
                    Focused Study Batches
                  </p>
                </div>
              </div>

              {/* Main Photo 2: Staggered Lower-Right Rounded Card */}
              <div className="absolute bottom-2 sm:bottom-4 right-0 sm:right-4 w-[215px] sm:w-[250px] h-[270px] sm:h-[310px] rounded-[2rem] overflow-hidden shadow-xl border border-black/5 z-10 group">
                <img
                  src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80"
                  alt="Students Collaborating at TAF IAS Academy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102A78]/60 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3.5 left-4 right-4 text-white">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FFDE59]">
                    Residential Wing
                  </span>
                  <p className="text-xs font-bold leading-tight truncate">
                    24/7 Library & Discussion
                  </p>
                </div>
              </div>

              {/* Floating Stat Card (Top Right — Matching Reference) */}
              <div className="absolute top-0 right-2 sm:right-6 z-20 bg-white rounded-2xl p-4 sm:p-5 shadow-2xl border border-slate-100 max-w-[210px] sm:max-w-[230px] animate-fade-in">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-serif text-2xl sm:text-3xl font-black text-[#102A78] tracking-tight">
                    16,000+
                  </span>
                  <div className="w-7 h-7 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                </div>
                
                <p className="text-[11px] text-[#64748B] font-medium leading-snug mt-1.5">
                  Selections in TNPSC & Police with 5-star ratings from aspirants.
                </p>

                {/* Overlapping Student Avatars Stack */}
                <div className="flex items-center -space-x-2 mt-3 pt-2.5 border-t border-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                    alt="Alumni"
                    className="w-7 h-7 rounded-full border-2 border-white object-cover shadow-2xs"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                    alt="Alumni"
                    className="w-7 h-7 rounded-full border-2 border-white object-cover shadow-2xs"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80"
                    alt="Alumni"
                    className="w-7 h-7 rounded-full border-2 border-white object-cover shadow-2xs"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80"
                    alt="Alumni"
                    className="w-7 h-7 rounded-full border-2 border-white object-cover shadow-2xs"
                  />
                  <div className="w-7 h-7 rounded-full bg-[#102A78] text-[#FFDE59] text-[9px] font-black flex items-center justify-center border-2 border-white shadow-2xs">
                    +16k
                  </div>
                </div>
              </div>

              {/* Floating Reviews Card (Bottom Left — Matching Reference) */}
              <div className="absolute bottom-2 sm:bottom-4 left-4 sm:left-10 z-20 bg-white rounded-2xl px-4 py-3 shadow-xl border border-slate-100">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#64748B]">
                  Best ratings
                </span>
                <div className="flex items-center gap-1 mt-1 text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span className="text-[11px] font-extrabold text-[#102A78] ml-1">5.0</span>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: EDITORIAL CONTENT (A BIT / ABOUT US / PARAGRAPH / CTA) */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Spaced Eyebrow (Exact Reference: "A B I T") */}
            <div className="inline-block">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.35em] text-[#174A9C]">
                A B I T
              </span>
            </div>

            {/* Massive Bold Heading (Exact Reference: "ABOUT US") */}
            <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-black text-[#102A78] tracking-tight uppercase leading-none">
              ABOUT US
            </h1>

            {/* Editorial Copy */}
            <div className="space-y-4 text-sm sm:text-base text-[#475569] leading-relaxed max-w-xl font-normal">
              <p>
                Founded in <strong>August 2009</strong> with a passionate mission to democratize competitive civil services guidance across Tamil Nadu, TAF IAS Academy was established to provide state-of-the-art coaching to students from all socioeconomic backgrounds.
              </p>
              <p>
                Over the past 15+ years, what began as a humble classroom in Tenkasi has expanded into an extraordinary educational movement comprising a network of <strong>92 branch centers</strong>, residential hostel campuses in Tenkasi and Thanjavur, and an authentic publishing house — <strong>Aamu Publication</strong>.
              </p>
            </div>

            {/* Highlight Badges Row */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <span className="px-3.5 py-1.5 rounded-full bg-[#F4F7FC] text-[#102A78] font-bold text-xs border border-[#E5EAF2]">
                🏛️ 92 Centers Across TN
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-[#F4F7FC] text-[#102A78] font-bold text-xs border border-[#E5EAF2]">
                🎖️ 16,000+ Selections
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-[#F4F7FC] text-[#102A78] font-bold text-xs border border-[#E5EAF2]">
                📚 Samacheer Kalvi Mastery
              </span>
            </div>

            {/* Slanted CTA Button (Exact Reference Match: "EXPLORE MORE") */}
            <div className="pt-4">
              <a
                href="#founder"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-[#102A78] to-[#174A9C] hover:from-[#174A9C] hover:to-[#102A78] text-white text-xs font-black uppercase tracking-widest transition-all duration-300 shadow-xl shadow-blue-950/20 hover:shadow-2xl hover:scale-[1.02] cursor-pointer"
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 100%, 0 100%)',
                }}
              >
                <span>EXPLORE MORE</span>
                <ArrowRight className="w-4 h-4 text-[#FFDE59]" />
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* Main Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 space-y-20">

        {/* Section 2: Founder Tribute (Clean Layout Without Enclosing Card) */}
        <section id="founder" className="relative py-4 sm:py-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* LEFT COLUMN: INTRO, NAME, TITLE & ACTION BUTTON */}
            <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-6 text-left">
              <div className="space-y-3.5">
                <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-[#102A78] leading-tight">
                  Hi, <br />
                  I'm <span className="text-[#E31B23]">Aagasa Moorthy</span>
                </h3>
                <p className="text-xs sm:text-sm font-bold text-[#64748B] uppercase tracking-wider">
                  Founder & Academic Director
                </p>
                
                {/* Red Pill Action Button with Arrow (Matching Reference "Hire Me ->") */}
                <div className="pt-2">
                  <button
                    onClick={onOpenEnquiry}
                    className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-[#E31B23] hover:bg-[#C9141B] text-white text-xs font-extrabold uppercase tracking-wider shadow-md shadow-red-500/25 transition-all cursor-pointer group active:scale-95"
                  >
                    <span>Meet The Director</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Bottom Left Website Badge (Matching Reference) */}
              <div className="pt-4 flex items-center gap-2 text-xs font-semibold text-[#64748B]">
                <div className="w-4 h-4 rounded-full bg-[#E31B23]/15 text-[#E31B23] flex items-center justify-center">
                  <Globe className="w-2.5 h-2.5" />
                </div>
                <span className="font-mono text-[11px] text-[#102A78] font-bold">tafiasacademy.in</span>
              </div>
            </div>

            {/* CENTER COLUMN: LARGE PROMINENT FOUNDER PORTRAIT */}
            <div className="lg:col-span-4 flex justify-center items-center">
              <div className="relative w-[280px] sm:w-[320px] lg:w-[340px] h-[380px] sm:h-[430px] lg:h-[460px] rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-200/80 bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
                  alt="Founder Mr. J. Aagasa Moorthy"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102A78]/25 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* RIGHT COLUMN: FOUNDER'S MESSAGE, VISION & CHAT CALLOUT */}
            <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-6 text-left relative">
              {/* Top-Right Decorative Geometric Rings (Exact Reference Detail) */}
              <div className="hidden sm:flex absolute -top-4 -right-2 items-center gap-2 pointer-events-none">
                <div className="w-7 h-7 rounded-full border-2 border-orange-400/50" />
                <div className="w-10 h-10 rounded-full border-2 border-cyan-500/50 -ml-3.5" />
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 -mt-6" />
              </div>

              <div className="space-y-3.5 pr-2 pt-1">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#E31B23]">
                  Founder's Message
                </span>
                
                <h4 className="font-serif text-lg sm:text-xl font-bold text-[#102A78] leading-snug">
                  "Our Purpose is to Place Honest, Capable Officers in Every Seat of Governance."
                </h4>

                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-normal">
                  When we established TAF IAS Academy in 2009 in Tenkasi, competitive examination guidance was heavily concentrated in state capitals. Rural candidates faced severe challenges with English-only materials and metro living costs.
                </p>

                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-normal">
                  Our core belief remains unshakeable: <em>"Hard work guided by authentic syllabus mastery will always defeat socioeconomic privilege."</em>
                </p>

                {/* Underlined Action Link (Matching Reference "Download CV") */}
                <div className="pt-1">
                  <Link
                    to="/centers"
                    className="text-xs font-bold text-[#102A78] hover:text-[#E31B23] underline underline-offset-4 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Explore 92 Branch Hubs Across TN</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Bottom Right Chat Callout (Matching Reference "Let's Chat") */}
              <div className="pt-2 flex items-center justify-end gap-2 text-xs font-bold text-[#102A78]">
                <span>Let's Connect</span>
                <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-xs">
                  <MessageSquare className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Section 3: Vision and Mission (Exact Match to User Reference) */}
        <section id="vision-mission" className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#174A9C]">
              <Compass className="w-4 h-4 text-[#E31B23]" />
              <span>Institutional Compass</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-black text-[#102A78] tracking-tight">
              Vision & Mission
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] font-medium">
              The foundational compass steering our academic institution into the future.
            </p>
          </div>

          {/* Clean Showcase Container Without Background Card */}
          <div className="relative py-4 sm:py-8 overflow-hidden">
            
            {/* Top-Right Subtle Watermark (MISSION) */}
            <div className="absolute top-0 right-4 sm:right-12 text-[#102A78]/[0.035] font-black tracking-widest text-6xl sm:text-8xl lg:text-9xl uppercase pointer-events-none select-none font-sans">
              MISSION
            </div>

            {/* Bottom-Left Subtle Watermark (VISION) */}
            <div className="absolute bottom-0 left-4 sm:left-12 text-[#102A78]/[0.035] font-black tracking-widest text-6xl sm:text-8xl lg:text-9xl uppercase pointer-events-none select-none font-sans">
              VISION
            </div>

            <div className="relative z-10 space-y-12 sm:space-y-16">
              
              {/* TOP ROW: MISSION CARD (Shifted to Right with Left-Overlapping Rocket Image) */}
              <div className="flex flex-col sm:flex-row items-center justify-end w-full max-w-4xl ml-auto group">
                {/* Protruding Launch Image on the Left */}
                <div className="w-[150px] h-[150px] sm:w-[190px] sm:h-[190px] lg:w-[220px] lg:h-[210px] rounded-[2rem] overflow-hidden shadow-2xl shrink-0 -mb-6 sm:-mb-0 sm:-mr-10 lg:-mr-14 relative z-20 border-4 border-white bg-white">
                  <img
                    src="https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?auto=format&fit=crop&w=800&q=80"
                    alt="Space Shuttle Rocket Launch"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* White Card Body */}
                <div className="bg-white rounded-3xl sm:rounded-[2.2rem] p-6 sm:p-8 sm:pl-16 lg:pl-22 shadow-xl hover:shadow-2xl flex-1 text-center sm:text-right border border-[#E5EAF2] relative z-10 w-full transition-all duration-300">
                  <h3 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-black text-[#102A78] tracking-tight">
                    Mission
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] font-medium leading-relaxed mt-2.5 max-w-xl sm:ml-auto">
                    To engineer syllabus-accurate, line-by-line study kits through Aamu Publication; deliver relentless daily OMR-based mock tests; maintain affordable accessible study centers in every district; and provide holistic physical and mental training that transforms aspirants into top state rank-holders.
                  </p>
                </div>
              </div>

              {/* BOTTOM ROW: VISION CARD (Shifted to Left with Right-Overlapping Focus Lens Image) */}
              <div className="flex flex-col-reverse sm:flex-row items-center justify-start w-full max-w-4xl mr-auto group">
                {/* White Card Body */}
                <div className="bg-white rounded-3xl sm:rounded-[2.2rem] p-6 sm:p-8 sm:pr-16 lg:pr-22 shadow-xl hover:shadow-2xl flex-1 text-center sm:text-left border border-[#E5EAF2] relative z-10 w-full transition-all duration-300">
                  <h3 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-black text-[#102A78] tracking-tight">
                    Vision
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] font-medium leading-relaxed mt-2.5 max-w-xl">
                    To build an equitable Tamil Nadu where socioeconomic background and geographical location are never barriers to entering premier civil, administrative, and uniformed services. We envision our alumni serving across state and central departments with impeccable integrity, competence, and public empathy.
                  </p>
                </div>

                {/* Protruding Focus Lens Image on the Right */}
                <div className="w-[150px] h-[150px] sm:w-[190px] sm:h-[190px] lg:w-[220px] lg:h-[210px] rounded-[2rem] overflow-hidden shadow-2xl shrink-0 -mb-6 sm:-mb-0 sm:-ml-10 lg:-ml-14 relative z-20 border-4 border-white bg-white">
                  <img
                    src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80"
                    alt="Vision Focus Lens"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Section 4: Our 15-Year Journey Timeline */}
        <section id="journey" className="space-y-12 py-4">
          <div className="text-center max-w-2xl mx-auto space-y-2.5">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#102A78]">
              Our 15+ Years Milestones
            </h2>
            <p className="text-sm text-[#64748B]">
              Key moments shaping the evolution of TAF IAS Academy from 2009 to the present.
            </p>
          </div>

          {/* 5-Step Alternating Infographic Timeline */}
          <div className="max-w-5xl mx-auto">
            {[
              {
                num: '01',
                year: '2009',
                title: 'Inception in Tenkasi',
                desc: 'Founded by Mr. J. Aagasa Moorthy with a single dedicated classroom in Tenkasi to mentor southern Tamil Nadu rural aspirants for TNPSC and Police exams.',
                badgeGradient: 'from-[#FFA726] to-[#FB8C00]',
                badgeShadow: 'shadow-[0_14px_26px_-6px_rgba(251,140,0,0.45)]',
                yearColor: 'text-[#F59E0B]',
                Icon: MapPin,
              },
              {
                num: '02',
                year: '2012–15',
                title: 'Creation of Aamu Publication',
                desc: 'Launched Aamu Publication to author authentic bilingual textbooks, solving the acute shortage of high-standard Samacheer Kalvi competitive materials.',
                badgeGradient: 'from-[#00D2DF] to-[#00ACC1]',
                badgeShadow: 'shadow-[0_14px_26px_-6px_rgba(0,172,193,0.42)]',
                yearColor: 'text-[#00B4C8]',
                Icon: BookOpen,
              },
              {
                num: '03',
                year: '2016–19',
                title: 'Statewide Expansion & Hostels',
                desc: 'Inauguration of the intensive residential campus in Thanjavur and expansion of physical branches across Madurai, Salem, Cuddalore, Villupuram, and Tirunelveli.',
                badgeGradient: 'from-[#0AA5FF] to-[#0284E8]',
                badgeShadow: 'shadow-[0_14px_26px_-6px_rgba(2,132,232,0.42)]',
                yearColor: 'text-[#0288E8]',
                Icon: Building,
              },
              {
                num: '04',
                year: '2020–23',
                title: 'Digital Portal & 16,000+ Selections',
                desc: 'Launched our live interactive online classroom portal alongside physical centers, crossing the landmark milestone of 16,000+ verified government selections.',
                badgeGradient: 'from-[#FF3D8B] to-[#F5196E]',
                badgeShadow: 'shadow-[0_14px_26px_-6px_rgba(245,25,110,0.42)]',
                yearColor: 'text-[#F42073]',
                Icon: Award,
              },
              {
                num: '05',
                year: 'Present',
                title: '92-Branch Network & Junior IAS',
                desc: 'Expanding access across all 38 districts with 92 branch centers, alongside pioneering the Junior IAS school and collegiate leadership curriculum.',
                badgeGradient: 'from-[#8445EC] to-[#6D28D9]',
                badgeShadow: 'shadow-[0_14px_26px_-6px_rgba(109,40,217,0.42)]',
                yearColor: 'text-[#7431DF]',
                Icon: TrendingUp,
              },
            ].map((item, idx, arr) => {
              const isOdd = idx % 2 === 0;
              const StepIcon = item.Icon;

              return (
                <div key={item.num} className="flex flex-col items-center">
                  {/* Desktop Alternating Infographic Row */}
                  <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] items-center w-full group">
                    {/* Left Wing */}
                    <div className="flex justify-end">
                      {isOdd ? (
                        <div className="w-44 lg:w-52 h-[100px] bg-white rounded-l-2xl border border-r-0 border-slate-100 shadow-[0_14px_32px_-8px_rgba(16,42,120,0.14)] flex items-center justify-center px-5 transition-transform duration-300 group-hover:-translate-x-1">
                          <span className={`font-sans text-2xl lg:text-[30px] font-extrabold tracking-tight whitespace-nowrap ${item.yearColor}`}>
                            {item.year}
                          </span>
                        </div>
                      ) : (
                        <div className="w-full max-w-[460px] min-h-[100px] bg-white rounded-l-2xl border border-r-0 border-slate-100 shadow-[0_14px_32px_-8px_rgba(16,42,120,0.14)] flex items-center justify-between gap-5 pl-7 pr-6 py-4 transition-transform duration-300 group-hover:-translate-x-1">
                          <div className="w-11 h-11 flex items-center justify-center shrink-0 text-[#5B6472]">
                            <StepIcon className="w-8 h-8 stroke-[1.75]" />
                          </div>
                          <div className="text-right space-y-1">
                            <h3 className="font-sans text-[13px] lg:text-sm font-extrabold uppercase tracking-wide text-[#334155]">
                              {item.title}
                            </h3>
                            <p className="text-[11.5px] lg:text-xs text-[#64748B] leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Center Protruding Colored Number Square */}
                    <div
                      className={`relative z-20 w-[96px] lg:w-[108px] h-[116px] lg:h-[124px] rounded-[4px] bg-gradient-to-b ${item.badgeGradient} ${item.badgeShadow} flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-[1.03]`}
                    >
                      <span
                        className="font-sans font-extrabold text-[44px] lg:text-[52px] leading-none tracking-tight select-none"
                        style={{
                          color: 'transparent',
                          WebkitTextStroke: '1.6px rgba(255, 255, 255, 0.96)',
                        }}
                      >
                        {item.num}
                      </span>
                    </div>

                    {/* Right Wing */}
                    <div className="flex justify-start">
                      {isOdd ? (
                        <div className="w-full max-w-[460px] min-h-[100px] bg-white rounded-r-2xl border border-l-0 border-slate-100 shadow-[0_14px_32px_-8px_rgba(16,42,120,0.14)] flex items-center justify-between gap-5 pl-6 pr-7 py-4 transition-transform duration-300 group-hover:translate-x-1">
                          <div className="text-left space-y-1">
                            <h3 className="font-sans text-[13px] lg:text-sm font-extrabold uppercase tracking-wide text-[#334155]">
                              {item.title}
                            </h3>
                            <p className="text-[11.5px] lg:text-xs text-[#64748B] leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                          <div className="w-11 h-11 flex items-center justify-center shrink-0 text-[#5B6472]">
                            <StepIcon className="w-8 h-8 stroke-[1.75]" />
                          </div>
                        </div>
                      ) : (
                        <div className="w-44 lg:w-52 h-[100px] bg-white rounded-r-2xl border border-l-0 border-slate-100 shadow-[0_14px_32px_-8px_rgba(16,42,120,0.14)] flex items-center justify-center px-5 transition-transform duration-300 group-hover:translate-x-1">
                          <span className={`font-sans text-2xl lg:text-[30px] font-extrabold tracking-tight whitespace-nowrap ${item.yearColor}`}>
                            {item.year}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Mobile Compact Infographic Card */}
                  <div className="md:hidden w-full max-w-md bg-white rounded-2xl border border-slate-100 shadow-[0_12px_28px_-8px_rgba(16,42,120,0.14)] overflow-hidden">
                    <div className="flex items-stretch">
                      <div
                        className={`w-20 shrink-0 bg-gradient-to-b ${item.badgeGradient} flex items-center justify-center`}
                      >
                        <span
                          className="font-sans font-extrabold text-3xl leading-none tracking-tight"
                          style={{
                            color: 'transparent',
                            WebkitTextStroke: '1.4px rgba(255, 255, 255, 0.96)',
                          }}
                        >
                          {item.num}
                        </span>
                      </div>
                      <div className="flex-1 p-4 space-y-1.5">
                        <div className="flex items-center justify-between gap-2">
                          <span className={`font-sans text-lg font-extrabold tracking-tight ${item.yearColor}`}>
                            {item.year}
                          </span>
                          <StepIcon className="w-5 h-5 text-[#5B6472] stroke-[1.75] shrink-0" />
                        </div>
                        <h3 className="font-sans text-xs font-extrabold uppercase tracking-wide text-[#334155]">
                          {item.title}
                        </h3>
                        <p className="text-xs text-[#64748B] leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Centered Downward Chevron Connector */}
                  {idx < arr.length - 1 && (
                    <div className="py-2.5 flex items-center justify-center">
                      <ChevronDown className="w-6 h-6 text-[#475569] stroke-[2.75]" />
                    </div>
                  )}
                </div>
              );
            })}
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
