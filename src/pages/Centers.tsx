import React, { useState } from 'react';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { BRANCHES, DISTRICT_LIST, NETWORK_SUMMARY, Branch } from '@/data/branches';
import {
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  Search,
  Building,
  CheckCircle,
  AlertCircle,
  Clock,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { OFFICIAL_CONTACT } from '@/data/contact';

interface CentersPageProps {
  onOpenEnquiry: (courseName?: string, centerName?: string) => void;
}

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

        {/* Branch Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBranches.map((branch) => (
            <div
              key={branch.id}
              className={`bg-white rounded-3xl p-7 border transition-all duration-300 flex flex-col justify-between space-y-5 text-left group ${
                branch.isHeadOffice
                  ? 'border-2 border-[#102A78] shadow-md'
                  : 'border-[#E5EAF2] hover:border-[#102A78]/30 shadow-xs hover:shadow-lg'
              }`}
            >
              <div className="space-y-4">
                {/* Header Tag Row */}
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-[#F4F7FC] text-[#102A78] border border-[#E5EAF2]">
                    {branch.district} District
                  </span>
                  {branch.isHeadOffice && (
                    <span className="text-[10px] uppercase font-extrabold px-2.5 py-0.5 rounded-full bg-[#102A78] text-white">
                      Central Head Office
                    </span>
                  )}
                  {branch.hasHostel && !branch.isHeadOffice && (
                    <span className="text-[10px] uppercase font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                      Residential Hostel
                    </span>
                  )}
                </div>

                {/* Name */}
                <h3 className="font-serif text-xl font-bold text-[#102A78] group-hover:text-[#174A9C] transition-colors">
                  {branch.name}
                </h3>

                {/* Address */}
                <div className="space-y-2 text-xs text-[#64748B] leading-relaxed">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#102A78] shrink-0 mt-0.5" />
                    <span>{branch.address}</span>
                  </div>

                  <div className="flex items-center gap-2 font-semibold text-[#102A78]">
                    <Phone className="w-3.5 h-3.5 text-[#102A78] shrink-0" />
                    <a href={`tel:${branch.phone}`} className="hover:text-[#174A9C] transition-colors">
                      {branch.phone}
                    </a>
                    {branch.alternatePhone && (
                      <>
                        <span>•</span>
                        <a href={`tel:${branch.alternatePhone}`} className="hover:text-[#174A9C] transition-colors">
                          {branch.alternatePhone}
                        </a>
                      </>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-[#64748B]">
                    <Clock className="w-3.5 h-3.5 text-[#64748B] shrink-0" />
                    <span>{branch.timing}</span>
                  </div>
                </div>

                {branch.statusNotice && (
                  <p className="text-[11px] text-amber-800 bg-amber-50 p-2 rounded-xl border border-amber-200 italic">
                    {branch.statusNotice}
                  </p>
                )}
              </div>

              {/* Actions Footer */}
              <div className="pt-4 border-t border-[#E5EAF2] flex items-center justify-between gap-3">
                <a
                  href={branch.googleMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#102A78] hover:text-[#174A9C] flex items-center gap-1.5 transition-colors"
                >
                  <span>Google Maps Directions</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => onOpenEnquiry(undefined, branch.name)}
                  className="px-4 py-2 rounded-xl bg-[#102A78] hover:bg-[#174A9C] text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-xs"
                >
                  Branch Enquiry
                </button>
              </div>
            </div>
          ))}
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
