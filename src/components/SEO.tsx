import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title?: string
  description?: string
  path?: string
  ogImage?: string
  type?: 'website' | 'article'
  publishedAt?: string
  faqSchema?: { question: string; answer: string }[]
}

const SITE_NAME = 'アパレルOEM・ODM・3PL専門メーカー | 株式会社マリナ'
const BASE_URL = 'https://marina-oem.jp'
const DEFAULT_DESC =
  '創業50年以上のアパレルOEM・ODM・3PL専門メーカー。小ロット50枚〜大ロット3,000枚以上に対応。バングラデシュ・ミャンマー・中国・日本の生産ネットワークで、製造から物流まで一貫サポート。まずはご相談ください。'
const DEFAULT_OG = `${BASE_URL}/og-image.jpg`

const ORG_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: '株式会社マリナ',
  description: DEFAULT_DESC,
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  foundingDate: '1975',
  areaServed: 'JP',
  serviceType: ['アパレルOEM', 'アパレルODM', 'アパレル3PL', '小ロット製造', 'アパレル製造代行'],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    availableLanguage: 'Japanese',
  },
}

export default function SEO({
  title,
  description = DEFAULT_DESC,
  path = '',
  ogImage = DEFAULT_OG,
  type = 'website',
  publishedAt,
  faqSchema,
}: SEOProps) {
  const fullTitle = title
    ? `${title} | 株式会社マリナ — アパレルOEM・ODM・3PL`
    : SITE_NAME
  const canonical = `${BASE_URL}${path}`

  const articleSchema = type === 'article'
    ? {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: fullTitle,
        description,
        image: ogImage,
        datePublished: publishedAt,
        publisher: { '@type': 'Organization', name: '株式会社マリナ', url: BASE_URL },
      }
    : null

  const faqJsonLd = faqSchema
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqSchema.map(({ question, answer }) => ({
          '@type': 'Question',
          name: question,
          acceptedAnswer: { '@type': 'Answer', text: answer },
        })),
      }
    : null

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="株式会社マリナ" />
      <meta property="og:locale" content="ja_JP" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {type === 'article' && publishedAt && (
        <meta property="article:published_time" content={publishedAt} />
      )}

      <script type="application/ld+json">{JSON.stringify(ORG_SCHEMA)}</script>
      {articleSchema && (
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      )}
      {faqJsonLd && (
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      )}
    </Helmet>
  )
}
