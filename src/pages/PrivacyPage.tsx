import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const COMPANY = '株式会社マリナ'
const REP = '石塚 卓之介'
const ADDRESS = '〒130-0012 東京都墨田区太平1-2-2'
const EMAIL = 'info@marina-apparel.co.jp'
const UPDATED = '2026年6月18日'

export default function PrivacyPage() {
  return (
    <>
      <SEO
        title="プライバシーポリシー | 株式会社マリナ"
        description="株式会社マリナのプライバシーポリシー。お客様の個人情報の取り扱いについて定めています。"
        path="/privacy"
      />
      <div className="page-wrapper">
        <PrivacyHeader />
        <PrivacyBody />
      </div>
    </>
  )
}

function PrivacyHeader() {
  return (
    <div className="relative bg-[#0B1D30] pt-28 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1D30] to-[#0B1D30]/80" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-8">
        <p className="eyebrow text-[#0CBBD8]">Privacy Policy</p>
        <h1 className="text-3xl sm:text-4xl font-black text-white mt-2">
          プライバシーポリシー
        </h1>
        <p className="text-white/50 text-sm mt-3">最終更新日：{UPDATED}</p>
      </div>
    </div>
  )
}

function PrivacyBody() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="prose-custom">

          <p className="text-gray-600 leading-relaxed mb-10">
            {COMPANY}（以下「当社」）は、お客様の個人情報を適切に保護することを重要な社会的責任と認識しています。
            本プライバシーポリシー（以下「本ポリシー」）は、当社がウェブサイト（以下「本サイト」）において取得・利用する
            個人情報の取り扱いについて定めるものです。
          </p>

          <Section title="第1条　個人情報の定義">
            <p>本ポリシーにおける「個人情報」とは、個人情報の保護に関する法律（以下「個人情報保護法」）に定める個人情報を指します。すなわち、生存する個人に関する情報であって、氏名・生年月日・メールアドレス・電話番号その他の記述等により特定の個人を識別できるもの、または個人識別符号が含まれるものをいいます。</p>
          </Section>

          <Section title="第2条　個人情報の取得">
            <p>当社は、以下の方法により個人情報を取得します。</p>
            <ol>
              <li>お問い合わせフォームへの入力（氏名、会社名、電話番号、メールアドレス、お問い合わせ内容 等）</li>
              <li>メール・電話・FAXによるお問い合わせ</li>
              <li>展示会・商談会等でご提供いただく名刺・資料</li>
              <li>Cookie・アクセスログ等、本サイトの利用に伴い自動的に取得される情報</li>
            </ol>
          </Section>

          <Section title="第3条　個人情報の利用目的">
            <p>当社は、取得した個人情報を以下の目的のために利用します。</p>
            <ol>
              <li>お問い合わせ・ご相談への回答および対応</li>
              <li>OEM・ODM・3PLサービスに関するお見積もり・提案の提供</li>
              <li>受注・契約・納品・請求等の業務遂行</li>
              <li>サービスの改善・新サービスの開発を目的とした統計分析</li>
              <li>法令に基づく対応、または権利・財産・安全の保護が必要な場合</li>
            </ol>
            <p>上記の目的以外で個人情報を利用する場合は、事前にご本人の同意を取得します。</p>
          </Section>

          <Section title="第4条　個人情報の第三者提供">
            <p>当社は、以下のいずれかに該当する場合を除き、取得した個人情報を第三者に提供しません。</p>
            <ol>
              <li>ご本人の同意がある場合</li>
              <li>法令に基づく場合（裁判所・行政機関からの開示請求など）</li>
              <li>人の生命・身体・財産の保護のために必要で、ご本人の同意を得ることが困難な場合</li>
              <li>公衆衛生の向上または児童の健全な育成に特に必要な場合</li>
              <li>国の機関、地方公共団体、またはその委託を受けた者が法令の定める事務を遂行することに協力する場合</li>
            </ol>
            <p>なお、当社は業務の一部を外部委託する場合があります。その際は、適切な個人情報保護水準を満たすことを確認した上で委託し、必要な監督を行います。</p>
          </Section>

          <Section title="第5条　個人情報の適切な管理">
            <p>当社は、個人情報の漏えい・滅失・毀損を防止するため、以下の安全管理措置を実施します。</p>
            <ol>
              <li>個人情報を取り扱う従業員への適切な教育・監督</li>
              <li>不正アクセス防止のためのセキュリティ対策</li>
              <li>個人情報へのアクセス権限の適切な管理</li>
              <li>保管期間を超えた個人情報の適切な廃棄・消去</li>
            </ol>
          </Section>

          <Section title="第6条　Cookieおよびアクセス解析について">
            <p>本サイトでは、利便性向上・アクセス解析のためにCookieを使用する場合があります。Cookieは、お客様のブラウザに一時的に保存される情報であり、個人を直接識別するものではありません。</p>
            <p>また、当社はGoogle LLC提供のGoogle Analyticsを使用してアクセス情報の収集・分析を行う場合があります。Google Analyticsによるデータ収集はCookieを通じて行われ、取得したデータはGoogleのプライバシーポリシーに従い管理されます。Cookieの使用を無効にするには、ブラウザの設定をご変更ください。</p>
          </Section>

          <Section title="第7条　個人情報の開示・訂正・利用停止等">
            <p>ご本人から個人情報の開示・訂正・追加・削除・利用停止・消去・第三者提供の停止のご請求があった場合、当社は法令に従い合理的な範囲で速やかに対応します。ただし、個人情報保護法その他の法令により開示等が認められない場合はこの限りではありません。</p>
            <p>ご請求はページ末尾のお問い合わせ先までご連絡ください。</p>
          </Section>

          <Section title="第8条　プライバシーポリシーの変更">
            <p>当社は、法令の変更や事業内容の変更等に伴い、本ポリシーを変更することがあります。変更後のプライバシーポリシーは、本ページに掲載した時点から効力を生じるものとします。重要な変更がある場合には、本サイト上で告知します。</p>
          </Section>

          <Section title="第9条　お問い合わせ">
            <p>個人情報の取り扱いに関するご質問・ご相談・苦情・開示請求等は、以下の窓口までご連絡ください。</p>
            <address className="not-italic mt-4 space-y-1 text-sm text-gray-600">
              <p><span className="font-bold">会社名</span>　{COMPANY}</p>
              <p><span className="font-bold">代表取締役</span>　{REP}</p>
              <p><span className="font-bold">所在地</span>　{ADDRESS}</p>
              <p><span className="font-bold">メール</span>　<a href={`mailto:${EMAIL}`} className="text-[#0CBBD8] hover:underline">{EMAIL}</a></p>
            </address>
          </Section>

          <div className="mt-14 pt-8 border-t border-gray-100 text-center">
            <Link to="/" className="btn-water inline-flex">トップページへ戻る</Link>
          </div>

        </div>
      </div>
    </section>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="text-base sm:text-lg font-black text-[#0B1D30] mb-3 pb-2 border-b border-gray-100">{title}</h2>
      <div className="space-y-3 text-sm text-gray-600 leading-relaxed [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-1.5">
        {children}
      </div>
    </div>
  )
}
