/**
 * Plan C — ビジュアルインパクト型
 * 大きな画像・左右交互レイアウト・フルスクリーンCTA
 */
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

export default function PlanCPage() {
  return (
    <div>
      <div className="fixed top-2 left-1/2 -translate-x-1/2 z-[9999] bg-[#0B1D30] text-[#FFE500] text-[11px] font-black px-4 py-1.5 shadow-lg tracking-widest">
        PLAN C — ビジュアルインパクト型
      </div>
      <HeroC />
      <ServicesAlternate />
      <StatsFullBleed />
      <CtaFullBleed />
    </div>
  )
}

/* フルスクリーンヒーロー */
function HeroC() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=1600&q=80"
        alt="" aria-hidden
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[#0B1D30]/75" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 pt-28 pb-20 w-full">
        <div className="max-w-3xl">
          <p className="text-[#0CBBD8] text-[11px] font-black tracking-[0.3em] uppercase mb-6">Apparel OEM · ODM · 3PL</p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[90px] font-black text-white leading-[1] mb-8">
            あなたの作るを、<br />
            <span className="text-[#FFE500]">カタチにします</span>
          </h1>
          <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-10 max-w-xl">
            創業50年以上。小ロット50枚から大ロット3,000枚まで。<br />
            4ヶ国の生産ネットワークで最適な製造を提供します。
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link to="/contact" className="btn-water text-base px-8 py-4">無料相談をする <ArrowRight size={16} /></Link>
            <Link to="/services" className="btn-outline-white text-base px-8 py-4">サービスを見る <ArrowRight size={16} /></Link>
          </div>
        </div>

        {/* 数字 */}
        <div className="mt-16 pt-10 border-t border-white/10 grid grid-cols-3 gap-6 max-w-lg">
          {[['50年+', 'の実績'], ['4ヶ国', '生産拠点'], ['50枚〜', '小ロット']].map(([num, label]) => (
            <div key={num}>
              <p className="text-2xl sm:text-3xl font-black text-[#FFE500]">{num}</p>
              <p className="text-[11px] text-white/40 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* 左右交互サービスセクション */
const servicesC = [
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
  return (
    <section className="bg-white">
      {servicesC.map((s) => (
        <ServiceRow key={s.label} {...s} />
      ))}
    </section>
  )
}

function ServiceRow({ label, title, sub, body, img, href, color, reverse }: typeof servicesC[0]) {
  const ref = useReveal()
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
      {/* 画像 */}
      <div className="md:w-1/2 aspect-[4/3] md:aspect-auto overflow-hidden">
        <img src={img} alt={title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
      </div>
      {/* テキスト */}
      <div ref={ref} className="reveal md:w-1/2 flex items-center bg-white p-8 sm:p-12 lg:p-16">
        <div className="max-w-lg">
          <p className="text-[10px] font-black tracking-widest mb-3 uppercase" style={{ color }}>{label}</p>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0B1D30] mb-2">{title}</h2>
          <p className="text-xs font-bold text-gray-400 mb-5">{sub}</p>
          <p className="text-sm text-gray-600 leading-relaxed mb-8">{body}</p>
          <Link to={href} className="flex items-center gap-2 text-sm font-black hover:gap-3 transition-all" style={{ color }}>
            詳しく見る <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  )
}

/* 数字フルブリード */
function StatsFullBleed() {
  const ref = useReveal()
  const items = [
    { num: '1972', label: '年創業' },
    { num: '4', label: 'ヶ国の生産拠点' },
    { num: '50', label: '枚から製造可能' },
    { num: '3,000', label: '枚以上の大ロット対応' },
  ]
  return (
    <section className="bg-[#F8FCFF] py-16 sm:py-24">
      <div ref={ref} className="reveal max-w-6xl mx-auto px-4 sm:px-8 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
        {items.map(item => (
          <div key={item.num}>
            <p className="text-4xl sm:text-5xl font-black text-[#0B1D30]">{item.num}</p>
            <p className="text-sm text-gray-400 mt-2">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

/* フルブリードCTA */
function CtaFullBleed() {
  const ref = useReveal()
  return (
    <section className="relative overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80"
        alt="" aria-hidden
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[#0B1D30]/80" />
      <div ref={ref} className="reveal relative max-w-4xl mx-auto px-4 sm:px-8 py-24 sm:py-32 text-center">
        <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight">
          まずは、話すところから<br />始めましょう。
        </h2>
        <p className="text-white/60 text-base mb-10 max-w-lg mx-auto leading-relaxed">
          「ラフ図しかない」「何から始めればいいかわからない」でも大丈夫。<br />
          初回相談は完全無料です。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="btn-water text-base px-10 py-4">無料で相談する <ArrowRight size={16} /></Link>
          <Link to="/process" className="btn-outline-white text-base px-10 py-4">ご依頼の流れ <ArrowRight size={16} /></Link>
        </div>
      </div>
    </section>
  )
}
