import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { BLOG_POSTS } from '@/data/blogs';
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  Tag,
  BookOpen,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { OFFICIAL_CONTACT } from '@/data/contact';

export const BlogDetail: React.FC<{ onOpenEnquiry: (courseName?: string) => void }> = ({ onOpenEnquiry }) => {
  const { slug } = useParams<{ slug: string }>();

  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const related = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 2);

  return (
    <div className="w-full bg-white">
      {/* Article Header */}
      <section className="bg-[#F4F7FC] text-[#26344D] py-16 px-4 sm:px-6 border-b border-[#E5EAF2]">
        <div className="max-w-4xl mx-auto space-y-6 text-left">
          <Breadcrumb
            items={[
              { label: 'Blog', href: '/blog' },
              { label: post.category, href: '/blog' },
              { label: post.title },
            ]}
          />

          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-white text-[#102A78] text-xs font-bold uppercase tracking-wider border border-[#E5EAF2] shadow-2xs">
              {post.category}
            </span>
            <span className="text-xs text-[#64748B] font-mono flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#102A78] leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#E5EAF2] text-xs text-[#64748B]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white border border-[#E5EAF2] flex items-center justify-center font-bold text-[#102A78] shadow-2xs">
                <User className="w-5 h-5 text-[#102A78]" />
              </div>
              <div>
                <div className="font-bold text-[#102A78] text-sm">{post.author}</div>
                <div className="text-[#64748B] text-[11px]">{post.authorRole}</div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-[#64748B] font-mono">
              <span>Published: {post.date}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14 space-y-12 text-left">
        
        {/* Cover Photo */}
        <div className="h-80 sm:h-96 rounded-3xl overflow-hidden shadow-md border border-[#E5EAF2]">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Narrative Paragraphs */}
        <div className="bg-[#F4F7FC] rounded-3xl p-8 sm:p-12 border border-[#E5EAF2] shadow-2xs space-y-6 text-[#26344D] leading-relaxed text-base sm:text-lg">
          {post.content.map((paragraph, index) => (
            <p key={index} className="leading-relaxed">
              {paragraph}
            </p>
          ))}

          {/* Tags */}
          <div className="pt-6 border-t border-[#E5EAF2] flex flex-wrap items-center gap-2">
            <Tag className="w-4 h-4 text-[#102A78]" />
            <span className="text-xs font-bold text-[#102A78] uppercase tracking-wider mr-2">Topic Tags:</span>
            {post.tags.map((tag) => (
              <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-white text-[#102A78] border border-[#E5EAF2] font-medium shadow-2xs">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Counselling Callout */}
        <div className="bg-[#F4F7FC] text-[#26344D] rounded-3xl p-8 border border-[#E5EAF2] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-2">
            <h3 className="font-serif text-2xl font-bold text-[#102A78]">
              Want expert faculty feedback on your preparation?
            </h3>
            <p className="text-xs text-[#64748B]">
              Register for free mock evaluation and guidance across our 92 centers.
            </p>
          </div>
          <button
            onClick={() => onOpenEnquiry(post.category)}
            className="px-6 py-3.5 rounded-xl bg-[#102A78] hover:bg-[#174A9C] text-white text-xs font-bold uppercase tracking-wider shrink-0 transition-colors cursor-pointer shadow-sm"
          >
            Request Free Counselling
          </button>
        </div>

        {/* Related Guides */}
        {related.length > 0 && (
          <div className="space-y-6 pt-6 border-t border-[#E5EAF2]">
            <h3 className="font-serif text-2xl font-bold text-[#102A78]">
              Related Strategic Guides
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {related.map((rel) => (
                <div key={rel.id} className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-gold-500/50 shadow-xs flex flex-col justify-between space-y-3">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-gold-700">{rel.category}</span>
                    <h4 className="font-serif text-lg font-bold text-navy-950 mt-1">
                      <Link to={`/blog/${rel.slug}`}>{rel.title}</Link>
                    </h4>
                    <p className="text-xs text-gray-600 line-clamp-2 mt-1">{rel.excerpt}</p>
                  </div>
                  <Link to={`/blog/${rel.slug}`} className="text-xs font-bold text-navy-950 hover:text-gold-700 flex items-center gap-1 pt-2 border-t border-gray-100">
                    <span>Read Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
