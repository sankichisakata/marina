import { useReveal } from '../../hooks/useReveal'
import { Trophy, Shield, RefreshCw, MessageSquare, Award, Truck } from 'lucide-react'

const features = [
  {
    icon: <Trophy size={28} />,
    title: '半世紀以上の製造実績',
    body: '創業から50年以上、国内外の数多くのブランドとともに歩んできた経験と信頼。その積み重ねが確かな品質を保証します。',
  },
  {
    icon: <Shield size={28} />,
    title: '厳格な品質検品',
    body: '出荷前に現地スタッフが全数検品。不良品は返品・作り直しで対応します。',
  },
  {
    icon: <RefreshCw size={28} />,
    title: 'リピート対応',
    body: '初回発注データを保管。2回目以降はスムーズに追加生産が可能です。',
  },
  {
    icon: <MessageSquare size={28} />,
    title: '専任担当制',
    body: 'ご依頼ごとに専任スタッフが担当。LINEやメールで迅速に対応します。',
  },
  {
    icon: <Award size={28} />,
    title: '素材・縫製へのこだわり',
    body: 'おしゃれに見える素材と縫製を熟知したスタッフがセレクト。見た目と着心地を両立します。',
  },
  {
    icon: <Truck size={28} />,
    title: '国内倉庫対応',
    body: '国内倉庫への一括納品も可能。EC発送・イベント配送など柔軟に対応します。',
  },
]

export default function Features() {
  const ref = useReveal()

  return (
    <section id="features" className="py-24 bg-[#F2F8FB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div ref={ref} className="reveal text-center mb-16">
          <p className="section-label">Why Us</p>
          <h2 className="section-title">
            半世紀の実績が、
            <br className="hidden sm:block" />
            安心の根拠です
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#D4E8EF]">
          {features.map((f, i) => (
            <FeatureItem key={f.title} {...f} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface FeatureItemProps {
  icon: React.ReactNode
  title: string
  body: string
  delay: number
}

function FeatureItem({ icon, title, body, delay }: FeatureItemProps) {
  const ref = useReveal()
  return (
    <div
      ref={ref}
      className="reveal bg-[#F2F8FB] p-8 hover:bg-white transition-colors duration-200 group"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="text-[#0CBBD8] mb-5 block group-hover:scale-110 transition-transform duration-200">
        {icon}
      </span>
      <h3 className="text-base font-bold mb-2">{title}</h3>
      <p className="text-sm text-[#64748B] leading-relaxed">{body}</p>
    </div>
  )
}
