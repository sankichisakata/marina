import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'
import { blogPosts } from '../../data/blogPosts'
import { ArrowRight } from 'lucide-react'

export default function BlogSection() {
  const ref = useReveal()
  const recent = blogPosts.slice(0, 3)

  return (
    <section id="blog" className="py-24 bg-[#F2F8FB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div ref={ref} className="reveal flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="section-label">Blog</p>
            <h2 className="section-title">
              製造ノウハウ・
              <br className="sm:hidden" />
              事例を発信中
            </h2>
          </div>
          <Link
            to="/blog"
            className="flex items-center gap-2 text-sm font-bold hover:text-[#0CBBD8] transition-colors group"
          >
            すべての記事を見る
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recent.map((post, i) => (
            <BlogCard key={post.id} post={post} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface BlogCardProps {
  post: (typeof blogPosts)[0]
  delay: number
}

function BlogCard({ post, delay }: BlogCardProps) {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal" style={{ transitionDelay: `${delay}ms` }}>
      <Link to={`/blog/${post.slug}`} className="card block group overflow-hidden">
        <div className="aspect-[16/9] overflow-hidden bg-[#D4E8EF]">
          <img
            src={post.thumbnail}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-bold text-[#0CBBD8] bg-[#E8F7FB] px-2 py-1">
              {post.category}
            </span>
            <time className="text-xs text-[#64748B]" dateTime={post.date}>
              {post.date.replace(/-/g, '.')}
            </time>
          </div>
          <h3 className="text-sm font-bold leading-snug mb-2 group-hover:text-[#0CBBD8] transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="text-xs text-[#64748B] leading-relaxed line-clamp-2">{post.excerpt}</p>
        </div>
      </Link>
    </div>
  )
}
