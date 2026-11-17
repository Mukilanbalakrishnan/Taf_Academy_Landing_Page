import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';
import { Award, Building, Calendar, GraduationCap } from 'lucide-react';
import { NETWORK_SUMMARY } from '@/data/branches';

interface CounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  formatCommas?: boolean;
}

const CountUp: React.FC<CounterProps> = ({
  target,
  suffix = '',
  prefix = '',
  duration = 2000,
  formatCommas = true,
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  useEffect(() => {
    if (!isInView) {
      setCount(0);
      return;
    }

    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);

      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeOut * target);

      setCount(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, target, duration]);

  const formattedNumber = formatCommas
    ? count.toLocaleString('en-IN')
    : count.toString();

  return (
    <span ref={ref} className="tabular-nums font-extrabold tracking-tight">
      {prefix}
      {formattedNumber}
      {suffix}
    </span>
  );
};

export const StatsSection: React.FC = () => {
  const stats = [
    {
      icon: Award,
      target: 16000,
      suffix: '+',
      formatCommas: true,
      label: 'Officer Selections',
      highlight: 'TNPSC & Uniform Services',
      iconColor: 'text-[#E31B23]',
      bgColor: 'bg-red-50',
    },
    {
      icon: Building,
      target: NETWORK_SUMMARY.claimedCount || 92,
      suffix: '',
      formatCommas: false,
      label: 'Regional Branches',
      badge: 'Statewide',
      iconColor: 'text-[#102A78]',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Calendar,
      target: 2009,
      suffix: '',
      formatCommas: false,
      label: 'Founded in Tenkasi',
      highlight: '15+ Years of Excellence',
      iconColor: 'text-[#E6B422]',
      bgColor: 'bg-amber-50',
    },
    {
      icon: GraduationCap,
      target: 8500,
      suffix: '+',
      formatCommas: true,
      label: 'Uniform Services Ranks',
      badge: 'Top Ranks',
      iconColor: 'text-[#174A9C]',
      bgColor: 'bg-indigo-50',
    },
  ];

  return (
    <section className="bg-[#F4F7FC] text-[#26344D] py-8 sm:py-10 px-4 sm:px-8 lg:px-12 border-b border-[#E5EAF2]">
      <div className="w-full max-w-[1720px] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-left">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="relative bg-white border border-[#E5EAF2] hover:border-[#102A78]/30 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-0.5 shadow-2xs hover:shadow-md group flex flex-col justify-between"
              >
                {/* Top Row: Icon & Tag */}
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl ${stat.bgColor} ${stat.iconColor} flex items-center justify-center group-hover:scale-105 transition-transform`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  {stat.badge && (
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-blue-50 text-[#102A78] border border-blue-200">
                      {stat.badge}
                    </span>
                  )}
                  {stat.highlight && (
                    <span className="text-[10px] font-semibold text-[#64748B]">
                      {stat.highlight}
                    </span>
                  )}
                </div>

                {/* Animated Metric */}
                <div className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#102A78] leading-none">
                  <CountUp
                    target={stat.target}
                    suffix={stat.suffix}
                    formatCommas={stat.formatCommas}
                    duration={1800}
                  />
                </div>

                {/* Punchy Label */}
                <div className="font-sans text-xs sm:text-[13px] font-bold text-[#26344D] mt-2 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
