import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, ArrowRight, ExternalLink, Search } from 'lucide-react';
import { BRANCHES, DISTRICT_LIST } from '@/data/branches';

export const CentersPreviewSection: React.FC = () => {
  const [selectedDistrict, setSelectedDistrict] = useState('All Districts');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBranches = BRANCHES.filter((b) => {
    const matchesDistrict = selectedDistrict === 'All Districts' || b.district === selectedDistrict;
    const matchesSearch = b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          b.district.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          b.address.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDistrict && matchesSearch;
  }).slice(0, 4);

  return (
    <section className="bg-[#F4F7FC] py-14 sm:py-16 px-4 sm:px-8 lg:px-12 border-b border-[#E5EAF2]">
      <div className="w-full max-w-[1720px] mx-auto space-y-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-left">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#174A9C]">
              <MapPin className="w-4 h-4 text-[#E31B23]" />
              <span>Statewide Network</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#102A78] tracking-tight">
              92 Regional Branch Centers
            </h2>
          </div>

          <Link
            to="/centers"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#102A78] hover:bg-[#174A9C] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-xs shrink-0"
          >
            <span>All 92 Branches</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Clean Search & District Selector */}
        <div className="bg-white p-3 sm:p-4 rounded-2xl border border-[#E5EAF2] shadow-2xs flex flex-col sm:flex-row items-center gap-3">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search branch name, town, or landmark..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-[#E5EAF2] focus:border-[#102A78] outline-none transition-all"
            />
          </div>

          <div className="w-full sm:w-60">
            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className="w-full py-2 px-3 text-xs rounded-xl border border-[#E5EAF2] focus:border-[#102A78] outline-none bg-white font-bold text-[#102A78]"
            >
              {DISTRICT_LIST.map((dist) => (
                <option key={dist} value={dist}>{dist}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Visual Branch Cards (Compact, Zero Address Paragraphs) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-left">
          {filteredBranches.map((branch) => (
            <div
              key={branch.id}
              className="bg-white rounded-2xl p-5 border border-[#E5EAF2] hover:border-[#102A78]/50 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-3 group"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-blue-50 text-[#102A78] border border-blue-100">
                    {branch.district}
                  </span>
                  {branch.isHeadOffice ? (
                    <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-[#E31B23] text-white">
                      Head Office
                    </span>
                  ) : branch.hasHostel ? (
                    <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                      Hostel
                    </span>
                  ) : null}
                </div>

                <h3 className="font-serif text-base font-bold text-[#102A78] group-hover:text-[#E31B23] transition-colors line-clamp-1">
                  {branch.name}
                </h3>

                <p className="text-xs text-[#64748B] line-clamp-1">
                  {branch.address.split(',')[0]}
                </p>

                <div className="text-xs font-bold text-[#102A78] flex items-center gap-1.5 pt-1">
                  <Phone className="w-3.5 h-3.5 text-[#174A9C]" />
                  <a href={`tel:${branch.phone}`} className="hover:text-[#E31B23] transition-colors">
                    {branch.phone}
                  </a>
                </div>
              </div>

              <div className="pt-2.5 border-t border-gray-100 flex items-center justify-between text-xs font-bold">
                <a
                  href={branch.googleMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#102A78] hover:text-[#E31B23] flex items-center gap-1 transition-colors"
                >
                  <span>Directions</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <Link to="/contact" className="text-[#E31B23] hover:underline">
                  Enquire →
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
