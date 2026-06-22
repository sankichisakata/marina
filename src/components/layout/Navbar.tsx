import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useContact } from '../../context/ContactContext'

const navLinks = [
  { label: 'サービス', to: '/services' },
  { label: '会社案内', to: '/about' },
  { label: 'ご依頼の流れ', to: '/process' },
  { label: 'ブログ', to: '/blog' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navRef = useRef<HTMLElement>(null)
  const { open } = useContact()

  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const fn = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setMenuOpen(false)
    }
    document.addEventListener('mousedown', fn)
    return () => document.removeEventListener('mousedown', fn)
  }, [menuOpen])

  const isHome = location.pathname === '/'
  const transparent = isHome && !scrolled && !menuOpen

  return (
    <header ref={navRef} className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
      transparent ? 'bg-transparent' : 'bg-white/95 backdrop-blur-md shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-18 flex items-center justify-between py-4">
        <Link to="/" className="flex flex-col leading-tight">
          <span className="text-[9px] font-bold tracking-[0.22em] text-[#0CBBD8] uppercase">株式会社</span>
          <span className={`text-[22px] font-black tracking-tight leading-none ${transparent ? 'text-white' : 'text-[#0B1D30]'}`}>
            MARI<span className="text-[#FFE500]">NA</span>
          </span>
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `text-sm font-bold transition-colors ${
                  isActive
                    ? 'text-[#0CBBD8]'
                    : transparent
                    ? 'text-white/80 hover:text-white'
                    : 'text-[#0B1D30] hover:text-[#0CBBD8]'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <button onClick={open} className="btn-yellow text-xs py-2.5 px-5">
            無料相談
          </button>
        </nav>

        {/* Mobile toggle */}
        <button
          className={`md:hidden p-2 ${transparent ? 'text-white' : 'text-[#0B1D30]'}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-6 flex flex-col gap-5">
          {navLinks.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => `text-base font-bold ${isActive ? 'text-[#0CBBD8]' : 'text-[#0B1D30]'}`}
            >
              {label}
            </NavLink>
          ))}
          <button onClick={() => { setMenuOpen(false); open() }} className="btn-yellow w-full text-center">
            無料相談
          </button>
        </div>
      )}
    </header>
  )
}
