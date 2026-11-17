import React, { useState } from 'react';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { CURRENT_AFFAIRS, CurrentAffairItem } from '@/data/currentAffairs';
import {
  Sparkles,
  Calendar,
  Tag,
  BookOpen,
  ArrowRight,
  Download,
  CheckCircle2,
  FileText,
  Filter,
} from 'lucide-react';
import { OFFICIAL_CONTACT } from '@/data/contact';

export const CurrentAffairs: React.FC = () => {
  const [selectedCadence, setSelectedCadence] = useState<'ALL' | 'Daily' | 'Weekly' | 'Monthly'>('ALL');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const filtered = CURRENT_AFFAIRS.filter((item) => {
    const matchCadence = selectedCadence === 'ALL' || item.cadence === selectedCadence;
    const matchCategory = selectedCategory === 'ALL' || item.category === selectedCategory;
    return matchCadence && matchCategory;
  });

  return (
    <div className="w-full bg-white">
      {/* Banner */}
      <section className="bg-[#F4F7FC] text-[#26344D] py-16 px-4 sm:px-6 border-b border-[#E5EAF2]">
        <div className="max-w-7xl mx-auto space-y-4 text-left">
          <Breadcrumb
            items={[{ label: 'Current Affairs Hub' }]}
          />
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E5EAF2] text-[#102A78] text-xs font-semibold uppercase tracking-widest shadow-2xs">
            <Sparkles className="w-4 h-4 text-[#E31B23]" />
            <span>Research & Editorial Wing</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#102A78]">
            Daily, Weekly & Monthly Current Affairs
          </h1>
          <p className="text-base sm:text-lg text-[#64748B] max-w-3xl leading-relaxed">
            Syllabus-mapped bilingual intelligence tailored for TNPSC (Unit 8 & 9), UPSC Civil Services, Banking, and Central Government recruitments.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-10">
        
        {/* Cadence Selection Pills */}
        <div className="flex flex-wrap items-center justify-between gap-4 bg-[#F4F7FC] p-6 rounded-3xl border border-[#E5EAF2] shadow-xs text-left">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#102A78]">
              Select Current Affairs Edition
            </span>
            <div className="flex items-center gap-2">
              {['ALL', 'Daily', 'Weekly', 'Monthly'].map((cadence) => (
                <button
                  key={cadence}
                  onClick={() => setSelectedCadence(cadence as any)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    selectedCadence === cadence
                      ? 'bg-[#102A78] text-white shadow-xs'
                      : 'bg-white text-[#102A78] hover:bg-slate-50 border border-[#E5EAF2]'
                  }`}
                >
                  {cadence === 'ALL' ? 'All Publications' : `${cadence} Bulletins`}
                </button>
              ))}
            </div>
          </div>

          <div className="shrink-0">
            <a
              href={OFFICIAL_CONTACT.socialMedia.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#102A78] hover:bg-[#174A9C] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
            >
              <Download className="w-4 h-4 text-white" />
              <span>Download Monthly PDF Dossier</span>
            </a>
          </div>
        </div>

        {/* Content Stream */}
        <div className="space-y-6 text-left">
          {filtered.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-3xl p-8 border border-[#E5EAF2] hover:border-[#102A78]/30 shadow-xs hover:shadow-md transition-all space-y-4 group"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#102A78] uppercase tracking-wider text-[10px] px-2.5 py-0.5 rounded-full bg-[#F4F7FC] border border-[#E5EAF2]">
                    {item.category}
                  </span>
                  <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-[#102A78] text-white">
                    {item.cadence}
                  </span>
                </div>
                <span className="text-[#64748B] font-mono text-xs">
                  {item.dateLabel}
                </span>
              </div>

              <h2 className="font-serif text-2xl font-bold text-[#102A78] group-hover:text-[#174A9C] transition-colors leading-snug">
                {item.title}
              </h2>

              {item.tamilTitle && (
                <p className="text-sm font-serif text-[#26344D]/80 italic">
                  {item.tamilTitle}
                </p>
              )}

              <p className="text-sm text-[#64748B] leading-relaxed">
                {item.summary}
              </p>

              {/* Key Bullet Points */}
              <div className="bg-[#F4F7FC] p-5 rounded-2xl border border-[#E5EAF2] space-y-2">
                <span className="text-xs font-bold text-[#102A78] uppercase tracking-wider block">
                  Examination Relevance Points:
                </span>
                <ul className="space-y-1.5 text-xs text-[#26344D]">
                  {item.keyPoints.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#102A78] shrink-0 mt-1.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 text-xs text-[#64748B] flex items-center justify-between border-t border-[#E5EAF2]">
                <div className="flex items-center gap-1 font-mono text-[11px]">
                  <Tag className="w-3.5 h-3.5 text-[#102A78]" />
                  <span>Syllabus: {item.syllabusRelevance}</span>
                </div>
                <span className="text-[11px] font-semibold text-[#102A78]">Source: {item.source}</span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
};
