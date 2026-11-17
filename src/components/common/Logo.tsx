import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
}) => {
  // Height classes that maintain exact 3:1 aspect ratio without stretching
  const sizeClasses = {
    sm: 'h-9 sm:h-10 max-w-[210px]',
    md: 'h-11 sm:h-13 md:h-14 max-w-[260px]',
    lg: 'h-14 sm:h-16 md:h-18 max-w-[320px]',
    xl: 'h-16 sm:h-20 md:h-24 max-w-[400px]',
  };

  return (
    <Link
      to="/"
      className={`inline-flex items-center group focus:outline-none transition-transform duration-200 hover:opacity-95 ${className}`}
      aria-label="TAF IAS Academy — Official Portal"
    >
      <img
        src="/images/taf-logo.png"
        alt="TAF IAS Academy — உள்ளுவ தெல்லாம் உயர்வுள்ளல்"
        className={`${sizeClasses[size]} w-auto object-contain shrink-0`}
      />
    </Link>
  );
};
