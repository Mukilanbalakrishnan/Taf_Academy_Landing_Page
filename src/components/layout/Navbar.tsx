import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Sparkles, Phone } from 'lucide-react';
import { Logo } from '@/components/common/Logo';
import { MAIN_NAVIGATION } from '@/data/navigation';
import { OFFICIAL_CONTACT } from '@/data/contact';

interface NavbarProps {
  onOpenEnquiry: (course?: string, center?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navRef = useRef<HTMLDivElement>(null);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Handle scroll shadow & sticky shrink
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMobileSection = (title: string) => {
    setMobileExpandedSection(prev => (prev === title ? null : title));
  };

  return (
    <header
      ref={navRef}
      className={`sticky top-0 z-40 w-full transition-all duration-300 bg-white ${
        isScrolled
          ? 'shadow-md border-b border-[#E5EAF2] py-2'
          : 'border-b border-[#E5EAF2] py-2.5'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-10 flex items-center justify-between gap-3">
        {/* Official Brand Logo */}
        <div className="shrink-0 flex items-center">
          <Logo size={isScrolled ? 'sm' : 'sm'} />
        </div>

        {/* Desktop Navigation — Structured & Strictly in a Single Line */}
        <nav
          className="hidden xl:flex items-center flex-nowrap gap-1 2xl:gap-2 whitespace-nowrap"
          aria-label="Main Navigation"
        >
          {MAIN_NAVIGATION.map((item) => {
            const isActive =
              location.pathname === item.href ||
              (item.dropdown && item.dropdown.some((d) => location.pathname === d.href)) ||
              (item.megaGroups &&
                item.megaGroups.some((g) => g.items.some((i) => location.pathname === i.href)));

            // MEGA MENU FOR COURSES
            if (item.isMegaMenu) {
              return (
                <div
                  key={item.title}
                  className="relative group/mega shrink-0"
                  onMouseEnter={() => setActiveDropdown(item.title)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={item.href}
                    className={`px-2.5 py-1.5 text-[13px] font-bold rounded-lg transition-colors inline-flex items-center gap-1 ${
                      isActive
                        ? 'text-[#102A78] bg-[#F4F7FC] border border-[#E5EAF2]'
                        : 'text-[#102A78] hover:text-[#E31B23] hover:bg-[#F4F7FC]'
                    }`}
                  >
                    <span>{item.title}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        activeDropdown === item.title ? 'rotate-180 text-[#E31B23]' : 'text-gray-400'
                      }`}
                    />
                  </Link>

                  {/* Mega Menu Dropdown */}
                  {activeDropdown === item.title && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[920px] max-w-[calc(100vw-2rem)] bg-white border border-[#E5EAF2] rounded-2xl shadow-2xl p-6 mt-1 z-50 grid grid-cols-4 gap-6 animate-in fade-in duration-200 text-left">
                      {item.megaGroups?.map((group) => (
                        <div key={group.category} className="space-y-3">
                          <div className="border-b border-[#E5EAF2] pb-2">
                            <span className="text-[11px] font-extrabold text-[#102A78] tracking-wider uppercase flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#E31B23]" />
                              {group.category}
                            </span>
                          </div>
                          <ul className="space-y-1.5">
                            {group.items.map((subItem) => (
                              <li key={subItem.title}>
                                <Link
                                  to={subItem.href}
                                  className="group/item block p-2 rounded-xl hover:bg-[#F4F7FC] transition-colors"
                                >
                                  <div className="flex items-center justify-between">
                                    <span className="text-xs font-bold text-[#102A78] group-hover/item:text-[#E31B23] transition-colors">
                                      {subItem.title}
                                    </span>
                                    {subItem.badge && (
                                      <span className="text-[9px] uppercase px-1.5 py-0.2 rounded bg-amber-50 text-[#B88E12] font-bold border border-amber-200">
                                        {subItem.badge}
                                      </span>
                                    )}
                                  </div>
                                  {subItem.description && (
                                    <p className="text-[10px] text-[#64748B] line-clamp-1 mt-0.5 group-hover/item:text-[#26344D]">
                                      {subItem.description}
                                    </p>
                                  )}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}

                      {/* Bottom Banner in Mega Menu */}
                      <div className="col-span-4 bg-[#F4F7FC] border border-[#E5EAF2] rounded-xl p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-xl bg-white border border-[#E5EAF2] text-[#102A78] flex items-center justify-center font-bold shrink-0 shadow-xs">
                            <Sparkles className="w-4 h-4 text-[#E31B23]" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-[#102A78]">
                              Unsure which competitive exam aligns with your degree?
                            </p>
                            <p className="text-[11px] text-[#64748B]">
                              Speak directly with a senior faculty mentor for profile evaluation.
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => {
                            setActiveDropdown(null);
                            onOpenEnquiry();
                          }}
                          className="px-4 py-2 bg-[#102A78] hover:bg-[#174A9C] text-white text-xs font-bold rounded-lg transition-colors cursor-pointer shrink-0 shadow-xs"
                        >
                          Book Free Guidance
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            // STANDARD DROPDOWNS (About, Achievements, Events, More)
            if (item.dropdown) {
              return (
                <div
                  key={item.title}
                  className="relative group/drop shrink-0"
                  onMouseEnter={() => setActiveDropdown(item.title)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={item.href}
                    className={`px-2.5 py-1.5 text-[13px] font-bold rounded-lg transition-colors inline-flex items-center gap-1 ${
                      isActive
                        ? 'text-[#102A78] bg-[#F4F7FC] border border-[#E5EAF2]'
                        : 'text-[#102A78] hover:text-[#E31B23] hover:bg-[#F4F7FC]'
                    }`}
                  >
                    <span>{item.title}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        activeDropdown === item.title ? 'rotate-180 text-[#E31B23]' : 'text-gray-400'
                      }`}
                    />
                  </Link>

                  {/* Standard Dropdown Menu */}
                  {activeDropdown === item.title && (
                    <div className="absolute top-full left-0 w-64 bg-white border border-[#E5EAF2] rounded-xl shadow-xl py-2 mt-1 z-50 text-left animate-in fade-in duration-150">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.title}
                          to={subItem.href}
                          className="block px-4 py-2.5 hover:bg-[#F4F7FC] transition-colors group/sub"
                        >
                          <div className="text-xs font-bold text-[#102A78] group-hover/sub:text-[#E31B23]">
                            {subItem.title}
                          </div>
                          {subItem.description && (
                            <div className="text-[10px] text-[#64748B] line-clamp-1 mt-0.5">
                              {subItem.description}
                            </div>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            // SINGLE ITEMS (Home, Our Centers, Books, Blog, Notification, Contact Us)
            return (
              <Link
                key={item.title}
                to={item.href}
                className={`relative px-2.5 py-1.5 text-[13px] font-bold rounded-lg transition-colors inline-flex items-center gap-1.5 shrink-0 ${
                  isActive
                    ? 'text-[#102A78] bg-[#F4F7FC] border border-[#E5EAF2]'
                    : 'text-[#102A78] hover:text-[#E31B23] hover:bg-[#F4F7FC]'
                }`}
              >
                <span>{item.title}</span>

                {/* Inline Badges formatted in a single line without wrapping */}
                {item.title === 'Our Centers' && (
                  <span className="text-[10px] font-extrabold px-1.5 py-0.2 rounded-full bg-blue-50 text-[#102A78] border border-blue-200">
                    92
                  </span>
                )}

                {item.title === 'Notification' && (
                  <span className="inline-flex items-center gap-1 text-[9px] font-extrabold px-1.5 py-0.2 rounded bg-red-50 text-[#E31B23] border border-red-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E31B23] animate-pulse" />
                    LIVE
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Controls: Helpline & Admission Button */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Official Helpline Callout */}
          <a
            href={`tel:${OFFICIAL_CONTACT.phones.primary}`}
            className="hidden 2xl:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-[#102A78] hover:text-[#E31B23] hover:bg-[#F4F7FC] transition-colors whitespace-nowrap"
            title="Call Admission Helpline"
          >
            <Phone className="w-3.5 h-3.5 text-[#E31B23]" />
            <span>{OFFICIAL_CONTACT.phones.primary}</span>
          </a>

          {/* Enquire Now CTA Button */}
          <button
            onClick={() => onOpenEnquiry()}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#E31B23] hover:bg-[#C9141B] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-xs hover:shadow-md cursor-pointer whitespace-nowrap"
          >
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span>Enquire Now</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-[#102A78] hover:bg-[#F4F7FC] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (White Theme) */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-full max-h-[85vh] overflow-y-auto bg-white border-b border-[#E5EAF2] shadow-2xl p-5 space-y-3 z-50 text-left">
          <div className="pb-3 border-b border-[#E5EAF2] flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-[#102A78]">
              Main Navigation
            </span>
            <span className="text-[11px] text-[#64748B]">92 Branches Statewide</span>
          </div>

          <div className="space-y-1">
            {MAIN_NAVIGATION.map((item) => {
              const isExpanded = mobileExpandedSection === item.title;

              if (item.isMegaMenu) {
                return (
                  <div key={item.title} className="border-b border-gray-100 py-1">
                    <button
                      onClick={() => toggleMobileSection(item.title)}
                      className="w-full flex items-center justify-between py-2 text-sm font-bold text-[#102A78] uppercase tracking-wide"
                    >
                      <div className="flex items-center gap-2">
                        <span>{item.title}</span>
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-blue-100 text-[#102A78]">
                          All Programs
                        </span>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isExpanded ? 'rotate-180 text-[#E31B23]' : ''
                        }`}
                      />
                    </button>

                    {isExpanded && (
                      <div className="pl-3 py-2 space-y-4 bg-[#F4F7FC] rounded-xl my-1">
                        {item.megaGroups?.map((group) => (
                          <div key={group.category} className="space-y-1.5">
                            <span className="text-[10px] uppercase font-bold tracking-wider text-[#174A9C]">
                              {group.category}
                            </span>
                            <div className="grid grid-cols-1 gap-1">
                              {group.items.map((subItem) => (
                                <Link
                                  key={subItem.title}
                                  to={subItem.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="flex items-center justify-between p-2 rounded-lg text-xs text-[#102A78] font-semibold hover:bg-white transition-colors"
                                >
                                  <span>{subItem.title}</span>
                                  {subItem.badge && (
                                    <span className="text-[9px] px-1.5 py-0.2 bg-amber-100 text-[#B88E12] rounded font-bold">
                                      {subItem.badge}
                                    </span>
                                  )}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              if (item.dropdown) {
                return (
                  <div key={item.title} className="border-b border-gray-100 py-1">
                    <button
                      onClick={() => toggleMobileSection(item.title)}
                      className="w-full flex items-center justify-between py-2 text-sm font-bold text-[#102A78] uppercase tracking-wide"
                    >
                      <span>{item.title}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isExpanded ? 'rotate-180 text-[#E31B23]' : ''
                        }`}
                      />
                    </button>

                    {isExpanded && (
                      <div className="pl-3 py-1 space-y-1 bg-[#F4F7FC] rounded-xl my-1">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.title}
                            to={subItem.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block p-2 rounded-lg text-xs text-[#102A78] font-semibold hover:bg-white transition-colors"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.title}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2.5 px-1 border-b border-gray-100 text-sm font-bold text-[#102A78] uppercase tracking-wide hover:text-[#E31B23] transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <span>{item.title}</span>
                    {item.title === 'Our Centers' && (
                      <span className="text-[10px] font-bold px-1.5 py-0.2 rounded-full bg-blue-100 text-[#102A78]">
                        92 Branches
                      </span>
                    )}
                  </div>
                  {item.title === 'Notification' && (
                    <span className="text-[9px] uppercase px-1.5 py-0.5 rounded font-bold bg-red-100 text-[#E31B23]">
                      LIVE
                    </span>
                  )}
                </Link>
              );
            })}
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="w-full py-3 rounded-xl bg-[#E31B23] hover:bg-[#C9141B] text-white text-sm font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <Sparkles className="w-4 h-4" />
              <span>Book Admission Counselling</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
