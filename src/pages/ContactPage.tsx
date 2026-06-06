import { useState, useRef, useEffect } from 'react'
import { MessageCircle, Mail, CheckCircle, AlertCircle, Send } from 'lucide-react'
import SEO from '../components/SEO'

const LINE_URL = 'https://lin.ee/XXXXXXXX'

const inquiryTypes = [
  'OEM — 小ロット相談（50枚〜）',
  'OEM — 大ロット相談（3,000枚〜）',
  'ODM — ブランド開発・構想について',
  '3PL — 物流代行について',
  'サンプル制作について',
  'その他',
]

interface Form {
  name: string; company: string; email: string
  inquiryType: string; message: string; honeypot: string
}
type Status = 'idle' | 'loading' | 'success' | 'error'

const init: Form = { name: '', company: '', email: '', inquiryType: '', message: '', honeypot: '' }

export default function ContactPage() {
  const [tab, setTab] = useState<'line' | 'email'>('line')
  const [form, setForm] = useState<Form>(init)
  const [errors, setErrors] = useState<Partial<Form>>({})
  const [status, setStatus] = useState<Status>('idle')

  // Switch to email tab if URL hash is #email
  useEffect(() => {
    if (window.location.hash === '#email') setTab('email')
  }, [])

  const validate = () => {
    const e: Partial<Form> = {}
    if (!form.name.trim()) e.name = 'お名前を入力してください'
    if (!form.email.trim()) e.email = 'メールアドレスを入力してください'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'メールアドレスの形式が正しくありません'
    if (!form.inquiryType) e.inquiryType = 'お問い合わせ種別を選択してください'
    if (!form.message.trim()) e.message = 'お問い合わせ内容を入力してください'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm(p => ({ ...p, [name]: value }))
    if (errors[name as keyof Form]) setErrors(p => ({ ...p, [name]: undefined }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (form.honeypot) return
    if (!validate()) return
    setStatus('loading')
    try {
      // EmailJS: uncomment and configure
      // const emailjs = await import('@emailjs/browser')
      // await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', { ... }, 'PUBLIC_KEY')
      await new Promise(r => setTimeout(r, 1200))
      setStatus('success')
      setForm(init)
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <SEO
        title="アパレルOEM・ODM・3PL 無料相談・お問い合わせ"
        description="アパレルOEM・ODM・3PLのご相談は株式会社マリナへ。LINEで気軽に相談いただけます。小ロット50枚〜の製造代行から、ブランド立ち上げ支援・物流代行まで初回相談無料。"
        path="/contact"
      />
      <div className="page-wrapper bg-[#F8FCFF]">

        {/* Header */}
        <div className="bg-[#0B1D30] pt-28 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-8">
            <p className="eyebrow text-[#0CBBD8]">Contact</p>
            <h1 className="page-title text-white mt-2 mb-4">お問い合わせ</h1>
            <p className="text-white/60">初回相談は無料です。気軽にどうぞ。</p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-8 py-16">

          {/* Tabs */}
          <div className="flex bg-white border border-gray-100 mb-8 overflow-hidden">
            <TabBtn active={tab === 'line'} onClick={() => setTab('line')} icon={<MessageCircle size={16} />} label="LINE公式（推奨）" />
            <TabBtn active={tab === 'email'} onClick={() => setTab('email')} icon={<Mail size={16} />} label="メールで問い合わせ" />
          </div>

          {tab === 'line' ? (
            <LinePanel />
          ) : status === 'success' ? (
            <SuccessPanel onReset={() => setStatus('idle')} />
          ) : (
            <EmailForm form={form} errors={errors} status={status} onChange={handleChange} onSubmit={handleSubmit} />
          )}

          {/* Business hours */}
          <div className="mt-10 text-center text-sm text-gray-400">
            営業時間：平日 10:00〜18:00（土日祝除く）
          </div>
        </div>
      </div>
    </>
  )
}

/* ─── LINE Panel ─── */
function LinePanel() {
  return (
    <div className="bg-white border border-gray-100 p-5 sm:p-8 space-y-6 sm:space-y-7">
      <div className="flex items-center gap-3 bg-[#06C755]/10 border border-[#06C755]/30 px-4 py-3">
        <MessageCircle size={20} className="text-[#06C755]" />
        <p className="text-sm font-black">LINE公式アカウントが最も素早く対応できます</p>
      </div>

      <a
        href={LINE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 bg-[#06C755] text-white w-full py-5 text-base font-black hover:bg-[#05B04A] transition-colors active:scale-95"
      >
        <LineIcon />
        LINEで友だち追加して相談する
      </a>

      <div className="flex flex-col items-center gap-3 py-2">
        <p className="text-xs font-bold text-gray-400 tracking-wider uppercase">QRコードで追加</p>
        <div className="w-36 h-36 bg-gray-50 border-2 border-gray-100 flex items-center justify-center">
          <div className="text-center">
            <div className="text-3xl mb-1">📱</div>
            <p className="text-[10px] text-gray-400 leading-tight">QRコードを<br />ここに設置</p>
          </div>
        </div>
      </div>

      <ul className="space-y-2">
        {['返信が最速（営業時間内は1時間以内）', '写真・資料をそのまま送れる', 'サンプル確認もLINEで完結', 'やりとりが気軽にできる'].map(item => (
          <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
            <span className="w-1.5 h-1.5 rounded-full bg-[#06C755] shrink-0" />{item}
          </li>
        ))}
      </ul>
    </div>
  )
}

/* ─── Email Form ─── */
interface FormProps {
  form: Form; errors: Partial<Form>; status: Status
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
  onSubmit: (e: React.FormEvent) => void
}
function EmailForm({ form, errors, status, onChange, onSubmit }: FormProps) {
  const firstRef = useRef<HTMLInputElement>(null)
  useEffect(() => { setTimeout(() => firstRef.current?.focus(), 50) }, [])

  return (
    <form onSubmit={onSubmit} noValidate className="bg-white border border-gray-100 p-5 sm:p-8 space-y-5">
      <input type="text" name="honeypot" value={form.honeypot} onChange={onChange}
        aria-hidden tabIndex={-1} className="hidden" autoComplete="off" />

      <Field label="お名前" required error={errors.name}>
        <input ref={firstRef} type="text" name="name" value={form.name} onChange={onChange}
          placeholder="山田 太郎" className={inp(!!errors.name)} autoComplete="name" />
      </Field>
      <Field label="会社名・屋号" error={errors.company}>
        <input type="text" name="company" value={form.company} onChange={onChange}
          placeholder="株式会社〇〇（任意）" className={inp(false)} autoComplete="organization" />
      </Field>
      <Field label="メールアドレス" required error={errors.email}>
        <input type="email" name="email" value={form.email} onChange={onChange}
          placeholder="example@email.com" className={inp(!!errors.email)} autoComplete="email" />
      </Field>
      <Field label="お問い合わせ種別" required error={errors.inquiryType}>
        <select name="inquiryType" value={form.inquiryType} onChange={onChange} className={inp(!!errors.inquiryType)}>
          <option value="">選択してください</option>
          {inquiryTypes.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
      </Field>
      <Field label="お問い合わせ内容" required error={errors.message}>
        <textarea name="message" value={form.message} onChange={onChange} rows={5}
          placeholder="ご要望・質問内容をご記入ください"
          className={inp(!!errors.message)} />
      </Field>

      {status === 'error' && (
        <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 px-4 py-3">
          <AlertCircle size={15} />送信に失敗しました。時間をおいて再度お試しください。
        </div>
      )}

      <button type="submit" disabled={status === 'loading'}
        className="btn-water w-full disabled:opacity-60 disabled:cursor-not-allowed">
        {status === 'loading'
          ? <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />送信中...</>
          : <><Send size={15} />送信する（無料）</>}
      </button>
      <p className="text-xs text-center text-gray-400">送信後、通常24時間以内にご返信いたします。</p>
    </form>
  )
}

/* ─── Success ─── */
function SuccessPanel({ onReset }: { onReset: () => void }) {
  return (
    <div className="bg-white border border-gray-100 p-12 text-center">
      <CheckCircle size={52} className="text-[#06C755] mx-auto mb-4" />
      <h3 className="text-xl font-black mb-2">送信完了しました！</h3>
      <p className="text-sm text-gray-500 mb-8">担当者より24時間以内にご連絡いたします。</p>
      <button onClick={onReset} className="btn-water">閉じる</button>
    </div>
  )
}

/* ─── Helpers ─── */
function TabBtn({ active, onClick, icon, label }: { active: boolean; onClick: () => void; icon: React.ReactNode; label: string }) {
  return (
    <button onClick={onClick}
      className={`flex-1 flex items-center justify-center gap-2 py-4 text-xs font-black border-b-2 transition-all ${
        active ? 'border-[#0CBBD8] text-[#0CBBD8] bg-[#E0F7FC]' : 'border-transparent text-gray-400 hover:text-gray-700'
      }`}>
      {icon}{label}
    </button>
  )
}

function Field({ label, required, error, children }: { label: string; required?: boolean; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-xs font-black mb-1.5">
        {label}{required && <span className="text-[#0CBBD8] ml-1">*</span>}
      </label>
      {children}
      {error && <p className="mt-1 text-xs text-red-600 flex items-center gap-1"><AlertCircle size={11} />{error}</p>}
    </div>
  )
}

const inp = (err: boolean) =>
  `w-full bg-white border ${err ? 'border-red-400' : 'border-gray-200'} px-4 py-3 text-sm focus:outline-none focus:border-[#0CBBD8] transition-colors`

function LineIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
    </svg>
  )
}
