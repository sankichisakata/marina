import { useParams, Link, Navigate } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { blogPosts } from '../../data/blogPosts'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import SEO from '../SEO'

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const postIndex = blogPosts.findIndex((p) => p.slug === slug)
  const post = blogPosts[postIndex]

  if (!post) return <Navigate to="/blog" replace />

  const prev = blogPosts[postIndex + 1]
  const next = blogPosts[postIndex - 1]

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        ogImage={post.thumbnail}
        type="article"
        publishedAt={post.date}
      />
      <div className="page-wrapper bg-white">

        {/* Hero image */}
        <div className="relative h-48 sm:h-72 md:h-96 overflow-hidden bg-[#0B1D30]">
          <img
            src={post.thumbnail}
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D30] to-transparent" />
          <div className="absolute bottom-8 left-0 right-0 max-w-3xl mx-auto px-4 sm:px-8">
            <span className="text-[10px] font-black text-[#0CBBD8] bg-white/10 px-2 py-1 mb-3 inline-block">
              {post.category}
            </span>
            <h1 className="text-xl sm:text-3xl font-black text-white leading-snug">{post.title}</h1>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-8 py-14">

          {/* Meta */}
          <div className="flex items-center gap-4 mb-10 pb-6 border-b border-gray-100">
            <time className="text-sm text-gray-400" dateTime={post.date}>
              {post.date.replace(/-/g, '.')}
            </time>
            <Link to="/blog" className="flex items-center gap-1 text-sm text-[#0CBBD8] hover:underline">
              <ArrowLeft size={13} />ブログ一覧へ
            </Link>
          </div>

          {/* Content */}
          <article className="prose prose-sm sm:prose max-w-none prose-headings:font-black prose-headings:tracking-tight prose-a:text-[#0CBBD8] prose-strong:text-[#0B1D30] prose-li:marker:text-[#0CBBD8]">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </article>

          {/* Pagination */}
          <div className="mt-12 sm:mt-16 pt-8 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-4">
            <div>
              {prev && (
                <Link to={`/blog/${prev.slug}`} className="group flex flex-col gap-1">
                  <span className="text-xs text-gray-400 flex items-center gap-1"><ArrowLeft size={11} />前の記事</span>
                  <span className="text-sm font-bold line-clamp-2 group-hover:text-[#0CBBD8] transition-colors">{prev.title}</span>
                </Link>
              )}
            </div>
            <div className="sm:text-right">
              {next && (
                <Link to={`/blog/${next.slug}`} className="group flex flex-col gap-1 sm:items-end">
                  <span className="text-xs text-gray-400 flex items-center gap-1">次の記事<ArrowRight size={11} /></span>
                  <span className="text-sm font-bold line-clamp-2 group-hover:text-[#0CBBD8] transition-colors">{next.title}</span>
                </Link>
              )}
            </div>
          </div>

          {/* Back */}
          <div className="mt-12 text-center">
            <Link to="/blog" className="btn-water">
              <ArrowLeft size={15} /> ブログ一覧へ戻る
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
