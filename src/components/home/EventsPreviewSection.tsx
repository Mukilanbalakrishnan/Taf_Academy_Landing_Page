import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, MapPin } from 'lucide-react';
import { ACADEMY_EVENTS } from '@/data/events';

export const EventsPreviewSection: React.FC = () => {
  const featuredEvents = ACADEMY_EVENTS.slice(0, 3);

  return (
    <section className="bg-white py-14 sm:py-16 px-4 sm:px-8 lg:px-12 border-b border-[#E5EAF2]">
      <div className="w-full max-w-[1720px] mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-left">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#174A9C]">
              <Calendar className="w-4 h-4 text-[#E31B23]" />
              <span>Campus Life & Conclaves</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#102A78] tracking-tight">
              Academy Events & Felicitations
            </h2>
          </div>

          <Link
            to="/events"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#102A78] hover:text-[#E31B23] uppercase tracking-wider transition-colors shrink-0"
          >
            <span>View All Events</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Visual Event Cards (Zero Paragraph Clutter) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {featuredEvents.map((evt) => (
            <div
              key={evt.id}
              className="bg-white border border-[#E5EAF2] rounded-2xl overflow-hidden shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Photo Frame */}
                <div className="relative h-48 overflow-hidden bg-slate-900">
                  <img
                    src={evt.coverImage}
                    alt={evt.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  <div className="absolute top-2.5 left-2.5 flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#102A78] text-white text-[10px] font-bold uppercase tracking-wider">
                      {evt.category}
                    </span>
                    {evt.badge && (
                      <span className="px-2.5 py-0.5 rounded-full bg-[#E6B422] text-[#102A78] text-[10px] font-extrabold uppercase tracking-wider shadow-xs">
                        {evt.badge}
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-2.5 left-3 right-3 text-xs text-white flex items-center justify-between font-medium">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#E6B422]" />
                      <span className="line-clamp-1">{evt.location}</span>
                    </div>
                    <span className="text-[11px] font-semibold text-amber-200">
                      {evt.dateLabel}
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-white space-y-1">
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#102A78] group-hover:text-[#E31B23] transition-colors leading-snug line-clamp-1">
                    <Link to="/events">
                      {evt.title}
                    </Link>
                  </h3>
                </div>
              </div>

              <div className="p-4 pt-2 border-t border-gray-100 bg-white">
                <Link
                  to="/events"
                  className="text-xs font-bold text-[#102A78] hover:text-[#E31B23] inline-flex items-center gap-1 transition-colors"
                >
                  <span>View Photos & Gallery</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
