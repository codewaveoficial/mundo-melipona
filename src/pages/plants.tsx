import { PageIntro, Seo, StatusPill } from '../components/site'
import { routeHref } from '../components/site'
import { contentService } from '../services/contentService'
const plants=contentService.listPlants()
import { NotFoundPage } from './system'
export function PlantDetailPage({slug}:{slug:string}){const item=plants.find(p=>p.slug===slug);if(!item)return <NotFoundPage/>;return <><Seo title={item.commonName} description={`Ficha de ${item.commonName}; dados demonstrativos em revisão para o Espírito Santo.`}/><PageIntro eyebrow={`PLANTAS PARA ABELHAS · ${item.status==='demonstracao'?'DEMONSTRAÇÃO':'EM CURADORIA'}`} title={<>{item.commonName}<br/><em>{item.scientificName}</em></>} lead={item.beeResources}/><section className="content-wrap detail-layout"><aside><StatusPill type="demo">Informação demonstrativa · conferir fonte</StatusPill><dl className="species-data"><dt>Família</dt><dd>{item.family||'A validar'}</dd><dt>Tipo</dt><dd>{item.type}</dd><dt>Cultivo</dt><dd>{item.cultivation}</dd><dt>Luminosidade</dt><dd>{item.light}</dd><dt>Água</dt><dd>{item.water}</dd><dt>Floração</dt><dd>{item.flowering}</dd><dt>Ocorrência</dt><dd>{item.region}</dd></dl></aside><article className="prose"><h2>Sobre esta ficha</h2><p>{item.source}</p><h3>Relação com abelhas</h3><p>{item.beeResources}</p><h3>Referências</h3><p>Fontes específicas para o vínculo planta-polinizador, período de floração e cultivo local ainda precisam ser adicionadas antes de apresentar recomendações.</p><a className="text-link" href={routeHref('/plantas-para-abelhas')}>← Voltar à biblioteca</a></article></section></>}




