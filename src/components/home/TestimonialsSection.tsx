import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '@/data/testimonials';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || TESTIMONIALS.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prevIdx) => (prevIdx + 1) % TESTIMONIALS.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const prev = () => {
    setCurrentIndex((prevIdx) => (prevIdx === 0 ? TESTIMONIALS.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setCurrentIndex((prevIdx) => (prevIdx === TESTIMONIALS.length - 1 ? 0 : prevIdx + 1));
  };

  const active = TESTIMONIALS[currentIndex];

  return (
    <section className="bg-white text-[#26344D] py-14 sm:py-16 px-4 sm:px-8 lg:px-12 border-b border-[#E5EAF2]">
      <div className="w-full max-w-[1720px] mx-auto space-y-6">
        
        {/* Header: Crisp */}
        <div className="text-center max-w-2xl mx-auto space-y-1">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#102A78]">
            <Quote className="w-4 h-4 text-[#E31B23]" />
            <span>Success Stories</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#102A78] tracking-tight">
            Voices of Our Rank Holders
          </h2>
        </div>

        {/* Featured Testimonial Card (Minimal Text, Punchy Design) */}
        <div
          className="max-w-4xl mx-auto bg-[#F8FAFD] border border-[#E5EAF2] rounded-2xl p-6 sm:p-8 shadow-xs relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 text-center sm:text-left">
            {/* Student Photo */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-white shadow-md bg-white shrink-0">
              <img
                src={active.photoUrl}
                alt={active.name}
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Testimonial Quote */}
            <div className="flex-1 space-y-2">
              <div className="flex items-center justify-center sm:justify-start gap-1 text-[#E6B422]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              <blockquote className="font-serif text-lg sm:text-xl font-bold text-[#102A78] italic leading-snug">
                "{active.highlightPhrase}"
              </blockquote>

              <div className="pt-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                <div>
                  <span className="font-bold text-[#102A78]">{active.name}</span>
                  <span className="text-[#E31B23] font-semibold ml-1.5">• {active.post}</span>
                  <span className="text-[#64748B] ml-1.5">({active.hometown})</span>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-center gap-1.5 pt-2 sm:pt-0">
                  <button
                    onClick={prev}
                    className="p-1.5 rounded-lg bg-white hover:bg-[#102A78] text-[#102A78] hover:text-white border border-[#E5EAF2] transition-colors cursor-pointer"
                    aria-label="Previous"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={next}
                    className="p-1.5 rounded-lg bg-white hover:bg-[#102A78] text-[#102A78] hover:text-white border border-[#E5EAF2] transition-colors cursor-pointer"
                    aria-label="Next"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
