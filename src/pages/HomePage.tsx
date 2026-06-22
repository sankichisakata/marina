import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, X, Instagram } from 'lucide-react'
import Hero from '../components/sections/Hero'
import { blogPosts } from '../data/blogPosts'
import { useReveal } from '../hooks/useReveal'
import SEO from '../components/SEO'
import { useContact } from '../context/ContactContext'

const LINE_URL = 'https://lin.ee/XXXXXXXX'
const INSTAGRAM_URL = 'https://www.instagram.com/'

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
      <ServicesAlternate />
      <InstagramSection />
      <BlogPreview />
      <HomeFAQ />
      <CtaFullBleed />
    </>
  )
}

/* ─────── Contact Popup ─────── */
function ContactPopup() {
  const [visible, setVisible] = useState(false)
  const { open } = useContact()

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
        <button
          onClick={() => { close(); open() }}
          className="block text-center text-xs text-gray-400 hover:text-[#0CBBD8] transition-colors py-2 w-full"
        >
          メールで問い合わせる →
        </button>
      </div>
    </div>
  )
}

/* ─────── Services Alternate ─────── */
const servicesAlternate = [
  {
    label: 'OEM',
    title: '製造受託',
    sub: '小ロット50枚〜 / 大ロット3,000枚〜',
    body: 'お客様のデザインで服を作ります。バングラデシュ・ミャンマー・中国・日本の4ヶ国ネットワークで、ロット・予算・品質レベルに合わせた最適な工場をご提案。サンプル確認〜本生産まで専任担当者が伴走します。',
    img: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=800&q=80',
    href: '/services#oem',
    color: '#0CBBD8',
    reverse: false,
  },
  {
    label: 'ODM',
    title: 'ブランド開発支援',
    sub: '構想 → デザイン → 製造 → 出荷',
    body: 'ブランドのコンセプト設計からデザイン提案・製造・物流まで一貫対応。「服は作りたいけどデザインが決まっていない」「受注体制を整えたい」という方に最適です。',
    img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80',
    href: '/services#odm',
    color: '#0B1D30',
    reverse: true,
  },
  {
    label: '3PL',
    title: '物流代行',
    sub: 'アパレル・鞄・雑貨に特化',
    body: '入荷・保管・ピッキング・出荷をまるごとお任せ。EC・小売店向け発送・スポット検品など、急なご依頼にも柔軟に対応します。製造も物流もマリナ一社で完結できます。',
    img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80',
    href: '/services#3pl',
    color: '#E6A800',
    reverse: false,
  },
]

function ServicesAlternate() {
  const ref = useReveal()
  return (
    <section id="next">
      <div className="bg-[#0B1D30] px-6 sm:px-14 pt-16 sm:pt-24 pb-14">
        <div ref={ref} className="reveal">
          <p className="text-[11px] font-black tracking-[0.3em] uppercase text-[#0CBBD8] mb-4">Service</p>
          <h2 className="text-4xl sm:text-6xl font-black text-white leading-[1]">
            3つのサービスで、<br />
            <span className="text-[#FFE500]">ものづくりを完結。</span>
          </h2>
        </div>
      </div>
      {servicesAlternate.map((s, i) => (
        <ServiceRow key={s.label} {...s} idx={i} />
      ))}
    </section>
  )
}

function ServiceRow({ label, title, sub, body, img, href, color, reverse, idx }: typeof servicesAlternate[0] & { idx: number }) {
  const ref = useReveal()
  const isDark = color === '#0B1D30'
  const textPrimary   = isDark ? 'white' : '#0B1D30'
  const textSecondary = isDark ? 'rgba(255,255,255,0.55)' : 'rgba(0,0,0,0.5)'
  const textMeta      = isDark ? 'rgba(255,255,255,0.45)' : 'rgba(0,0,0,0.35)'
  const num = String(idx + 1).padStart(2, '0')
  return (
    <Link
      to={href}
      className={`group flex flex-col md:h-[380px] lg:h-[440px] ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}
    >
      {/* カラーブロック（テキスト側） */}
      <div
        className="w-full md:w-1/2 flex flex-col justify-between p-8 sm:p-12 lg:p-16 relative overflow-hidden"
        style={{ backgroundColor: color }}
      >
        {/* 巨大番号ウォーターマーク */}
        <span
          className="absolute -bottom-4 font-black leading-none select-none pointer-events-none text-black/10"
          style={{ fontSize: 'clamp(100px, 16vw, 200px)', right: reverse ? 'auto' : '-0.05em', left: reverse ? '-0.05em' : 'auto' }}
        >
          {num}
        </span>

        <span className="text-[10px] font-black tracking-[0.3em] relative" style={{ color: textMeta }}>{num}</span>

        <div ref={ref} className="reveal relative">
          <p className="text-[10px] font-black tracking-[0.3em] uppercase mb-4" style={{ color: textMeta }}>{label}</p>
          <h2
            className="font-black leading-[1.05] mb-5"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', color: textPrimary }}
          >
            {title}
          </h2>
          <p className="text-sm leading-relaxed mb-8 max-w-xs hidden sm:block" style={{ color: textSecondary }}>{body}</p>
          <span
            className="inline-flex items-center gap-2 text-xs font-black group-hover:gap-3 transition-all duration-300"
            style={{ color: textMeta }}
          >
            詳しく見る <ArrowRight size={13} />
          </span>
        </div>
      </div>

      {/* 写真側 */}
      <div className="w-full md:w-1/2 overflow-hidden min-h-[240px]">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
      </div>
    </Link>
  )
}

/* ─────── Instagram Section ─────── */
const instagramPosts = [
  { src: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&q=80', alt: '製品写真 1' },
  { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', alt: '縫製現場' },
  { src: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&q=80', alt: '製品写真 2' },
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
        <div className="grid grid-cols-3 gap-2.5 sm:gap-4 mb-6">
          {instagramPosts.map((post, i) => (
            <a key={i} href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"
              className="aspect-square overflow-hidden block group bg-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <img src={post.src} alt={post.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
            </a>
          ))}
        </div>
        <div className="text-center">
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2">
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
      <details className="bg-white border border-gray-100 rounded-2xl group open:border-[#0CBBD8] transition-colors overflow-hidden">
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

/* ─────── Full-bleed CTA ─────── */
function CtaFullBleed() {
  const ref = useReveal()
  const { open } = useContact()
  return (
    <section className="relative overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80"
        alt="" aria-hidden
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 overlay-porthole-center" />
      <div ref={ref} className="reveal relative max-w-4xl mx-auto px-4 sm:px-8 py-24 sm:py-32 text-center">
        <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight">
          まずは、話すところから<br />始めましょう。
        </h2>
        <p className="text-white/60 text-base mb-10 max-w-lg mx-auto leading-relaxed">
          「ラフ図しかない」「何から始めればいいかわからない」でも大丈夫。<br />
          初回相談は完全無料です。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={open} className="btn-water text-base px-10 py-4">
            無料で相談する <ArrowRight size={16} />
          </button>
          <Link to="/process" className="btn-outline-white text-base px-10 py-4">
            ご依頼の流れ <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
