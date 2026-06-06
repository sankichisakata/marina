import { useReveal } from '../../hooks/useReveal'

const steps = [
  {
    num: '01',
    title: '無料相談（LINE or メール）',
    body: 'LINEまたはフォームから。希望ロット数・イメージ・予算を共有してください。24時間以内に返信します。',
    duration: '〜1日',
  },
  {
    num: '02',
    title: 'お見積もり・プランニング',
    body: '最適な生産拠点・素材・コストをご提案。デザインがまだの方は一緒に考えます。',
    duration: '2〜5日',
  },
  {
    num: '03',
    title: 'サンプル制作・確認',
    body: '実物サンプルを制作。色・サイズ・縫製を確認いただきOKが出てから量産へ進みます。',
    duration: '2〜4週間',
  },
  {
    num: '04',
    title: '量産・品質管理',
    body: '50年以上培ってきたノウハウをもとに、現地スタッフが常駐して品質を管理。縫製・仕上げ・検品まで一切手を抜きません。',
    duration: '4〜10週間',
  },
  {
    num: '05',
    title: '納品',
    body: '国内倉庫または指定の住所へ納品。EC出荷・イベント配布など用途に合わせた形で対応します。',
    duration: '〜1週間',
  },
]

export default function Process() {
  const ref = useReveal()

  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div ref={ref} className="reveal text-center mb-16">
          <p className="section-label">How It Works</p>
          <h2 className="section-title">
            ご依頼から納品まで、
            <br className="hidden sm:block" />
            5つのステップ
          </h2>
        </div>

        <div className="max-w-2xl mx-auto space-y-0">
          {steps.map((step, i) => (
            <ProcessStep key={step.num} {...step} index={i} isLast={i === steps.length - 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface ProcessStepProps {
  num: string
  title: string
  body: string
  duration: string
  index: number
  isLast: boolean
}

function ProcessStep({ num, title, body, duration, index, isLast }: ProcessStepProps) {
  const ref = useReveal()
  return (
    <div
      ref={ref}
      className="reveal flex gap-6"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Left: number + line */}
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 bg-[#0B1D30] text-white text-xs font-black flex items-center justify-center shrink-0 z-10">
          {num}
        </div>
        {!isLast && (
          <div className="w-px flex-1 bg-[#D4E8EF] my-1" style={{ minHeight: '2rem' }} />
        )}
      </div>

      {/* Right: content */}
      <div className={`pb-8 ${isLast ? '' : ''}`}>
        <div className="flex items-center gap-3 mb-1 pt-2">
          <span className="text-xs font-bold text-[#0CBBD8] bg-[#E8F7FB] px-2 py-1">{duration}</span>
        </div>
        <h3 className="text-base font-black mb-1">{title}</h3>
        <p className="text-sm text-[#64748B] leading-relaxed">{body}</p>
      </div>
    </div>
  )
}
