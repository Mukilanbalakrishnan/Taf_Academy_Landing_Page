import React from 'react';
import { Link } from 'react-router-dom';
import {
  TrendingUp,
  Lightbulb,
  Users2,
  Building2,
  Clock,
  ArrowRight,
} from 'lucide-react';

export const WhyTafSection: React.FC = () => {
  const notes = [
    {
      id: 'result-driven',
      title: 'Result-Driven Strategies',
      subtitle: '16,000+ Verified Selections Across TNPSC, Police & Central Services',
      icon: TrendingUp,
      bg: 'bg-[#102A78] text-white',
      iconColor: 'text-[#FFDE59]',
      iconBg: 'bg-white/10',
      desktopPos: 'lg:top-2 lg:left-8 xl:left-16 lg:-rotate-[3.5deg]',
      isDark: true,
      zIndex: 'z-10',
    },
    {
      id: 'customized-pedagogy',
      title: 'Customized Solutions For Every Aspirant',
      subtitle: 'Line-by-Line Samacheer Kalvi Guidebooks & Tailored Test Series',
      icon: Lightbulb,
      bg: 'bg-white text-[#102A78]',
      iconColor: 'text-[#174A9C]',
      iconBg: 'bg-blue-50',
      desktopPos: 'lg:top-3 lg:right-6 xl:right-14 lg:rotate-[3.5deg]',
      isDark: false,
      zIndex: 'z-10',
    },
    {
      id: 'dedicated-team',
      title: 'Experienced & Dedicated Faculty',
      subtitle: 'Mock Interview Boards Guided by Retired IAS, IPS & DSP Officers',
      icon: Users2,
      bg: 'bg-white text-[#102A78]',
      iconColor: 'text-[#E31B23]',
      iconBg: 'bg-red-50',
      desktopPos: 'lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:rotate-[0.5deg]',
      isDark: false,
      zIndex: 'z-20',
      isCenter: true,
    },
    {
      id: 'hometown-branches',
      title: 'End-to-End Coaching & 92 Centers',
      subtitle: 'Statewide Presence Across All 38 Districts • Zero Relocation Burden',
      icon: Building2,
      bg: 'bg-white text-[#102A78]',
      iconColor: 'text-[#174A9C]',
      iconBg: 'bg-blue-50',
      desktopPos: 'lg:bottom-2 lg:left-12 xl:left-22 lg:-rotate-[2deg]',
      isDark: false,
      zIndex: 'z-10',
    },
    {
      id: 'long-term-success',
      title: 'Focus on Growth & Long-Term Success',
      subtitle: 'Residential Campus Culture with 24/7 Libraries & Daily Ground Training',
      icon: Clock,
      bg: 'bg-[#102A78] text-white',
      iconColor: 'text-[#FFDE59]',
      iconBg: 'bg-white/10',
      desktopPos: 'lg:bottom-1 lg:right-8 xl:right-18 lg:rotate-[4deg]',
      isDark: true,
      zIndex: 'z-10',
    },
  ];

  return (
    <section
      className="bg-[#F8FAFD] pt-10 sm:pt-14 pb-0 px-4 sm:px-6 lg:px-8 border-b border-[#E5EAF2] select-none relative overflow-hidden"
      id="why-taf"
    >
      {/* ----------------- ATTRACTIVE SIDE SHAPES (Reference Box 2 & Box 3) ----------------- */}
      
      {/* Left Edge Big Decorative Light Blue Shape (Box 2) - Clearly visible with z-0 */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 w-80 lg:w-[440px] h-80 lg:h-[440px] rounded-full bg-[#DCEAF8] pointer-events-none z-0 shadow-sm" />

      {/* Right Edge Big Decorative Light Blue Shape (Box 3) - Clearly visible with z-0 */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 w-80 lg:w-[420px] h-80 lg:h-[420px] rounded-full bg-[#DCEAF8] pointer-events-none z-0 shadow-sm" />

      {/* Top-Right Soft Blue Corner Arc behind Paper Airplane */}
      <div className="absolute top-0 right-0 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 rounded-bl-full bg-[#E5F1FC] pointer-events-none z-0" />

      {/* ----------------- REALISTIC PHOTOGRAPHIC PLANT (Bottom-Left Corner) ----------------- */}
      <div className="absolute bottom-0 left-0 w-44 sm:w-56 lg:w-68 pointer-events-none z-10 select-none">
        <img
          src="/images/plant-decor.png"
          alt="Natural Green Plant Foliage"
          className="w-full h-auto object-contain filter drop-shadow-lg select-none pointer-events-none -translate-x-2 translate-y-1"
        />
      </div>

      {/* ----------------- REALISTIC PHOTOGRAPHIC PLANT (Top-Right Corner) ----------------- */}
      <div className="absolute -top-4 -right-4 w-44 sm:w-56 lg:w-68 pointer-events-none z-10 select-none rotate-180">
        <img
          src="/images/plant-decor.png"
          alt="Natural Green Plant Foliage"
          className="w-full h-auto object-contain filter drop-shadow-lg select-none pointer-events-none"
        />
      </div>

      <div className="w-full max-w-[1360px] mx-auto text-center relative z-10">
        
        {/* Brand Crest / Logo at Top Center (Matching Reference Top Logo) */}
        <div className="flex flex-col items-center justify-center mb-2">
          <img
            src="/images/taf-logo.png"
            alt="TAF IAS Academy"
            className="h-9 sm:h-11 w-auto object-contain drop-shadow-sm"
          />
        </div>

        {/* ----------------- HEADER: "5 REASONS TO CHOOSE US" (With Big Paper Airplane Box 1) ----------------- */}
        <div className="relative inline-flex items-center justify-center gap-3 sm:gap-5 mb-6 sm:mb-8">
          
          {/* Big Number "5" with dynamic speed accents */}
          <div className="relative flex items-center justify-center">
            {/* Speed marks */}
            <div className="absolute -top-1 -left-4 sm:-left-5 text-[#174A9C] font-black text-lg select-none">
              \\
            </div>
            <span className="font-sans text-6xl sm:text-7xl lg:text-8xl font-black text-[#174A9C] tracking-tighter leading-none">
              5
            </span>
          </div>

          {/* Heading Stack */}
          <div className="text-left space-y-0.5">
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-black text-[#102A78] tracking-tight uppercase leading-none">
              Reasons
            </h2>
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm lg:text-base font-extrabold uppercase tracking-widest text-[#102A78]">
                To Choose Us
              </span>
              <div className="w-8 sm:w-14 h-0.5 bg-[#174A9C] rounded-full" />
            </div>
          </div>

          {/* PROMINENT PAPER AIRPLANE WITH LOOP TRAIL (Box 1 in Reference) */}
          <div className="hidden md:block absolute -top-8 -right-32 lg:-right-40 pointer-events-none select-none">
            <svg width="150" height="100" viewBox="0 0 150 100" fill="none">
              {/* Looping Dotted Flight Trail */}
              <path
                d="M10 80 C 40 85, 65 70, 55 45 C 45 22, 28 32, 42 54 C 58 75, 95 70, 125 25"
                stroke="#0284C7"
                strokeWidth="2.2"
                strokeDasharray="5 5"
                opacity="0.85"
              />
              {/* 3D Paper Airplane */}
              <g transform="translate(118, 12) rotate(18)">
                {/* Upper Wing */}
                <polygon
                  points="0,0 30,-7 16,16"
                  fill="#0EA5E9"
                />
                {/* Center Fold Body */}
                <polygon
                  points="0,0 30,-7 9,7"
                  fill="#0284C7"
                />
                {/* Lower Wing */}
                <polygon
                  points="0,0 9,7 5,16"
                  fill="#0369A1"
                />
                {/* Bottom shading */}
                <polygon
                  points="9,7 16,16 11,14"
                  fill="#075985"
                />
              </g>
            </svg>
          </div>
        </div>

        {/* ----------------- 5 PINNED STICKY NOTES (Spacious, De-congested, Room to Breathe) ----------------- */}
        <div className="relative w-full max-w-[1180px] xl:max-w-[1240px] mx-auto lg:h-[530px] xl:h-[560px] flex items-center justify-center mb-8">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:block w-full gap-8 sm:gap-6 pt-2 lg:pt-0">
            {notes.map((note) => {
              const Icon = note.icon;
              return (
                <div
                  key={note.id}
                  className={`lg:absolute ${note.desktopPos} ${note.zIndex} w-full sm:w-auto flex justify-center transition-all duration-300 hover:scale-[1.03] hover:z-30`}
                >
                  {/* Sticky Note Card Container */}
                  <div
                    className={`relative w-[275px] sm:w-[290px] xl:w-[310px] min-h-[195px] sm:min-h-[210px] rounded-2xl p-5 sm:p-6 shadow-xl hover:shadow-2xl border border-black/5 flex flex-col items-center justify-center text-center space-y-2.5 cursor-default ${note.bg} ${
                      note.isCenter
                        ? 'ring-2 ring-[#174A9C]/20 shadow-2xl scale-[1.02]'
                        : ''
                    }`}
                  >
                    {/* Realistic 3D Pushpin / Thumbtack with Glossy Specular Highlight & Cast Shadow */}
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-sky-400 via-[#174A9C] to-[#0A1A44] shadow-md border-2 border-white ring-1 ring-black/20 flex items-center justify-center relative">
                        <div className="absolute top-0.5 left-1 w-1.5 h-1.5 rounded-full bg-white/95 blur-[0.4px]" />
                      </div>
                      <div className="w-3.5 h-1 bg-black/35 rounded-full blur-[1px] -mt-0.5" />
                    </div>

                    {/* Card Icon */}
                    <div className={`p-2.5 rounded-xl ${note.iconBg} ${note.iconColor}`}>
                      <Icon className="w-7 h-7 sm:w-8 sm:h-8" strokeWidth={2.2} />
                    </div>

                    {/* Card Title */}
                    <h3
                      className={`font-sans text-sm sm:text-base font-bold leading-snug px-1 ${
                        note.isDark ? 'text-white' : 'text-[#102A78]'
                      }`}
                    >
                      {note.title}
                    </h3>

                    {/* Card Subtitle / Context (Adds value without clutter) */}
                    <p
                      className={`text-xs leading-relaxed max-w-[250px] font-medium ${
                        note.isDark ? 'text-blue-100/90' : 'text-[#64748B]'
                      }`}
                    >
                      {note.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* ----------------- BOTTOM CALL-TO-ACTION PILL ----------------- */}
        <div className="flex justify-center pb-14 sm:pb-16">
          <Link
            to="/contact"
            className="px-8 sm:px-12 py-3.5 sm:py-4 rounded-full bg-[#102A78] hover:bg-[#174A9C] text-white text-xs sm:text-sm font-bold tracking-wide shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2.5 group cursor-pointer"
          >
            <span>Let's Create Strategies That Drive Real Growth.</span>
            <ArrowRight className="w-4 h-4 text-[#FFDE59] group-hover:translate-x-1.5 transition-transform shrink-0" />
          </Link>
        </div>

      </div>
    </section>
  );
};
