/**
 * Notion Blog Fetcher
 *
 * 使い方:
 *   1. .env に NOTION_TOKEN と NOTION_DATABASE_ID を設定
 *   2. npm run fetch-blog  →  src/data/blogPosts.ts を自動生成
 *
 * Notion データベースに必要なプロパティ:
 *   Title      : title     (ページタイトル)
 *   Slug       : rich_text (URL用スラッグ 例: my-first-post)
 *   Date       : date      (投稿日)
 *   Category   : select    (製造ノウハウ / インフルエンサー事例 / ブランド立ち上げ / お知らせ)
 *   Excerpt    : rich_text (一覧に表示する要約)
 *   Thumbnail  : url       (サムネイル画像URL)
 *   Published  : checkbox  (true のみ公開)
 */

import { createRequire } from 'module'
import { writeFileSync, existsSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const require = createRequire(import.meta.url)

// Load .env
try {
  const { config } = await import('dotenv')
  config({ path: resolve(__dirname, '../.env') })
} catch {
  // dotenv not available — env vars already set
}

const NOTION_TOKEN = process.env.NOTION_TOKEN
const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID

if (!NOTION_TOKEN || !NOTION_DATABASE_ID) {
  console.warn('⚠️  NOTION_TOKEN / NOTION_DATABASE_ID が未設定です。既存の blogPosts.ts を維持します。')
  process.exit(0)
}

const OUTPUT_PATH = resolve(__dirname, '../src/data/blogPosts.ts')
const FALLBACK_THUMB = 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80'

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[\s　]+/g, '-')
    .replace(/[^\w぀-ヿ一-鿿-]/g, '')
    .slice(0, 80)
}

async function notionGet(path, body) {
  const res = await fetch(`https://api.notion.com/v1${path}`, {
    method: body ? 'POST' : 'GET',
    headers: {
      Authorization: `Bearer ${NOTION_TOKEN}`,
      'Notion-Version': '2022-06-28',
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  })
  if (!res.ok) throw new Error(`Notion API error: ${res.status} ${await res.text()}`)
  return res.json()
}

/* Convert Notion blocks → simple markdown */
async function blocksToMarkdown(blockId) {
  const data = await notionGet(`/blocks/${blockId}/children?page_size=100`)
  const lines = []

  for (const block of data.results) {
    const text = (rich) => rich?.map(r => r.plain_text).join('') || ''

    switch (block.type) {
      case 'heading_1':   lines.push(`# ${text(block.heading_1.rich_text)}`); break
      case 'heading_2':   lines.push(`## ${text(block.heading_2.rich_text)}`); break
      case 'heading_3':   lines.push(`### ${text(block.heading_3.rich_text)}`); break
      case 'paragraph':   lines.push(text(block.paragraph.rich_text) || ''); break
      case 'bulleted_list_item': lines.push(`- ${text(block.bulleted_list_item.rich_text)}`); break
      case 'numbered_list_item': lines.push(`1. ${text(block.numbered_list_item.rich_text)}`); break
      case 'quote':       lines.push(`> ${text(block.quote.rich_text)}`); break
      case 'code':        lines.push(`\`\`\`\n${text(block.code.rich_text)}\n\`\`\``); break
      case 'divider':     lines.push('---'); break
      case 'image': {
        const url = block.image.external?.url || block.image.file?.url || ''
        if (url) lines.push(`![image](${url})`)
        break
      }
      default: break
    }
    lines.push('')
  }
  return lines.join('\n')
}

async function main() {
  console.log('📥 Notion からブログ記事を取得中...')

  const db = await notionGet(`/databases/${NOTION_DATABASE_ID}/query`, {
    filter: { property: 'Published', checkbox: { equals: true } },
    sorts: [{ property: 'Date', direction: 'descending' }],
  })

  const posts = []

  for (const page of db.results) {
    const p = page.properties
    const title = p.Title?.title?.[0]?.plain_text || '(無題)'
    const slug = p.Slug?.rich_text?.[0]?.plain_text || slugify(title)
    const date = p.Date?.date?.start || new Date().toISOString().split('T')[0]
    const category = p.Category?.select?.name || 'お知らせ'
    const excerpt = p.Excerpt?.rich_text?.[0]?.plain_text || ''
    const thumbnail =
      p.Thumbnail?.url ||
      p.Thumbnail?.rich_text?.[0]?.plain_text ||
      FALLBACK_THUMB
    const content = await blocksToMarkdown(page.id)

    posts.push({ id: page.id, slug, title, date, category, excerpt, content, thumbnail })
    console.log(`  ✓ ${title}`)
  }

  const ts = `// この файルは fetch-notion-posts.mjs により自動生成されます
// 直接編集しないでください — npm run fetch-blog で再生成できます
import type { BlogPost } from '../types'

export const blogPosts: BlogPost[] = ${JSON.stringify(posts, null, 2)}
`
  writeFileSync(OUTPUT_PATH, ts, 'utf-8')
  console.log(`✅ ${posts.length} 件の記事を src/data/blogPosts.ts に書き出しました`)
}

main().catch(err => {
  console.error('❌ Notion 取得エラー:', err.message)
  console.warn('既存の blogPosts.ts を維持します')
  process.exit(0) // ビルドは止めない
})
