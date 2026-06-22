/**
 * Plan A — 実績・信頼訴求型
 * perth.co.jp 参考：白基調、数字で実績強調、選ばれる理由、事例ギャラリー
 */
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import Hero from '../components/sections/Hero'

export default function PlanAPage() {
  return (
    <div>
      <div className="fixed top-2 left-1/2 -translate-x-1/2 z-[9999] bg-[#FFE500] text-[#0B1D30] text-[11px] font-black px-4 py-1.5 shadow-lg tracking-widest">
        PLAN A — 実績・信頼訴求型
      </div>
      <Hero />
      <StatsBar />
      <WhyUs />
      <ServicesGrid />
      <Gallery />
      <CtaBanner />
    </div>
  )
}

/* 数字バー */
function StatsBar() {
  const stats = [
    { num: '50年+', label: 'の実績' },
    { num: '4ヶ国', label: '生産拠点' },
    { num: '50枚〜', label: '小ロット対応' },
    { num: '3,000枚+', label: '大ロット対応' },
  ]
  return (
    <div className="bg-[#0B1D30] py-6 sm:py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        {stats.map(s => (
          <div key={s.num}>
            <p className="text-2xl sm:text-3xl font-black text-[#FFE500]">{s.num}</p>
            <p className="text-xs text-white/50 mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

/* 選ばれる理由 */
const reasons = [
  { title: '創業50年以上の縫製技術', body: '国内縫製から始まった確かな品質管理。どの工場でも同じ基準で検品・出荷します。' },
  { title: '4ヶ国の生産ネットワーク', body: 'バングラデシュ・ミャンマー・中国・日本。ロット・予算・品質レベルで最適な工場を提案。' },
  { title: '小ロット50枚から対応', body: '試作・新ブランド立ち上げも歓迎。50枚から丁寧に対応します。' },
  { title: '一気通貫のサポート体制', body: 'ラフ図段階からサンプル確認・本生産・出荷まで専任担当者が伴走します。' },
  { title: '製造から物流まで完結', body: 'OEM・ODM製造だけでなく、入荷・保管・出荷の3PLも一社で完結。' },
  { title: '急なご依頼にも対応', body: '「明日から」「突然ロット増」などの急な相談も、できる限り柔軟に対応します。' },
]

function WhyUs() {
  const ref = useReveal()
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div ref={ref} className="reveal text-center mb-12">
          <p className="eyebrow">Why Marina</p>
          <h2 className="text-2xl sm:text-4xl font-black">選ばれる6つの理由</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <ReasonCard key={r.title} {...r} delay={i * 60} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ReasonCard({ title, body, delay }: { title: string; body: string; delay: number }) {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal flex gap-4 p-6 border border-gray-100 hover:border-[#0CBBD8] hover:shadow-md transition-all duration-300" style={{ transitionDelay: `${delay}ms` }}>
      <CheckCircle size={20} className="text-[#0CBBD8] shrink-0 mt-0.5" />
      <div>
        <h3 className="font-black mb-1.5 text-[#0B1D30]">{title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">{body}</p>
      </div>
    </div>
  )
}

/* サービス */
const services = [
  { label: 'OEM', title: '製造受託', sub: '50枚〜 / 3,000枚〜', href: '/services#oem', color: '#0CBBD8', img: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=700&q=80' },
  { label: 'ODM', title: 'ブランド開発支援', sub: '構想→製造→出荷', href: '/services#odm', color: '#0B1D30', img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=700&q=80' },
  { label: '3PL', title: '物流代行', sub: 'アパレル・鞄・雑貨', href: '/services#3pl', color: '#FFE500', img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=700&q=80' },
]

function ServicesGrid() {
  const ref = useReveal()
  return (
    <section className="py-16 sm:py-24 bg-[#F8FCFF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div ref={ref} className="reveal text-center mb-10">
          <p className="eyebrow">Services</p>
          <h2 className="text-2xl sm:text-4xl font-black">3つのサービス</h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <ServiceCard key={s.label} {...s} delay={i * 80} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/services" className="btn-outline">サービス詳細を見る <ArrowRight size={14} /></Link>
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ label, title, sub, href, color, img, delay }: typeof services[0] & { delay: number }) {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal" style={{ transitionDelay: `${delay}ms` }}>
      <Link to={href} className="block group overflow-hidden bg-white border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="aspect-[4/3] overflow-hidden">
          <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
        </div>
        <div className="h-1" style={{ backgroundColor: color }} />
        <div className="p-5">
          <p className="text-[10px] font-black tracking-widest mb-1" style={{ color }}>{label}</p>
          <h3 className="text-lg font-black">{title}</h3>
          <p className="text-xs text-gray-400 mt-1">{sub}</p>
        </div>
      </Link>
    </div>
  )
}

/* 製造事例ギャラリー */
const galleryImgs = [
  { src: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&q=80', label: 'Tシャツ・カットソー' },
  { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', label: '縫製現場' },
  { src: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&q=80', label: 'ジャケット類' },
  { src: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80', label: 'レディースウェア' },
  { src: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600&q=80', label: '検品・梱包' },
  { src: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=600&q=80', label: 'ユニフォーム類' },
]

function Gallery() {
  const ref = useReveal()
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div ref={ref} className="reveal text-center mb-10">
          <p className="eyebrow">Gallery</p>
          <h2 className="text-2xl sm:text-4xl font-black">製造事例</h2>
          <p className="text-sm text-gray-400 mt-2">これまでに手がけた服づくりの一部をご紹介します</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
          {galleryImgs.map((g, i) => (
            <GalleryItem key={i} {...g} delay={i * 50} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/contact" className="btn-water">製造事例についてお問い合わせ <ArrowRight size={14} /></Link>
        </div>
      </div>
    </section>
  )
}

function GalleryItem({ src, label, delay }: { src: string; label: string; delay: number }) {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal relative aspect-square overflow-hidden group" style={{ transitionDelay: `${delay}ms` }}>
      <img src={src} alt={label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
      <div className="absolute inset-0 bg-[#0B1D30]/0 group-hover:bg-[#0B1D30]/50 transition-colors duration-300 flex items-end">
        <span className="text-white text-xs font-black px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{label}</span>
      </div>
    </div>
  )
}

/* CTA */
function CtaBanner() {
  const ref = useReveal()
  return (
    <section className="py-16 sm:py-20 bg-[#0B1D30]">
      <div ref={ref} className="reveal max-w-3xl mx-auto px-4 sm:px-8 text-center">
        <h2 className="text-2xl sm:text-4xl font-black text-white mb-4">まずは気軽にご相談を。</h2>
        <p className="text-white/60 text-sm mb-8 leading-relaxed">
          「まだ何も決まっていない」「ラフ図しかない」段階でも大丈夫。<br />
          初回相談は完全無料です。
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/contact" className="btn-water">お問い合わせはこちら <ArrowRight size={14} /></Link>
          <Link to="/process" className="btn-outline-white">ご依頼の流れを見る <ArrowRight size={14} /></Link>
        </div>
      </div>
    </section>
  )
}
