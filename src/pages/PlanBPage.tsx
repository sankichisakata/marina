/**
 * Plan B — ターゲット別誘導型
 * centrage.co.jp 参考：「こんな方に」、ご依頼の流れを前面に、ステップ訴求
 */
import { Link } from 'react-router-dom'
import { ArrowRight, Package, Paintbrush, Truck, Layers, Star, Clock } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

export default function PlanBPage() {
  return (
    <div>
      <div className="fixed top-2 left-1/2 -translate-x-1/2 z-[9999] bg-[#0CBBD8] text-white text-[11px] font-black px-4 py-1.5 shadow-lg tracking-widest">
        PLAN B — ターゲット別誘導型
      </div>
      <HeroB />
      <TargetSection />
      <ServicesB />
      <StepsSection />
      <StatsSection />
      <CtaBannerB />
    </div>
  )
}

/* Hero — テキスト中心 */
function HeroB() {
  return (
    <section className="relative bg-[#0B1D30] min-h-[90vh] flex items-center overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80"
        alt="" aria-hidden
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1D30] via-[#0B1D30]/80 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 pt-28 pb-20 w-full">
        <div className="max-w-2xl">
          <p className="text-[#0CBBD8] text-xs font-black tracking-widest uppercase mb-4">Apparel OEM / ODM / 3PL</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.05] mb-6">
            あなたの作るを、<br />
            <span className="text-[#FFE500]">カタチにします</span>
          </h1>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-10 max-w-lg">
            創業50年以上の実績と4ヶ国の生産ネットワーク。<br />
            初めてのOEMから大量生産・物流まで、一社でお任せください。
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link to="/contact" className="btn-water">無料相談をする <ArrowRight size={14} /></Link>
            <Link to="/services" className="btn-outline-white">サービスを見る <ArrowRight size={14} /></Link>
          </div>
        </div>
      </div>
    </section>
  )
}

/* こんな方に */
const targets = [
  {
    icon: <Star size={24} className="text-[#0CBBD8]" />,
    title: 'はじめてOEMに挑戦する方',
    body: '「ラフ図しかない」「何から始めればいいかわからない」という段階から対応します。サンプル確認→本生産まで丁寧にサポート。',
    cta: 'OEM詳細を見る',
    href: '/services#oem',
  },
  {
    icon: <Paintbrush size={24} className="text-[#0CBBD8]" />,
    title: '自分のブランドを立ち上げたい方',
    body: 'ブランドコンセプト設計・デザイン提案・製造・出荷まで一貫対応。ODMで理想のブランドを一緒に作ります。',
    cta: 'ODM詳細を見る',
    href: '/services#odm',
  },
  {
    icon: <Truck size={24} className="text-[#0CBBD8]" />,
    title: '物流をまるごと外注したい方',
    body: 'EC・小売店・スポット検品など、アパレル特化の3PL。急な依頼にも柔軟に対応します。',
    cta: '3PL詳細を見る',
    href: '/services#3pl',
  },
  {
    icon: <Layers size={24} className="text-[#0CBBD8]" />,
    title: '製造から物流まで一本化したい方',
    body: '製造〜梱包〜出荷を一社で完結。複数の業者に依頼する手間とコストを削減できます。',
    cta: '相談してみる',
    href: '/contact',
  },
]

function TargetSection() {
  const ref = useReveal()
  return (
    <section className="py-16 sm:py-24 bg-[#F8FCFF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div ref={ref} className="reveal text-center mb-12">
          <p className="eyebrow">こんな方にお選びいただいています</p>
          <h2 className="text-2xl sm:text-4xl font-black">どんなご相談でも、<br className="hidden sm:block" />まずはお声がけください。</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {targets.map((t, i) => (
            <TargetCard key={t.title} {...t} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TargetCard({ icon, title, body, cta, href, delay }: typeof targets[0] & { delay: number }) {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal bg-white border border-gray-100 p-6 sm:p-8 hover:border-[#0CBBD8] hover:shadow-md transition-all duration-300 group" style={{ transitionDelay: `${delay}ms` }}>
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-black text-[#0B1D30] mb-2">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed mb-5">{body}</p>
      <Link to={href} className="flex items-center gap-1.5 text-xs font-black text-[#0CBBD8] group-hover:gap-2 transition-all">
        {cta} <ArrowRight size={12} />
      </Link>
    </div>
  )
}

/* サービス3つ（横並び） */
const servicesB = [
  { label: 'OEM', icon: <Package size={20} />, title: '製造受託', items: ['小ロット 50枚〜', '大ロット 3,000枚〜', '約2.5〜5ヶ月', 'サンプル確認あり'], color: '#0CBBD8' },
  { label: 'ODM', icon: <Paintbrush size={20} />, title: 'ブランド開発支援', items: ['デザイン提案', '素材選定', '受注生産体制', '出荷まで一貫'], color: '#0B1D30' },
  { label: '3PL', icon: <Truck size={20} />, title: '物流代行', items: ['入荷・保管', 'ピッキング・出荷', 'EC・小売店対応', 'スポット検品'], color: '#E6A800' },
]

function ServicesB() {
  const ref = useReveal()
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        <div ref={ref} className="reveal text-center mb-10">
          <p className="eyebrow">Services</p>
          <h2 className="text-2xl sm:text-4xl font-black">3つのサービス</h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-5">
          {servicesB.map((s, i) => (
            <ServiceBCard key={s.label} {...s} delay={i * 80} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/services" className="btn-outline">詳しいサービス内容を見る <ArrowRight size={14} /></Link>
        </div>
      </div>
    </section>
  )
}

function ServiceBCard({ label, icon, title, items, color, delay }: typeof servicesB[0] & { delay: number }) {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal border-t-4 bg-white border border-gray-100 p-6 hover:shadow-md transition-shadow" style={{ borderTopColor: color, transitionDelay: `${delay}ms` }}>
      <div className="flex items-center gap-2 mb-4" style={{ color }}>
        {icon}
        <span className="text-xs font-black tracking-widest">{label}</span>
      </div>
      <h3 className="text-lg font-black text-[#0B1D30] mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map(item => (
          <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
            <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: color }} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

/* ご依頼の流れ（ステップ） */
const steps = [
  { num: '01', title: 'ご相談・ヒアリング', body: 'LINEやメールでまずご連絡を。ラフ図・参考URL・口頭説明でOKです。' },
  { num: '02', title: '見積もり・プランご提案', body: 'ロット・予算・スケジュールをもとに最適なプランと工場をご提案します。' },
  { num: '03', title: 'サンプル確認', body: 'サンプルをご確認いただき、修正を重ねて品質を確定します。' },
  { num: '04', title: '本生産・出荷', body: '確定後、本生産を開始。検品後、直接またはマリナ倉庫経由で出荷します。' },
]

function StepsSection() {
  const ref = useReveal()
  return (
    <section className="py-16 sm:py-24 bg-[#0B1D30]">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        <div ref={ref} className="reveal text-center mb-10">
          <p className="text-[#0CBBD8] text-[10px] font-black tracking-widest uppercase mb-2">Flow</p>
          <h2 className="text-2xl sm:text-4xl font-black text-white">ご依頼の流れ</h2>
        </div>
        <div className="grid sm:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <StepCard key={s.num} {...s} delay={i * 80} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/process" className="btn-outline-white">詳しい流れを見る <ArrowRight size={14} /></Link>
        </div>
      </div>
    </section>
  )
}

function StepCard({ num, title, body, delay }: typeof steps[0] & { delay: number }) {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal text-center" style={{ transitionDelay: `${delay}ms` }}>
      <div className="text-4xl font-black text-[#0CBBD8]/20 mb-2">{num}</div>
      <h3 className="font-black text-white mb-2 text-sm">{title}</h3>
      <p className="text-xs text-white/50 leading-relaxed">{body}</p>
    </div>
  )
}

/* 数字セクション */
function StatsSection() {
  const ref = useReveal()
  const items = [
    { icon: <Clock size={22} className="text-[#0CBBD8]" />, num: '50年+', label: 'のものづくり実績' },
    { icon: <Package size={22} className="text-[#0CBBD8]" />, num: '50枚〜', label: '小ロット対応' },
    { icon: <Truck size={22} className="text-[#0CBBD8]" />, num: '4ヶ国', label: 'の生産ネットワーク' },
    { icon: <Star size={22} className="text-[#0CBBD8]" />, num: '初回無料', label: 'でご相談いただけます' },
  ]
  return (
    <section className="py-16 sm:py-24 bg-[#F8FCFF]">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        <div ref={ref} className="reveal grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {items.map(item => (
            <div key={item.num} className="flex flex-col items-center gap-3">
              {item.icon}
              <p className="text-2xl sm:text-3xl font-black text-[#0B1D30]">{item.num}</p>
              <p className="text-xs text-gray-400">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* CTA */
function CtaBannerB() {
  const ref = useReveal()
  return (
    <section className="py-16 sm:py-20 bg-white border-t border-gray-100">
      <div ref={ref} className="reveal max-w-3xl mx-auto px-4 sm:px-8 text-center">
        <h2 className="text-2xl sm:text-4xl font-black text-[#0B1D30] mb-4">まずは無料相談からどうぞ。</h2>
        <p className="text-gray-400 text-sm mb-8">「まだ何も決まっていない」段階でも大丈夫です。</p>
        <Link to="/contact" className="btn-water">お問い合わせはこちら <ArrowRight size={14} /></Link>
      </div>
    </section>
  )
}
