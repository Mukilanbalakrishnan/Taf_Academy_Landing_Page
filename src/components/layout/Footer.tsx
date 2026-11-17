import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Send,
  BookOpen,
  Award,
} from 'lucide-react';
import { Logo } from '@/components/common/Logo';
import { OFFICIAL_CONTACT } from '@/data/contact';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F4F7FC] text-[#26344D] border-t border-[#E5EAF2]">
      {/* Top Banner: Institutional Trust Strip */}
      <div className="bg-white border-b border-[#E5EAF2] py-8 px-4 sm:px-8 lg:px-12">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-[#F4F7FC] border border-[#E5EAF2] flex items-center justify-center shrink-0 text-[#102A78]">
              <Award className="w-6 h-6 text-[#E31B23]" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-[#102A78] tracking-wide">
                16,000+ Government Officers Shaped Since 2009
              </h4>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/centers"
              className="px-4 py-2 rounded-xl bg-white hover:bg-[#F4F7FC] text-xs font-bold text-[#102A78] border border-[#E5EAF2] transition-colors"
            >
              Explore 92 Centers
            </Link>
            <Link
              to="/courses"
              className="px-4 py-2 rounded-xl bg-[#102A78] hover:bg-[#174A9C] text-xs font-bold text-white transition-colors shadow-xs"
            >
              View All Courses
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Sitemap Grid */}
      <div className="w-full px-4 sm:px-8 lg:px-12 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 text-left">
          {/* Col 1: Institutional Identity */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="lg" />
            
            <p className="text-xs text-[#64748B] leading-relaxed max-w-sm pt-2">
              Established in August 2009 by visionary educator <strong>Mr. J. Aagasa Moorthy</strong> in Tenkasi, TAF IAS Academy has evolved into Tamil Nadu's foremost competitive coaching powerhouse.
            </p>

            <div className="pt-2 space-y-2.5 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E31B23] shrink-0 mt-0.5" />
                <span className="text-[#26344D]">
                  {OFFICIAL_CONTACT.headOffice.address}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#174A9C] shrink-0" />
                <div className="flex flex-wrap gap-2 text-[#26344D]">
                  <a href={`tel:${OFFICIAL_CONTACT.phones.primary}`} className="font-semibold text-[#102A78] hover:text-[#E31B23] transition-colors">
                    {OFFICIAL_CONTACT.phones.primary}
                  </a>
                  <span>•</span>
                  <a href={`tel:${OFFICIAL_CONTACT.phones.secondary}`} className="font-semibold text-[#102A78] hover:text-[#E31B23] transition-colors">
                    {OFFICIAL_CONTACT.phones.secondary}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#174A9C] shrink-0" />
                <a href={`mailto:${OFFICIAL_CONTACT.emails.headOffice}`} className="text-[#102A78] hover:text-[#E31B23] font-medium transition-colors">
                  {OFFICIAL_CONTACT.emails.headOffice}
                </a>
              </div>
            </div>

            {/* Social & Channel Badges */}
            <div className="pt-3 flex items-center gap-3">
              <a
                href={OFFICIAL_CONTACT.socialMedia.youtubeMain}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white hover:bg-red-50 text-red-600 flex items-center justify-center transition-colors border border-[#E5EAF2]"
                aria-label="TAF IAS Academy Official YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href={OFFICIAL_CONTACT.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white hover:bg-emerald-50 text-emerald-600 flex items-center justify-center transition-colors border border-[#E5EAF2]"
                aria-label="Official WhatsApp Support"
              >
                <Send className="w-4 h-4" />
              </a>
              <span className="text-[11px] text-[#64748B] font-medium">
                Official YouTube: @TAFIASACADEMY & @AamuPublication
              </span>
            </div>
          </div>

          {/* Col 2: Courses Sitemap */}
          <div className="space-y-3">
            <h5 className="font-serif text-sm font-bold text-[#102A78] uppercase tracking-wider border-b border-[#E5EAF2] pb-2">
              Competitive Programs
            </h5>
            <ul className="space-y-2 text-xs text-[#26344D]">
              <li>
                <Link to="/courses/tnpsc/group-1" className="hover:text-[#E31B23] transition-colors flex items-center justify-between">
                  <span>TNPSC Group 1</span>
                  <span className="text-[10px] text-[#174A9C] font-mono font-semibold">Prelims/Mains</span>
                </Link>
              </li>
              <li>
                <Link to="/courses/tnpsc/group-2" className="hover:text-[#E31B23] transition-colors">
                  TNPSC Group 2 & 2A
                </Link>
              </li>
              <li>
                <Link to="/courses/tnpsc/group-4" className="hover:text-[#E31B23] transition-colors">
                  TNPSC Group 4 & VAO
                </Link>
              </li>
              <li>
                <Link to="/courses/tnsurb/si" className="hover:text-[#E31B23] transition-colors flex items-center justify-between">
                  <span>TNSURB Police SI</span>
                  <span className="text-[10px] text-[#174A9C] font-mono font-semibold">Taluk/AR</span>
                </Link>
              </li>
              <li>
                <Link to="/courses/tnsurb/pc" className="hover:text-[#E31B23] transition-colors">
                  TNSURB Police Constable
                </Link>
              </li>
              <li>
                <Link to="/courses/upsc" className="hover:text-[#E31B23] transition-colors">
                  UPSC Civil Services (IAS/IPS)
                </Link>
              </li>
              <li>
                <Link to="/courses/junior-ias" className="hover:text-[#E31B23] transition-colors">
                  Junior IAS (School & College)
                </Link>
              </li>
              <li>
                <Link to="/courses/banking" className="hover:text-[#E31B23] transition-colors">
                  Banking (IBPS / SBI)
                </Link>
              </li>
              <li>
                <Link to="/courses/ssc" className="hover:text-[#E31B23] transition-colors">
                  SSC (CGL / CHSL)
                </Link>
              </li>
              <li>
                <Link to="/courses/rrb" className="hover:text-[#E31B23] transition-colors">
                  RRB Railways (NTPC / ALP)
                </Link>
              </li>
              <li>
                <Link to="/courses/online" className="text-[#102A78] hover:text-[#E31B23] transition-colors font-bold">
                  Online Interactive Batches
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Institutional Links */}
          <div className="space-y-3">
            <h5 className="font-serif text-sm font-bold text-[#102A78] uppercase tracking-wider border-b border-[#E5EAF2] pb-2">
              Institution & Centers
            </h5>
            <ul className="space-y-2 text-xs text-[#26344D]">
              <li>
                <Link to="/about" className="hover:text-[#E31B23] transition-colors">
                  About TAF IAS Academy
                </Link>
              </li>
              <li>
                <Link to="/about#founder" className="hover:text-[#E31B23] transition-colors">
                  Founder — J. Aagasa Moorthy
                </Link>
              </li>
              <li>
                <Link to="/about#journey" className="hover:text-[#E31B23] transition-colors">
                  Our 15+ Years Journey
                </Link>
              </li>
              <li>
                <Link to="/about#vision-mission" className="hover:text-[#E31B23] transition-colors">
                  Vision and Mission
                </Link>
              </li>
              <li>
                <Link to="/centers" className="hover:text-[#E31B23] transition-colors flex items-center justify-between font-semibold text-[#102A78]">
                  <span>92 Centers Directory</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-blue-100 text-[#102A78]">Network</span>
                </Link>
              </li>
              <li>
                <Link to="/achievements" className="hover:text-[#E31B23] transition-colors">
                  Rank List & State Toppers
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-[#E31B23] transition-colors">
                  Functions & 18th Year Celebration
                </Link>
              </li>
              <li>
                <Link to="/events#achievers" className="hover:text-[#E31B23] transition-colors">
                  Achiever Felicitation Program
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-[#E31B23] transition-colors">
                  Careers at TAF
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Academic Resources */}
          <div className="space-y-3">
            <h5 className="font-serif text-sm font-bold text-[#102A78] uppercase tracking-wider border-b border-[#E5EAF2] pb-2">
              Academic Resources
            </h5>
            <ul className="space-y-2 text-xs text-[#26344D]">
              <li>
                <Link to="/books" className="hover:text-[#E31B23] transition-colors flex items-center justify-between">
                  <span>Aamu Publication Books</span>
                  <BookOpen className="w-3.5 h-3.5 text-[#174A9C]" />
                </Link>
              </li>
              <li>
                <Link to="/current-affairs" className="hover:text-[#E31B23] transition-colors">
                  Daily Current Affairs Bulletin
                </Link>
              </li>
              <li>
                <Link to="/current-affairs" className="hover:text-[#E31B23] transition-colors">
                  Weekly & Monthly Compilations
                </Link>
              </li>
              <li>
                <Link to="/notifications" className="hover:text-[#E31B23] transition-colors flex items-center justify-between text-[#102A78] font-semibold">
                  <span>Exam Notifications Board</span>
                  <span className="text-[9px] px-1.5 py-0.2 rounded bg-red-100 text-[#E31B23] font-bold animate-pulse">Live</span>
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-[#E31B23] transition-colors">
                  Preparation Strategy Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#E31B23] transition-colors">
                  Contact Us & Branch Map
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal & Network Attribution */}
        <div className="mt-10 pt-6 border-t border-[#E5EAF2] text-[11px] text-[#64748B] text-left">
          <p>
            TAF IAS Academy • Central Head Office: Tenkasi, Tamil Nadu • 92 Branches Statewide • Official Study Publications by Aamu Publication.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="mt-6 pt-6 border-t border-[#E5EAF2] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <div>
            © {new Date().getFullYear()} TAF IAS Academy. All Rights Reserved. Founded by Mr. J. Aagasa Moorthy.
          </div>
          <div className="flex items-center gap-4">
            <Link to="/about" className="hover:text-[#102A78] transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link to="/about" className="hover:text-[#102A78] transition-colors">Terms of Admission</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-[#102A78] transition-colors">Anti-Ragging & Campus Rules</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
