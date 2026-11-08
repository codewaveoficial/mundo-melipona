import { PageIntro, Seo, StatusPill } from '../components/site'
import { routeHref } from '../components/site'
import { contentService } from '../services/contentService'
const plants=contentService.listPlants()
import { NotFoundPage } from './system'
export function PlantDetailPage({slug}:{slug:string}){const item=plants.find(p=>p.slug===slug);if(!item)return <NotFoundPage/>;return <><Seo title={item.commonName} description={`${item.commonName} (${item.scientificName}): visita de jataí observada em Santa Maria de Jetibá, ES, no estudo citado.`} image={item.image||undefined}/><PageIntro eyebrow={`PLANTA · VISITA OBSERVADA NO ${item.observedSeason?.toUpperCase()}`} title={<>{item.commonName}<br/><em>{item.scientificName}</em></>} lead={item.beeResources} image={item.image||undefined}/><section className="content-wrap detail-layout"><aside><StatusPill type="demo">Observação de um estudo local</StatusPill><dl className="species-data"><dt>Estação registrada</dt><dd>{item.observedSeason}</dd><dt>Família</dt><dd>{item.family}</dd><dt>Tipo</dt><dd>{item.type}</dd><dt>Área do estudo</dt><dd>{item.region}</dd><dt>Foto</dt><dd>{item.imageSourceUrl?<a href={item.imageSourceUrl} target="_blank" rel="noreferrer">{item.imageCredit} · ver arquivo e licença ↗</a>:'Foto da espécie vegetal pendente'}</dd></dl></aside><article className="prose"><h2>O que foi observado</h2><p>{item.source}</p><h3>Relação com a jataí</h3><p>{item.beeResources}</p><h3>Limites desta ficha</h3><p>Este registro não informa preferência, produtividade de néctar ou pólen, época de floração geral, origem nativa ou recomendação de plantio. Esses aspectos variam e precisam de fontes próprias.</p><h3>Referência</h3><p><a href="https://doi.org/10.34117/bjdv6n11-292" target="_blank" rel="noreferrer">Ferreira et al. (2020) · estudo em Santa Maria de Jetibá ↗</a></p><a className="text-link" href={routeHref('/plantas-para-abelhas')}>← Voltar à biblioteca</a></article></section></>}




