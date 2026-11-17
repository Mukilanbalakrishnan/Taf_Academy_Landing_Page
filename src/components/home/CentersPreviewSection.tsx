import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  ArrowRight,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Search,
} from 'lucide-react';
import { BRANCHES, Branch } from '@/data/branches';

interface DistrictLandmarkConfig {
  title: string;
  badge: string;
  symbolType: string;
  gradient: string;
  shadow: string;
}

// Map Tamil Nadu places to their famous specialties ("Places Favorite")
function getDistrictConfig(branch: Branch): DistrictLandmarkConfig {
  const d = branch.district.toLowerCase();

  // 1. Tenkasi: Courtallam Waterfalls
  if (d.includes('tenkasi')) {
    return {
      title: 'Courtallam Falls',
      badge: 'HEAD OFFICE',
      symbolType: 'waterfall',
      gradient: 'from-[#1D4ED8] via-[#2563EB] to-[#0284C7]',
      shadow: 'shadow-blue-500/25',
    };
  }

  // 2. Thanjavur: Brihadeeswara Temple (Periya Kovil)
  if (d.includes('thanjavur')) {
    return {
      title: 'Brihadeeswara Temple',
      badge: 'RESIDENTIAL',
      symbolType: 'temple',
      gradient: 'from-[#991B1B] via-[#DC2626] to-[#F43F5E]',
      shadow: 'shadow-rose-500/25',
    };
  }

  // 3. Salem: Salem Mango City
  if (d.includes('salem')) {
    return {
      title: 'Salem Mango City',
      badge: 'JUNCTION',
      symbolType: 'mango',
      gradient: 'from-[#D97706] via-[#EA580C] to-[#F59E0B]',
      shadow: 'shadow-amber-500/25',
    };
  }

  // 4. Madurai: Meenakshi Amman Temple
  if (d.includes('madurai')) {
    return {
      title: 'Meenakshi Temple',
      badge: 'CENTRAL',
      symbolType: 'maduraiTemple',
      gradient: 'from-[#7C3AED] via-[#8B5CF6] to-[#6366F1]',
      shadow: 'shadow-purple-500/25',
    };
  }

  // 5. Tiruchirappalli (Trichy): Rockfort Temple
  if (d.includes('tiruchirappalli') || d.includes('trichy')) {
    return {
      title: 'Rockfort Temple',
      badge: 'CAMPUS',
      symbolType: 'rockfort',
      gradient: 'from-[#0D9488] via-[#059669] to-[#10B981]',
      shadow: 'shadow-emerald-500/25',
    };
  }

  // 6. Tirunelveli: Nellai Halwa
  if (d.includes('tirunelveli')) {
    return {
      title: 'Nellai Halwa',
      badge: 'OXFORD SOUTH',
      symbolType: 'halwa',
      gradient: 'from-[#C2410C] via-[#EA580C] to-[#F97316]',
      shadow: 'shadow-orange-500/25',
    };
  }

  // 7. Chennai: Marina Lighthouse
  if (d.includes('chennai')) {
    return {
      title: 'Marina Lighthouse',
      badge: 'METRO',
      symbolType: 'lighthouse',
      gradient: 'from-[#0284C7] via-[#0EA5E9] to-[#38BDF8]',
      shadow: 'shadow-sky-500/25',
    };
  }

  // 8. Coimbatore: Siruvani & Cotton City
  if (d.includes('coimbatore')) {
    return {
      title: 'Siruvani & Cotton City',
      badge: 'REGIONAL',
      symbolType: 'coimbatore',
      gradient: 'from-[#06B6D4] via-[#0284C7] to-[#2563EB]',
      shadow: 'shadow-cyan-500/25',
    };
  }

  // 9. Dindigul: Famous Lock
  if (d.includes('dindigul')) {
    return {
      title: 'Historic Lock City',
      badge: 'BRANCH',
      symbolType: 'lock',
      gradient: 'from-[#4F46E5] via-[#6366F1] to-[#818CF8]',
      shadow: 'shadow-indigo-500/25',
    };
  }

  // 10. Thoothukudi: Pearl City
  if (d.includes('thoothukudi') || d.includes('tuticorin')) {
    return {
      title: 'Pearl City Port',
      badge: 'PORT',
      symbolType: 'pearl',
      gradient: 'from-[#0284C7] via-[#0D9488] to-[#10B981]',
      shadow: 'shadow-teal-500/25',
    };
  }

  // 11. Kanniyakumari / Kanyakumari: Thiruvalluvar Statue
  if (d.includes('kanniyakumari') || d.includes('kanyakumari')) {
    return {
      title: 'Thiruvalluvar Statue',
      badge: 'COASTAL',
      symbolType: 'statue',
      gradient: 'from-[#EC4899] via-[#F43F5E] to-[#FB7185]',
      shadow: 'shadow-pink-500/25',
    };
  }

  // 12. Erode: Turmeric City
  if (d.includes('erode')) {
    return {
      title: 'Turmeric Capital',
      badge: 'CENTRAL',
      symbolType: 'mango',
      gradient: 'from-[#EAB308] via-[#CA8A04] to-[#A16207]',
      shadow: 'shadow-yellow-500/25',
    };
  }

  // 13. Vellore: Golden Fort
  if (d.includes('vellore')) {
    return {
      title: 'Vellore Golden Fort',
      badge: 'CAMPUS',
      symbolType: 'fort',
      gradient: 'from-[#D97706] via-[#B45309] to-[#78350F]',
      shadow: 'shadow-amber-500/25',
    };
  }

  // 14. Tiruppur: Knitwear City
  if (d.includes('tiruppur')) {
    return {
      title: 'Knitwear Capital',
      badge: 'BRANCH',
      symbolType: 'textile',
      gradient: 'from-[#8B5CF6] via-[#6366F1] to-[#3B82F6]',
      shadow: 'shadow-purple-500/25',
    };
  }

  // 15. Virudhunagar: Kamarajar Heritage
  if (d.includes('virudhunagar')) {
    return {
      title: 'Kamarajar Heritage',
      badge: 'CENTRAL',
      symbolType: 'palace',
      gradient: 'from-[#102A78] via-[#1D4ED8] to-[#0284C7]',
      shadow: 'shadow-blue-900/25',
    };
  }

  // Default fallback for any other of the 92 branches
  return {
    title: `${branch.district} Center`,
    badge: branch.isHeadOffice ? 'HEAD OFFICE' : branch.hasHostel ? 'HOSTEL' : 'BRANCH',
    symbolType: 'campus',
    gradient: 'from-[#1E3A8A] via-[#1D4ED8] to-[#3B82F6]',
    shadow: 'shadow-blue-500/25',
  };
}

export const CentersPreviewSection: React.FC = () => {
  const [page, setPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  // Sort flagship priority branches first when search is empty
  const priorityOrder = [
    'tenkasi',
    'thanjavur',
    'salem',
    'madurai',
    'tiruchirappalli',
    'tirunelveli',
    'chennai',
    'coimbatore',
    'dindigul',
    'thoothukudi',
    'kanniyakumari',
    'erode',
    'vellore',
    'virudhunagar',
  ];

  const sortedBranches = [...BRANCHES].sort((a, b) => {
    const aIdx = priorityOrder.findIndex((p) => a.district.toLowerCase().includes(p));
    const bIdx = priorityOrder.findIndex((p) => b.district.toLowerCase().includes(p));
    if (aIdx !== -1 && bIdx !== -1) return aIdx - bIdx;
    if (aIdx !== -1) return -1;
    if (bIdx !== -1) return 1;
    return a.district.localeCompare(b.district);
  });

  const filtered = sortedBranches.filter((b) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      b.district.toLowerCase().includes(q) ||
      b.name.toLowerCase().includes(q) ||
      b.address.toLowerCase().includes(q)
    );
  });

  const pageSize = 4;
  const totalPages = Math.ceil(filtered.length / pageSize) || 1;
  const currentPage = Math.min(page, totalPages - 1);
  const visibleBranches = filtered.slice(currentPage * pageSize, currentPage * pageSize + pageSize);

  const prevPage = () => {
    setPage((p) => (p > 0 ? p - 1 : totalPages - 1));
  };

  const nextPage = () => {
    setPage((p) => (p + 1 < totalPages ? p + 1 : 0));
  };

  // Render 3D Semi-translucent Symbol for that Place's Specialty
  const renderPlaceSymbol = (type: string) => {
    switch (type) {
      case 'waterfall':
        // TENKASI: Courtallam Waterfalls
        return (
          <svg viewBox="0 0 100 100" fill="none" className="w-24 h-24 sm:w-28 sm:h-28 drop-shadow-xl select-none pointer-events-none">
            <ellipse cx="50" cy="88" rx="34" ry="6" fill="black" fillOpacity="0.2" />
            <polygon points="10,84 28,84 24,30 8,45" fill="white" fillOpacity="0.85" />
            <polygon points="72,84 90,84 92,42 76,28" fill="white" fillOpacity="0.85" />
            <polygon points="20,30 80,28 72,18 28,18" fill="white" fillOpacity="0.95" />
            <path
              d="M34 26 L36 82 M44 26 L43 82 M52 26 L52 82 M60 26 L59 82"
              stroke="url(#water-grad)"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M38 28 L38 80 M48 28 L48 80 M56 28 L56 80"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity="0.9"
            />
            <ellipse cx="50" cy="82" rx="26" ry="6" fill="#67E8F9" fillOpacity="0.8" />
            <ellipse cx="50" cy="82" rx="18" ry="3" fill="white" fillOpacity="0.9" />
            <circle cx="36" cy="74" r="2.5" fill="white" opacity="0.8" />
            <circle cx="50" cy="70" r="3" fill="white" opacity="0.9" />
            <circle cx="62" cy="73" r="2.5" fill="white" opacity="0.8" />
            <defs>
              <linearGradient id="water-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#A5F3FC" />
                <stop offset="100%" stopColor="#38BDF8" />
              </linearGradient>
            </defs>
          </svg>
        );

      case 'temple':
        // THANJAVUR: Big Temple (Brihadeeswara Temple Vimana)
        return (
          <svg viewBox="0 0 100 100" fill="none" className="w-24 h-24 sm:w-28 sm:h-28 drop-shadow-xl select-none pointer-events-none">
            <ellipse cx="50" cy="90" rx="36" ry="6" fill="black" fillOpacity="0.2" />
            <rect x="20" y="80" width="60" height="8" rx="2" fill="white" fillOpacity="0.95" />
            <rect x="25" y="74" width="50" height="6" rx="1.5" fill="white" fillOpacity="0.85" />
            <path d="M44 80 V72 C44 68 56 68 56 72 V80 Z" fill="#7F1D1D" />
            <polygon points="28,74 72,74 68,64 32,64" fill="white" fillOpacity="0.9" />
            <polygon points="32,64 68,64 65,54 35,54" fill="white" fillOpacity="0.8" />
            <polygon points="35,54 65,54 62,44 38,44" fill="white" fillOpacity="0.9" />
            <polygon points="38,44 62,44 59,34 41,34" fill="white" fillOpacity="0.8" />
            <polygon points="41,34 59,34 56,24 44,24" fill="white" fillOpacity="0.9" />
            <ellipse cx="50" cy="22" rx="9" ry="6" fill="white" fillOpacity="0.95" />
            <path d="M50 10 L52 16 L48 16 Z" fill="#FDE047" />
            <circle cx="50" cy="10" r="2.5" fill="#FACC15" />
            <circle cx="50" cy="16" r="3.5" fill="#EAB308" />
          </svg>
        );

      case 'mango':
        // SALEM / ERODE: Salem Mango
        return (
          <svg viewBox="0 0 100 100" fill="none" className="w-24 h-24 sm:w-28 sm:h-28 drop-shadow-xl select-none pointer-events-none">
            <ellipse cx="52" cy="88" rx="30" ry="6" fill="black" fillOpacity="0.2" />
            <path
              d="M48 24 C 68 22, 85 38, 82 62 C 80 82, 58 88, 42 86 C 26 84, 18 70, 22 50 C 26 32, 38 24, 48 24 Z"
              fill="url(#mango-grad)"
            />
            <path
              d="M38 32 C 46 28, 60 30, 68 40 C 62 36, 50 34, 40 40 C 35 44, 32 54, 30 64 C 28 50, 32 36, 38 32 Z"
              fill="white"
              fillOpacity="0.45"
            />
            <circle cx="48" cy="78" r="10" fill="#EA580C" fillOpacity="0.25" />
            <path
              d="M48 24 C 47 16, 44 12, 42 8"
              stroke="#78350F"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            <path
              d="M46 16 C 58 10, 72 14, 78 22 C 72 26, 58 24, 46 16 Z"
              fill="#16A34A"
            />
            <path d="M46 16 Q 62 18 78 22" stroke="#4ADE80" strokeWidth="1" />
            <defs>
              <linearGradient id="mango-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FEF08A" />
                <stop offset="40%" stopColor="#FACC15" />
                <stop offset="85%" stopColor="#F97316" />
                <stop offset="100%" stopColor="#EA580C" />
              </linearGradient>
            </defs>
          </svg>
        );

      case 'maduraiTemple':
        // MADURAI: Meenakshi Temple Gopuram
        return (
          <svg viewBox="0 0 100 100" fill="none" className="w-24 h-24 sm:w-28 sm:h-28 drop-shadow-xl select-none pointer-events-none">
            <ellipse cx="50" cy="90" rx="35" ry="6" fill="black" fillOpacity="0.2" />
            <rect x="22" y="78" width="56" height="10" rx="2" fill="white" fillOpacity="0.95" />
            <path d="M43 88 V76 C43 72 57 72 57 76 V88 Z" fill="#4C1D95" />
            <polygon points="26,78 74,78 70,66 30,66" fill="white" fillOpacity="0.9" />
            <polygon points="30,66 70,66 67,54 33,54" fill="white" fillOpacity="0.8" />
            <polygon points="33,54 67,54 64,42 36,42" fill="white" fillOpacity="0.9" />
            <polygon points="36,42 64,42 61,30 39,30" fill="white" fillOpacity="0.85" />
            <polygon points="39,30 61,30 58,20 42,20" fill="white" fillOpacity="0.9" />
            <rect x="40" y="16" width="20" height="5" rx="2" fill="white" fillOpacity="0.95" />
            <circle cx="43" cy="13" r="2" fill="#FDE047" />
            <circle cx="46.5" cy="12" r="2.2" fill="#FACC15" />
            <circle cx="50" cy="11" r="2.5" fill="#EAB308" />
            <circle cx="53.5" cy="12" r="2.2" fill="#FACC15" />
            <circle cx="57" cy="13" r="2" fill="#FDE047" />
          </svg>
        );

      case 'rockfort':
        // TRICHY: Rockfort
        return (
          <svg viewBox="0 0 100 100" fill="none" className="w-24 h-24 sm:w-28 sm:h-28 drop-shadow-xl select-none pointer-events-none">
            <ellipse cx="50" cy="88" rx="34" ry="6" fill="black" fillOpacity="0.2" />
            <polygon points="15,86 85,86 70,40 30,40" fill="white" fillOpacity="0.85" />
            <rect x="40" y="24" width="20" height="16" rx="2" fill="white" fillOpacity="0.95" />
            <polygon points="38,24 62,24 50,14" fill="#FACC15" />
          </svg>
        );

      case 'halwa':
        // TIRUNELVELI: Halwa
        return (
          <svg viewBox="0 0 100 100" fill="none" className="w-24 h-24 sm:w-28 sm:h-28 drop-shadow-xl select-none pointer-events-none">
            <ellipse cx="50" cy="88" rx="32" ry="6" fill="black" fillOpacity="0.2" />
            <ellipse cx="50" cy="65" rx="30" ry="16" fill="white" fillOpacity="0.95" />
            <ellipse cx="50" cy="58" rx="22" ry="10" fill="#78350F" />
            <ellipse cx="48" cy="54" rx="6" ry="3" fill="#FEF08A" />
          </svg>
        );

      case 'lighthouse':
        // CHENNAI: Marina Lighthouse
        return (
          <svg viewBox="0 0 100 100" fill="none" className="w-24 h-24 sm:w-28 sm:h-28 drop-shadow-xl select-none pointer-events-none">
            <ellipse cx="50" cy="88" rx="30" ry="6" fill="black" fillOpacity="0.2" />
            <polygon points="36,84 64,84 58,26 42,26" fill="white" fillOpacity="0.9" />
            <rect x="40" y="18" width="20" height="8" rx="2" fill="#EF4444" />
            <polygon points="50,6 60,18 40,18" fill="white" fillOpacity="0.95" />
          </svg>
        );

      case 'lock':
        // DINDIGUL: Famous Lock
        return (
          <svg viewBox="0 0 100 100" fill="none" className="w-24 h-24 sm:w-28 sm:h-28 drop-shadow-xl select-none pointer-events-none">
            <ellipse cx="50" cy="88" rx="28" ry="6" fill="black" fillOpacity="0.2" />
            <rect x="25" y="44" width="50" height="42" rx="12" fill="white" fillOpacity="0.95" />
            <path
              d="M34 44 V30 C34 18 66 18 66 30 V44"
              stroke="white"
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
              opacity="0.9"
            />
            <circle cx="50" cy="62" r="5" fill="#4338CA" />
            <polygon points="48,62 52,62 53,74 47,74" fill="#4338CA" />
          </svg>
        );

      case 'pearl':
        // THOOTHUKUDI: Pearl City
        return (
          <svg viewBox="0 0 100 100" fill="none" className="w-24 h-24 sm:w-28 sm:h-28 drop-shadow-xl select-none pointer-events-none">
            <ellipse cx="50" cy="88" rx="30" ry="6" fill="black" fillOpacity="0.2" />
            <path
              d="M15 70 C 15 45, 85 45, 85 70 C 85 85, 15 85, 15 70 Z"
              fill="white"
              fillOpacity="0.85"
            />
            <circle cx="50" cy="56" r="16" fill="white" fillOpacity="0.98" />
            <circle cx="45" cy="50" r="6" fill="white" />
            <circle cx="54" cy="60" r="14" fill="#A7F3D0" fillOpacity="0.3" />
          </svg>
        );

      case 'statue':
        // KANNIYAKUMARI: Thiruvalluvar Statue
        return (
          <svg viewBox="0 0 100 100" fill="none" className="w-24 h-24 sm:w-28 sm:h-28 drop-shadow-xl select-none pointer-events-none">
            <ellipse cx="50" cy="88" rx="30" ry="6" fill="black" fillOpacity="0.2" />
            <rect x="30" y="60" width="40" height="26" rx="4" fill="white" fillOpacity="0.95" />
            <polygon points="40,60 60,60 55,20 45,20" fill="white" fillOpacity="0.9" />
            <circle cx="50" cy="15" r="6" fill="white" />
            <path d="M42 35 L30 45 M58 35 L68 28" stroke="white" strokeWidth="3" strokeLinecap="round" />
          </svg>
        );

      case 'fort':
        // VELLORE: Fort
        return (
          <svg viewBox="0 0 100 100" fill="none" className="w-24 h-24 sm:w-28 sm:h-28 drop-shadow-xl select-none pointer-events-none">
            <ellipse cx="50" cy="88" rx="30" ry="6" fill="black" fillOpacity="0.2" />
            <rect x="20" y="45" width="60" height="40" rx="4" fill="white" fillOpacity="0.95" />
            <rect x="20" y="35" width="12" height="12" rx="2" fill="white" />
            <rect x="44" y="35" width="12" height="12" rx="2" fill="white" />
            <rect x="68" y="35" width="12" height="12" rx="2" fill="white" />
            <path d="M42 85 V65 C42 60 58 60 58 65 V85 Z" fill="#78350F" />
          </svg>
        );

      default:
        // GENERAL CAMPUS
        return (
          <svg viewBox="0 0 100 100" fill="none" className="w-24 h-24 sm:w-28 sm:h-28 drop-shadow-xl select-none pointer-events-none">
            <ellipse cx="50" cy="88" rx="30" ry="6" fill="black" fillOpacity="0.2" />
            <polygon points="50,22 88,38 50,54 12,38" fill="white" fillOpacity="0.95" />
            <polygon points="26,45 26,65 50,75 74,65 74,45 50,55" fill="white" fillOpacity="0.8" />
            <path d="M82 42 V70" stroke="#FDE047" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="82" cy="72" r="3" fill="#FACC15" />
          </svg>
        );
    }
  };

  return (
    <section className="bg-white py-14 sm:py-16 px-4 sm:px-8 lg:px-12 border-b border-[#E5EAF2] select-none relative overflow-hidden">
      
      {/* Background Soft Accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-50/60 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-50/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="w-full max-w-[1720px] mx-auto space-y-6 sm:space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-left">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#174A9C]">
              <MapPin className="w-4 h-4 text-[#E31B23]" />
              <span>Statewide Network</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-black text-[#102A78] tracking-tight">
              92 Regional Branch Centers
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] font-medium">
              Tamil Nadu's Largest Classroom & Residential Coaching Network across all 38 districts.
            </p>
          </div>

          {/* Action buttons & Pagination Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevPage}
              disabled={totalPages <= 1}
              className="w-10 h-10 rounded-full border border-[#E5EAF2] bg-white hover:bg-slate-50 text-[#102A78] flex items-center justify-center shadow-xs transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
              title="Previous 4 Branches"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-bold text-[#64748B] px-1 select-none">
              {currentPage + 1} / {totalPages}
            </span>
            <button
              onClick={nextPage}
              disabled={totalPages <= 1}
              className="w-10 h-10 rounded-full border border-[#E5EAF2] bg-white hover:bg-slate-50 text-[#102A78] flex items-center justify-center shadow-xs transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
              title="Next 4 Branches"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <Link
              to="/centers"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#102A78] hover:bg-[#174A9C] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md shrink-0 cursor-pointer"
            >
              <span>All 92 Branches</span>
              <ArrowRight className="w-4 h-4 text-[#FFDE59]" />
            </Link>
          </div>
        </div>

        {/* Real-Time Live Search (Searches all 92 branches & all 38 districts) */}
        <div className="relative w-full max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search any district (e.g. Dindigul, Salem, Thanjavur, Erode, Vellore)..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setPage(0);
            }}
            className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-full border border-[#E5EAF2] focus:border-[#174A9C] outline-none bg-[#F8FAFD] transition-all shadow-2xs"
          />
          {searchQuery && (
            <button
              onClick={() => {
                setSearchQuery('');
                setPage(0);
              }}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600 px-1"
            >
              Clear
            </button>
          )}
        </div>

        {/* ----------------- EXACTLY 4 CARDS GRID (No 5th Extra Card Peeking Out) ----------------- */}
        {visibleBranches.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 pt-1">
            {visibleBranches.map((branch) => {
              const config = getDistrictConfig(branch);

              return (
                <div
                  key={branch.id}
                  className={`w-full h-[180px] sm:h-[190px] rounded-3xl p-5 sm:p-6 bg-gradient-to-br ${config.gradient} text-white shadow-xl ${config.shadow} hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 relative overflow-hidden flex items-center justify-between group cursor-pointer border border-white/20 select-none`}
                >
                  {/* Background Fluid Wave Accent */}
                  <svg
                    viewBox="0 0 200 120"
                    fill="none"
                    className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
                  >
                    <path
                      d="M-20,120 C40,40 120,130 220,60 L220,140 L-20,140 Z"
                      fill="white"
                    />
                    <path
                      d="M-10,30 C60,90 140,20 220,70"
                      stroke="white"
                      strokeWidth="1.5"
                      opacity="0.3"
                    />
                  </svg>

                  {/* Sparkling Twinkling Stars (✦ * •) */}
                  <div className="absolute inset-0 pointer-events-none">
                    <span className="absolute top-3 left-28 text-white/80 text-xs font-serif select-none animate-pulse">
                      ✦
                    </span>
                    <span className="absolute top-9 right-24 text-white/90 text-sm font-serif select-none">
                      ✦
                    </span>
                    <span className="absolute bottom-5 left-32 text-white/70 text-[10px] select-none">
                      •
                    </span>
                    <span className="absolute bottom-10 right-4 text-white/60 text-xs select-none">
                      ★
                    </span>
                  </div>

                  {/* Left Side: Branch Information */}
                  <div className="relative z-10 flex flex-col justify-between h-full max-w-[160px] sm:max-w-[175px]">
                    
                    {/* District / Landmark Specialty Pill */}
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/25 backdrop-blur-xs border border-white/30 text-white shadow-xs">
                        {branch.district}
                      </span>
                      <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded-full bg-black/25 text-white/95">
                        {config.badge}
                      </span>
                    </div>

                    {/* Main Title & Landmark Tag */}
                    <div className="space-y-0.5">
                      <h3 className="font-sans text-xl sm:text-2xl font-black tracking-tight text-white leading-tight drop-shadow-sm truncate">
                        {branch.district}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-white/90 font-medium line-clamp-1">
                        {config.title}
                      </p>
                    </div>

                    {/* Contact & Map Directions */}
                    <div className="flex items-center gap-3 text-[11px] font-semibold text-white/95 pt-1">
                      <a
                        href={`tel:${branch.phone}`}
                        className="flex items-center gap-1 hover:text-amber-200 transition-colors"
                        title={branch.phone}
                      >
                        <Phone className="w-3 h-3 shrink-0" />
                        <span>{branch.phone.slice(-6)}</span>
                      </a>
                      <span>•</span>
                      <a
                        href={branch.googleMapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 hover:text-amber-200 transition-colors"
                      >
                        <span>Map</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    </div>

                  </div>

                  {/* Right Side: Place's Famous 3D Symbol (Waterfall, Temple, Mango, Lock, etc.) */}
                  <div className="relative z-10 -mr-2 sm:-mr-1 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                    {renderPlaceSymbol(config.symbolType)}
                  </div>

                </div>
              );
            })}
          </div>
        ) : (
          <div className="p-8 text-center bg-slate-50 rounded-2xl border border-slate-200">
            <p className="text-sm font-bold text-[#102A78]">
              No branches found matching "{searchQuery}".
            </p>
            <p className="text-xs text-[#64748B] mt-1">
              Try searching by district name (e.g. Salem, Tenkasi, Dindigul, Thanjavur, Chennai, Madurai).
            </p>
          </div>
        )}

      </div>
    </section>
  );
};
