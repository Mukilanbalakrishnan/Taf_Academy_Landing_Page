import React from 'react';
import { Link } from 'react-router-dom';
import { Award, ArrowRight, Star, ShieldCheck, MapPin } from 'lucide-react';
import { ACHIEVERS } from '@/data/achievements';

export const RankShowcaseSection: React.FC = () => {
  const topAchievers = ACHIEVERS.slice(0, 4);

  return (
    <section className="bg-white text-[#26344D] py-14 sm:py-16 px-4 sm:px-8 lg:px-12 border-b border-[#E5EAF2]">
      <div className="w-full max-w-[1720px] mx-auto space-y-8">
        
        {/* Header: Concise & Prestigious */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-left">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#174A9C]">
              <Award className="w-4 h-4 text-[#E31B23]" />
              <span>Statewide Hall of Fame</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#102A78] tracking-tight">
              Top State Rank Achievers
            </h2>
          </div>

          <Link
            to="/achievements"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#102A78] hover:bg-[#174A9C] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-xs shrink-0 cursor-pointer"
          >
            <span>Full Rank List</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Achiever Showcase (Visual Portraits & Badges Only, Zero Walls of Text) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-left">
          {topAchievers.map((achiever) => (
            <div
              key={achiever.id}
              className="bg-[#F8FAFD] border border-[#E5EAF2] hover:border-[#102A78]/50 rounded-2xl overflow-hidden shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Photo Frame */}
              <div className="relative h-56 overflow-hidden bg-slate-900">
                <img
                  src={achiever.photoUrl}
                  alt={achiever.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                
                {/* Gold Rank Badge */}
                <div className="absolute top-2.5 left-2.5">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#E6B422] text-[#102A78] text-xs font-extrabold tracking-wider uppercase shadow-md">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    {achiever.rank}
                  </span>
                </div>

                {/* Exam & Batch Tag */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-[11px] text-white">
                  <span className="font-bold px-2 py-0.5 rounded bg-black/50 backdrop-blur-xs border border-white/20">
                    {achiever.exam}
                  </span>
                  <span className="font-bold text-amber-300">Batch {achiever.selectionYear}</span>
                </div>
              </div>

              {/* Achiever Meta */}
              <div className="p-4 bg-white space-y-1.5">
                <h3 className="font-serif text-base font-bold text-[#102A78] group-hover:text-[#E31B23] transition-colors line-clamp-1">
                  {achiever.name}
                </h3>
                <div className="text-xs font-bold text-[#E31B23] flex items-center gap-1 truncate">
                  <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                  <span>{achiever.postAllocated}</span>
                </div>
                <div className="text-[11px] text-[#64748B] flex items-center gap-1 font-medium truncate pt-0.5">
                  <MapPin className="w-3 h-3 text-[#174A9C]" />
                  <span>{achiever.branchStudied}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
