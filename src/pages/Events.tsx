import React, { useState } from 'react';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ACADEMY_EVENTS, AcademyEvent } from '@/data/events';
import {
  Calendar,
  Sparkles,
  MapPin,
  Users,
  Image as ImageIcon,
  CheckCircle2,
  X,
  Award,
} from 'lucide-react';

export const Events: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'ALL' | 'Functions' | 'Achiever Program' | 'Institutional Seminars'>('ALL');
  const [selectedGalleryEvent, setSelectedGalleryEvent] = useState<AcademyEvent | null>(null);

  const filteredEvents = ACADEMY_EVENTS.filter((e) => {
    if (selectedCategory === 'ALL') return true;
    return e.category === selectedCategory;
  });

  return (
    <div className="w-full bg-white">
      {/* Banner */}
      <section className="bg-[#F4F7FC] text-[#26344D] py-16 px-4 sm:px-6 border-b border-[#E5EAF2]">
        <div className="max-w-7xl mx-auto space-y-4 text-left">
          <Breadcrumb
            items={[{ label: 'Events & Functions' }]}
          />
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E5EAF2] text-[#102A78] text-xs font-semibold uppercase tracking-widest shadow-2xs">
            <Calendar className="w-4 h-4 text-[#E31B23]" />
            <span>Academy Life & Institutional Conclaves</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#102A78]">
            Academy Functions & Achiever Programs
          </h1>
          <p className="text-base sm:text-lg text-[#64748B] max-w-3xl leading-relaxed">
            Commemorating 18 years of institutional excellence, celebrating state rank-holders, and conducting statewide public civil service guidance summits.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-12">
        
        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {[
            { id: 'ALL', label: 'All Conclaves & Events' },
            { id: 'Functions', label: 'Institutional Functions & Celebrations' },
            { id: 'Achiever Program', label: 'Student Felicitation & Achiever Programs' },
            { id: 'Institutional Seminars', label: 'Statewide Guidance Seminars' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id as any)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === tab.id
                  ? 'bg-[#102A78] text-white shadow-xs'
                  : 'bg-white text-[#102A78] hover:bg-slate-50 border border-[#E5EAF2]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Events Cards */}
        <div className="space-y-12">
          {filteredEvents.map((evt) => (
            <div
              key={evt.id}
              id={evt.category === 'Functions' ? 'functions' : 'achievers'}
              className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E5EAF2] hover:border-[#102A78]/30 shadow-xs hover:shadow-lg transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left group"
            >
              {/* Left Photo & Gallery Previews (5 Cols) */}
              <div className="lg:col-span-5 space-y-3">
                <div className="relative h-64 rounded-2xl overflow-hidden bg-[#F4F7FC] shadow-xs">
                  <img
                    src={evt.coverImage}
                    alt={evt.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded bg-[#102A78] text-white text-[10px] font-bold uppercase tracking-wider">
                      {evt.category}
                    </span>
                    {evt.badge && (
                      <span className="px-2.5 py-0.5 rounded bg-[#E6B422] text-[#102A78] text-[10px] font-extrabold uppercase tracking-wider shadow-xs">
                        {evt.badge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Thumbnails row */}
                {evt.gallery.length > 0 && (
                  <div className="grid grid-cols-4 gap-2">
                    {evt.gallery.map((thumb, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedGalleryEvent(evt)}
                        className="h-16 rounded-xl overflow-hidden border border-[#E5EAF2] hover:border-[#102A78] transition-colors cursor-pointer"
                      >
                        <img src={thumb} alt="Gallery thumbnail" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Event Narrative (7 Cols) */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3 text-xs text-[#102A78] font-semibold uppercase tracking-wider">
                  <span>{evt.dateLabel}</span>
                  <span>•</span>
                  <div className="flex items-center gap-1 text-[#64748B] font-normal">
                    <MapPin className="w-3.5 h-3.5 text-[#102A78]" />
                    <span>{evt.location}</span>
                  </div>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#102A78] group-hover:text-[#174A9C] transition-colors leading-tight">
                  {evt.title}
                </h3>

                <p className="text-sm text-[#26344D] leading-relaxed">
                  {evt.description}
                </p>

                {evt.chiefGuestsOrHost && (
                  <div className="bg-[#F4F7FC] p-3.5 rounded-xl border border-[#E5EAF2] text-xs text-[#26344D]">
                    <strong className="text-[#102A78]">Presided By / Special Guests:</strong> {evt.chiefGuestsOrHost}
                  </div>
                )}

                {/* Conclave Highlights */}
                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-bold text-[#102A78] uppercase tracking-wider">
                    Conclave Highlights:
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#64748B]">
                    {evt.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setSelectedGalleryEvent(evt)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#102A78] hover:bg-[#174A9C] text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-xs"
                  >
                    <ImageIcon className="w-4 h-4" />
                    <span>View Event Gallery ({evt.gallery.length + 1} Photos)</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Gallery Modal */}
      {selectedGalleryEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto space-y-6 relative border border-[#E5EAF2] shadow-2xl">
            <button
              onClick={() => setSelectedGalleryEvent(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-[#102A78] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-left space-y-1">
              <span className="text-xs uppercase font-bold text-[#102A78] tracking-wider">
                {selectedGalleryEvent.category} Photo Gallery
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#102A78]">
                {selectedGalleryEvent.title}
              </h3>
              <p className="text-xs text-[#64748B]">
                {selectedGalleryEvent.location}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2 h-72 rounded-2xl overflow-hidden bg-[#F4F7FC]">
                <img
                  src={selectedGalleryEvent.coverImage}
                  alt={selectedGalleryEvent.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {selectedGalleryEvent.gallery.map((img, i) => (
                <div key={i} className="h-52 rounded-2xl overflow-hidden bg-[#F4F7FC]">
                  <img src={img} alt={`Event shot ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedGalleryEvent(null)}
                className="px-6 py-2.5 rounded-xl bg-[#102A78] text-white text-xs font-bold uppercase tracking-wider"
              >
                Close Gallery
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
