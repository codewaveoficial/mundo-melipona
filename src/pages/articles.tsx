import { useMemo } from 'react'
import { contentService } from '../services/contentService'
import { PageIntro, Seo, SourceList } from '../components/site'
import { routeHref } from '../components/site'
import type { Article } from '../types'
import { NotFoundPage } from './system'
export function CuriosityArticlePage({slug}:{slug:string}){const items=useMemo<Article[]>(()=>contentService.listArticles(),[ ]);const item=items.find(a=>a.slug===slug);if(!item)return <NotFoundPage/>;return <><Seo title={item.title} description={item.excerpt}/><PageIntro eyebrow={`ARTIGO · ${item.category} · ${item.readTime}`} title={<>{item.title}<br/><em>Conhecimento com raízes.</em></>} lead={item.excerpt}/><section className="content-wrap article-page"><div className="prose">{item.body.split('\n\n').map((p,i)=><p key={i}>{p}</p>)}<h3>Referências</h3><SourceList items={item.sources}/><a className="text-link" href={routeHref('/curiosidades')}>← Voltar ao conteúdo</a></div></section></>}


