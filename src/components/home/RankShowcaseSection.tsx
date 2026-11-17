import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Award, ArrowRight, Star, ShieldCheck, MapPin } from 'lucide-react';

interface LeaderboardAchiever {
  id: string;
  rankBadge: string;
  rankNumber: string;
  name: string;
  post: string;
  exam: string;
  campus: string;
  score: string;
  scoreLabel: string;
  photoUrl: string;
  starsCount: number;
  rightCapBg: string;
  batch: string;
}

export const RankShowcaseSection: React.FC = () => {
  const leaderboardData: LeaderboardAchiever[] = [
    {
      id: 'rank-1',
      rankBadge: '1st Rank',
      rankNumber: '1st',
      name: 'R. Vigneshwaran',
      post: 'Sub-Inspector of Police (Taluk)',
      exam: 'TNSURB SI',
      campus: 'Thanjavur Residential Hostel',
      score: '300',
      scoreLabel: 'Score',
      photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      starsCount: 3,
      rightCapBg: 'bg-[#102A78]',
      batch: 'Batch 2022',
    },
    {
      id: 'rank-2',
      rankBadge: '2nd Rank',
      rankNumber: '2nd',
      name: 'K. Saravanakumar',
      post: 'Junior Assistant (Commercial Tax)',
      exam: 'TNPSC Group 4',
      campus: 'Madurai Branch Center',
      score: '294',
      scoreLabel: 'Score',
      photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
      starsCount: 3,
      rightCapBg: 'bg-[#174A9C]',
      batch: 'Batch 2023',
    },
    {
      id: 'rank-3',
      rankBadge: '3rd Rank',
      rankNumber: '3rd',
      name: 'S. Karthikeyan',
      post: 'Deputy Collector (Civil Services)',
      exam: 'TNPSC Group 1',
      campus: 'Tenkasi Residential Campus',
      score: '288',
      scoreLabel: 'Score',
      photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      starsCount: 2,
      rightCapBg: 'bg-[#0284C7]',
      batch: 'Batch 2023',
    },
    {
      id: 'rank-4',
      rankBadge: '4th Rank',
      rankNumber: '4th',
      name: 'P. Priya Dharshini',
      post: 'Sub-Registrar Grade II',
      exam: 'TNPSC Group 2',
      campus: 'Tirunelveli Branch Center',
      score: '278',
      scoreLabel: 'Score',
      photoUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
      starsCount: 2,
      rightCapBg: 'bg-[#0D9488]',
      batch: 'Batch 2022',
    },
    {
      id: 'rank-5',
      rankBadge: '5th Rank',
      rankNumber: '5th',
      name: 'M. Deepa Lakshmi',
      post: 'Deputy Superintendent of Police (DSP)',
      exam: 'TNPSC Group 1',
      campus: 'Madurai Center',
      score: '270',
      scoreLabel: 'Score',
      photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      starsCount: 2,
      rightCapBg: 'bg-[#059669]',
      batch: 'Batch 2023',
    },
  ];

  const [selectedId, setSelectedId] = useState<string>(leaderboardData[0].id);
  const featured = leaderboardData.find((a) => a.id === selectedId) || leaderboardData[0];

  return (
    <section className="bg-white text-[#26344D] py-14 sm:py-18 px-4 sm:px-8 lg:px-12 border-b border-[#E5EAF2] relative overflow-hidden">
      
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-50/70 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-blue-50/70 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="w-full max-w-[1360px] mx-auto space-y-8 sm:space-y-10">
        
        {/* Section Header: Styled like Reference */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-left">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#174A9C]">
              <Award className="w-4 h-4 text-[#E31B23]" />
              <span>Statewide Hall of Fame</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-black text-[#102A78] tracking-tight uppercase">
              Top State Rank Leaderboard
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] font-medium">
              Tamil Nadu's Highest State Rank Holders & Government Officers Engineered by TAF IAS Academy.
            </p>
          </div>

          <Link
            to="/achievements"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#102A78] hover:bg-[#174A9C] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md shrink-0 cursor-pointer group"
          >
            <span>Full Rank List</span>
            <ArrowRight className="w-4 h-4 text-[#FFDE59] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* ----------------- LEADERBOARD LAYOUT (Left Champion Card + Right Leaderboard Rows) ----------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-2">
          
          {/* LEFT: Featured Spotlight Card (Exact replica of Left Card in Reference) */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="w-full max-w-[380px] bg-white rounded-3xl p-7 pt-9 shadow-xl border border-[#E5EAF2] relative flex flex-col items-center justify-between text-center transition-all duration-300">
              
              {/* Top Protruding Tab ("1st Rank" / Selected Rank) */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                <div className="px-6 py-1.5 rounded-full bg-gradient-to-r from-[#102A78] to-[#174A9C] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-md border-2 border-white flex items-center justify-center">
                  <span>{featured.rankBadge}</span>
                </div>
              </div>

              {/* Large Circular Avatar with Elegant Ring */}
              <div className="relative mt-2 mb-4">
                <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full p-1.5 bg-gradient-to-b from-blue-100 to-white shadow-lg border-2 border-[#174A9C]/20 overflow-hidden mx-auto">
                  <img
                    src={featured.photoUrl}
                    alt={featured.name}
                    className="w-full h-full object-cover object-top rounded-full"
                  />
                </div>
              </div>

              {/* 3 Gold Stars */}
              <div className="flex items-center justify-center gap-1.5 mb-2 text-[#E6B422]">
                {[...Array(3)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < featured.starsCount
                        ? 'fill-[#E6B422] text-[#E6B422]'
                        : 'text-slate-300 fill-slate-200'
                    }`}
                  />
                ))}
              </div>

              {/* Achiever Name & Designation */}
              <div className="space-y-1 mb-5">
                <h3 className="font-serif text-xl sm:text-2xl font-black text-[#102A78] tracking-tight">
                  {featured.name}
                </h3>
                <p className="text-xs sm:text-sm font-bold text-[#64748B] flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#E31B23] shrink-0" />
                  <span>{featured.post}</span>
                </p>
                <p className="text-[11px] font-semibold text-[#174A9C] flex items-center justify-center gap-1">
                  <MapPin className="w-3 h-3 text-[#174A9C] shrink-0" />
                  <span>{featured.campus}</span>
                </p>
              </div>

              {/* Bottom Score / Metric Box (Matching Reference Light Blue Block) */}
              <div className="w-full bg-[#F0F5FD] rounded-2xl p-4 border border-[#E1EDFC]">
                <div className="text-3xl sm:text-4xl font-black text-[#102A78] tracking-tight leading-none">
                  {featured.score}
                </div>
                <div className="text-[11px] font-extrabold uppercase tracking-widest text-[#174A9C] mt-1.5">
                  Points / {featured.scoreLabel}
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT: Stack of 5 Leaderboard Rows (Exact replica of Right Stack in Reference) */}
          <div className="lg:col-span-8 flex flex-col justify-between gap-3.5 sm:gap-4">
            {leaderboardData.map((item) => {
              const isSelected = item.id === selectedId;

              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  className={`bg-white rounded-2xl sm:rounded-full border transition-all duration-200 flex items-center justify-between p-2 sm:p-2.5 sm:pr-0 shadow-sm hover:shadow-md cursor-pointer group select-none ${
                    isSelected
                      ? 'border-[#174A9C] ring-2 ring-[#174A9C]/20 bg-blue-50/30'
                      : 'border-[#E5EAF2] hover:border-[#174A9C]/50 hover:bg-[#F8FAFD]'
                  }`}
                >
                  {/* Left Section: Rank + Avatar + Text */}
                  <div className="flex items-center gap-3 sm:gap-5 min-w-0 pl-2 sm:pl-4">
                    
                    {/* Rank Number (1st, 2nd, etc.) */}
                    <span className="font-sans text-sm sm:text-base font-black text-[#102A78] w-6 sm:w-8 shrink-0 text-center">
                      {item.rankNumber}
                    </span>

                    {/* Circular Avatar */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white shadow-sm overflow-hidden shrink-0 bg-slate-100">
                      <img
                        src={item.photoUrl}
                        alt={item.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>

                    {/* Details Stack */}
                    <div className="text-left min-w-0 py-1">
                      <h4 className="font-serif text-sm sm:text-base font-bold text-[#102A78] group-hover:text-[#174A9C] transition-colors truncate">
                        {item.name}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-[#64748B] font-medium truncate">
                        {item.post}
                      </p>
                    </div>
                  </div>

                  {/* Middle / Right: Stars + Batch & Colored Score Cap */}
                  <div className="flex items-center gap-3 sm:gap-6 shrink-0">
                    
                    {/* Stars + Time/Batch (Matching Reference) */}
                    <div className="hidden md:flex flex-col items-end space-y-0.5">
                      <div className="flex items-center gap-1 text-[#E6B422]">
                        {[...Array(3)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3.5 h-3.5 ${
                              i < item.starsCount
                                ? 'fill-[#E6B422] text-[#E6B422]'
                                : 'text-slate-200 fill-slate-100'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-[10px] text-[#64748B] font-mono font-medium">
                        {item.batch}
                      </span>
                    </div>

                    {/* Colored Score Block (Right Edge Cap matching Reference) */}
                    <div
                      className={`${item.rightCapBg} text-white px-5 sm:px-7 py-3 sm:py-3.5 rounded-xl sm:rounded-r-full sm:rounded-l-lg min-w-[90px] sm:min-w-[115px] text-center shadow-xs flex flex-col items-center justify-center transition-transform group-hover:scale-[1.02]`}
                    >
                      <span className="text-[10px] font-bold uppercase tracking-wider opacity-90 leading-tight">
                        Score
                      </span>
                      <span className="text-base sm:text-lg font-black leading-tight">
                        {item.score}
                      </span>
                    </div>

                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
