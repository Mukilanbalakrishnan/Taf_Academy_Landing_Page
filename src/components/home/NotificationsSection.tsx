import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, ArrowRight, ExternalLink } from 'lucide-react';
import { NOTIFICATIONS } from '@/data/notifications';

export const NotificationsSection: React.FC = () => {
  const topNotifications = NOTIFICATIONS.slice(0, 4);

  return (
    <section className="bg-[#F4F7FC] py-14 sm:py-16 px-4 sm:px-8 lg:px-12 border-b border-[#E5EAF2]">
      <div className="w-full max-w-[1720px] mx-auto space-y-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-left">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#102A78]">
              <Bell className="w-4 h-4 text-[#E31B23]" />
              <span>Official Notices</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#102A78] tracking-tight">
              Recruitment Gazettes & Alerts
            </h2>
          </div>

          <Link
            to="/notifications"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#102A78] hover:text-[#E31B23] uppercase tracking-wider transition-colors shrink-0"
          >
            <span>All Notifications ({NOTIFICATIONS.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Compact Alert Cards Grid (Zero Paragraph Clutter) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          {topNotifications.map((notif) => (
            <div
              key={notif.id}
              className="bg-white rounded-xl p-4 sm:p-5 border border-[#E5EAF2] hover:border-[#102A78]/30 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between space-y-3 group"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#F4F7FC] text-[#102A78] border border-[#E5EAF2]">
                    {notif.category}
                  </span>
                  <span
                    className={`text-[9px] uppercase font-extrabold px-2 py-0.5 rounded-full ${
                      notif.status === 'Urgent'
                        ? 'bg-red-50 text-[#E31B23] border border-red-200'
                        : notif.status === 'New'
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : 'bg-amber-50 text-amber-800 border border-amber-200'
                    }`}
                  >
                    {notif.status}
                  </span>
                </div>

                <h3 className="font-serif text-base font-bold text-[#102A78] group-hover:text-[#E31B23] transition-colors leading-snug line-clamp-1">
                  <Link to="/notifications">
                    {notif.title}
                  </Link>
                </h3>
              </div>

              <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs">
                <span className="text-[#64748B] text-[11px]">
                  {notif.publishedDate}
                </span>
                <Link
                  to="/notifications"
                  className="font-bold text-[#102A78] hover:text-[#E31B23] flex items-center gap-1 transition-colors"
                >
                  <span>{notif.actionLabel}</span>
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
