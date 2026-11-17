import React, { useState } from 'react';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ModernDropdown } from '@/components/common/ResponsiveCategoryFilter';
import { ACHIEVERS, ACHIEVEMENTS_SUMMARY, Achiever } from '@/data/achievements';
import {
  Award,
  Star,
  ShieldCheck,
  MapPin,
  Calendar,
  GraduationCap,
  Filter,
  Search,
  CheckCircle,
} from 'lucide-react';

export const Achievements: React.FC = () => {
  const [selectedExam, setSelectedExam] = useState<string>('ALL');
  const [selectedYear, setSelectedYear] = useState<string>('ALL');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchName, setSearchName] = useState<string>('');

  const filteredAchievers = ACHIEVERS.filter((a) => {
    const matchExam = selectedExam === 'ALL' || a.exam === selectedExam;
    const matchYear = selectedYear === 'ALL' || a.selectionYear.toString() === selectedYear;
    const matchCategory = selectedCategory === 'ALL' || a.category === selectedCategory;
    const matchName = a.name.toLowerCase().includes(searchName.toLowerCase()) ||
                      a.postAllocated.toLowerCase().includes(searchName.toLowerCase()) ||
                      a.branchStudied.toLowerCase().includes(searchName.toLowerCase());
    return matchExam && matchYear && matchCategory && matchName;
  });

  return (
    <div className="w-full bg-white">
      {/* Banner */}
      <section className="bg-[#F4F7FC] text-[#26344D] py-16 px-4 sm:px-6 border-b border-[#E5EAF2]">
        <div className="max-w-7xl mx-auto space-y-4 text-left">
          <Breadcrumb
            items={[{ label: 'Achievements & Rank List' }]}
          />
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E5EAF2] text-[#102A78] text-xs font-semibold uppercase tracking-widest shadow-2xs">
            <Award className="w-4 h-4 text-[#E31B23]" />
            <span>Statewide Hall of Fame</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#102A78]">
            Official Rank List & Achievers Showcase
          </h1>
          <p className="text-base sm:text-lg text-[#64748B] max-w-3xl leading-relaxed">
            Honouring 16,000+ candidates who transformed their aspirations into appointment orders across TNPSC, Uniform Services, UPSC, and Central departments.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-10">
        
        {/* Statistics Summary Ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-[#F4F7FC] rounded-2xl p-5 border border-[#E5EAF2] text-left">
            <span className="text-[10px] uppercase font-bold tracking-wider text-[#64748B]">Total Selections</span>
            <div className="font-serif text-3xl font-extrabold text-[#102A78] mt-1">{ACHIEVEMENTS_SUMMARY.totalSelections}</div>
            <p className="text-[11px] text-[#64748B] mt-0.5">Government Officers Since 2009</p>
          </div>
          <div className="bg-[#F4F7FC] rounded-2xl p-5 border border-[#E5EAF2] text-left">
            <span className="text-[10px] uppercase font-bold tracking-wider text-[#64748B]">TNPSC & Police SI</span>
            <div className="font-serif text-3xl font-extrabold text-[#102A78] mt-1">{ACHIEVEMENTS_SUMMARY.tnpscSIsCombined}</div>
            <p className="text-[11px] text-[#64748B] mt-0.5">State Administrative & Uniform Cadre</p>
          </div>
          <div className="bg-[#F4F7FC] rounded-2xl p-5 border border-[#E5EAF2] text-left">
            <span className="text-[10px] uppercase font-bold tracking-wider text-[#64748B]">Top State Ranks</span>
            <div className="font-serif text-3xl font-extrabold text-[#102A78] mt-1">{ACHIEVEMENTS_SUMMARY.topRankHolders}</div>
            <p className="text-[11px] text-[#64748B] mt-0.5">Ranks 1 to 50 Across Tamil Nadu</p>
          </div>
          <div className="bg-[#F4F7FC] rounded-2xl p-5 border border-[#E5EAF2] text-left">
            <span className="text-[10px] uppercase font-bold tracking-wider text-[#64748B]">Pedagogical Legacy</span>
            <div className="font-serif text-3xl font-extrabold text-[#102A78] mt-1">15+ Years</div>
            <p className="text-[11px] text-[#64748B] mt-0.5">Founded in Tenkasi (August 2009)</p>
          </div>
        </div>

        {/* Filter Controls Box */}
        <div className="bg-[#F4F7FC] p-6 rounded-3xl border border-[#E5EAF2] shadow-xs space-y-4 text-left">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-xl font-bold text-[#102A78] flex items-center gap-2">
              <Filter className="w-4 h-4 text-[#102A78]" />
              <span>Filter Rank Holders</span>
            </h2>
            <span className="text-xs text-[#64748B] font-mono">
              Showing {filteredAchievers.length} Featured Achievers
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div>
              <label className="block text-[11px] font-bold text-[#102A78] uppercase tracking-wider mb-1">
                Search By Name or Post
              </label>
              <div className="relative">
                <Search className="w-4 h-4 text-[#64748B] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="e.g. Karthikeyan / Deputy Collector"
                  value={searchName}
                  onChange={(e) => setSearchName(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-[#E5EAF2] bg-white focus:border-[#102A78] focus:ring-1 focus:ring-[#102A78] outline-none text-[#26344D]"
                />
              </div>
            </div>

            {/* Exam Select */}
            <div>
              <label className="block text-[11px] font-bold text-[#102A78] uppercase tracking-wider mb-1">
                Examination
              </label>
              <ModernDropdown
                options={[
                  { id: 'ALL', label: 'All Examinations' },
                  { id: 'TNPSC Group 1', label: 'TNPSC Group 1' },
                  { id: 'TNPSC Group 2', label: 'TNPSC Group 2 / 2A' },
                  { id: 'TNPSC Group 4', label: 'TNPSC Group 4 & VAO' },
                  { id: 'TNSURB SI', label: 'TNSURB Police SI' },
                  { id: 'TNSURB PC', label: 'TNSURB Police Constable' },
                  { id: 'UPSC Civil Services', label: 'UPSC Civil Services' },
                  { id: 'RRB / Banking', label: 'RRB & Banking' },
                ]}
                value={selectedExam}
                onChange={setSelectedExam}
                ariaLabel="Filter by examination"
                compact
              />
            </div>

            {/* Year Select */}
            <div>
              <label className="block text-[11px] font-bold text-[#102A78] uppercase tracking-wider mb-1">
                Selection Year
              </label>
              <ModernDropdown
                options={[
                  { id: 'ALL', label: 'All Batches' },
                  { id: '2024', label: 'Batch 2024' },
                  { id: '2023', label: 'Batch 2023' },
                  { id: '2022', label: 'Batch 2022' },
                  { id: '2021', label: 'Batch 2021' },
                ]}
                value={selectedYear}
                onChange={setSelectedYear}
                ariaLabel="Filter by selection year"
                compact
              />
            </div>

            {/* Category Select */}
            <div>
              <label className="block text-[11px] font-bold text-[#102A78] uppercase tracking-wider mb-1">
                Rank Category
              </label>
              <ModernDropdown
                options={[
                  { id: 'ALL', label: 'All Rank Tiers' },
                  { id: 'State Rank 1-10', label: 'State Rank 1 – 10' },
                  { id: 'Top 50', label: 'Top 50 Ranks' },
                  { id: 'Distinguished Selection', label: 'Distinguished Selections' },
                ]}
                value={selectedCategory}
                onChange={setSelectedCategory}
                ariaLabel="Filter by rank category"
                compact
              />
            </div>
          </div>
        </div>

        {/* Achievers Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredAchievers.map((achiever) => (
            <div
              key={achiever.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#E5EAF2] hover:border-[#102A78]/30 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between text-left group"
            >
              {/* Photo Frame */}
              <div className="relative h-64 overflow-hidden bg-[#F4F7FC]">
                <img
                  src={achiever.photoUrl}
                  alt={achiever.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102A78]/80 via-transparent to-transparent" />
                
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#E6B422] text-[#102A78] text-xs font-black uppercase tracking-wider shadow-sm">
                    <Star className="w-3 h-3 fill-current" />
                    {achiever.rank}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-white font-mono">
                  <span className="font-semibold text-white px-2 py-0.5 rounded bg-[#102A78]/90 backdrop-blur-sm border border-[#102A78]/40">
                    {achiever.exam}
                  </span>
                  <span className="text-[#E6B422] font-bold">Batch {achiever.selectionYear}</span>
                </div>
              </div>

              {/* Achiever Info */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1.5">
                  <h3 className="font-serif text-xl font-bold text-[#102A78] group-hover:text-[#174A9C] transition-colors">
                    {achiever.name}
                  </h3>
                  <div className="text-xs font-bold text-[#E31B23] flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 shrink-0" />
                    <span>{achiever.postAllocated}</span>
                  </div>
                  <div className="text-xs text-[#64748B] flex items-center gap-1 pt-1">
                    <MapPin className="w-3.5 h-3.5 text-[#64748B]" />
                    <span>{achiever.branchStudied}</span>
                  </div>
                </div>

                {achiever.testimonialSnippet && (
                  <p className="text-xs text-[#64748B] italic line-clamp-3 pt-3 border-t border-[#E5EAF2]">
                    "{achiever.testimonialSnippet}"
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredAchievers.length === 0 && (
          <div className="bg-white rounded-3xl p-12 text-center space-y-3 border border-gray-200">
            <Award className="w-10 h-10 text-gray-400 mx-auto" />
            <h3 className="font-serif text-xl font-bold text-navy-950">No Achievers Found</h3>
            <p className="text-xs text-gray-500">Try adjusting your filters or search keywords.</p>
          </div>
        )}

      </div>
    </div>
  );
};
