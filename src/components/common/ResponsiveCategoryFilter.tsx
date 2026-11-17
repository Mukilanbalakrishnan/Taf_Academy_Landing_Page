import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, ChevronDown, SlidersHorizontal } from 'lucide-react';

export interface CategoryOption {
  id: string;
  label: string;
}

interface ModernDropdownProps {
  options: CategoryOption[];
  value: string;
  onChange: (value: string) => void;
  ariaLabel?: string;
  compact?: boolean;
}

export const ModernDropdown: React.FC<ModernDropdownProps> = ({
  options,
  value,
  onChange,
  ariaLabel = 'Select option',
  compact = false,
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const selectedOption = options.find((opt) => opt.id === value) || options[0];

  useEffect(() => {
    const handleOutside = (e: MouseEvent | TouchEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };

    document.addEventListener('mousedown', handleOutside);
    document.addEventListener('touchstart', handleOutside, { passive: true });
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handleOutside);
      document.removeEventListener('touchstart', handleOutside);
      document.removeEventListener('keydown', handleKey);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full">
      <button
        type="button"
        aria-label={ariaLabel}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className={`w-full flex items-center justify-between gap-3 rounded-2xl bg-white border transition-all duration-200 cursor-pointer select-none ${
          compact ? 'px-3.5 py-2.5' : 'px-3.5 py-2.5'
        } ${
          open
            ? 'border-[#102A78] ring-4 ring-[#102A78]/10 shadow-md'
            : 'border-[#E5EAF2] hover:border-[#102A78]/40 shadow-xs'
        }`}
      >
        <div className="flex items-center gap-2.5 min-w-0">
          <span className="w-7 h-7 rounded-lg bg-[#F4F7FC] text-[#174A9C] flex items-center justify-center shrink-0">
            <SlidersHorizontal className="w-3.5 h-3.5" aria-hidden="true" />
          </span>
          <span className="text-xs font-extrabold uppercase tracking-wider text-[#102A78] truncate">
            {selectedOption?.label}
          </span>
        </div>

        <ChevronDown
          className={`w-4 h-4 text-[#102A78] shrink-0 transition-transform duration-200 ${
            open ? 'rotate-180 text-[#E31B23]' : ''
          }`}
          aria-hidden="true"
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="listbox"
            aria-label={ariaLabel}
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.16, ease: 'easeOut' }}
            className="absolute left-0 right-0 top-full mt-2 z-40 rounded-2xl bg-white border border-[#E5EAF2] shadow-[0_20px_50px_-12px_rgba(16,42,120,0.24)] p-2 max-h-[300px] overflow-y-auto origin-top space-y-1"
          >
            {options.map((opt) => {
              const isSelected = opt.id === value;
              return (
                <button
                  key={opt.id}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => {
                    onChange(opt.id);
                    setOpen(false);
                  }}
                  className={`w-full flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl text-left text-xs font-bold tracking-wide transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#102A78] text-white shadow-xs'
                      : 'text-[#26344D] hover:bg-[#F4F7FC] hover:text-[#102A78]'
                  }`}
                >
                  <span className="truncate">{opt.label}</span>
                  {isSelected && (
                    <Check className="w-4 h-4 text-[#FFDE59] shrink-0 stroke-[2.5]" />
                  )}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface ResponsiveCategoryFilterProps {
  options: CategoryOption[];
  value: string;
  onChange: (value: string) => void;
  ariaLabel?: string;
  variant?: 'default' | 'soft';
}

export const ResponsiveCategoryFilter: React.FC<ResponsiveCategoryFilterProps> = ({
  options,
  value,
  onChange,
  ariaLabel = 'Filter category',
  variant = 'default',
}) => {
  return (
    <div className="w-full md:w-auto">
      {/* Mobile Modern Custom Dropdown (< md) */}
      <div className="md:hidden w-full">
        <ModernDropdown
          options={options}
          value={value}
          onChange={onChange}
          ariaLabel={ariaLabel}
        />
      </div>

      {/* Desktop Pill Bar (md+) */}
      <div className="hidden md:flex items-center flex-wrap gap-2">
        {options.map((opt) => {
          const isActive = value === opt.id;
          const inactiveClass =
            variant === 'soft'
              ? 'bg-[#EDEBE8] hover:bg-[#E2DFD9] text-[#475569] hover:text-[#102A78]'
              : 'bg-white text-[#102A78] hover:bg-slate-50 border border-[#E5EAF2]';

          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => onChange(opt.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer select-none ${
                isActive ? 'bg-[#102A78] text-white shadow-xs' : inactiveClass
              }`}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};
