import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, X, Instagram } from 'lucide-react'
import Hero from '../components/sections/Hero'
import { blogPosts } from '../data/blogPosts'
import { useReveal } from '../hooks/useReveal'
import SEO from '../components/SEO'

const LINE_URL = 'https://lin.ee/XXXXXXXX'
const INSTAGRAM_URL = 'https://www.instagram.com/'

/* トップに表示するFAQ（3つ）*/
const HOME_FAQ = [
  {
    question: '最低何枚から発注できますか？',
    answer: '小ロットは50枚から、大ロットは3,000枚以上から対応しています。まずはご希望のロット数と用途をお聞かせください。',
  },
  {
    question: '納期はどのくらいかかりますか？',
    answer: '小ロット（50枚〜）は約2.5ヶ月、大ロット（3,000枚〜）は約5ヶ月が目安です。販売日・イベント日が決まっている場合は最初にお伝えください。',
  },
  {
    question: 'デザインがない状態でも相談できますか？',
    answer: 'はい、もちろんです。手書きのラフ図や参考写真・URLだけでも対応できます。ODMでは一からデザイン提案も行います。',
  },
]

/* ── Home page ── */
export default function HomePage() {
  return (
    <>
      <SEO
        title="アパレルOEM・ODM・3PL製造代行 | 小ロット50枚〜"
        description="創業50年以上のアパレルOEM・ODM・3PL専門メーカー。小ロット50枚〜大ロット3,000枚以上。バングラデシュ・ミャンマー・中国・日本の4ヶ国対応。製造から物流まで一貫サポート。"
        faqSchema={HOME_FAQ}
      />
      <ContactPopup />
      <Hero />
      <ServiceTeaser />
      <InstagramSection />
      <BlogPreview />
      <HomeFAQ />
    </>
  )
}

/* ─────── Contact Popup ─────── */
function ContactPopup() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('marina_popup_shown')) return
    const el = document.getElementById('instagram')
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.2 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const close = () => {
    setVisible(false)
    localStorage.setItem('marina_popup_shown', '1')
  }

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={close} />
      <div className="relative bg-white w-full max-w-sm mx-4 mb-4 sm:mb-0 p-7 shadow-2xl">
        <button onClick={close} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors" aria-label="閉じる">
          <X size={20} />
        </button>
        <p className="text-[11px] font-black tracking-widest text-[#0CBBD8] uppercase mb-3">無料相談</p>
        <h3 className="text-xl font-black text-[#0B1D30] mb-2">気軽に相談してみませんか？</h3>
        <p className="text-sm text-gray-500 mb-6 leading-relaxed">
          「まだ何も決まっていない」段階でも大丈夫。<br />
          LINEで気軽にメッセージをどうぞ。
        </p>
        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={close}
          className="flex items-center justify-center gap-2 bg-[#06C755] text-white w-full py-4 font-black text-sm hover:bg-[#05B04A] transition-colors active:scale-95 mb-3"
        >
          LINEで相談する
        </a>
        <Link
          to="/contact#email"
          onClick={close}
          className="block text-center text-xs text-gray-400 hover:text-[#0CBBD8] transition-colors py-2"
        >
          メールで問い合わせる →
        </Link>
      </div>
    </div>
  )
}

/* ─────── Service Teaser ─────── */
const services = [
  {
    id: 'oem',
    imgSrc: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=700&q=80',
    label: 'OEM',
    title: '製造受託',
    sub: '小ロット50枚〜 / 大ロット3,000枚〜',
    desc: 'お客様のデザインで製造。小ロットから大量生産まで、最適な工場で仕上げます。',
    accent: '#0CBBD8',
    href: '/services#oem',
  },
  {
    id: 'odm',
    imgSrc: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=700&q=80',
    label: 'ODM',
    title: 'ブランド開発支援',
    sub: '構想 → デザイン → 製造 → 出荷',
    desc: 'ブランドの構想からデザイン提案、受注生産体制の構築、倉庫保管・出荷まで一貫サポート。',
    accent: '#0B1D30',
    href: '/services#odm',
  },
  {
    id: '3pl',
    imgSrc: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=700&q=80',
    label: '3PL',
    title: '物流代行',
    sub: 'アパレル・鞄・雑貨対応',
    desc: '迅速な対応ができる3PL体制。入荷・保管・ピッキング・出荷をまるごとお任せください。',
    accent: '#FFE500',
    href: '/services#3pl',
  },
]

function ServiceTeaser() {
  const ref = useReveal()
  return (
    <section id="next" className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div ref={ref} className="reveal text-center mb-8 sm:mb-12">
          <p className="eyebrow">Services</p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black leading-[1.1]">
            老舗の技術で、<span className="text-[#0CBBD8]">あなたの服を。</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {services.map((s, i) => <ServiceCard key={s.id} {...s} delay={i * 100} />)}
        </div>
        <div className="text-center mt-8 sm:mt-10">
          <Link to="/services" className="btn-outline">
            サービス詳細を見る <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  )
}

interface ServiceCardProps {
  imgSrc: string; label: string; title: string; sub: string; desc: string
  accent: string; href: string; delay: number
}
function ServiceCard({ imgSrc, label, title, sub, desc, accent, href, delay }: ServiceCardProps) {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal" style={{ transitionDelay: `${delay}ms` }}>
      <Link to={href} className="block bg-white border border-gray-100 h-full group hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden">
        <div className="aspect-[4/3] overflow-hidden">
          <img src={imgSrc} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
        </div>
        <div className="h-1" style={{ backgroundColor: accent }} />
        <div className="p-5 sm:p-6">
          <p className="text-[10px] font-black tracking-widest mb-1.5" style={{ color: accent }}>{label}</p>
          <h3 className="text-lg sm:text-xl font-black leading-tight mb-1.5">{title}</h3>
          <p className="text-xs text-gray-400 mb-3 font-medium">{sub}</p>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{desc}</p>
          <div className="mt-4 flex items-center gap-1 text-xs font-black" style={{ color: accent }}>
            詳しく見る <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </div>
  )
}

/* ─────── Instagram Section ─────── */
/*
  実際のInstagramフィードを接続するには以下のいずれかを使用してください：
  1. Instagram Basic Display API（要Metaアプリ登録）
  2. Behold.so / SnapWidget などのサードパーティ埋め込みサービス
  現在はプレースホルダー画像を使用しています。
*/
const instagramPosts = [
  {
    src: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&q=80',
    alt: '製品写真 1',
  },
  {
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    alt: '縫製現場',
  },
  {
    src: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&q=80',
    alt: '製品写真 2',
  },
]

function InstagramSection() {
  const ref = useReveal()
  return (
    <section id="instagram" className="py-14 sm:py-20 bg-[#F8FCFF]">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        <div ref={ref} className="reveal text-center mb-6 sm:mb-8">
          <p className="eyebrow">Instagram</p>
          <h2 className="text-2xl sm:text-3xl font-black">最新の投稿</h2>
          <p className="text-sm text-gray-400 mt-2">@marina_apparel</p>
        </div>

        <div className="grid grid-cols-3 gap-1.5 sm:gap-3 mb-6">
          {instagramPosts.map((post, i) => (
            <a
              key={i}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square overflow-hidden block group bg-gray-100"
            >
              <img
                src={post.src}
                alt={post.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </a>
          ))}
        </div>

        <div className="text-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <Instagram size={15} />
            Instagramをフォローする
          </a>
        </div>
      </div>
    </section>
  )
}

/* ─────── Blog Preview ─────── */
function BlogPreview() {
  const ref = useReveal()
  const recent = blogPosts.slice(0, 3)
  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div ref={ref} className="reveal flex justify-between items-end mb-8 sm:mb-10">
          <div>
            <p className="eyebrow">Blog</p>
            <h2 className="text-2xl sm:text-3xl font-black">アパレルのあれこれ</h2>
          </div>
          <Link to="/blog" className="hidden sm:flex items-center gap-1 text-sm font-black text-[#0CBBD8] hover:gap-2 transition-all">
            すべて見る <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {recent.map((post, i) => (
            <div key={post.id} className="reveal" style={{ transitionDelay: `${i * 100}ms` }}>
              <Link to={`/blog/${post.slug}`} className="card-base block group overflow-hidden">
                <div className="aspect-[16/9] overflow-hidden bg-[#E0F7FC]">
                  <img src={post.thumbnail} alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-4 sm:p-5">
                  <span className="text-[10px] font-black text-[#0CBBD8] bg-[#E0F7FC] px-2 py-1">{post.category}</span>
                  <h3 className="text-sm font-bold mt-3 line-clamp-2 group-hover:text-[#0CBBD8] transition-colors">{post.title}</h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="sm:hidden text-center mt-6">
          <Link to="/blog" className="btn-water">すべての記事を見る</Link>
        </div>
      </div>
    </section>
  )
}

/* ─────── Home FAQ ─────── */
function FaqItem({ question, answer, delay }: { question: string; answer: string; delay: number }) {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal" style={{ transitionDelay: `${delay}ms` }}>
      <details className="bg-white border border-gray-100 group open:border-[#0CBBD8] transition-colors">
        <summary className="flex items-center justify-between p-4 sm:p-5 cursor-pointer font-black text-sm list-none">
          <span className="flex items-start gap-2 sm:gap-3">
            <span className="text-[#0CBBD8] font-black shrink-0">Q.</span>
            {question}
          </span>
          <span className="text-[#0CBBD8] shrink-0 ml-3 text-lg group-open:rotate-45 transition-transform">+</span>
        </summary>
        <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-sm text-gray-600 leading-relaxed pl-8 sm:pl-10">
          {answer}
        </div>
      </details>
    </div>
  )
}

function HomeFAQ() {
  const ref = useReveal()
  return (
    <section className="py-14 sm:py-20 bg-[#F8FCFF]">
      <div className="max-w-3xl mx-auto px-4 sm:px-8">
        <div ref={ref} className="reveal text-center mb-8 sm:mb-10">
          <p className="eyebrow">よくある質問</p>
          <h2 className="text-2xl sm:text-3xl font-black">アパレルOEMについて</h2>
        </div>
        <div className="space-y-2 sm:space-y-3">
          {HOME_FAQ.map((faq, i) => (
            <FaqItem key={i} question={faq.question} answer={faq.answer} delay={i * 60} />
          ))}
        </div>
        <p className="text-center mt-6 sm:mt-8">
          <Link to="/process" className="text-sm font-black text-[#0CBBD8] hover:underline">
            すべてのよくある質問を見る →
          </Link>
        </p>
      </div>
    </section>
  )
}
