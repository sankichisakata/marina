import { useEffect, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'

const VIDEO_SRC = '/video/hero.mp4'
const VIDEO_POSTER = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80'

export default function Hero() {
  const [visible, setVisible] = useState(false)
  const [videoReady, setVideoReady] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="relative min-h-screen bg-[#0B1D30] overflow-hidden flex items-center">

      {/* Background video */}
      <div className="absolute inset-0 pointer-events-none">
        <video
          ref={videoRef}
          autoPlay muted loop playsInline
          poster={VIDEO_POSTER}
          onCanPlay={() => setVideoReady(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${videoReady ? 'opacity-45' : 'opacity-0'}`}
        >
          <source src={VIDEO_SRC} type="video/mp4" />
        </video>
        {!videoReady && (
          <img src={VIDEO_POSTER} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover opacity-30" />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1D30] via-[#0B1D30]/80 to-[#0B1D30]/30" />
        <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#0B1D30]" />
      </div>

      {/* Decorative yellow blob */}
      <div className="absolute bottom-1/3 right-16 w-72 h-72 bg-[#FFE500] rounded-full filter blur-[150px] opacity-8 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 pt-28 pb-24 w-full">
        <div className="max-w-2xl">
          <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-[76px] font-black text-white leading-[1.05] mt-4 mb-8 transition-all duration-700 delay-150 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            あなたの服を、<br />
            <span className="text-[#FFE500]">カタチにする。</span>
          </h1>

          {/* Stats */}
          <div className={`grid grid-cols-3 gap-4 sm:gap-6 mt-10 sm:mt-14 pt-8 sm:pt-10 border-t border-white/10 transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {[
              { num: '50年+', label: 'ものづくりの経験' },
              { num: '4ヶ国', label: 'に工場があります' },
              { num: '50枚〜', label: 'から作れます' },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-2xl sm:text-3xl md:text-4xl font-black text-[#FFE500]">{s.num}</p>
                <p className="text-[10px] sm:text-xs text-white/40 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <a href="#next" className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 text-white/25 hover:text-[#0CBBD8] transition-colors animate-bounce z-10" aria-label="下へ">
        <ChevronDown size={28} />
      </a>
    </section>
  )
}
