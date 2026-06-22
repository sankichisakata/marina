import { useState } from 'react'
import { Link } from 'react-router-dom'
import { blogPosts } from '../../data/blogPosts'
import SEO from '../SEO'

const categories = ['すべて', '製造の現場', 'OEM・ODM・3PL', 'ブランドの話', 'トレンド', 'お知らせ'] as const
type Category = (typeof categories)[number]

export default function BlogPage() {
  const [active, setActive] = useState<Category>('すべて')

  const filtered = active === 'すべて'
    ? blogPosts
    : blogPosts.filter((p) => p.category === active)

  return (
    <>
      <SEO
        title="アパレルのあれこれ"
        description="アパレル業界の日々を綴っていく。製造の現場、OEM・ODM・3PLの話、ブランドのこと、業界トレンドまで。株式会社マリナのブログ。"
        path="/blog"
      />
      <div className="page-wrapper bg-white">

        {/* Header */}
        <div className="relative min-h-[70vh] bg-[#0B1D30] overflow-hidden flex items-center">
          <img
            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=1600&q=80"
            alt="" aria-hidden
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 overlay-porthole" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-8 pt-32 pb-16 w-full">
            <p className="text-[#0CBBD8] text-[11px] font-black tracking-[0.3em] uppercase mb-6">Blog</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-[1] mb-6">
              アパレルの<br />
              <span className="text-[#FFE500]">あれこれ</span>
            </h1>
            <p className="text-white/60 text-base leading-relaxed max-w-lg">
              製造の現場・OEM/ODM/3PLの話・ブランドのこと・業界トレンドまで。
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-14">

          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 text-xs font-black tracking-wide transition-all ${
                  active === cat
                    ? 'bg-[#0B1D30] text-white'
                    : 'bg-white border border-gray-200 text-gray-500 hover:border-[#0CBBD8] hover:text-[#0CBBD8]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <p className="text-gray-400 text-sm py-16 text-center">該当する記事がありません。</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((post) => (
                <Link key={String(post.id)} to={`/blog/${post.slug}`} className="card-base block group overflow-hidden">
                  <div className="aspect-[16/9] overflow-hidden bg-[#E0F7FC]">
                    <img
                      src={post.thumbnail}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[10px] font-black text-[#0CBBD8] bg-[#E0F7FC] px-2 py-1">
                        {post.category}
                      </span>
                      <time className="text-xs text-gray-400" dateTime={post.date}>
                        {post.date.replace(/-/g, '.')}
                      </time>
                    </div>
                    <h2 className="text-sm font-bold leading-snug mb-2 group-hover:text-[#0CBBD8] transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">{post.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Notion info */}
          <div className="mt-16 border border-dashed border-[#D4E8EF] p-6 bg-[#F8FCFF] text-sm text-gray-500">
            <p className="font-black text-[#0B1D30] mb-2">📝 Notion連携でブログ管理</p>
            <ul className="space-y-1 text-xs leading-relaxed">
              <li>1. Notion に新しいページを作成してブログを書く</li>
              <li>2. <code className="bg-white px-1 border border-gray-200 break-all">npm run fetch-blog</code> を実行 → <code className="bg-white px-1 border border-gray-200 break-all">src/data/blogPosts.ts</code> が自動更新</li>
              <li>3. <code className="bg-white px-1 border border-gray-200 break-all">npm run build</code> してデプロイ</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
