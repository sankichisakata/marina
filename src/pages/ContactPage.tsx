import { useState } from 'react'
import { Mail, CheckCircle, AlertCircle, Send, X } from 'lucide-react'
import emailjs from '@emailjs/browser'
import SEO from '../components/SEO'

const LINE_URL = 'https://lin.ee/XXXXXXXX'

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  ?? ''
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? ''
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  ?? ''

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
  const [modalOpen, setModalOpen] = useState(false)
  const [form, setForm]     = useState<Form>(init)
  const [errors, setErrors] = useState<Partial<Form>>({})
  const [status, setStatus] = useState<Status>('idle')

  const openModal  = () => { setModalOpen(true); setStatus('idle'); setForm(init); setErrors({}) }
  const closeModal = () => { setModalOpen(false); setStatus('idle') }

  const validate = () => {
    const e: Partial<Form> = {}
    if (!form.name.trim())    e.name = 'お名前を入力してください'
    if (!form.email.trim())   e.email = 'メールアドレスを入力してください'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'メールアドレスの形式が正しくありません'
    if (!form.inquiryType)    e.inquiryType = 'お問い合わせ種別を選択してください'
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
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:    form.name,
          from_company: form.company,
          from_email:   form.email,
          inquiry_type: form.inquiryType,
          message:      form.message,
          reply_to:     form.email,
        },
        EMAILJS_PUBLIC_KEY,
      )
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

        <div className="max-w-3xl mx-auto px-4 sm:px-8 py-16 space-y-6">

          {/* LINE セクション */}
          <div className="bg-white border border-gray-100 p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-3 bg-[#06C755]/10 border border-[#06C755]/30 px-4 py-3">
              <MessageCircle className="text-[#06C755] shrink-0" size={20} />
              <p className="text-sm font-black">LINEが最も素早くご対応できます（営業時間内は1時間以内）</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 items-center">
              {/* QR */}
              <div className="flex flex-col items-center gap-2 shrink-0">
                <div className="w-36 h-36 bg-gray-50 border-2 border-gray-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl mb-1">📱</div>
                    <p className="text-[10px] text-gray-400 leading-tight">QRコードを<br />ここに設置</p>
                  </div>
                </div>
                <p className="text-[11px] text-gray-400">スマホでスキャンして追加</p>
              </div>

              <div className="flex-1 space-y-4 w-full">
                <p className="text-sm text-gray-600 leading-relaxed">
                  QRコードを読み取るか、下のボタンからLINE公式アカウントを友だち追加して、
                  お気軽にご相談ください。写真・資料もそのまま送れます。
                </p>
                <ul className="space-y-1.5">
                  {['写真・資料をそのまま送れる', 'サンプル確認もLINEで完結', 'やりとりが気軽にできる'].map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#06C755] shrink-0" />{item}
                    </li>
                  ))}
                </ul>
                <a
                  href={LINE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-[#06C755] text-white w-full py-4 text-sm font-black hover:bg-[#05B04A] transition-colors active:scale-95"
                >
                  <LineIcon />
                  LINEで友だち追加して相談する
                </a>
              </div>
            </div>
          </div>

          {/* メールで問い合わせ */}
          <div className="bg-white border border-gray-100 p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <div className="flex-1">
              <p className="font-black text-[#0B1D30] mb-1">メールで問い合わせ</p>
              <p className="text-sm text-gray-500">必要事項を入力してお送りください。24時間以内にご返信します。</p>
            </div>
            <button
              onClick={openModal}
              className="flex items-center gap-2 bg-[#0B1D30] text-white text-sm font-black px-6 py-3 hover:bg-[#0CBBD8] transition-colors shrink-0"
            >
              <Mail size={15} />
              メールで問い合わせ
            </button>
          </div>

          {/* Business hours */}
          <div className="text-center text-sm text-gray-400">
            営業時間：9:00〜18:00（土日祝除く）
          </div>
        </div>
      </div>

      {/* モーダル */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={status !== 'loading' ? closeModal : undefined} />
          <div className="relative bg-white w-full max-w-lg mx-0 sm:mx-4 max-h-[95dvh] overflow-y-auto shadow-2xl">

            {/* モーダルヘッダー */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 sticky top-0 bg-white z-10">
              <p className="font-black text-[#0B1D30]">メールで問い合わせ</p>
              {status !== 'loading' && (
                <button onClick={closeModal} className="text-gray-400 hover:text-gray-700 transition-colors" aria-label="閉じる">
                  <X size={20} />
                </button>
              )}
            </div>

            <div className="p-6">
              {status === 'success' ? (
                /* 送信完了 */
                <div className="py-8 text-center">
                  <CheckCircle size={52} className="text-[#06C755] mx-auto mb-4" />
                  <h3 className="text-xl font-black text-[#0B1D30] mb-2">送信完了しました！</h3>
                  <p className="text-sm text-gray-500 mb-2">ご入力のメールアドレスに確認メールをお送りしました。</p>
                  <p className="text-sm text-gray-500 mb-8">担当者より24時間以内にご連絡いたします。</p>
                  <button onClick={closeModal} className="btn-water">閉じる</button>
                </div>
              ) : (
                /* フォーム */
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <input type="text" name="honeypot" value={form.honeypot} onChange={handleChange}
                    aria-hidden tabIndex={-1} className="hidden" autoComplete="off" />

                  <Field label="お名前" required error={errors.name}>
                    <input type="text" name="name" value={form.name} onChange={handleChange}
                      placeholder="山田 太郎" className={inp(!!errors.name)} autoComplete="name" />
                  </Field>
                  <Field label="会社名・屋号" error={errors.company}>
                    <input type="text" name="company" value={form.company} onChange={handleChange}
                      placeholder="株式会社〇〇（任意）" className={inp(false)} autoComplete="organization" />
                  </Field>
                  <Field label="メールアドレス" required error={errors.email}>
                    <input type="email" name="email" value={form.email} onChange={handleChange}
                      placeholder="example@email.com" className={inp(!!errors.email)} autoComplete="email" />
                  </Field>
                  <Field label="お問い合わせ種別" required error={errors.inquiryType}>
                    <select name="inquiryType" value={form.inquiryType} onChange={handleChange} className={inp(!!errors.inquiryType)}>
                      <option value="">選択してください</option>
                      {inquiryTypes.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </Field>
                  <Field label="お問い合わせ内容" required error={errors.message}>
                    <textarea name="message" value={form.message} onChange={handleChange} rows={5}
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
                  <p className="text-xs text-center text-gray-400">送信後、確認メールをお送りします。通常24時間以内にご返信いたします。</p>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

/* ─── Helpers ─── */
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

function MessageCircle({ size, className }: { size: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}

function LineIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
    </svg>
  )
}
