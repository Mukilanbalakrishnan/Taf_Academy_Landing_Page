import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { BLOG_POSTS, BlogPost } from '@/data/blogs';
import {
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  Search,
  Sparkles,
  User,
  Tag,
} from 'lucide-react';

export const BlogList: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'ALL', label: 'All Articles' },
    { id: 'TNPSC Preparation', label: 'TNPSC Preparation' },
    { id: 'UPSC Preparation', label: 'UPSC Preparation' },
    { id: 'Examination Strategy', label: 'Examination Strategy' },
    { id: 'Government Job Updates', label: 'Police & Government Updates' },
    { id: 'Current Affairs', label: 'Current Affairs & Editorials' },
    { id: 'Student Guidance', label: 'Student Guidance' },
  ];

  const filteredPosts = BLOG_POSTS.filter((p) => {
    const matchCat = selectedCategory === 'ALL' || p.category === selectedCategory;
    const matchSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        p.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        p.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCat && matchSearch;
  });

  return (
    <div className="w-full bg-white">
      {/* Banner */}
      <section className="bg-[#F4F7FC] text-[#26344D] py-16 px-4 sm:px-6 border-b border-[#E5EAF2]">
        <div className="max-w-7xl mx-auto space-y-4 text-left">
          <Breadcrumb
            items={[{ label: 'Blog & Articles' }]}
          />
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E5EAF2] text-[#102A78] text-xs font-semibold uppercase tracking-widest shadow-2xs">
            <BookOpen className="w-4 h-4 text-[#E31B23]" />
            <span>Academic Editorial Desk</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#102A78]">
            Competitive Examination Insights & Strategy
          </h1>
          <p className="text-base sm:text-lg text-[#64748B] max-w-3xl leading-relaxed">
            Authored by senior faculties and past state rankers — offering actionable preparation roadmaps, high-yield subject blueprints, and mental resilience tips.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-10">
        
        {/* Search & Category Filter Bar */}
        <div className="bg-[#F4F7FC] p-6 rounded-3xl border border-[#E5EAF2] shadow-xs space-y-4 text-left">
          <div className="relative">
            <Search className="w-4 h-4 text-[#64748B] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search articles by title, subject or tag..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-[#E5EAF2] bg-white focus:border-[#102A78] focus:ring-1 focus:ring-[#102A78] outline-none text-[#26344D]"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#102A78] text-white shadow-xs'
                    : 'bg-white text-[#102A78] hover:bg-slate-50 border border-[#E5EAF2]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#E5EAF2] hover:border-[#102A78]/30 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="h-52 overflow-hidden relative bg-[#F4F7FC]">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded bg-[#102A78] text-white text-[10px] font-bold uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-[#64748B] font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#64748B]" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#64748B]" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="font-serif text-xl font-bold text-[#102A78] group-hover:text-[#174A9C] transition-colors leading-snug">
                    <Link to={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-xs text-[#64748B] line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#F4F7FC] text-[#102A78] border border-[#E5EAF2]">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-[#E5EAF2] mt-4 flex items-center justify-between">
                <div className="text-[11px] text-[#64748B]">
                  By <strong className="text-[#102A78]">{post.author}</strong>
                </div>
                <Link
                  to={`/blog/${post.slug}`}
                  className="text-xs font-bold text-[#102A78] hover:text-[#174A9C] flex items-center gap-1"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
};
