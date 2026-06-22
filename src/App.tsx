import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { ChevronUp } from 'lucide-react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import { ContactProvider } from './context/ContactContext'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import AboutPage from './pages/AboutPage'
import ProcessPage from './pages/ProcessPage'
import PrivacyPage from './pages/PrivacyPage'
import PlanAPage from './pages/PlanAPage'
import PlanBPage from './pages/PlanBPage'
import PlanCPage from './pages/PlanCPage'
import ServiceDesignPage from './pages/ServiceDesignPage'
import BlogPage from './components/blog/BlogPage'
import BlogPostPage from './components/blog/BlogPostPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

function BackToTopButton() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="トップへ戻る"
      className={`fixed bottom-6 left-6 z-50 w-11 h-11 bg-[#0CBBD8] text-white flex items-center justify-center shadow-lg hover:bg-[#0AA8C3] transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <ChevronUp size={20} />
    </button>
  )
}

export default function App() {
  return (
    <ContactProvider>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/process" element={<ProcessPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/plan-a" element={<PlanAPage />} />
        <Route path="/plan-b" element={<PlanBPage />} />
        <Route path="/plan-c" element={<PlanCPage />} />
        <Route path="/service-designs" element={<ServiceDesignPage />} />
      </Routes>
      <Footer />
      <BackToTopButton />
    </ContactProvider>
  )
}
