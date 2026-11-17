import React, { useState } from 'react';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ResponsiveCategoryFilter } from '@/components/common/ResponsiveCategoryFilter';
import { BOOKS, PUBLISHER_INFO, Book } from '@/data/books';
import {
  BookOpen,
  Star,
  CheckCircle2,
  FileText,
  Search,
  ArrowRight,
  Sparkles,
  Phone,
  X,
  Package,
} from 'lucide-react';
import { OFFICIAL_CONTACT } from '@/data/contact';

interface BooksPageProps {
  onOpenEnquiry: (courseName?: string, centerName?: string) => void;
}

export const Books: React.FC<BooksPageProps> = ({ onOpenEnquiry }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [selectedBookModal, setSelectedBookModal] = useState<Book | null>(null);

  const categories = [
    { id: 'ALL', label: 'All Publications' },
    { id: 'General Tamil', label: 'General Tamil Masterwork' },
    { id: 'TNPSC', label: 'TNPSC Unit 8 & 9 Guides' },
    { id: 'TNSURB', label: 'TNSURB Police SI & PC' },
    { id: 'Question Banks', label: 'Bilingual Question Banks' },
    { id: 'Samacheer Kalvi', label: 'Samacheer Kalvi Extractions' },
  ];

  const filteredBooks = BOOKS.filter((b) => {
    if (selectedCategory === 'ALL') return true;
    return b.category === selectedCategory;
  });

  return (
    <div className="w-full bg-white">
      {/* Banner */}
      <section className="bg-[#F4F7FC] text-[#26344D] py-16 px-4 sm:px-6 border-b border-[#E5EAF2]">
        <div className="max-w-7xl mx-auto space-y-4 text-left">
          <Breadcrumb
            items={[{ label: 'Books & Publications' }]}
          />
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E5EAF2] text-[#102A78] text-xs font-semibold uppercase tracking-widest shadow-2xs">
            <BookOpen className="w-4 h-4 text-[#E31B23]" />
            <span>Aamu Publication • Official TAF Books</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#102A78]">
            Competitive Books & Study Materials
          </h1>
          <p className="text-base sm:text-lg text-[#64748B] max-w-3xl leading-relaxed">
            Engineered exclusively by TAF IAS Academy faculty, featuring line-by-line Samacheer Kalvi school syllabus mastery, bilingual questions, and verified answer keys.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-12">
        
        {/* Publisher Authority Box */}
        <div className="bg-[#F4F7FC] rounded-3xl p-6 sm:p-8 border border-[#E5EAF2] shadow-xs flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div className="space-y-2 max-w-3xl">
            <span className="text-[10px] uppercase font-bold text-[#102A78] tracking-wider">
              Publishing House Profile
            </span>
            <h2 className="font-serif text-2xl font-bold text-[#102A78]">
              {PUBLISHER_INFO.name}
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
              {PUBLISHER_INFO.description} Distributed through all 92 TAF IAS Academy branches and official publication dispatch desks.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href={OFFICIAL_CONTACT.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-xs"
            >
              <Package className="w-4 h-4" />
              <span>Book Courier Enquiry</span>
            </a>
          </div>
        </div>

        {/* Categories Filter (Dropdown on Mobile, Pill Row on Desktop) */}
        <ResponsiveCategoryFilter
          options={categories}
          value={selectedCategory}
          onChange={setSelectedCategory}
          ariaLabel="Filter book category"
        />

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBooks.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-3xl p-6 border border-[#E5EAF2] hover:border-[#102A78]/30 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-5 text-left group"
            >
              <div className="space-y-4">
                {/* Book Cover */}
                <div className="relative h-64 rounded-2xl overflow-hidden bg-[#F4F7FC] shadow-xs">
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#102A78]/80 via-transparent to-transparent" />
                  
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded bg-[#102A78]/90 text-white text-[10px] font-bold uppercase tracking-wider border border-[#102A78]/30">
                      {book.medium} Medium
                    </span>
                    {book.isBestSeller && (
                      <span className="px-2 py-0.5 rounded bg-[#E6B422] text-[#102A78] text-[10px] font-extrabold uppercase tracking-wider flex items-center gap-1 shadow-xs">
                        <Star className="w-3 h-3 fill-current" />
                        Best Seller
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-xs text-white font-mono">
                    {book.edition} • {book.pages} Pages
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#102A78]">
                    {book.publisher}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#102A78] group-hover:text-[#174A9C] transition-colors leading-snug">
                    {book.title}
                  </h3>
                  {book.tamilTitle && (
                    <p className="text-xs font-serif text-[#26344D]/80">
                      {book.tamilTitle}
                    </p>
                  )}
                  <p className="text-xs text-[#64748B] line-clamp-3 leading-relaxed">
                    {book.description}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-[#E5EAF2] flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedBookModal(book)}
                  className="text-xs font-bold text-[#102A78] hover:text-[#174A9C] flex items-center gap-1 cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5 text-[#102A78]" />
                  <span>Preview Index</span>
                </button>

                <button
                  onClick={() => onOpenEnquiry(`Book: ${book.title}`)}
                  className="px-3.5 py-2 rounded-xl bg-[#102A78] hover:bg-[#174A9C] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-2xs"
                >
                  Book Dispatch Enquiry
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Book Index Modal */}
      {selectedBookModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto space-y-6 relative border border-[#E5EAF2] text-left shadow-2xl">
            <button
              onClick={() => setSelectedBookModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-[#102A78] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <span className="text-xs uppercase font-bold text-[#102A78] tracking-wider">
                {selectedBookModal.publisher}
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#102A78]">
                {selectedBookModal.title}
              </h3>
              {selectedBookModal.tamilTitle && (
                <p className="text-sm font-serif text-[#26344D]/80">
                  {selectedBookModal.tamilTitle}
                </p>
              )}
            </div>

            <div className="space-y-3">
              <h4 className="font-serif text-lg font-bold text-[#102A78]">
                Topics & Chapters Covered:
              </h4>
              <ul className="space-y-2 text-xs text-[#26344D]">
                {selectedBookModal.topicsCovered.map((topic, i) => (
                  <li key={i} className="flex items-start gap-2.5 bg-[#F4F7FC] p-3 rounded-xl border border-[#E5EAF2]">
                    <CheckCircle2 className="w-4 h-4 text-[#102A78] shrink-0 mt-0.5" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-serif text-base font-bold text-[#102A78]">
                Book Features:
              </h4>
              <ul className="space-y-1.5 text-xs text-[#64748B]">
                {selectedBookModal.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#102A78]" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-[#E5EAF2] flex flex-col sm:flex-row items-center justify-between gap-3">
              <a
                href={OFFICIAL_CONTACT.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors text-center shadow-xs"
              >
                Inquire on WhatsApp
              </a>
              <button
                onClick={() => {
                  setSelectedBookModal(null);
                  onOpenEnquiry(`Book: ${selectedBookModal.title}`);
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#102A78] hover:bg-[#174A9C] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
              >
                Order / Reserve at Branch
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
