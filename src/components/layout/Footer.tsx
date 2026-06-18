import { Link } from 'react-router-dom'
import { Instagram, Twitter } from 'lucide-react'

const LINE_URL = 'https://lin.ee/XXXXXXXX'

export default function Footer() {
  return (
    <footer className="bg-[#0B1D30] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-14 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-5">
              <p className="text-[9px] tracking-[0.22em] text-white/40 uppercase">株式会社</p>
              <p className="text-2xl font-black">MARI<span className="text-[#FFE500]">NA</span></p>
            </div>
            <p className="text-xs text-white/50 leading-relaxed mb-5">
              創業50年以上の実績と<br />
              4ヶ国の生産ネットワーク。<br />
              小ロット50枚〜大ロットまで。
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Instagram" className="text-white/40 hover:text-[#0CBBD8] transition-colors"><Instagram size={18} /></a>
              <a href="#" aria-label="Twitter/X" className="text-white/40 hover:text-[#0CBBD8] transition-colors"><Twitter size={18} /></a>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-[10px] font-black tracking-widest text-white/30 uppercase mb-4">Services</p>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li><Link to="/services#oem" className="hover:text-white transition-colors">OEM（製造受託）</Link></li>
              <li><Link to="/services#odm" className="hover:text-white transition-colors">ODM（ブランド開発支援）</Link></li>
              <li><Link to="/services#3pl" className="hover:text-white transition-colors">3PL（物流代行）</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-[10px] font-black tracking-widest text-white/30 uppercase mb-4">Company</p>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li><Link to="/about" className="hover:text-white transition-colors">会社案内</Link></li>
              <li><Link to="/process" className="hover:text-white transition-colors">ご依頼の流れ</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">ブログ</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] font-black tracking-widest text-white/30 uppercase mb-4">Contact</p>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li>
                <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  LINE公式アカウント
                </a>
              </li>
              <li><Link to="/contact" className="hover:text-white transition-colors">メールで問い合わせ</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-7 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/30">
          <p>© 2026 株式会社マリナ. All rights reserved.</p>
          <Link to="/privacy" className="hover:text-white/60 transition-colors">プライバシーポリシー</Link>
        </div>
      </div>
    </footer>
  )
}
