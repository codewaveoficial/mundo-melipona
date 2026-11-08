import { HashRouter, Route, Routes } from 'react-router-dom'
import { Shell } from './components/site'
import { HomePage, SpeciesDetailPage, SpeciesPage } from './pages/catalog'
import { CuriositiesPage, DiaryPage, MeliponiculturePage, PlantsPage, ProjectPage } from './pages/community'
import { AdminPage, ContactPage, NotFoundPage, PrivacyPage, QrNoticePage } from './pages/system'
import { PlantDetailPage } from './pages/plants'
import './styles.css'

function App(){return <HashRouter><Shell><Routes><Route path="/" element={<HomePage/>}/><Route path="/conheca-as-abelhas" element={<SpeciesPage/>}/><Route path="/abelhas/:slug" element={<SpeciesRoute/>}/><Route path="/meliponicultura" element={<MeliponiculturePage/>}/><Route path="/meliponicultura/:slug" element={<GuideRoute/>}/><Route path="/plantas-para-abelhas" element={<PlantsPage/>}/><Route path="/plantas/:slug" element={<PlantRoute/>}/><Route path="/curiosidades" element={<CuriositiesPage/>}/><Route path="/curiosidades/:slug" element={<CuriosityRoute/>}/><Route path="/artigos/:slug" element={<ArticleRoute/>}/><Route path="/diario" element={<DiaryPage/>}/><Route path="/nosso-projeto" element={<ProjectPage/>}/><Route path="/contato" element={<ContactPage/>}/><Route path="/privacidade" element={<PrivacyPage/>}/><Route path="/aviso-iscas" element={<QrNoticePage/>}/><Route path="/admin" element={<AdminPage/>}/><Route path="*" element={<NotFoundPage/>}/></Routes></Shell></HashRouter>}
import { useParams } from 'react-router-dom'
function SpeciesRoute(){const{slug=''}=useParams();return <SpeciesDetailPage slug={slug}/>}
function GuideRoute(){const{slug=''}=useParams();return <MeliponiculturePage slug={slug}/>}
function PlantRoute(){const{slug=''}=useParams();return <PlantDetailPage slug={slug}/>}
function CuriosityRoute(){const{slug=''}=useParams();return <CuriositiesPage slug={slug}/>}
function ArticleRoute(){const{slug=''}=useParams();return <CuriosityPageRoute slug={slug}/>}
import { CuriosityArticlePage } from './pages/articles'
function CuriosityPageRoute({slug}:{slug:string}){return <CuriosityArticlePage slug={slug}/>}
export default App

