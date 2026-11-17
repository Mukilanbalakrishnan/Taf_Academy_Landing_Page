import React, { useState } from 'react';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { NOTIFICATIONS, NOTIFICATION_CATEGORIES, NotificationItem } from '@/data/notifications';
import {
  Bell,
  AlertCircle,
  ExternalLink,
  Calendar,
  Building,
  CheckCircle2,
  Filter,
  X,
  Sparkles,
} from 'lucide-react';

export const Notifications: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Notifications');
  const [selectedNotifModal, setSelectedNotifModal] = useState<NotificationItem | null>(null);

  const filtered = NOTIFICATIONS.filter((n) => {
    if (selectedCategory === 'All Notifications') return true;
    return n.category === selectedCategory;
  });

  return (
    <div className="w-full bg-white">
      {/* Banner */}
      <section className="bg-[#F4F7FC] text-[#26344D] py-16 px-4 sm:px-6 border-b border-[#E5EAF2]">
        <div className="max-w-7xl mx-auto space-y-4 text-left">
          <Breadcrumb
            items={[{ label: 'Notifications & Gazette' }]}
          />
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E5EAF2] text-[#102A78] text-xs font-semibold uppercase tracking-widest shadow-2xs">
            <Bell className="w-4 h-4 text-[#E31B23] animate-bounce" />
            <span>Official Examination Notice Board</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#102A78]">
            Notifications & Public Announcements
          </h1>
          <p className="text-base sm:text-lg text-[#64748B] max-w-3xl leading-relaxed">
            Stay informed with verified alerts on TNPSC annual calendars, uniform services recruitment guidelines, UPSC application deadlines, and TAF statewide scholarship evaluations.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-10">
        
        {/* Transparency Disclosure Notice */}
        <div className="bg-[#F4F7FC] border-l-4 border-[#102A78] p-6 rounded-r-2xl border-y border-r border-[#E5EAF2] shadow-2xs text-left space-y-2">
          <div className="flex items-center gap-2 font-bold text-[#102A78] text-sm">
            <CheckCircle2 className="w-5 h-5 text-[#102A78] shrink-0" />
            <span>Transparency & Verification Notice</span>
          </div>
          <p className="text-xs sm:text-sm text-[#26344D] leading-relaxed">
            All government examination schedules, hall ticket intimations, and recruitment notices compiled on this portal reflect official gazette announcements from statutory commissions (TNPSC, TNUSRB, UPSC, SSC, RRB). Demonstration items are explicitly identified. Aspirants are advised to cross-verify individual application statuses on official government commission websites.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {NOTIFICATION_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#102A78] text-white shadow-xs'
                  : 'bg-white text-[#102A78] hover:bg-slate-50 border border-[#E5EAF2]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Notification Board List */}
        <div className="space-y-4 text-left">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 border border-[#E5EAF2] hover:border-[#102A78]/30 shadow-xs hover:shadow-md transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group"
            >
              <div className="space-y-2 flex-1">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-[#F4F7FC] text-[#102A78] border border-[#E5EAF2]">
                    {item.category}
                  </span>
                  <span className={`text-[10px] uppercase font-extrabold px-2.5 py-0.5 rounded-full ${
                    item.status === 'Urgent'
                      ? 'bg-red-50 text-[#E31B23] border border-red-200'
                      : item.status === 'New'
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                      : 'bg-amber-50 text-amber-800 border border-amber-200'
                  }`}>
                    {item.status}
                  </span>
                  <span className="text-xs text-[#64748B] font-mono">
                    {item.publishedDate}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#102A78] group-hover:text-[#174A9C] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-[#64748B] line-clamp-2 leading-relaxed">
                  {item.description}
                </p>

                <div className="text-[11px] text-[#64748B] font-mono">
                  Issuing Authority: <strong className="text-[#102A78]">{item.officialSourceOrDepartment}</strong>
                  {item.isOfficialDemonstration && (
                    <span className="ml-2 text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full text-[10px] font-semibold">
                      Official Demo Advisory
                    </span>
                  )}
                </div>
              </div>

              <div className="shrink-0 flex items-center gap-3">
                <button
                  onClick={() => setSelectedNotifModal(item)}
                  className="px-5 py-2.5 rounded-xl bg-[#102A78] hover:bg-[#174A9C] text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-xs"
                >
                  {item.actionLabel}
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Details Modal */}
      {selectedNotifModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto space-y-6 relative border border-[#E5EAF2] text-left shadow-2xl">
            <button
              onClick={() => setSelectedNotifModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-[#102A78] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase font-bold text-[#102A78] tracking-wider px-2.5 py-0.5 rounded-full bg-[#F4F7FC] border border-[#E5EAF2]">
                  {selectedNotifModal.category}
                </span>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#102A78] text-white">
                  {selectedNotifModal.status}
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#102A78]">
                {selectedNotifModal.title}
              </h3>
              <p className="text-xs text-[#64748B] font-mono">
                {selectedNotifModal.officialSourceOrDepartment} • {selectedNotifModal.publishedDate}
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-serif text-base font-bold text-[#102A78]">
                Notice Summary & Guidelines:
              </h4>
              <p className="text-sm text-[#26344D] leading-relaxed">
                {selectedNotifModal.description}
              </p>

              {selectedNotifModal.importantDates && (
                <div className="bg-[#F4F7FC] p-4 rounded-2xl border border-[#E5EAF2] space-y-2">
                  <span className="text-xs font-bold text-[#102A78] uppercase tracking-wider block">
                    Key Reference Data:
                  </span>
                  <div className="space-y-1.5 text-xs">
                    {selectedNotifModal.importantDates.map((item, i) => (
                      <div key={i} className="flex justify-between border-b border-[#E5EAF2] pb-1">
                        <span className="text-[#64748B]">{item.label}:</span>
                        <strong className="text-[#102A78]">{item.value}</strong>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedNotifModal(null)}
                className="px-6 py-2.5 rounded-xl bg-[#102A78] text-white text-xs font-bold uppercase tracking-wider"
              >
                Close Notice
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
