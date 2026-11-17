import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className = '' }) => {
  return (
    <nav aria-label="Breadcrumb" className={`flex items-center text-xs text-gray-500 overflow-x-auto py-2.5 ${className}`}>
      <ol className="flex items-center gap-1.5 whitespace-nowrap">
        <li>
          <Link to="/" className="flex items-center gap-1 text-gray-500 hover:text-navy-900 transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1.5">
              <ChevronRight className="w-3 h-3 text-gray-400 shrink-0" />
              {item.href && !isLast ? (
                <Link to={item.href} className="text-gray-500 hover:text-navy-900 transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="font-semibold text-navy-950" aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
