import { useReveal } from '../hooks/useReveal'
import SEO from '../components/SEO'

export default function AboutPage() {
  return (
    <>
      <SEO
        title="会社案内 | 創業50年以上のアパレルOEMメーカー"
        description="株式会社マリナは創業50年以上の老舗アパレルOEM・ODM・3PL専門メーカー。日本国内縫製から始まり、中国・バングラデシュ・ミャンマーへ生産拠点を拡大。小ロット50枚〜大ロット3,000枚以上に対応。"
        path="/about"
      />
      <div className="page-wrapper">
        <AboutHeader />
        <Philosophy />
        <History />
        <Values />
        <CompanyInfo />
      </div>
    </>
  )
}

/* ─── Header ─── */
function AboutHeader() {
  return (
    <div className="relative bg-[#0B1D30] pt-28 pb-20 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&q=80"
        alt="" aria-hidden
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1D30] to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
        <p className="eyebrow text-[#0CBBD8]">About</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mt-2 mb-5">
          日本の縫製現場から<br />世界の生産拠点へ。
        </h1>
      </div>
    </div>
  )
}

/* ─── Philosophy ─── */
function Philosophy() {
  const ref = useReveal()
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
        <div ref={ref} className="reveal">
          <p className="eyebrow">Philosophy</p>
          <h2 className="section-title mb-8">
            毎日着る服だから、<br />
            <span className="text-[#0CBBD8]">手を抜かない。</span>
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto text-lg">
            シャツ、パンツ、ジャケット——私たちが長年手がけてきたのは、華やかなファッションショーの一着ではなく、
            誰かの日常に溶け込む一着です。
            洗っても型崩れしない縫製、長く着られる素材選び、着心地の細部へのこだわり。
            その積み重ねが、デザイン性・機能性を求める服づくりにも活きています。
          </p>
        </div>
      </div>
    </section>
  )
}

/* ─── History ─── */
const history = [
  {
    year: '1972',
    title: '創業——国内生産と生地販売からスタート',
    body: '国内縫製工場として創業。シャツ・パンツ・ジャケットなどの製造と生地販売をメインに事業をスタート。品質と縫製技術を一から磨き上げた。',
  },
  {
    year: '1990年代',
    title: '国内アパレルブランドへの供給開始',
    body: '信頼できるOEMメーカーとして国内アパレルブランドとの取引を拡大。「きちんと着られる服を届ける」という姿勢が評価され、取引先が増加。',
  },
  {
    year: '2000年代',
    title: '中国進出——大ロット生産体制へ',
    body: '中国の協力工場との提携を開始し、大ロット生産に対応できる体制を構築。コスト競争力と生産キャパシティを大幅に強化した。',
  },
  {
    year: '2010年代',
    title: 'ミャンマー進出',
    body: '縫製技術に定評のあるミャンマーの工場と提携。品質と価格のバランスに優れた生産拠点として、大ロット案件の受け皿を拡充した。',
  },
  {
    year: '2020年代',
    title: 'バングラデシュ進出——グローバル生産体制の確立',
    body: 'バングラデシュの主要工場と長期提携を締結。4ヶ国体制が整い、小ロット50枚〜から大ロット3,000枚以上まで、規模と予算に合わせた最適な生産を提案できるようになった。',
  },
]

function History() {
  const ref = useReveal()
  return (
    <section className="py-20 bg-[#F8FCFF]">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        <div ref={ref} className="reveal text-center mb-14">
          <p className="eyebrow">History</p>
          <h2 className="section-title">50年以上の歩み</h2>
        </div>
        <div className="relative">
          <div className="absolute left-[3.25rem] top-0 bottom-0 w-px bg-[#D4E8EF] hidden sm:block" />
          <div className="space-y-8">
            {history.map((h, i) => <HistoryItem key={h.year} {...h} delay={i * 80} />)}
          </div>
        </div>
      </div>
    </section>
  )
}

function HistoryItem({ year, title, body, delay }: { year: string; title: string; body: string; delay: number }) {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal flex gap-6" style={{ transitionDelay: `${delay}ms` }}>
      <div className="shrink-0 text-right w-16 hidden sm:block relative z-10">
        <span className="text-sm font-black text-[#0CBBD8] bg-[#F8FCFF] px-1">{year}</span>
      </div>
      <div className="shrink-0 hidden sm:flex flex-col items-center">
        <div className="w-3 h-3 rounded-full bg-[#0CBBD8] mt-1 z-10" />
      </div>
      <div className="pb-2">
        <div className="sm:hidden text-xs font-black text-[#0CBBD8] mb-1">{year}</div>
        <h3 className="font-black mb-1">{title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">{body}</p>
      </div>
    </div>
  )
}

/* ─── Values ─── */
const values = [
  {
    num: '01',
    title: '感謝の心',
    body: 'お客様・携わる方々に毎日感謝し、相手の立場に立って物事を考え、自分のエゴを捨てること。',
  },
  {
    num: '02',
    title: '素直さ',
    body: '初心を忘れず、毎日勉強・発見を見つけ、自分の非に立ち向かうこと。',
  },
  {
    num: '03',
    title: 'リーダーシップ',
    body: '会社と自分の存在意義を明確にし、ブレない目的を持つこと。',
  },
  {
    num: '04',
    title: '遊び心',
    body: '固定観念にとらわれない自由な思考で、お客様の問題を解決し、期待を超えていくこと。',
  },
]

function ValueCard({ num, title, body, delay }: typeof values[0] & { delay: number }) {
  const ref = useReveal()
  return (
    <div
      ref={ref}
      className="reveal flex gap-5 border-t border-gray-200 pt-7 pb-7 group hover:border-[#0CBBD8] transition-colors duration-300"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="text-[11px] font-black text-[#0CBBD8] tracking-widest shrink-0 pt-0.5">{num}</span>
      <div>
        <h3 className="text-lg font-black text-[#0B1D30] mb-2 group-hover:text-[#0CBBD8] transition-colors duration-300">{title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">{body}</p>
      </div>
    </div>
  )
}

function Values() {
  const ref = useReveal()
  return (
    <section className="py-20 bg-[#F8FCFF]">
      <div className="max-w-3xl mx-auto px-4 sm:px-8">
        <div ref={ref} className="reveal mb-12">
          <p className="eyebrow">Values</p>
          <h2 className="section-title">企業理念</h2>
          <p className="text-gray-400 text-sm mt-3">マリナが大切にしている4つの価値観</p>
        </div>
        <div>
          {values.map((v, i) => (
            <ValueCard key={v.title} {...v} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Company Info ─── */
const info = [
  { label: '会社名', value: '株式会社マリナ' },
  { label: '設立', value: '1972年（昭和47年）' },
  { label: '代表取締役', value: '石塚 卓之介' },
  { label: '資本金', value: '1,000万円' },
  { label: '所在地', value: '〒130-0012 東京都墨田区太平1-2-2' },
  { label: '事業内容', value: 'アパレルOEM・ODM製造（ベーシックウェア・デザイン服・機能服）、企画・素材提案' },
  { label: '生産拠点', value: 'バングラデシュ・ミャンマー・中国・日本' },
]

function CompanyInfo() {
  const ref = useReveal()
  return (
    <section className="py-20 bg-[#F8FCFF]">
      <div className="max-w-3xl mx-auto px-4 sm:px-8">
        <div ref={ref} className="reveal">
          <p className="eyebrow">Company Overview</p>
          <h2 className="section-title text-2xl md:text-3xl mb-10">会社概要</h2>
          <div className="divide-y divide-gray-100">
            {info.map(({ label, value }) => (
              <div key={label} className="flex gap-6 py-4">
                <dt className="text-sm font-black text-gray-400 w-28 shrink-0">{label}</dt>
                <dd className="text-sm text-gray-700">{value}</dd>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
