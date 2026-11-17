import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight, Star, ShoppingBag } from 'lucide-react';
import { BOOKS } from '@/data/books';

export const BooksSection: React.FC = () => {
  const featuredBooks = BOOKS.slice(0, 3);

  return (
    <section className="bg-[#F4F7FC] py-14 sm:py-16 px-4 sm:px-8 lg:px-12 border-b border-[#E5EAF2]">
      <div className="w-full max-w-[1720px] mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-left">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#174A9C]">
              <BookOpen className="w-4 h-4 text-[#E31B23]" />
              <span>Aamu Publication</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#102A78] tracking-tight">
              Official Study Textbooks
            </h2>
          </div>

          <Link
            to="/books"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#102A78] hover:text-[#E31B23] uppercase tracking-wider transition-colors shrink-0"
          >
            <span>Complete Book Catalogue</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Visual Book Showcase Cards (Zero Paragraph Clutter) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {featuredBooks.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-2xl p-5 border border-[#E5EAF2] hover:border-[#102A78]/50 shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                {/* Book Cover Frame */}
                <div className="relative h-60 rounded-xl overflow-hidden bg-slate-100 border border-[#E5EAF2]">
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  <div className="absolute top-2.5 left-2.5 flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#102A78] text-white text-[10px] font-bold uppercase tracking-wider">
                      {book.medium}
                    </span>
                    {book.isBestSeller && (
                      <span className="px-2.5 py-0.5 rounded-full bg-[#E6B422] text-[#102A78] text-[10px] font-extrabold uppercase tracking-wider flex items-center gap-1 shadow-xs">
                        <Star className="w-3 h-3 fill-current" />
                        Best Seller
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-2.5 left-3 right-3 text-xs text-white font-mono flex items-center justify-between">
                    <span>{book.edition}</span>
                    <span>{book.pages} Pages</span>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#E31B23]">
                    {book.publisher}
                  </span>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#102A78] group-hover:text-[#E31B23] transition-colors leading-snug line-clamp-1">
                    <Link to="/books">
                      {book.title}
                    </Link>
                  </h3>
                  {book.tamilTitle && (
                    <p className="text-xs text-[#174A9C] font-semibold truncate">
                      {book.tamilTitle}
                    </p>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                <Link
                  to="/books"
                  className="text-xs font-bold text-[#102A78] hover:text-[#E31B23] flex items-center gap-1"
                >
                  <span>Preview</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#102A78] hover:bg-[#E31B23] text-white text-xs font-bold transition-colors shadow-2xs"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Order Book</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
