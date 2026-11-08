import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { species, plants, guides, curiosities, featuredArticle } from '../src/data/content.ts'
let envText = ''
try { envText = await readFile('.env', 'utf8') } catch { /* Environment variables may be supplied by the host. */ }
const fileUrl = envText.match(/^VITE_SITE_URL\s*=\s*(.+)$/m)?.[1]?.trim().replace(/^['"]|['"]$/g, '')
const site = (process.env.VITE_SITE_URL || fileUrl)?.replace(/\/$/, '')
if (!site || !/^https:\/\//.test(site)) {
  console.log('Sitemap skipped: set VITE_SITE_URL to the public HTTPS domain before production build.')
  process.exit(0)
}
const paths=['/','/conheca-as-abelhas','/meliponicultura','/plantas-para-abelhas','/curiosidades','/diario','/nosso-projeto','/contato','/privacidade',...species.map(s=>`/abelhas/${s.slug}`),...plants.map(p=>`/plantas/${p.slug}`),...guides.map(g=>`/meliponicultura/${g.slug}`),...curiosities.map(c=>`/curiosidades/${c.slug}`),`/artigos/${featuredArticle.slug}`]
const xml=`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths.map(path=>`  <url><loc>${site}${path}</loc></url>`).join('\n')}\n</urlset>\n`
await mkdir('dist',{recursive:true});await writeFile('dist/sitemap.xml',xml,'utf8');await writeFile('dist/robots.txt',`User-agent: *\nAllow: /\nSitemap: ${site}/sitemap.xml\n`,'utf8');console.log('Sitemap created for',site)
