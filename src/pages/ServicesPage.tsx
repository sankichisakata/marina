import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Package, Paintbrush, Truck } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import SEO from '../components/SEO'

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="アパレルOEM・ODM・3PLサービス | 小ロット50枚〜大ロット3,000枚対応"
        description="アパレルOEM（小ロット50枚〜・大ロット3,000枚〜）、ODMブランド開発支援（構想〜出荷一貫）、アパレル3PL物流代行。バングラデシュ・ミャンマー・中国・日本の生産ネットワーク。"
        path="/services"
        faqSchema={[
          { question: 'アパレルOEMの最小ロット数は？', answer: '小ロットは50枚から、大ロットは3,000枚以上からご対応できます。' },
          { question: 'ODMとOEMの違いは？', answer: 'OEMはお客様のデザインで製造する受託サービスです。ODMはブランドコンセプト設計・デザイン提案から製造・出荷まで弊社が主導するサービスです。' },
          { question: 'アパレル3PLで対応できる商品は？', answer: 'アパレル全般のほか、鞄・バッグ・雑貨の保管・出荷にも対応しています。' },
        ]}
      />
      <div className="page-wrapper">
        <ServicesHeader />
        <ServiceNav />
        <OEMSection />
        <ODMSection />
        <TPLSection />
        <ItemCategories />
        <ServicesCTA />
      </div>
    </>
  )
}

/* ─── Header ─── */
function ServicesHeader() {
  return (
    <div className="relative bg-[#0B1D30] overflow-hidden pt-28 pb-20">
      <img
        src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80"
        alt="" aria-hidden
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1D30] to-[#0B1D30]/50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
        <p className="eyebrow text-[#0CBBD8]">Services</p>
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight mt-2 mb-4">
          まずはご相談を。<br className="hidden sm:block" />
          最適なプランをご提案します。
        </h1>
        <p className="text-sm sm:text-base text-white/60 max-w-xl leading-relaxed">
          OEM・ODM・3PLはお客様が選ぶものではなく、ご相談の内容をもとにこちらからご提案します。
          「何から始めればいいかわからない」という段階でも、気軽にご連絡ください。
        </p>
      </div>
    </div>
  )
}

/* ─── Service Nav ─── */
function ServiceNav() {
  const items = [
    { id: 'oem', icon: <Package size={16} />, label: 'OEM', sub: '製造受託' },
    { id: 'odm', icon: <Paintbrush size={16} />, label: 'ODM', sub: 'ブランド開発支援' },
    { id: '3pl', icon: <Truck size={16} />, label: '3PL', sub: '物流代行' },
  ]
  return (
    <div className="sticky top-16 z-40 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="flex-1 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 py-3 sm:py-4 text-center text-xs sm:text-sm font-black text-gray-500 hover:text-[#0CBBD8] hover:bg-[#F0FBFF] transition-colors border-b-2 border-transparent hover:border-[#0CBBD8]"
            >
              {item.icon}
              <span>{item.label}</span>
              <span className="hidden sm:inline text-xs font-normal text-gray-400">— {item.sub}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ════════════════════════════════
   OEM
════════════════════════════════ */
const smallFeatures = ['50枚〜対応', 'サンプル確認あり', '短納期 約2.5ヶ月', 'デザイン提案OK', '素材選定サポート', '中国・日本工場']
const largeFeatures = ['3,000枚〜対応', 'コスト最適化', '品質検品付き', '50年以上の実績', '専任担当者制', '現地スタッフ常駐']

const countries = [
  { flag: '🇧🇩', name: 'バングラデシュ', desc: '大ロット・コスト最適化の主力拠点', type: '大ロット向け' },
  { flag: '🇲🇲', name: 'ミャンマー', desc: '縫製技術の高さと安定品質', type: '大ロット向け' },
  { flag: '🇨🇳', name: '中国', desc: '小〜中ロット、多品種対応', type: '小〜中ロット' },
  { flag: '🇯🇵', name: '日本', desc: 'こだわり素材・高品質小ロット', type: '小ロット向け' },
]

function OEMSection() {
  const ref = useReveal()
  const netRef = useReveal()
  return (
    <section id="oem" className="py-12 sm:py-20 bg-white scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div ref={ref} className="reveal mb-8 sm:mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="p-2 bg-[#0CBBD8] text-white"><Package size={20} /></span>
            <span className="text-xs font-black tracking-widest text-[#0CBBD8] uppercase">OEM — 製造受託</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3">あなたのデザインを、形にする。</h2>
          <p className="text-sm sm:text-base text-gray-500 max-w-2xl leading-relaxed">
            お客様のデザイン・仕様に基づき、最適な工場と素材で製造します。
            ご相談内容とロット数・予算・スケジュールをもとに、小ロットと大ロットのどちらが合っているかをご提案します。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Small Lot */}
          <div className="reveal border-2 border-[#0CBBD8] overflow-hidden">
            <div className="relative aspect-[16/7] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&q=80"
                alt="小ロットOEM" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0CBBD8]/60 to-transparent" />
              <div className="absolute bottom-3 left-4">
                <span className="bg-[#0CBBD8] text-white text-[10px] font-black tracking-widest px-3 py-1">SMALL LOT</span>
                <p className="text-white font-black text-xl sm:text-2xl mt-1">小ロットOEM</p>
              </div>
            </div>
            <div className="p-4 sm:p-8">
              <div className="flex gap-3 sm:gap-4 mb-4 sm:mb-5">
                <div className="text-center flex-1">
                  <p className="text-xl sm:text-2xl font-black text-[#0CBBD8]">50枚〜</p>
                  <p className="text-[10px] text-gray-400">最小ロット</p>
                </div>
                <div className="w-px bg-gray-100" />
                <div className="text-center flex-1">
                  <p className="text-xl sm:text-2xl font-black text-[#0CBBD8]">2.5ヶ月</p>
                  <p className="text-[10px] text-gray-400">リードタイム</p>
                </div>
                <div className="w-px bg-gray-100" />
                <div className="text-center flex-1">
                  <p className="text-sm font-black text-gray-600">中国・日本</p>
                  <p className="text-[10px] text-gray-400">生産拠点</p>
                </div>
              </div>
              <ul className="grid grid-cols-2 gap-2 mb-4 sm:mb-6">
                {smallFeatures.map(f => (
                  <li key={f} className="flex items-center gap-1.5 text-xs text-gray-600">
                    <CheckCircle size={12} className="text-[#0CBBD8] shrink-0" />{f}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn-water w-full text-center">小ロットを相談する <ArrowRight size={15} /></Link>
            </div>
          </div>

          {/* Large Lot */}
          <div className="reveal border-2 border-[#0B1D30] overflow-hidden">
            <div className="relative aspect-[16/7] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1565029616099-8f10f38c7c43?w=800&q=80"
                alt="大ロットOEM" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D30]/70 to-transparent" />
              <div className="absolute bottom-3 left-4">
                <span className="bg-[#0B1D30] text-white text-[10px] font-black tracking-widest px-3 py-1">LARGE LOT</span>
                <p className="text-white font-black text-xl sm:text-2xl mt-1">大ロットOEM</p>
              </div>
            </div>
            <div className="p-4 sm:p-8">
              <div className="flex gap-3 sm:gap-4 mb-4 sm:mb-5">
                <div className="text-center flex-1">
                  <p className="text-xl sm:text-2xl font-black text-[#0B1D30]">3,000枚〜</p>
                  <p className="text-[10px] text-gray-400">最小ロット</p>
                </div>
                <div className="w-px bg-gray-100" />
                <div className="text-center flex-1">
                  <p className="text-xl sm:text-2xl font-black text-[#0B1D30]">5ヶ月</p>
                  <p className="text-[10px] text-gray-400">リードタイム</p>
                </div>
                <div className="w-px bg-gray-100" />
                <div className="text-center flex-1">
                  <p className="text-xs font-black text-gray-600 leading-tight">バングラ<br />ミャンマー</p>
                  <p className="text-[10px] text-gray-400">生産拠点</p>
                </div>
              </div>
              <ul className="grid grid-cols-2 gap-2 mb-4 sm:mb-6">
                {largeFeatures.map(f => (
                  <li key={f} className="flex items-center gap-1.5 text-xs text-gray-600">
                    <CheckCircle size={12} className="text-[#0CBBD8] shrink-0" />{f}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn-dark w-full text-center">大ロットを相談する <ArrowRight size={15} /></Link>
            </div>
          </div>
        </div>

        {/* Production Network — OEM内に統合 */}
        <div ref={netRef} className="reveal mt-12 sm:mt-16 pt-10 border-t border-gray-100">
          <p className="eyebrow">Production Network</p>
          <h3 className="text-xl sm:text-2xl font-black mb-2">4ヶ国の生産ネットワーク</h3>
          <p className="text-sm text-gray-500 mb-6 max-w-xl leading-relaxed">
            ご相談内容・ロット・予算・納期に合わせて、最適な生産国をご提案します。
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {countries.map((c, i) => (
              <CountryCard key={c.name} {...c} delay={i * 60} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function CountryCard({ flag, name, desc, type, delay }: typeof countries[0] & { delay: number }) {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal border border-gray-100 p-4 sm:p-5 text-center hover:shadow-md transition-shadow"
      style={{ transitionDelay: `${delay}ms` }}>
      <div className="text-3xl sm:text-4xl mb-2">{flag}</div>
      <p className="font-black text-sm mb-1">{name}</p>
      <span className="text-[10px] bg-[#E0F7FC] text-[#0CBBD8] font-bold px-2 py-0.5 inline-block">{type}</span>
      <p className="text-xs text-gray-500 mt-2 leading-relaxed">{desc}</p>
    </div>
  )
}

/* ════════════════════════════════
   ODM
════════════════════════════════ */
const odmSteps = [
  { num: '01', title: 'ブランド構想・コンセプト設計', body: 'ターゲット・世界観・価格帯など、ブランドの軸を一緒に整理します。既存のブランドでもゼロからでも対応できます。' },
  { num: '02', title: 'デザイン提案', body: 'コンセプトに基づき、素材・カラー・シルエットを提案。ラフ段階からデータ化まで一貫して担当します。' },
  { num: '03', title: 'サンプル制作・確認', body: '実物サンプルで仕上がりを確認。修正を繰り返し、理想の一枚に近づけます。' },
  { num: '04', title: '受注生産体制の構築', body: '売れた分だけ作る受注生産モデルを構築。過剰在庫リスクを最小化しながら安定供給を実現します。' },
  { num: '05', title: '国内倉庫での保管', body: '製品を国内倉庫で保管。在庫管理もお任せいただけます。' },
  { num: '06', title: '出荷・物流サポート', body: 'EC注文に合わせた出荷、店舗向けの一括納品など、物流もワンストップで対応します。' },
]

function ODMSection() {
  const ref = useReveal()
  return (
    <section id="odm" className="py-12 sm:py-20 bg-[#F8FCFF] scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div ref={ref} className="reveal mb-8 sm:mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="p-2 bg-[#FFE500] text-[#0B1D30]"><Paintbrush size={20} /></span>
            <span className="text-xs font-black tracking-widest text-[#0B1D30] uppercase">ODM — ブランド開発支援</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3">ブランドの構想から、出荷まで。</h2>
          <p className="text-sm sm:text-base text-gray-500 max-w-2xl leading-relaxed">
            「自分のブランドを作りたいけど、何から始めればいいかわからない」——そんな方のために、
            コンセプト設計からデザイン提案、受注生産体制の構築、倉庫保管・出荷まで、
            ブランド運営に必要なすべてをワンストップでサポートします。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-10 items-start">
          <div className="lg:col-span-3 space-y-0">
            {odmSteps.map((step, i) => (
              <ODMStep key={step.num} {...step} delay={i * 80} isLast={i === odmSteps.length - 1} />
            ))}
          </div>
          <div className="lg:col-span-2 lg:sticky lg:top-32">
            <div className="reveal aspect-[3/4] overflow-hidden mb-4 sm:mb-6 hidden sm:block">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"
                alt="ODMブランド開発"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="reveal bg-[#FFE500] p-5 sm:p-6">
              <p className="font-black text-[#0B1D30] mb-2 text-sm sm:text-base">ODMがぴったりな方</p>
              <ul className="space-y-1.5 text-xs sm:text-sm text-[#0B1D30]/80 mb-4 sm:mb-5">
                {['自分のブランドを立ち上げたい', 'デザインを一から相談したい', '在庫を持たずに販売したい', '物流まで任せたい'].map(t => (
                  <li key={t} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0B1D30] shrink-0" />{t}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn-dark w-full text-center">ODMについて相談する <ArrowRight size={15} /></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ODMStep({ num, title, body, delay, isLast }: typeof odmSteps[0] & { delay: number; isLast: boolean }) {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal flex gap-4" style={{ transitionDelay: `${delay}ms` }}>
      <div className="flex flex-col items-center shrink-0">
        <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#FFE500] text-[#0B1D30] font-black text-xs flex items-center justify-center">{num}</div>
        {!isLast && <div className="w-px flex-1 bg-gray-200 my-1" style={{ minHeight: 24 }} />}
      </div>
      <div className="pb-5 sm:pb-6">
        <h3 className="font-black text-sm sm:text-base mb-1 mt-1">{title}</h3>
        <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{body}</p>
      </div>
    </div>
  )
}

/* ════════════════════════════════
   3PL
════════════════════════════════ */
const tplFeatures = [
  { emoji: '⚡', title: '迅速な対応', body: '入荷〜出荷まで最速対応。急な注文増にも柔軟に対処します。' },
  { emoji: '👕', title: 'アパレル全般', body: 'Tシャツ・ニット・アウター・インナー、幅広いアパレル製品に対応。' },
  { emoji: '👜', title: '鞄・バッグ', body: 'トートバッグ、リュック、エコバッグなど各種バッグ類にも対応可能。' },
  { emoji: '🧸', title: '雑貨・グッズ', body: 'アパレル以外の雑貨、ノベルティグッズの保管・出荷も承ります。' },
]
const tplFlow = [
  { label: '入荷・検品', icon: '📥' },
  { label: 'タグ付け・検品', icon: '🏷️' },
  { label: '保管', icon: '🏪' },
  { label: 'ピッキング・梱包', icon: '📦' },
  { label: '出荷', icon: '🚚' },
]

function TPLSection() {
  const ref = useReveal()
  return (
    <section id="3pl" className="relative py-12 sm:py-20 bg-[#0B1D30] text-white scroll-mt-28 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=1400&q=80"
        alt="" aria-hidden
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
        <div ref={ref} className="reveal mb-8 sm:mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="p-2 bg-[#0CBBD8] text-white"><Truck size={20} /></span>
            <span className="text-xs font-black tracking-widest text-[#0CBBD8] uppercase">3PL — 物流代行</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-3">物流は、任せてください。</h2>
          <p className="text-sm sm:text-base text-white/60 max-w-2xl leading-relaxed">
            製造だけでなく、物流もマリナに任せられます。アパレルから鞄・雑貨まで、
            入荷・保管・ピッキング・出荷を迅速に対応。EC運営の手間を大幅に削減できます。
          </p>
        </div>

        <div className="reveal mb-8 sm:mb-12 bg-white/5 border border-white/10 p-5 sm:p-8">
          <p className="text-xs font-black text-[#0CBBD8] tracking-widest mb-5 sm:mb-6">3PL FLOW</p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-0">
            {tplFlow.map((step, i) => (
              <div key={step.label} className="flex sm:flex-col items-center sm:flex-1 gap-3 sm:gap-2 sm:text-center">
                <div className="flex items-center gap-3 sm:flex-col sm:gap-2 flex-1 sm:flex-none">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 flex items-center justify-center text-xl sm:text-2xl shrink-0">{step.icon}</div>
                  <p className="text-xs font-bold">{step.label}</p>
                </div>
                {i < tplFlow.length - 1 && <div className="w-px h-5 bg-white/20 sm:hidden" />}
                {i < tplFlow.length - 1 && <div className="hidden sm:block text-white/30 text-lg">→</div>}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10">
          {tplFeatures.map((f, i) => (
            <div key={f.title} className="reveal border border-white/10 p-4 sm:p-5 hover:bg-white/5 transition-colors"
              style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">{f.emoji}</div>
              <h3 className="font-black text-xs sm:text-sm mb-1 sm:mb-2">{f.title}</h3>
              <p className="text-xs text-white/50 leading-relaxed hidden sm:block">{f.body}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/contact" className="btn-yellow">3PLについて相談する <ArrowRight size={16} /></Link>
        </div>
      </div>
    </section>
  )
}

/* ─── Item Categories ─── */
const mainItems = [
  { emoji: '👔', name: 'シャツ・ブラウス' },
  { emoji: '👖', name: 'パンツ・スラックス' },
  { emoji: '🧥', name: 'ジャケット・アウター' },
  { emoji: '👕', name: 'カットソー・Tシャツ' },
  { emoji: '🧶', name: 'ニット・セーター' },
  { emoji: '👗', name: 'ワンピース・スカート' },
]
const designItems = [
  { emoji: '🎨', name: 'デザイン性の高いウェア' },
  { emoji: '⚡', name: '機能素材・スポーツウェア' },
  { emoji: '🏋️', name: 'ワークウェア・ユニフォーム' },
  { emoji: '🖨️', name: 'プリント・刺繍アイテム' },
]

function ItemCategories() {
  const ref = useReveal()
  return (
    <section className="py-12 sm:py-16 bg-[#F8FCFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div ref={ref} className="reveal text-center mb-8 sm:mb-10">
          <p className="eyebrow">What We Make</p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black">
            対応品目
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div>
            <span className="text-[10px] font-black bg-[#0B1D30] text-white px-3 py-1.5 mb-4 inline-block">ベーシックウェア</span>
            <div className="grid grid-cols-2 gap-2">
              {mainItems.map(item => (
                <div key={item.name} className="bg-white border border-gray-100 p-3 sm:p-4 flex items-center gap-2 sm:gap-3">
                  <span className="text-xl shrink-0">{item.emoji}</span>
                  <span className="text-xs sm:text-sm font-bold">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <span className="text-[10px] font-black bg-[#0CBBD8] text-white px-3 py-1.5 mb-4 inline-block">デザイン・機能系</span>
            <div className="grid grid-cols-2 gap-2">
              {designItems.map(item => (
                <div key={item.name} className="bg-white border border-[#D4E8EF] p-3 sm:p-4 flex items-center gap-2 sm:gap-3">
                  <span className="text-xl shrink-0">{item.emoji}</span>
                  <span className="text-xs sm:text-sm font-bold">{item.name}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-3">※ 素材・仕様によって対応可否が異なります。まずご相談ください。</p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── CTA ─── */
function ServicesCTA() {
  const ref = useReveal()
  return (
    <section className="py-12 sm:py-16 bg-[#0CBBD8]">
      <div ref={ref} className="reveal max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-3 sm:mb-4">
          何でもご相談ください
        </h2>
        <p className="text-white/80 text-sm mb-6 sm:mb-8 leading-relaxed">
          「何から始めればいいかわからない」という段階でも大歓迎。<br className="hidden sm:block" />
          ご相談内容をもとに、最適なプランをご提案します。
        </p>
        <Link to="/contact" className="btn-yellow">相談してみる <ArrowRight size={16} /></Link>
      </div>
    </section>
  )
}
