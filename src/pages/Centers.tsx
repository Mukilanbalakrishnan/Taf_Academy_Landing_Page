import React, { useState } from 'react';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { BRANCHES, DISTRICT_LIST, NETWORK_SUMMARY } from '@/data/branches';
import {
  MapPin,
  Phone,
  ExternalLink,
  Search,
  Building2,
  CheckCircle,
  Clock,
  Home,
  Landmark,
  Compass,
  Navigation,
  Map,
} from 'lucide-react';
import { OFFICIAL_CONTACT } from '@/data/contact';

interface CentersPageProps {
  onOpenEnquiry: (courseName?: string, centerName?: string) => void;
}

const RIBBON_THEMES = [
  {
    ribbon: 'linear-gradient(90deg, #F59E0B 0%, #FACC15 100%)',
    tipColor: '#FACC15',
    accentText: 'text-[#D97706]',
    btnBg: 'bg-[#E59008] hover:bg-[#CA7E05]',
    badgeBg: 'bg-amber-50 text-amber-800 border-amber-200',
  },
  {
    ribbon: 'linear-gradient(90deg, #5B6787 0%, #8996B6 100%)',
    tipColor: '#8996B6',
    accentText: 'text-[#556280]',
    btnBg: 'bg-[#5B6787] hover:bg-[#49536E]',
    badgeBg: 'bg-slate-100 text-slate-700 border-slate-200',
  },
  {
    ribbon: 'linear-gradient(90deg, #43A047 0%, #81C756 100%)',
    tipColor: '#81C756',
    accentText: 'text-[#388E3C]',
    btnBg: 'bg-[#43A047] hover:bg-[#358539]',
    badgeBg: 'bg-green-50 text-green-800 border-green-200',
  },
  {
    ribbon: 'linear-gradient(90deg, #047857 0%, #10B981 100%)',
    tipColor: '#10B981',
    accentText: 'text-[#047857]',
    btnBg: 'bg-[#047857] hover:bg-[#065F46]',
    badgeBg: 'bg-emerald-50 text-emerald-800 border-emerald-200',
  },
  {
    ribbon: 'linear-gradient(90deg, #0891B2 0%, #4DD0E1 100%)',
    tipColor: '#4DD0E1',
    accentText: 'text-[#0E7490]',
    btnBg: 'bg-[#0891B2] hover:bg-[#0E7490]',
    badgeBg: 'bg-cyan-50 text-cyan-800 border-cyan-200',
  },
  {
    ribbon: 'linear-gradient(90deg, #1E5693 0%, #3B82F6 100%)',
    tipColor: '#3B82F6',
    accentText: 'text-[#1D4ED8]',
    btnBg: 'bg-[#1E5693] hover:bg-[#174477]',
    badgeBg: 'bg-blue-50 text-blue-800 border-blue-200',
  },
  {
    ribbon: 'linear-gradient(90deg, #6D5B4F 0%, #A68E7E 100%)',
    tipColor: '#A68E7E',
    accentText: 'text-[#6D5B4F]',
    btnBg: 'bg-[#6D5B4F] hover:bg-[#58493F]',
    badgeBg: 'bg-stone-100 text-stone-700 border-stone-200',
  },
  {
    ribbon: 'linear-gradient(90deg, #DC2626 0%, #F97316 100%)',
    tipColor: '#F97316',
    accentText: 'text-[#DC2626]',
    btnBg: 'bg-[#DC2626] hover:bg-[#B91C1C]',
    badgeBg: 'bg-orange-50 text-orange-800 border-orange-200',
  },
  {
    ribbon: 'linear-gradient(90deg, #E11D8F 0%, #F472B6 100%)',
    tipColor: '#F472B6',
    accentText: 'text-[#DB2777]',
    btnBg: 'bg-[#E11D8F] hover:bg-[#BE1878]',
    badgeBg: 'bg-pink-50 text-pink-800 border-pink-200',
  },
];

const RIBBON_ICONS = [Landmark, Home, MapPin, Building2, Compass, Navigation, Map];

export const Centers: React.FC<CentersPageProps> = ({ onOpenEnquiry }) => {
  const [selectedDistrict, setSelectedDistrict] = useState('All Districts');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBranches = BRANCHES.filter((b) => {
    const matchesDistrict = selectedDistrict === 'All Districts' || b.district === selectedDistrict;
    const matchesSearch = b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          b.district.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          b.address.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDistrict && matchesSearch;
  });

  return (
    <div className="w-full bg-white">
      {/* Banner */}
      <section className="bg-[#F4F7FC] text-[#26344D] py-16 px-4 sm:px-6 border-b border-[#E5EAF2]">
        <div className="max-w-7xl mx-auto space-y-4 text-left">
          <Breadcrumb
            items={[{ label: 'Our Centers' }]}
          />
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E5EAF2] text-[#102A78] text-xs font-semibold uppercase tracking-widest shadow-2xs">
            <MapPin className="w-4 h-4 text-[#E31B23]" />
            <span>Statewide Reach • 38 Districts</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#102A78]">
            Our Centers & Branch Network
          </h1>
          <p className="text-base sm:text-lg text-[#64748B] max-w-3xl leading-relaxed">
            Bringing elite civil service coaching, air-conditioned test halls, well-stocked libraries, and residential hostels directly to your hometown.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-12">
        
        {/* Verification Status Alert */}
        <div className="bg-[#F4F7FC] border-l-4 border-[#102A78] p-6 rounded-r-2xl border-y border-r border-[#E5EAF2] shadow-2xs text-left space-y-2">
          <div className="flex items-center gap-2 text-[#102A78] font-bold text-sm">
            <CheckCircle className="w-5 h-5 text-[#102A78] shrink-0" />
            <span>Official Network Verification Notice</span>
          </div>
          <p className="text-xs sm:text-sm text-[#26344D] leading-relaxed">
            The client specifies an expansive network of <strong>{NETWORK_SUMMARY.claimedCount} branch centers</strong> spanning all {NETWORK_SUMMARY.districtsCoveredCount} districts of Tamil Nadu. Currently, official contact coordinates for our core operational regional hubs and residential facilities are verified and listed below. Remaining sub-center directory records are undergoing formal verification.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="bg-[#F4F7FC] p-6 rounded-3xl border border-[#E5EAF2] shadow-xs space-y-4 text-left">
          <h2 className="font-serif text-xl font-bold text-[#102A78]">
            Find Your Nearest TAF IAS Academy Branch
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
            <div className="sm:col-span-7 relative">
              <Search className="w-4 h-4 text-[#64748B] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by branch name, road, town or landmark..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-[#E5EAF2] bg-white focus:border-[#102A78] focus:ring-1 focus:ring-[#102A78] outline-none transition-all text-[#26344D]"
              />
            </div>

            <div className="sm:col-span-5">
              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                className="w-full py-2.5 px-4 text-sm rounded-xl border border-[#E5EAF2] focus:border-[#102A78] focus:ring-1 focus:ring-[#102A78] outline-none bg-white font-medium text-[#26344D]"
              >
                {DISTRICT_LIST.map((dist) => (
                  <option key={dist} value={dist}>{dist}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-[#64748B] pt-1">
            <span>Showing {filteredBranches.length} verified center locations</span>
            {selectedDistrict !== 'All Districts' && (
              <button
                onClick={() => setSelectedDistrict('All Districts')}
                className="text-[#102A78] hover:underline font-semibold cursor-pointer"
              >
                Reset to All Districts
              </button>
            )}
          </div>
        </div>

        {/* Branch Cards Grid — White Floating Cards with Protruding Colored Ribbon Banners */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-9 pr-4">
          {filteredBranches.map((branch, idx) => {
            const theme = RIBBON_THEMES[idx % RIBBON_THEMES.length];
            const RibbonIcon = branch.isHeadOffice
              ? Landmark
              : branch.hasHostel
                ? Home
                : RIBBON_ICONS[idx % RIBBON_ICONS.length];

            return (
              <div
                key={branch.id}
                className="relative bg-white rounded-2xl border border-slate-100 shadow-[0_14px_34px_-10px_rgba(15,23,42,0.13)] hover:shadow-[0_20px_42px_-12px_rgba(15,23,42,0.2)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between text-left group pt-5"
              >
                {/* Full-Width Colored Ribbon Header with Protruding Right Arrow Tip */}
                <div
                  className="relative h-12 px-6 flex items-center justify-between shadow-[0_6px_14px_-4px_rgba(15,23,42,0.16)]"
                  style={{ background: theme.ribbon }}
                >
                  <span className="font-sans text-[12px] sm:text-[13px] font-extrabold tracking-wider text-white uppercase truncate pr-2">
                    {branch.district} District
                  </span>
                  <RibbonIcon className="w-5 h-5 text-white/95 stroke-[1.85] shrink-0" />

                  {/* Seamless Protruding Right Triangle Arrow Tip */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute top-0 -right-[13px] w-[14px] h-full"
                    style={{
                      backgroundColor: theme.tipColor,
                      clipPath: 'polygon(0 0, 100% 50%, 0 100%)',
                    }}
                  />
                </div>

                {/* Card Body */}
                <div className="px-6 pt-5 pb-6 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    {/* Optional Role Tag (Head Office / Residential Hostel) */}
                    {(branch.isHeadOffice || branch.hasHostel) && (
                      <div>
                        {branch.isHeadOffice ? (
                          <span className="inline-block text-[10px] uppercase font-extrabold tracking-wider px-2.5 py-0.5 rounded-full bg-[#102A78] text-white">
                            Central Head Office
                          </span>
                        ) : (
                          <span className={`inline-block text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full border ${theme.badgeBg}`}>
                            Residential Hostel
                          </span>
                        )}
                      </div>
                    )}

                    {/* Branch Name */}
                    <h3 className="font-sans text-[17px] font-extrabold text-[#1E293B] group-hover:text-[#102A78] transition-colors leading-snug">
                      {branch.name}
                    </h3>

                    {/* Contact Details */}
                    <div className="space-y-2 text-xs text-[#64748B] leading-relaxed">
                      <div className="flex items-start gap-2">
                        <MapPin className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${theme.accentText}`} />
                        <span>{branch.address}</span>
                      </div>

                      <div className="flex items-center gap-2 font-semibold text-[#1E293B] flex-wrap">
                        <Phone className={`w-3.5 h-3.5 shrink-0 ${theme.accentText}`} />
                        <a href={`tel:${branch.phone}`} className="hover:underline">
                          {branch.phone}
                        </a>
                        {branch.alternatePhone && (
                          <>
                            <span className="text-slate-300">•</span>
                            <a href={`tel:${branch.alternatePhone}`} className="hover:underline">
                              {branch.alternatePhone}
                            </a>
                          </>
                        )}
                      </div>

                      <div className="flex items-center gap-2 text-[#64748B]">
                        <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span>{branch.timing}</span>
                      </div>
                    </div>

                    {branch.statusNotice && (
                      <p className="text-[11px] text-amber-800 bg-amber-50 p-2.5 rounded-xl border border-amber-200 italic">
                        {branch.statusNotice}
                      </p>
                    )}
                  </div>

                  {/* Actions Footer */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <a
                      href={branch.googleMapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-xs font-bold ${theme.accentText} hover:opacity-80 inline-flex items-center gap-1.5 transition-opacity`}
                    >
                      <span>Directions</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <button
                      onClick={() => onOpenEnquiry(undefined, branch.name)}
                      className={`px-3.5 py-2 rounded-lg text-white text-[11px] font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-xs ${theme.btnBg}`}
                    >
                      Branch Enquiry
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tenkasi & Thanjavur Residential Hostel Spotlight */}
        <section className="bg-[#F4F7FC] text-[#26344D] rounded-3xl p-8 sm:p-12 border border-[#E5EAF2] space-y-6 text-left shadow-xs">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold text-[#102A78] uppercase tracking-widest">
              Dedicated Immersion Campuses
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#102A78]">
              Intensive Residential Hostels at Tenkasi & Thanjavur
            </h2>
            <p className="text-sm text-[#64748B] leading-relaxed">
              For aspirants who require absolute focus away from home distractions, our residential campuses provide disciplined daily study schedules: 5:30 AM physical drills, nutritious home-style meals, round-the-clock air-conditioned reading halls, and regular night study test revisions.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={() => onOpenEnquiry(undefined, 'Tenkasi Residential Hostel')}
              className="px-6 py-3.5 rounded-xl bg-[#102A78] hover:bg-[#174A9C] text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-xs"
            >
              Enquire for Hostel Admission
            </button>
            <a
              href={`tel:${OFFICIAL_CONTACT.phones.primary}`}
              className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-[#102A78] text-xs font-bold uppercase tracking-wider border border-[#E5EAF2] transition-colors shadow-2xs"
            >
              Call Tenkasi Hostel Desk: {OFFICIAL_CONTACT.phones.primary}
            </a>
          </div>
        </section>

      </div>
    </div>
  );
};
