import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AnnouncementBar } from '@/components/layout/AnnouncementBar';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollToTop } from '@/components/common/ScrollToTop';
import { AdmissionModal } from '@/components/common/AdmissionModal';

// Pages
import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { CoursesList } from '@/pages/CoursesList';
import { CourseDetailPage } from '@/pages/CourseDetail';
import { Centers } from '@/pages/Centers';
import { Achievements } from '@/pages/Achievements';
import { Events } from '@/pages/Events';
import { Books } from '@/pages/Books';
import { BlogList } from '@/pages/BlogList';
import { BlogDetail } from '@/pages/BlogDetail';
import { Notifications } from '@/pages/Notifications';
import { CurrentAffairs } from '@/pages/CurrentAffairs';
import { Careers } from '@/pages/Careers';
import { Contact } from '@/pages/Contact';

export const App: React.FC = () => {
  const [admissionModalOpen, setAdmissionModalOpen] = useState(false);
  const [selectedCourseForModal, setSelectedCourseForModal] = useState<string>('TNPSC Group 1');
  const [selectedCenterForModal, setSelectedCenterForModal] = useState<string>('Tenkasi Head Office');

  const handleOpenEnquiry = (courseName?: string, centerName?: string) => {
    if (courseName) setSelectedCourseForModal(courseName);
    if (centerName) setSelectedCenterForModal(centerName);
    setAdmissionModalOpen(true);
  };

  return (
    <Router>
      <ScrollToTop />
      
      {/* SECTION 01 — ANNOUNCEMENT BAR */}
      <AnnouncementBar onEnquireClick={() => handleOpenEnquiry()} />

      {/* SECTION 02 — MAIN NAVIGATION */}
      <Navbar onOpenEnquiry={handleOpenEnquiry} />

      {/* MULTI-PAGE APPLICATION ROUTES */}
      <div className="flex-1 w-full">
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home onOpenEnquiry={handleOpenEnquiry} />} />

          {/* About */}
          <Route path="/about" element={<About onOpenEnquiry={() => handleOpenEnquiry()} />} />

          {/* Courses Directory */}
          <Route path="/courses" element={<CoursesList onOpenEnquiry={handleOpenEnquiry} />} />

          {/* Specific Course Detail Routes */}
          <Route
            path="/courses/tnpsc/group-1"
            element={<CourseDetailPage onOpenEnquiry={handleOpenEnquiry} overrideSlug="tnpsc-group-1" />}
          />
          <Route
            path="/courses/tnpsc/group-2"
            element={<CourseDetailPage onOpenEnquiry={handleOpenEnquiry} overrideSlug="tnpsc-group-2" />}
          />
          <Route
            path="/courses/tnpsc/group-4"
            element={<CourseDetailPage onOpenEnquiry={handleOpenEnquiry} overrideSlug="tnpsc-group-4" />}
          />
          <Route
            path="/courses/tnsurb/si"
            element={<CourseDetailPage onOpenEnquiry={handleOpenEnquiry} overrideSlug="tnsurb-si" />}
          />
          <Route
            path="/courses/tnsurb/pc"
            element={<CourseDetailPage onOpenEnquiry={handleOpenEnquiry} overrideSlug="tnsurb-pc" />}
          />
          <Route
            path="/courses/tnusrb/si"
            element={<Navigate to="/courses/tnsurb/si" replace />}
          />
          <Route
            path="/courses/tnusrb/pc"
            element={<Navigate to="/courses/tnsurb/pc" replace />}
          />
          <Route
            path="/courses/banking"
            element={<CourseDetailPage onOpenEnquiry={handleOpenEnquiry} overrideSlug="banking" />}
          />
          <Route
            path="/courses/ssc"
            element={<CourseDetailPage onOpenEnquiry={handleOpenEnquiry} overrideSlug="ssc" />}
          />
          <Route
            path="/courses/rrb"
            element={<CourseDetailPage onOpenEnquiry={handleOpenEnquiry} overrideSlug="rrb" />}
          />
          <Route
            path="/courses/upsc"
            element={<CourseDetailPage onOpenEnquiry={handleOpenEnquiry} overrideSlug="upsc" />}
          />
          <Route
            path="/courses/junior-ias"
            element={<CourseDetailPage onOpenEnquiry={handleOpenEnquiry} overrideSlug="junior-ias" />}
          />
          <Route
            path="/courses/trb"
            element={<CourseDetailPage onOpenEnquiry={handleOpenEnquiry} overrideSlug="trb" />}
          />
          <Route
            path="/courses/online"
            element={<CourseDetailPage onOpenEnquiry={handleOpenEnquiry} overrideSlug="online" />}
          />

          {/* Dynamic fallback for any nested course path */}
          <Route
            path="/courses/:category/:slug"
            element={<CourseDetailPage onOpenEnquiry={handleOpenEnquiry} />}
          />
          <Route
            path="/courses/:slug"
            element={<CourseDetailPage onOpenEnquiry={handleOpenEnquiry} />}
          />

          {/* Our Centers / 92 Branches */}
          <Route path="/centers" element={<Centers onOpenEnquiry={handleOpenEnquiry} />} />

          {/* Achievements / Rank List */}
          <Route path="/achievements" element={<Achievements />} />

          {/* Events / Functions */}
          <Route path="/events" element={<Events />} />

          {/* Books / Aamu Publication */}
          <Route path="/books" element={<Books onOpenEnquiry={handleOpenEnquiry} />} />

          {/* Blog Listing & Article Detail */}
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogDetail onOpenEnquiry={handleOpenEnquiry} />} />

          {/* Notification Board */}
          <Route path="/notifications" element={<Notifications />} />

          {/* More: Current Affairs */}
          <Route path="/current-affairs" element={<CurrentAffairs />} />

          {/* More: Careers */}
          <Route path="/careers" element={<Careers />} />

          {/* Contact Us */}
          <Route path="/contact" element={<Contact />} />

          {/* Catch-all redirect to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>

      {/* SECTION 16 — FOOTER */}
      <Footer />

      {/* Global Admission Modal */}
      <AdmissionModal
        isOpen={admissionModalOpen}
        onClose={() => setAdmissionModalOpen(false)}
        defaultCourse={selectedCourseForModal}
        defaultCenter={selectedCenterForModal}
      />
    </Router>
  );
};

export default App;
