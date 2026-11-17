import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { StatsSection } from '@/components/home/StatsSection';
import { CoursesSection } from '@/components/home/CoursesSection';
import { WhyTafSection } from '@/components/home/WhyTafSection';
import { RankShowcaseSection } from '@/components/home/RankShowcaseSection';
import { CentersPreviewSection } from '@/components/home/CentersPreviewSection';
import { EventsPreviewSection } from '@/components/home/EventsPreviewSection';
import { BooksSection } from '@/components/home/BooksSection';
import { CurrentAffairsAndBlogSection } from '@/components/home/CurrentAffairsAndBlogSection';
import { NotificationsSection } from '@/components/home/NotificationsSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { AdmissionEnquirySection } from '@/components/home/AdmissionEnquirySection';
import { FinalCtaSection } from '@/components/home/FinalCtaSection';

interface HomeProps {
  onOpenEnquiry: (courseName?: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenEnquiry }) => {
  return (
    <main className="w-full">
      {/* SECTION 03 — HERO SECTION */}
      <HeroSection onOpenEnquiry={() => onOpenEnquiry()} />

      {/* SECTION 04 — INSTITUTIONAL ACHIEVEMENTS */}
      <StatsSection />

      {/* SECTION 05 — EXPLORE OUR COURSES */}
      <CoursesSection onOpenEnquiry={onOpenEnquiry} />

      {/* SECTION 06 — WHY TAF IAS ACADEMY */}
      <WhyTafSection />

      {/* SECTION 07 — STUDENT ACHIEVEMENTS */}
      <RankShowcaseSection />

      {/* SECTION 08 — OUR CENTERS */}
      <CentersPreviewSection />

      {/* SECTION 09 — EVENTS AND CELEBRATIONS */}
      <EventsPreviewSection />

      {/* SECTION 10 — BOOKS AND LEARNING RESOURCES */}
      <BooksSection />

      {/* SECTION 11 — CURRENT AFFAIRS AND BLOG */}
      <CurrentAffairsAndBlogSection />

      {/* SECTION 12 — NOTIFICATIONS */}
      <NotificationsSection />

      {/* SECTION 13 — STUDENT TESTIMONIALS */}
      <TestimonialsSection />

      {/* SECTION 14 — ADMISSION ENQUIRY */}
      <AdmissionEnquirySection />

      {/* SECTION 15 — FINAL CTA */}
      <FinalCtaSection onOpenEnquiry={() => onOpenEnquiry()} />
    </main>
  );
};
