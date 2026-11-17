import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import { CURRENT_AFFAIRS } from '@/data/currentAffairs';
import { BLOG_POSTS } from '@/data/blogs';

export const CurrentAffairsAndBlogSection: React.FC = () => {
  const topCurrentAffairs = CURRENT_AFFAIRS.slice(0, 3);
  const topBlogs = BLOG_POSTS.slice(0, 2);

  return (
    <section className="bg-white py-14 sm:py-16 px-4 sm:px-8 lg:px-12 border-b border-[#E5EAF2]">
      <div className="w-full max-w-[1720px] mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-left">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#102A78]">
              <span className="w-2 h-2 rounded-full bg-[#E31B23]" />
              <span>Knowledge Stream</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#102A78] tracking-tight">
              Current Affairs & Strategy Insights
            </h2>
          </div>

          <Link
            to="/current-affairs"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#102A78] hover:text-[#E31B23] uppercase tracking-wider transition-colors shrink-0"
          >
            <span>View All Insights</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 2-Column Split: Current Affairs & Strategy Blogs (Minimal & Clean) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
          
          {/* Current Affairs (7 Cols) */}
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-gray-200">
              <span className="text-xs font-bold uppercase tracking-wider text-[#102A78]">
                Daily Exam Current Affairs
              </span>
              <span className="text-[11px] text-[#E31B23] font-bold">Updated Today</span>
            </div>

            <div className="space-y-3">
              {topCurrentAffairs.map((item) => (
                <Link
                  key={item.id}
                  to="/current-affairs"
                  className="block bg-[#F8FAFD] border border-[#E5EAF2] rounded-xl p-4 hover:bg-white hover:border-[#102A78]/30 hover:shadow-xs transition-all group"
                >
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="font-bold text-[#102A78] uppercase text-[10px] px-2 py-0.5 rounded-full bg-white border border-[#E5EAF2]">
                      {item.category}
                    </span>
                    <span className="text-[#64748B] text-[11px]">
                      {item.dateLabel}
                    </span>
                  </div>

                  <h3 className="font-serif text-base font-bold text-[#102A78] group-hover:text-[#E31B23] transition-colors leading-snug line-clamp-1">
                    {item.title}
                  </h3>

                  {item.tamilTitle && (
                    <p className="text-xs text-[#64748B] truncate mt-1">
                      {item.tamilTitle}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Preparation Strategy Blog (5 Cols) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-gray-200">
              <span className="text-xs font-bold uppercase tracking-wider text-[#102A78]">
                Faculty Strategy Guides
              </span>
              <Link to="/blog" className="text-xs font-bold text-[#102A78] hover:text-[#E31B23]">
                All Posts →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
              {topBlogs.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="bg-white border border-[#E5EAF2] rounded-xl overflow-hidden hover:shadow-md transition-all group flex items-center p-3 gap-3"
                >
                  <div className="w-24 h-20 rounded-lg overflow-hidden shrink-0 bg-slate-100">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="flex-1 min-w-0 space-y-1">
                    <span className="text-[10px] font-bold text-[#E31B23] uppercase tracking-wider block">
                      {post.category}
                    </span>
                    <h3 className="font-serif text-sm font-bold text-[#102A78] group-hover:text-[#E31B23] transition-colors line-clamp-2 leading-snug">
                      {post.title}
                    </h3>
                    <div className="flex items-center gap-1 text-[10px] text-[#64748B]">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
