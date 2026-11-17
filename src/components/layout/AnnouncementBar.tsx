import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Phone, MapPin } from 'lucide-react';
import { OFFICIAL_CONTACT } from '@/data/contact';

export const AnnouncementBar: React.FC<{ onEnquireClick?: () => void }> = ({ onEnquireClick }) => {
  return (
    <div className="bg-[#F4F7FC] text-[#26344D] text-xs border-b border-[#E5EAF2] py-2 px-4 transition-colors">
      <div className="w-full px-2 sm:px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Left: Admissions Flash */}
        <div className="flex items-center gap-2 text-center md:text-left">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#E31B23] text-white font-bold text-[11px] shadow-xs">
            <Sparkles className="w-3 h-3 text-white animate-pulse" />
            Admissions Open
          </span>
          <span className="text-[#102A78] font-bold">
            TNPSC, TNUSRB & UPSC 2026 Batches
          </span>
        </div>

        {/* Right: Helpline & Quick Links */}
        <div className="flex items-center gap-4 text-[11px] text-[#26344D]">
          <Link
            to="/centers"
            className="hidden sm:flex items-center gap-1 font-semibold text-[#102A78] hover:text-[#E31B23] transition-colors"
          >
            <MapPin className="w-3.5 h-3.5 text-[#E31B23]" />
            <span>92 Centers Across TN</span>
          </Link>
          <span className="hidden sm:inline text-gray-300">|</span>
          <a
            href={`tel:${OFFICIAL_CONTACT.phones.primary}`}
            className="flex items-center gap-1 font-bold text-[#102A78] hover:text-[#E31B23] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#174A9C]" />
            <span>Helpline: {OFFICIAL_CONTACT.phones.primary}</span>
          </a>
          <span className="text-gray-300">|</span>
          <button
            onClick={onEnquireClick}
            className="text-[#E31B23] hover:text-[#C9141B] font-extrabold uppercase tracking-wider underline underline-offset-2 transition-colors cursor-pointer"
          >
            Free Counselling
          </button>
        </div>
      </div>
    </div>
  );
};
