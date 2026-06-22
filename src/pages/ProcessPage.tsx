import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import SEO from '../components/SEO'
import { useContact } from '../context/ContactContext'

/* ─── Small lot steps ─── */
const smallSteps = [
  {
    num: '01', emoji: '💬',
    title: '無料相談',
    body: 'LINEかメールで「こんなものを作りたい」と送るだけ。イメージ画像・参考URLでもOK。24時間以内に返信します。',
    duration: '〜1日',
    tip: 'LINEなら写真・画像をそのまま共有できます',
  },
  {
    num: '02', emoji: '📋',
    title: '見積もり・素材選定',
    body: '枚数・素材・デザインをヒアリングし、価格と生産工場をご提案。ご予算に合わせて複数パターンお出しします。',
    duration: '2〜5日',
    tip: 'デザインデータがなくても大丈夫です',
  },
  {
    num: '03', emoji: '🧵',
    title: 'サンプル制作・確認',
    body: '中国または国内工場で実物サンプルを制作。色・縫製・着心地を確認し、OKが出たら量産へ進みます。',
    duration: '2〜3週間',
    tip: 'サンプルは1〜2点制作します',
  },
  {
    num: '04', emoji: '🏭',
    title: '量産・検品',
    body: '中国・国内工場で量産開始。現地スタッフが縫製・仕上げ・検品まで目を光らせます。',
    duration: '4〜6週間',
    tip: '品質に問題があれば作り直しで対応します',
  },
  {
    num: '05', emoji: '📦',
    title: '納品',
    body: '指定の住所または国内倉庫へ納品。EC発送・イベント配布など用途に合わせて対応します。',
    duration: '〜1週間',
    tip: '国内倉庫での保管も相談可能です',
  },
]

/* ─── Large lot steps ─── */
const largeSteps = [
  {
    num: '01', emoji: '💬',
    title: '詳細ヒアリング',
    body: 'ロット数・仕様・スケジュールを詳しくヒアリング。大ロットは仕様確定が品質とコストを左右するため、丁寧にすり合わせます。',
    duration: '1〜3日',
    tip: '既存製品のサンプルや競合製品の共有があると話が早いです',
  },
  {
    num: '02', emoji: '📋',
    title: '仕様確定・見積もり',
    body: '生産工場・素材・縫製仕様を確定し、正式な見積もりを提出。バングラデシュ／ミャンマーで最もコスト効率の高い工場を選定します。',
    duration: '1〜2週間',
    tip: 'コスト削減のご提案もここで行います',
  },
  {
    num: '03', emoji: '🧵',
    title: 'サンプル制作・承認',
    body: '現地工場でサンプルを制作し、日本に送付。色・縫製・素材感を確認していただき、修正があれば再サンプルします。',
    duration: '3〜5週間',
    tip: '修正回数が多いほど納期が延びます',
  },
  {
    num: '04', emoji: '🏭',
    title: '量産・品質管理',
    body: '現地スタッフが工場に常駐し、生産ラインを管理。縫製・仕上げ・抜き取り検品を実施します。',
    duration: '10〜14週間',
    tip: '最もリードタイムが長い工程です',
  },
  {
    num: '05', emoji: '🚢',
    title: '輸送・通関',
    body: 'バングラデシュ／ミャンマーから海上輸送。輸送中の管理・通関手続きも対応します。',
    duration: '2〜3週間',
    tip: '繁忙期は輸送に時間がかかる場合があります',
  },
  {
    num: '06', emoji: '📦',
    title: '国内検品・納品',
    body: '国内倉庫での最終検品を経て、指定の住所または倉庫へ納品。大量発送にも対応します。',
    duration: '〜1週間',
    tip: '倉庫保管・EC発送代行も対応可能です',
  },
]

const faqs = [
  {
    q: '最低何枚から発注できますか？',
    a: '小ロットは50枚から、大ロットは3,000枚以上から対応しています。まずはご希望のロット数と用途をお聞かせください。',
  },
  {
    q: '納期はどのくらいかかりますか？',
    a: '小ロット（50枚〜）は約2.5ヶ月、大ロット（3,000枚〜）は約5ヶ月が目安です。販売日・イベント日が決まっている場合は最初にお伝えください。日程から逆算してスケジュールを組みます。',
  },
  {
    q: 'デザインデータがなくても相談できますか？',
    a: 'はい。手書きのラフ図・参考写真・参考URLでも対応できます。専任スタッフがデータ化まで一緒に進めます。ODMでは一からデザイン提案も行います。',
  },
  {
    q: 'サンプル費用はかかりますか？',
    a: 'サンプル制作費は別途かかりますが、量産時に一部返金される仕組みもご用意しています。詳細はご相談時にご説明します。',
  },
  {
    q: 'OEMとODMの違いは何ですか？',
    a: 'OEMはお客様のデザインをもとに製造する受託サービスです。ODMはブランドのコンセプト設計・デザイン提案から製造・出荷までマリナが主導してサポートするサービスです。どちらが合っているかはご相談の中でご提案します。',
  },
  {
    q: '日本国内での生産はできますか？',
    a: '国内工場での小ロット生産にも対応しています。品質・仕上がりにこだわりたい場合や、少量から試したい場合に向いています。コストは海外生産より高くなる場合があります。',
  },
  {
    q: '素材・生地は自分で指定できますか？',
    a: 'はい、指定いただけます。ご希望の素材がある場合はサンプルやスペックをお送りください。素材選定からお手伝いすることも可能です。',
  },
  {
    q: 'ネームタグやブランドラベルは対応できますか？',
    a: 'はい、対応しています。織りネーム・プリントタグ・下げ札など各種ラベルの制作・縫い付けに対応しています。ご希望のデザインをお知らせください。',
  },
  {
    q: '支払い時期・方法を教えてください',
    a: '基本的には発注確定時に一部前払い、納品時に残額のお支払いとなります。詳細はご契約内容によって異なりますので、ご相談時にご説明します。',
  },
  {
    q: '品質不良があった場合はどう対応してもらえますか？',
    a: '出荷前の検品で対応しますが、万が一不良品があった場合は内容を確認のうえ、交換・再製作などで対応します。詳細はご相談ください。',
  },
]

export default function ProcessPage() {
  const [mode, setMode] = useState<'small' | 'large'>('small')
  const { open } = useContact()

  return (
    <>
      <SEO
        title="アパレルOEM依頼の流れ | 小ロット2.5ヶ月・大ロット5ヶ月"
        description="アパレルOEM・ODMのご依頼の流れ。小ロット（50枚〜）は中国・日本工場で約2.5ヶ月、大ロット（3,000枚〜）はバングラデシュ・ミャンマーで約5ヶ月。相談〜サンプル〜納品まで丁寧にサポート。"
        path="/process"
        faqSchema={[
          { question: 'アパレルOEMのリードタイムはどのくらいですか？', answer: '小ロット（50枚〜）は約2.5ヶ月、大ロット（3,000枚〜）は約5ヶ月が目安です。' },
          { question: 'サンプル制作費はかかりますか？', answer: 'サンプル制作費は別途かかりますが、量産時に一部返金される仕組みもご用意しています。' },
          { question: 'イベント・販売日が決まっている場合はどうすればいいですか？', answer: '最初にお伝えください。日程から逆算してスケジュールを組みます。大ロットは5ヶ月前から動き始めることをおすすめします。' },
          { question: '小ロットと大ロット、どちらが向いているか判断できません', answer: '販売計画・予算・スケジュールをもとに最適なプランをご提案します。まずLINEでお気軽にご相談ください。' },
        ]}
      />
      <div className="page-wrapper">

        {/* Header */}
        <div className="relative min-h-screen bg-[#0B1D30] overflow-hidden flex items-center">
          <img
            src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?w=1600&q=80"
            alt="" aria-hidden
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 overlay-porthole" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-8 pt-32 pb-20 w-full">
            <p className="text-[#0CBBD8] text-[11px] font-black tracking-[0.3em] uppercase mb-6">How It Works</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[90px] font-black text-white leading-[1] mb-8">
              ご依頼の<br />
              <span className="text-[#FFE500]">流れ</span>
            </h1>
            <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-xl mb-10">
              相談から納品まで、専任担当者がステップごとにサポート。<br />
              小ロット約2.5ヶ月、大ロット約5ヶ月が目安です。
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#steps" className="bg-[#0CBBD8] text-white text-xs font-black px-5 py-3 hover:bg-[#0AA8C3] transition-colors">流れを見る</a>
              <a href="#faq" className="bg-white/10 text-white text-xs font-black px-5 py-3 hover:bg-white/20 transition-colors border border-white/20">よくある質問</a>
            </div>
          </div>
        </div>

        {/* Comparison strip */}
        <ComparisonStrip mode={mode} onSwitch={setMode} />

        {/* Steps */}
        <section id="steps" className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-8">

            {/* Tab switcher */}
            <div className="flex bg-gray-50 border border-gray-100 mb-12 overflow-hidden">
              <ModeTab
                active={mode === 'small'}
                onClick={() => setMode('small')}
                label="小ロット（50枚〜）"
                sub="約 2.5 ヶ月"
                color="bg-[#0CBBD8]"
              />
              <ModeTab
                active={mode === 'large'}
                onClick={() => setMode('large')}
                label="大ロット（3,000枚〜）"
                sub="約 5 ヶ月"
                color="bg-[#0B1D30]"
              />
            </div>

            <div className="space-y-10">
              {(mode === 'small' ? smallSteps : largeSteps).map((step, i, arr) => (
                <ProcessStep
                  key={step.num}
                  {...step}
                  delay={i * 80}
                  isLast={i === arr.length - 1}
                  accentColor={mode === 'small' ? '#0CBBD8' : '#0B1D30'}
                />
              ))}
            </div>

            {/* Total time badge */}
            <div className={`mt-10 flex items-center gap-4 p-5 ${mode === 'small' ? 'bg-[#E0F7FC] border-[#0CBBD8]' : 'bg-[#0B1D30] border-[#0B1D30]'} border`}>
              <Clock size={24} className={mode === 'small' ? 'text-[#0CBBD8]' : 'text-[#FFE500]'} />
              <div>
                <p className={`text-xs font-black tracking-wider ${mode === 'small' ? 'text-[#0CBBD8]' : 'text-[#FFE500]'}`}>
                  {mode === 'small' ? '小ロット 合計リードタイム' : '大ロット 合計リードタイム'}
                </p>
                <p className={`text-2xl font-black ${mode === 'small' ? 'text-[#0B1D30]' : 'text-white'}`}>
                  {mode === 'small' ? '約 2.5 ヶ月' : '約 5 ヶ月'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <div id="faq"><FAQ /></div>

        {/* CTA */}
        <section className="relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=1400&q=80"
            alt="" aria-hidden
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 overlay-porthole-center" />
          <div className="relative py-24 sm:py-32 text-white text-center max-w-xl mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">まずはLINEで気軽に</h2>
            <p className="text-white/60 mb-8 leading-relaxed">どのロットが向いているか、一緒に考えましょう。</p>
            <button onClick={open} className="btn-yellow text-base px-10 py-4">
              無料で相談する <ArrowRight size={16} />
            </button>
          </div>
        </section>
      </div>
    </>
  )
}

/* ─── Comparison Strip ─── */
function ComparisonStrip({ mode, onSwitch }: { mode: 'small' | 'large'; onSwitch: (m: 'small' | 'large') => void }) {
  return (
    <div className="bg-[#F8FCFF] border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8">
        <div className="grid grid-cols-2 gap-4">
          <CompareCard
            active={mode === 'small'}
            onClick={() => onSwitch('small')}
            title="小ロット"
            badge="50枚〜"
            time="約 2.5ヶ月"
            country="中国・日本"
            points={['少量から試せる', 'スピード重視', 'デザイン提案あり']}
            color="[#0CBBD8]"
          />
          <CompareCard
            active={mode === 'large'}
            onClick={() => onSwitch('large')}
            title="大ロット"
            badge="3,000枚〜"
            time="約 5ヶ月"
            country="バングラデシュ・ミャンマー"
            points={['1枚あたりのコストが低い', '大量安定供給', 'ナショナルブランド向け']}
            color="[#0B1D30]"
          />
        </div>
      </div>
    </div>
  )
}

interface CompareCardProps {
  active: boolean; onClick: () => void
  title: string; badge: string; time: string; country: string
  points: string[]; color: string
}
function CompareCard({ active, onClick, title, badge, time, country, points, color }: CompareCardProps) {
  return (
    <button
      onClick={onClick}
      className={`text-left p-3 sm:p-5 border-2 transition-all w-full ${
        active ? `border-${color} bg-white shadow-md` : 'border-transparent bg-white/50 hover:bg-white hover:border-gray-200'
      }`}
    >
      <div className="flex items-start justify-between mb-2 sm:mb-3">
        <span className={`text-[10px] font-black px-2 py-1 bg-${color} text-white`}>{badge}</span>
        {active && <span className="text-[10px] font-black text-green-600 bg-green-50 px-1.5 py-1 hidden xs:inline">表示中</span>}
      </div>
      <p className="text-base sm:text-xl font-black mb-1">{title}</p>
      <div className="flex items-center gap-1.5 mb-2 sm:mb-3">
        <Clock size={12} className={`text-${color}`} />
        <span className={`text-xs sm:text-sm font-black text-${color}`}>{time}</span>
      </div>
      <p className="text-[10px] sm:text-xs text-gray-400 mb-2 sm:mb-3">🌏 <span className="hidden sm:inline">{country}</span><span className="sm:hidden">{country.replace('・', '/')}</span></p>
      <ul className="space-y-0.5 sm:space-y-1 hidden sm:block">
        {points.map(p => (
          <li key={p} className="text-xs text-gray-600 flex items-center gap-1.5">
            <span className={`w-1 h-1 rounded-full bg-${color} shrink-0`} />{p}
          </li>
        ))}
      </ul>
    </button>
  )
}

/* ─── Mode Tab ─── */
function ModeTab({ active, onClick, label, sub, color }: { active: boolean; onClick: () => void; label: string; sub: string; color: string }) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 py-3 sm:py-4 px-3 sm:px-4 text-left transition-all border-b-2 ${
        active ? `${color} text-white border-transparent` : 'bg-transparent text-gray-500 border-transparent hover:bg-gray-100'
      }`}
    >
      <p className="text-xs font-black">{label}</p>
      <p className={`text-[11px] mt-0.5 ${active ? 'text-white/70' : 'text-gray-400'}`}>{sub}</p>
    </button>
  )
}

/* ─── Process Step ─── */
interface StepProps {
  num: string; emoji: string; title: string; body: string
  duration: string; tip: string; delay: number; isLast: boolean; accentColor: string
}
function ProcessStep({ num, emoji, title, body, duration, tip, delay, isLast, accentColor }: StepProps) {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal flex gap-5" style={{ transitionDelay: `${delay}ms` }}>
      <div className="shrink-0 flex flex-col items-center">
        <div
          className="w-12 h-12 text-white font-black text-sm flex items-center justify-center"
          style={{ backgroundColor: accentColor }}
        >
          {num}
        </div>
        {!isLast && <div className="w-px flex-1 bg-gray-100 my-1.5" style={{ minHeight: 28 }} />}
      </div>
      <div className="pb-2">
        <div className="flex flex-wrap items-center gap-2 mb-2 mt-1">
          <span className="text-xl">{emoji}</span>
          <h3 className="text-base font-black">{title}</h3>
          <span className="text-[10px] font-bold px-2 py-0.5" style={{ color: accentColor, backgroundColor: `${accentColor}15` }}>
            {duration}
          </span>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed mb-2">{body}</p>
        <p className="text-xs font-bold" style={{ color: accentColor }}>💡 {tip}</p>
      </div>
    </div>
  )
}

/* ─── FAQ ─── */
function FaqCard({ q, a, delay }: { q: string; a: string; delay: number }) {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal bg-white border border-gray-100 p-5 sm:p-6" style={{ transitionDelay: `${delay}ms` }}>
      <p className="font-black mb-2 flex gap-2 text-sm">
        <span className="text-[#0CBBD8] shrink-0">Q.</span>{q}
      </p>
      <p className="text-sm text-gray-600 leading-relaxed pl-6">{a}</p>
    </div>
  )
}

function FAQ() {
  const ref = useReveal()
  return (
    <section className="py-16 sm:py-20 bg-[#F8FCFF]">
      <div className="max-w-3xl mx-auto px-4 sm:px-8">
        <div ref={ref} className="reveal text-center mb-8 sm:mb-10">
          <p className="eyebrow">FAQ</p>
          <h2 className="text-2xl sm:text-3xl font-black">よくある質問</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FaqCard key={i} q={faq.q} a={faq.a} delay={i * 50} />
          ))}
        </div>
      </div>
    </section>
  )
}
