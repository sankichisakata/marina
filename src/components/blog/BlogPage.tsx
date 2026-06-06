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
        <div className="bg-[#0B1D30] pt-28 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <p className="eyebrow text-[#0CBBD8]">Blog</p>
            <h1 className="page-title text-white mt-2 mb-3">アパレルのあれこれ</h1>
            <p className="text-white/50 text-sm leading-relaxed">
              アパレル業界の日々を綴っていく。<br className="hidden sm:block" />
              製造の現場、OEMの話、ブランドのこと、業界のトレンドまで。
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
