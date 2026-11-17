import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Sparkles, MapPin, Award } from 'lucide-react';
import { OFFICIAL_CONTACT } from '@/data/contact';

export const FinalCtaSection: React.FC<{ onOpenEnquiry: () => void }> = () => {
  return (
    <section className="bg-white py-12 sm:py-14 px-4 sm:px-8 lg:px-12 border-b border-[#E5EAF2]">
      <div className="w-full max-w-[1720px] mx-auto">
        <div className="bg-[#F8FAFD] border border-[#E5EAF2] rounded-3xl p-8 sm:p-12 text-center space-y-6 relative overflow-hidden shadow-2xs">
          
          <div className="space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E5EAF2] text-[#102A78] text-xs font-semibold uppercase tracking-widest shadow-2xs">
              <Award className="w-3.5 h-3.5 text-[#E31B23]" />
              <span>Gateway to Public Service</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#102A78] leading-tight max-w-2xl mx-auto">
              Take the First Step Towards Your{' '}
              <span className="text-[#E31B23] italic">
                Government Career.
              </span>
            </h2>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/courses"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#102A78] hover:bg-[#174A9C] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Explore All Courses</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href={`tel:${OFFICIAL_CONTACT.phones.primary}`}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-[#102A78] font-bold text-xs uppercase tracking-wider border border-[#E5EAF2] hover:border-[#102A78]/30 transition-colors flex items-center justify-center gap-2 shadow-2xs"
              >
                <Phone className="w-4 h-4 text-[#E31B23]" />
                <span>Call Helpline: {OFFICIAL_CONTACT.phones.primary}</span>
              </a>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-5 text-xs text-[#64748B]">
              <span className="flex items-center gap-1.5 font-medium">
                <span className="w-2 h-2 rounded-full bg-[#E31B23]" />
                Admissions Open 2026
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#102A78]" />
                92 Regional Centers
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Sparkles className="w-3.5 h-3.5 text-[#E6B422]" />
                Bilingual Coaching
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
