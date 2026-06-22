import { createContext, useContext, useState, type ReactNode } from 'react'

interface ContactCtxType {
  open: () => void
}

const ContactCtx = createContext<ContactCtxType>({ open: () => {} })

export function useContact() {
  return useContext(ContactCtx)
}

export function ContactProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <ContactCtx.Provider value={{ open: () => setIsOpen(true) }}>
      {children}
      {isOpen && <ContactModalInner onClose={() => setIsOpen(false)} />}
    </ContactCtx.Provider>
  )
}

/* ─── Modal 本体 ─── */
import { useState as useFormState } from 'react'
import { Mail, CheckCircle, AlertCircle, Send, X } from 'lucide-react'
import emailjs from '@emailjs/browser'
import confetti from 'canvas-confetti'

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  ?? ''
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? ''
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  ?? ''

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

type Tab = 'line' | 'email'

function ContactModalInner({ onClose }: { onClose: () => void }) {
  const [tab, setTab] = useFormState<Tab>('line')
  const [form, setForm] = useFormState<Form>(init)
  const [errors, setErrors] = useFormState<Partial<Form>>({})
  const [status, setStatus] = useFormState<Status>('idle')

  const validate = () => {
    const e: Partial<Form> = {}
    if (!form.name.trim())    e.name = 'お名前を入力してください'
    if (!form.email.trim())   e.email = 'メールアドレスを入力してください'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = '形式が正しくありません'
    if (!form.inquiryType)    e.inquiryType = '種別を選択してください'
    if (!form.message.trim()) e.message = '内容を入力してください'
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
        EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID,
        { from_name: form.name, from_company: form.company, from_email: form.email,
          inquiry_type: form.inquiryType, message: form.message, reply_to: form.email },
        EMAILJS_PUBLIC_KEY,
      )
      setStatus('success')
      setForm(init)
      fireConfetti()
    } catch {
      setStatus('error')
    }
  }

  const handleClose = () => {
    if (status === 'loading') return
    onClose()
  }

  return (
    <div className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleClose} />
      <div className="relative bg-white w-full max-w-xl mx-0 sm:mx-4 max-h-[96dvh] overflow-y-auto shadow-2xl flex flex-col">

        {/* ヘッダー */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 sticky top-0 bg-white z-10">
          <p className="font-black text-[#0B1D30] text-base">お問い合わせ・無料相談</p>
          {status !== 'loading' && (
            <button onClick={handleClose} className="text-gray-400 hover:text-gray-700 p-1" aria-label="閉じる">
              <X size={22} />
            </button>
          )}
        </div>

        {status === 'success' ? (
          <SuccessView onClose={onClose} />
        ) : (
          <div className="p-6">
            {/* タブ */}
            <div className="flex mb-6 border border-gray-200">
              <TabBtn active={tab === 'line'} onClick={() => setTab('line')} label="LINE（推奨）" color="#06C755" />
              <TabBtn active={tab === 'email'} onClick={() => setTab('email')} label="メール" color="#0CBBD8" />
            </div>

            {tab === 'line' ? (
              /* LINE パネル */
              <div className="space-y-5">
                <div className="flex flex-col sm:flex-row gap-6 items-center bg-[#06C755]/5 border border-[#06C755]/20 p-5">
                  <div className="flex flex-col items-center gap-1.5 shrink-0">
                    <div className="w-28 h-28 bg-gray-50 border-2 border-gray-100 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-2xl mb-1">📱</div>
                        <p className="text-[9px] text-gray-400 leading-tight">QRコードを<br />ここに設置</p>
                      </div>
                    </div>
                    <p className="text-[10px] text-gray-400">スキャンして追加</p>
                  </div>
                  <div className="flex-1">
                    <p className="font-black text-[#0B1D30] mb-1.5 text-sm">LINEが最速でご対応できます</p>
                    <ul className="space-y-1.5 mb-4">
                      {['営業時間内は1時間以内に返信', '写真・資料をそのまま送れる', 'やりとりが気軽'].map(t => (
                        <li key={t} className="flex items-center gap-2 text-xs text-gray-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#06C755] shrink-0" />{t}
                        </li>
                      ))}
                    </ul>
                    <a href={LINE_URL} target="_blank" rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-[#06C755] text-white w-full py-3.5 text-sm font-black hover:bg-[#05B04A] transition-colors">
                      <LineIcon /> LINEで友だち追加して相談する
                    </a>
                  </div>
                </div>
                <p className="text-center text-xs text-gray-400">営業時間：9:00〜18:00（土日祝除く）</p>
              </div>
            ) : (
              /* メールフォーム */
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <input type="text" name="honeypot" value={form.honeypot} onChange={handleChange}
                  aria-hidden tabIndex={-1} className="hidden" />

                <Field label="お名前" required error={errors.name}>
                  <input type="text" name="name" value={form.name} onChange={handleChange}
                    placeholder="山田 太郎" className={inp(!!errors.name)} autoComplete="name" />
                </Field>
                <Field label="会社名・屋号" error={errors.company}>
                  <input type="text" name="company" value={form.company} onChange={handleChange}
                    placeholder="株式会社〇〇（任意）" className={inp(false)} />
                </Field>
                <Field label="メールアドレス" required error={errors.email}>
                  <input type="email" name="email" value={form.email} onChange={handleChange}
                    placeholder="example@email.com" className={inp(!!errors.email)} />
                </Field>
                <Field label="お問い合わせ種別" required error={errors.inquiryType}>
                  <select name="inquiryType" value={form.inquiryType} onChange={handleChange} className={inp(!!errors.inquiryType)}>
                    <option value="">選択してください</option>
                    {inquiryTypes.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </Field>
                <Field label="お問い合わせ内容" required error={errors.message}>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={4}
                    placeholder="ご要望・質問内容をご記入ください" className={inp(!!errors.message)} />
                </Field>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 px-4 py-3">
                    <AlertCircle size={15} />送信に失敗しました。再度お試しください。
                  </div>
                )}

                <button type="submit" disabled={status === 'loading'}
                  className="btn-water w-full disabled:opacity-60 disabled:cursor-not-allowed">
                  {status === 'loading'
                    ? <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />送信中...</>
                    : <><Send size={15} />送信する（無料）</>}
                </button>
                <p className="text-xs text-center text-gray-400">送信後、確認メールをお送りします。24時間以内にご返信します。</p>
                <p className="text-xs text-center text-gray-400">営業時間：9:00〜18:00（土日祝除く）</p>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

/* ─── 送信完了 ─── */
function SuccessView({ onClose }: { onClose: () => void }) {
  return (
    <div className="py-16 px-6 text-center flex flex-col items-center">
      <div className="relative mb-6">
        <CheckCircle size={72} className="text-[#06C755]" />
        <div className="absolute inset-0 animate-ping rounded-full bg-[#06C755]/20" style={{ animationDuration: '1.5s', animationIterationCount: 3 }} />
      </div>
      <h3 className="text-2xl font-black text-[#0B1D30] mb-3">送信完了！</h3>
      <p className="text-sm text-gray-500 mb-2 leading-relaxed">
        ご入力のメールアドレスに確認メールをお送りしました。
      </p>
      <p className="text-sm text-gray-500 mb-10 leading-relaxed">
        担当者より<span className="font-black text-[#0B1D30]">24時間以内</span>にご連絡いたします。
      </p>

      {/* 紙吹雪が降るので少し余白 */}
      <button onClick={onClose} className="btn-water px-12">
        閉じる
      </button>
    </div>
  )
}

/* ─── コンフェティ ─── */
function fireConfetti() {
  const colors = ['#0CBBD8', '#FFE500', '#0B1D30', '#06C755', '#ffffff']

  confetti({ particleCount: 80, spread: 60, origin: { x: 0.3, y: 0.5 }, colors })
  confetti({ particleCount: 80, spread: 60, origin: { x: 0.7, y: 0.5 }, colors })

  setTimeout(() => {
    confetti({ particleCount: 60, spread: 100, origin: { x: 0.5, y: 0.3 }, colors, gravity: 0.8 })
  }, 300)

  setTimeout(() => {
    confetti({ particleCount: 40, spread: 70, startVelocity: 25, origin: { x: 0.2, y: 0.7 }, colors })
    confetti({ particleCount: 40, spread: 70, startVelocity: 25, origin: { x: 0.8, y: 0.7 }, colors })
  }, 600)
}

/* ─── Helpers ─── */
function TabBtn({ active, onClick, label, color }: { active: boolean; onClick: () => void; label: string; color: string }) {
  return (
    <button onClick={onClick}
      className="flex-1 py-3 text-xs font-black border-b-2 transition-all"
      style={{ borderColor: active ? color : 'transparent', color: active ? color : '#9CA3AF' }}>
      {label}
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
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
    </svg>
  )
}

// Mail アイコンを lucide から import しているが未使用の場合のダミー
const _Mail = Mail
