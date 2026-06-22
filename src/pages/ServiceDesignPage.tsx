import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const serviceData = [
  {
    num: '01',
    label: 'OEM',
    color: '#0CBBD8',
    bgLight: '#E0F7FC',
    title: '製造受託',
    sub: '小ロット50枚〜 / 大ロット3,000枚〜',
    body: 'お客様のデザインで服を作ります。4ヶ国ネットワークで最適な工場をご提案。サンプル確認〜本生産まで専任担当者が伴走します。',
    img: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=800&q=80',
    href: '/services#oem',
  },
  {
    num: '02',
    label: 'ODM',
    color: '#1A3A5C',
    bgLight: '#EDF2F8',
    title: 'ブランド開発支援',
    sub: '構想 → デザイン → 製造 → 出荷',
    body: 'ブランドのコンセプト設計からデザイン・製造・物流まで一貫対応。「デザインが決まっていない」段階から始められます。',
    img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80',
    href: '/services#odm',
  },
  {
    num: '03',
    label: '3PL',
    color: '#D97700',
    bgLight: '#FFF3DC',
    title: '物流代行',
    sub: 'アパレル・鞄・雑貨に特化',
    body: '入荷・保管・ピッキング・出荷をまるごとお任せ。EC・小売向け発送・スポット検品など柔軟に対応します。',
    img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80',
    href: '/services#3pl',
  },
]

/* ──────────────────────────────────────────
   PATTERN A — 縦カード3列グリッド
   クリーンな3カラム。画像上・テキスト下。
   ホバーで浮き上がり + 画像ズーム。
────────────────────────────────────────── */
function PatternA() {
  return (
    <section className="py-16 sm:py-24 bg-[#FAFCFF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-[11px] font-black tracking-[0.25em] uppercase bg-[#E0F7FC] text-[#0CBBD8] px-4 py-1.5 rounded-full mb-4">
            サービス
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0B1D30] leading-tight">
            3つのサービスで、<br />ものづくりを完結。
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {serviceData.map(s => (
            <Link
              key={s.label}
              to={s.href}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              <div className="h-1.5 w-full" style={{ backgroundColor: s.color }} />
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span
                  className="text-[10px] font-black tracking-widest rounded-full px-3 py-1 self-start mb-3"
                  style={{ backgroundColor: s.bgLight, color: s.color }}
                >
                  {s.label}
                </span>
                <h3 className="text-xl font-black text-[#0B1D30] mb-1">{s.title}</h3>
                <p className="text-xs text-gray-400 font-bold mb-3">{s.sub}</p>
                <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-1">{s.body}</p>
                <span
                  className="inline-flex items-center gap-2 text-xs font-black"
                  style={{ color: s.color }}
                >
                  詳しく見る
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-center group-hover:translate-x-0.5 transition-transform"
                    style={{ backgroundColor: s.color }}
                  >
                    <ArrowRight size={11} className="text-white" />
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-[#0B1D30] text-white text-sm font-black px-7 py-3.5 rounded-full hover:bg-[#0CBBD8] transition-colors"
          >
            サービス詳細を見る <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ──────────────────────────────────────────
   PATTERN B — デザイナーサイト風
   明るい背景・大きな番号をアクセントに・縦長画像。
────────────────────────────────────────── */
function PatternB() {
  return (
    <section className="bg-white">
      {/* ヘッダー */}
      <div className="max-w-6xl mx-auto px-6 sm:px-14 pt-20 sm:pt-28 pb-10">
        <div className="flex items-end justify-between border-b-2 border-[#0B1D30] pb-6">
          <h2 className="text-4xl sm:text-6xl font-black text-[#0B1D30] leading-none">
            Service
          </h2>
          <span className="text-xs text-gray-400 font-bold tracking-widest uppercase pb-1">
            3つのサービス
          </span>
        </div>
      </div>

      {/* 各サービス */}
      {serviceData.map((s, i) => (
        <div key={s.label} style={{ backgroundColor: s.bgLight }}>
          <div className={`max-w-6xl mx-auto px-6 sm:px-14 flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-0`}>

            {/* 左/右: 縦長画像（四角） */}
            <div className="md:w-5/12 shrink-0 py-10 sm:py-14 flex items-start">
              <div className="relative w-full">
                {/* 大番号（背景） */}
                <span
                  className="absolute -top-4 font-black leading-none select-none pointer-events-none opacity-10"
                  style={{ fontSize: 'clamp(80px, 14vw, 160px)', color: s.color, left: i % 2 === 1 ? 'auto' : '-0.1em', right: i % 2 === 1 ? '-0.1em' : 'auto' }}
                >
                  {s.num}
                </span>
                {/* 縦長画像・四角 */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute bottom-0 left-0 right-0 h-1" style={{ backgroundColor: s.color }} />
                </div>
              </div>
            </div>

            {/* 右/左: テキスト */}
            <div className={`md:w-7/12 flex flex-col justify-center py-10 sm:py-14 ${i % 2 === 1 ? 'md:pr-14' : 'md:pl-14'}`}>
              <div className="flex items-center gap-3 mb-8">
                <span
                  className="text-[10px] font-black tracking-[0.3em] uppercase px-3 py-1.5 rounded-full"
                  style={{ backgroundColor: s.color, color: s.color === '#1A3A5C' ? 'white' : '#0B1D30' }}
                >
                  {s.label}
                </span>
                <span className="text-[11px] text-gray-400 font-bold tracking-wide">{s.sub}</span>
              </div>

              <h3
                className="font-black text-[#0B1D30] leading-[1.05] mb-6"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
              >
                {s.title}
              </h3>

              <p className="text-base text-gray-600 leading-relaxed mb-10 max-w-sm">{s.body}</p>

              <Link
                to={s.href}
                className="inline-flex items-center gap-2 group/lnk self-start"
              >
                <span
                  className="text-xs font-black tracking-widest uppercase border-b-2 pb-0.5 group-hover/lnk:opacity-70 transition-opacity"
                  style={{ color: s.color, borderColor: s.color }}
                >
                  詳しく見る
                </span>
                <ArrowRight size={13} style={{ color: s.color }} className="group-hover/lnk:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      ))}

      <div className="bg-white max-w-6xl mx-auto px-6 sm:px-14 py-14">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 border-2 border-[#0B1D30] text-[#0B1D30] text-sm font-black px-7 py-3.5 rounded-full hover:bg-[#0B1D30] hover:text-white transition-colors"
        >
          サービス詳細を見る <ArrowRight size={15} />
        </Link>
      </div>
    </section>
  )
}

/* ──────────────────────────────────────────
   PATTERN C — カラーブロック左右スプリット
   左：サービスカラー背景＋テキスト
   右：フルブリード写真
   交互に左右が入れ替わる。
────────────────────────────────────────── */
function PatternC() {
  return (
    <section>
      {/* ヘッダー */}
      <div className="bg-[#0B1D30] px-6 sm:px-14 pt-16 sm:pt-24 pb-14">
        <p className="text-[11px] font-black tracking-[0.3em] uppercase text-[#0CBBD8] mb-4">Service</p>
        <h2 className="text-4xl sm:text-6xl font-black text-white leading-[1]">
          3つのサービスで、<br />
          <span className="text-[#FFE500]">ものづくりを完結。</span>
        </h2>
      </div>

      {/* スプリット行 */}
      {serviceData.map((s, i) => {
        const reverse = i % 2 === 1
        return (
          <Link
            key={s.label}
            to={s.href}
            className={`group flex flex-col md:h-[360px] lg:h-[420px] ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}
          >
            {/* カラーブロック（テキスト側） */}
            <div
              className="w-full md:w-1/2 flex flex-col justify-between p-8 sm:p-12 lg:p-16 relative overflow-hidden"
              style={{ backgroundColor: s.color }}
            >
              {/* 巨大番号ウォーターマーク */}
              <span
                className="absolute -bottom-6 font-black leading-none select-none pointer-events-none text-black/10"
                style={{ fontSize: 'clamp(100px, 16vw, 200px)', right: reverse ? 'auto' : '-0.05em', left: reverse ? '-0.05em' : 'auto' }}
              >
                {s.num}
              </span>

              <span className="text-[10px] font-black tracking-[0.3em] uppercase text-white/60 relative">{s.num}</span>

              <div className="relative">
                <p
                  className="text-[11px] font-black tracking-[0.3em] uppercase mb-4"
                  style={{ color: s.color === '#1A3A5C' ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.4)' }}
                >
                  {s.label}
                </p>
                <h3
                  className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.05] mb-5"
                  style={{ color: s.color === '#1A3A5C' ? 'white' : '#0B1D30' }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-8 max-w-xs hidden sm:block"
                  style={{ color: s.color === '#1A3A5C' ? 'rgba(255,255,255,0.55)' : 'rgba(0,0,0,0.5)' }}
                >
                  {s.body}
                </p>
                <span
                  className="inline-flex items-center gap-2 text-xs font-black group-hover:gap-3 transition-all duration-300"
                  style={{ color: s.color === '#1A3A5C' ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.6)' }}
                >
                  詳しく見る <ArrowRight size={13} />
                </span>
              </div>
            </div>

            {/* 写真側 */}
            <div className="w-full md:w-1/2 overflow-hidden min-h-[220px]">
              <img
                src={s.img}
                alt={s.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          </Link>
        )
      })}

      {/* フッター */}
      <div className="bg-[#0B1D30] px-6 sm:px-14 py-12">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 border border-white/25 text-white text-sm font-black px-7 py-3.5 rounded-full hover:bg-white hover:text-[#0B1D30] transition-colors"
        >
          サービス詳細を見る <ArrowRight size={15} />
        </Link>
      </div>
    </section>
  )
}

/* ──────────────────────────────────────────
   比較ページ
────────────────────────────────────────── */
const patterns = [
  { id: 'a', label: 'PATTERN A', sub: '3カラムカード', color: '#0CBBD8' },
  { id: 'b', label: 'PATTERN B', sub: '大番号 + 丸写真', color: '#1A3A5C' },
  { id: 'c', label: 'PATTERN C', sub: 'ダークインデックス行', color: '#D97700' },
]

export default function ServiceDesignPage() {
  return (
    <div className="page-wrapper">
      {/* ナビ */}
      <nav className="sticky top-0 z-[9999] bg-[#0B1D30] border-b border-white/10 flex">
        {patterns.map(p => (
          <a
            key={p.id}
            href={`#${p.id}`}
            className="flex-1 text-center py-3 hover:bg-white/5 transition-colors"
          >
            <p className="text-[10px] font-black tracking-widest text-white/40">{p.label}</p>
            <p className="text-[11px] font-bold text-white mt-0.5">{p.sub}</p>
          </a>
        ))}
      </nav>

      {/* Pattern A */}
      <section id="a">
        <div className="bg-[#0CBBD8] text-[#0B1D30] py-2.5 text-center text-[11px] font-black tracking-[0.3em] uppercase">
          PATTERN A — 3カラムカードグリッド
        </div>
        <PatternA />
      </section>

      {/* Pattern B */}
      <section id="b">
        <div className="bg-[#1A3A5C] text-white py-2.5 text-center text-[11px] font-black tracking-[0.3em] uppercase">
          PATTERN B — 大番号 + 丸い写真
        </div>
        <PatternB />
      </section>

      {/* Pattern C */}
      <section id="c">
        <div className="bg-[#D97700] text-white py-2.5 text-center text-[11px] font-black tracking-[0.3em] uppercase">
          PATTERN C — ダークインデックス行（ホバーで写真スライドイン）
        </div>
        <PatternC />
      </section>
    </div>
  )
}
