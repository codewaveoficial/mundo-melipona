import type { Species, Plant, Article, JournalEntry, LearningGuide, Source } from '../types'

const coreSources: Source[] = [
  { name: 'Abelhas sem ferrão do Espírito Santo', organization: 'Incaper em Revista, v. 15', url: 'https://www.revista.incaper.es.gov.br/index.php/ojs/article/view/43', note: 'Revisão estadual com distribuição municipal, nomes populares, descrições e nidificação.' },
  { name: 'Meliponicultura no Espírito Santo', organization: 'IEMA', url: 'https://iema.es.gov.br/meliponicultura', note: 'Informações estaduais sobre conservação e manejo.' },
  { name: 'Autorização de manejo de fauna — meliponicultura', organization: 'IEMA', url: 'https://iema.es.gov.br/autorizacao-de-manejo-de-fauna-meliponicultura', note: 'Orientação administrativa estadual; consultar a página vigente antes de qualquer manejo.' },
  { name: 'Resolução CONAMA nº 496/2020', organization: 'CONAMA / MMA', url: 'https://conama.mma.gov.br/index.php?id=724&option=com_sisconama&view=atonormativo', note: 'Uso e manejo sustentáveis de abelhas nativas sem ferrão.' },
  { name: 'Abelhas e sistemas agroflorestais', organization: 'Embrapa', url: 'https://www.atermaisdigital.cnptia.embrapa.br/web/saf/abelhas-e-safs', note: 'Interações de abelhas com plantas e recursos florais.' },
]

const jataiPhoto = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Tetragonisca_angustula_%28Jata%C3%AD%29_%2851826346548%29.jpg/1280px-Tetragonisca_angustula_%28Jata%C3%AD%29_%2851826346548%29.jpg'
const jataiSource: Source = { name: 'Abelhas do PEPAZ', organization: 'IEMA', url: 'https://iema.es.gov.br/Media/iema/Unidades%20de%20Conserva%C3%A7%C3%A3o/Abelhas%20do%20PEPAZ%20%282%29_compressed.pdf', note: 'Material educativo estadual que inclui a espécie Jataí.' }
const plantStudy: Source = { name: 'Plantas cultivadas visitadas por Tetragonisca angustula em Santa Maria de Jetibá', organization: 'Brazilian Journal of Development (2020)', url: 'https://doi.org/10.34117/bjdv6n11-292', note: 'Estudo de uma propriedade de horticultura orgânica; dados locais e observacionais, não um calendário universal.' }
export const sources = [...coreSources, plantStudy, { name: 'Pollen sources used by Melipona capixaba', organization: 'Serra et al. (2013), PMC', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3646618/', note: 'Estudo de cargas polínicas em localidades do Espírito Santo; não equivale a uma lista de plantas recomendadas.' }]
const reviewMunicipalities: Record<string, string> = {
  'Melipona capixaba':'Santa Maria de Jetibá, Domingos Martins, Marechal Floriano, Alfredo Chaves, Vargem Alta, Castelo, Venda Nova do Imigrante, Conceição do Castelo, Brejetuba e Afonso Cláudio',
  'Melipona mondury':'Anchieta, Cariacica, Colatina, Conceição da Barra, Domingos Martins, Guarapari, Itarana, Linhares, Santa Leopoldina, Santa Teresa, São Domingos do Norte, São Mateus, Sooretama e Viana',
  'Melipona quadrifasciata':'Domingos Martins e Santa Teresa',
  'Tetragonisca angustula':'Santa Teresa e Domingos Martins',
  'Plebeia droryana':'Conceição da Barra (Parque Estadual de Itaúnas)',
  'Scaptotrigona postica':'Alfredo Chaves, Iconha, Linhares, Pancas, Santa Teresa e Sooretama',
  'Trigona spinipes':'Registros em diversos municípios capixabas; ver revisão estadual'
}
const popularNames: Record<string,string> = { 'Frieseomelitta meadewaldoi':'Moça-branca','Lestrimelitta ehrhardti':'Abelha-limão','Lestrimelitta rufipes':'Iraxim','Leurotrigona muelleri':'Lambe-olhos','Melipona bicolor':'Guaraipo','Melipona capixaba':'Uruçu-capixaba','Melipona marginata':'Manduri','Melipona mondury':'Uruçu-amarela','Melipona quadrifasciata':'Mandaçaia','Melipona quinquefasciata':'Mandaçaia-do-chão','Nannotrigona testaceicornis':'Iraí','Oxytrigona cagafogo':'Caga-fogo','Paratrigona subnuda':'Mirim-sem-brilho','Partamona helleri':'Cupira','Plebeia droryana':'Mirim-mosquito','Plebeia phrynostoma':'Boca-de-sapo','Plebeia remota':'Mirim-guaçu','Scaptotrigona bipunctata':'Tubuna','Scaptotrigona postica':'Mandaguari-amarela','Schwarziana quadripunctata':'Guiruçu','Tetragona clavipes':'Borá','Tetragonisca angustula':'Jataí','Trigona branneri':'Guaxupé','Trigona braueri':'Mel-de-cachorro','Trigona hyalinata':'Xupé','Trigona spinipes':'Arapuá'}
const naturalHistory: Record<string,string> = {
 'Frieseomelitta meadewaldoi':'A revisão registra nomes como moça-branca, caveca e perna-longa. Descreve ninho em madeira seca ou verde, com entrada pequena e escura.',
 'Lestrimelitta ehrhardti':'Abelha cleptobiótica conhecida como abelha-limão; a revisão descreve ninhos com favos horizontais e invólucro.',
 'Lestrimelitta rufipes':'A revisão registra a espécie em Santa Teresa e Linhares e cita os nomes limão e iraxim.',
 'Leurotrigona muelleri':'Conhecida em alguns lugares como lambe-olhos ou mirim; a fonte descreve ninhos em cavidades de troncos e mourões.',
 'Melipona bicolor':'Guaraipo ou guarubú; a revisão cita registros em Domingos Martins e Santa Teresa e associação a locais úmidos e de maior altitude.',
 'Melipona capixaba':'Uruçu-preta, uruçu-negra ou uruçu-capixaba. Endêmica das montanhas do Espírito Santo, associada a floresta montana e cavidades de árvores; a revisão a identifica como ameaçada.',
 'Melipona fuliginosa':'A revisão cita registro histórico em Sooretama e ocorrência em Domingos Martins; confirmações atuais de ocupação local são necessárias.',
 'Melipona marginata':'Manduri ou monduri; a revisão reúne registros em Domingos Martins, Linhares, Santa Teresa e Sooretama e descreve nidificação em cavidades de árvores.',
 'Melipona mondury':'Uruçu-amarela, mondury ou tujuba; nidifica em cavidades de árvores. A revisão explica que antigos registros de M. rufiventris no Sudeste podem corresponder a esta espécie.',
 'Melipona quadrifasciata':'Mandaçaia; a revisão cita Domingos Martins e Santa Teresa. O ninho é associado a cavidades de árvores, com favos horizontais ou helicoidais.',
 'Melipona quinquefasciata':'Também chamada mandaçaia-do-chão; a revisão descreve ninhos subterrâneos em cavidades abandonadas de formigueiros ou cupinzeiros.',
 'Nannotrigona testaceicornis':'Iraí, abelha pequena que também pode nidificar em estruturas urbanas; a fonte descreve entrada de cerume e favos horizontais ou helicoidais.',
 'Oxytrigona cagafogo':'Conhecida como caga-fogo. A revisão esclarece que registros antigos de O. tataira no estado foram revistos como O. cagafogo.',
 'Paratrigona subnuda':'Mirim-sem-brilho ou jataí-da-terra; a revisão descreve ninhos subterrâneos e registros em Sooretama e Linhares.',
 'Partamona ailyae':'A fonte registra coleta na Reserva Natural Vale, em Sooretama. É um registro localizado; não generalizar a distribuição estadual.',
 'Partamona criptica':'A revisão registra ninhos em cupinzeiros ativos e comenta semelhança com Partamona helleri.',
 'Partamona helleri':'A revisão reúne vários municípios capixabas e descreve nidificação em diferentes cavidades; a identificação exige observar caracteres diagnósticos.',
 'Partamona sooretamae':'Espécie descrita a partir da região; a revisão apresenta registros em diversos municípios, mas informa que o ninho é desconhecido.',
 'Plebeia droryana':'Mirim-mosquito, pequena e dócil; a revisão cita registro no Parque Estadual de Itaúnas e entradas de ninho em cerume.',
 'Plebeia lucii':'A revisão apresenta registros em Linhares, Conceição da Barra e Sooretama; não consolida nome popular para a espécie.',
 'Plebeia meridionalis':'A revisão a inclui para o Espírito Santo e ressalta debate taxonômico sobre possível sinonímia com P. nigriceps.',
 'Plebeia phrynostoma':'Boca-de-sapo; a fonte descreve uma entrada de ninho em fenda transversal e registros em municípios serranos.',
 'Plebeia poecilochroa':'A revisão menciona registros em municípios do litoral e norte capixaba e entrada de ninho com resina.',
 'Plebeia remota':'Mirim-guaçu ou preguiçosa; a revisão descreve ninhos em cavidades e registros em Santa Teresa.',
 'Scaptotrigona bipunctata':'Tubuna ou canudo; há registro em Itaúnas, embora a distribuição estadual seja tratada com ressalvas na revisão consultada.',
 'Scaptotrigona postica':'Mandaguari-amarela; a revisão informa registros em seis municípios e descreve entrada de ninho em forma de funil de cerume.',
 'Scaptotrigona silviae':'A revisão discute incerteza taxonômica em torno de nomes próximos (S. tubiba e S. marialiceae); confirmar classificação atual antes de usar esta ficha para identificação.',
 'Scaura atlantica':'A revisão descreve ninhos associados a cupinzeiros ativos do gênero Nasutitermes e registros em Conceição da Barra e São Roque do Canaã.',
 'Schwarziana quadripunctata':'Guiruçu ou abelha-do-chão; a revisão descreve ninhos subterrâneos e cita Santa Teresa.',
 'Tetragona clavipes':'Borá ou jataí-gigante; a revisão descreve entrada de ninho saliente e favos de cria compactos.',
 'Tetragonisca angustula':'Jataí, espécie pequena com ampla adaptação a ambientes modificados. A revisão registra a espécie no Espírito Santo; o material do IEMA a apresenta em unidade de conservação estadual.',
 'Trigona branneri':'A revisão cita coleta na Reserva Natural Vale, em Sooretama; tratar como registro localizado.',
 'Trigona braueri':'A fonte registra a espécie em Santa Teresa e Sooretama; não detalha ninho, então esta ficha não o infere.',
 'Trigona hyalinata':'Conhecida como xupé ou irapuã; a revisão a registra em Santa Teresa, Linhares e Sooretama.',
 'Trigona recursa':'A revisão menciona registro em Sooretama e ressalva incerteza sobre alcance e taxonomia; ocorrência local atual precisa de confirmação.',
 'Trigona spinipes':'Arapuá ou irapuá; espécie generalista que pode defender vigorosamente o ninho. A revisão descreve ninhos aéreos em árvores.',
 'Trigonisca intermedia':'A revisão inclui a espécie para o Espírito Santo e descreve abelhas muito pequenas; nome popular varia e a ficha não presume comportamento não documentado.'
}
const taxa = ['Cephalotrigona capitata','Friesella schrottkyi','Frieseomelitta dispar','Frieseomelitta meadewaldoi','Lestrimelitta ehrhardti','Lestrimelitta rufipes','Leurotrigona muelleri','Melipona bicolor','Melipona capixaba','Melipona fuliginosa','Melipona marginata','Melipona mondury','Melipona quadrifasciata','Melipona quinquefasciata','Nannotrigona testaceicornis','Oxytrigona cagafogo','Paratrigona subnuda','Partamona ailyae','Partamona criptica','Partamona helleri','Partamona sooretamae','Plebeia droryana','Plebeia lucii','Plebeia meridionalis','Plebeia phrynostoma','Plebeia poecilochroa','Plebeia remota','Scaptotrigona bipunctata','Scaptotrigona postica','Scaptotrigona silviae','Scaura atlantica','Schwarziana quadripunctata','Tetragona clavipes','Tetragonisca angustula','Trigona branneri','Trigona braueri','Trigona hyalinata','Trigona recursa','Trigona spinipes','Trigonisca intermedia']
const photoByTaxon: Record<string,{url:string;credit:string}> = {
 'Tetragonisca angustula':{url:jataiPhoto,credit:'Carlos Eduardo Joos · CC BY 2.0 · Wikimedia Commons'},
 'Melipona capixaba':{url:'https://upload.wikimedia.org/wikipedia/commons/6/6e/Melipona_capixaba.jpg',credit:'Josemar de Carvalho Ramos · CC BY-SA 4.0 · Wikimedia Commons'},
 'Plebeia droryana':{url:'https://upload.wikimedia.org/wikipedia/commons/1/1d/Plebeia_droryana007.jpg',credit:'Bruno Henrique Aranda · Wikimedia Commons'}
}
export const species: Species[] = taxa.map((scientificName) => {
  const genus = scientificName.split(' ')[0], commonName = popularNames[scientificName] ?? 'Nome popular não consolidado'
  const photo = photoByTaxon[scientificName]
  const municipalities = reviewMunicipalities[scientificName]?.split(', ') ?? []
  const caution = ['Melipona fuliginosa','Partamona ailyae','Scaptotrigona bipunctata','Scaptotrigona silviae','Trigona branneri','Trigona recursa','Plebeia meridionalis'].includes(scientificName)
  return { slug: scientificName.toLowerCase().replaceAll(' ','-'), commonName, scientificName, genus, family:'Apidae', region:'Sudeste', states:['ES'], status:'documentado', image:photo?.url ?? '', imageAlt:photo ? `${commonName} (${scientificName}), identificação indicada na fonte da imagem` : '', imageCredit:photo?.credit, shortDescription:`Registro para o Espírito Santo incluído na revisão estadual de abelhas sem ferrão. ${municipalities.length ? `Localidades citadas: ${municipalities.join('; ')}.` : 'A revisão consultada não detalha município nesta ficha.'}`, ecology:naturalHistory[scientificName]??'A revisão estadual inclui este táxon na lista de abelhas sem ferrão do Espírito Santo. O nome popular não foi consolidado nesta ficha; consulte a fonte para detalhes de ocorrência, identificação e história natural.', sources:[sources[0], ...(scientificName==='Tetragonisca angustula'?[jataiSource]:[])], curious:scientificName==='Melipona capixaba'?'É uma espécie endêmica das áreas serranas do Espírito Santo e associada a ambientes de altitude; a conservação de seu habitat é central.':scientificName==='Melipona mondury'?'A revisão chama atenção para a correção de registros antigos de Melipona rufiventris no Sudeste, atribuídos à M. mondury.':'Nomes populares e registros podem variar entre localidades; a identificação segura depende de características diagnósticas e contexto.', municipalities, evidenceNote:caution?'Registro ou taxonomia requerem leitura contextual da revisão; confirmar literatura atual e localidade antes de inferir ocorrência atual.':'Ocorrência estadual reportada na revisão do Incaper; localidade municipal só indicada quando detalhada acima.' }
})

const observedPlants: [string,string,string][] = [
 ['Manjericão','Ocimum basilicum','outono'],['Almeirão','Lactuca canadensis','outono'],['Batata-yacon','Smallanthus sonchifolius','outono'],['Boldo','Plectranthus grandis','outono'],['Cosmos','Cosmos sp.','outono'],['Mamão','Carica papaya','outono'],['Chuchu','Sechium edule','outono'],['Ora-pro-nóbis','Pereskia aculeata','outono'],['Nêspera','Eriobotrya japonica','outono'],['Acerola','Malpighia emarginata','outono'],['Pêssego','Prunus persica','outono'],['Melancia','Citrullus lanatus','outono'],['Erva-cidreira','Lippia alba','outono'],['Brócolis','Brassica oleracea','outono'],['Alface','Lactuca sativa','outono'],['Bertalha','Basella alba','outono'],['Batata-baroa','Arracacia xanthorrhiza','outono'],['Limão-tahiti','Citrus × latifolia','inverno'],['Capuchinha','Tropaeolum majus','inverno'],['Mostarda','Brassica juncea','inverno'],['Batata-doce','Ipomoea batatas','inverno'],['Jabuticaba','Plinia cauliflora','inverno'],['Abacate','Persea americana','inverno'],['Sempre-viva','Limonium sinuatum','inverno'],['Erva-doce','Foeniculum vulgare','inverno'],['Laranja','Citrus sinensis','inverno'],['Palmeira-real','Archontophoenix cunninghamiana','inverno'],['Mamona','Ricinus communis','inverno'],['Manga','Mangifera indica','inverno'],['Café','Coffea arabica','primavera'],['Lichia','Litchi chinensis','primavera'],['Limão-cravo','Citrus × limonia','primavera'],['Feijão','Phaseolus vulgaris','primavera'],['Ervilha','Pisum sativum','primavera'],['Aspargo','Asparagus officinalis','primavera'],['Rúcula','Eruca sativa','primavera'],['Coentro','Coriandrum sativum','primavera'],['Alho','Allium sativum','primavera'],['Girassol','Helianthus annuus','primavera'],['Chuchu-de-vento','Cyclanthera pedata','primavera'],['Menta','Mentha arvensis','primavera'],['Jamelão','Syzygium cumini','primavera'],['Jiló','Solanum aethiopicum','verão'],['Cenoura','Daucus carota','verão'],['Tomate','Solanum lycopersicum','verão'],['Berinjela','Solanum melongena','verão'],['Eucalipto','Eucalyptus sp.','verão']
]
const plantPhotos: Record<string,{url:string;credit:string}> = {
 'Ocimum basilicum':{url:'https://commons.wikimedia.org/wiki/Special:FilePath/Ocimum-basilicum-flowers.jpg?width=900',credit:'Sten · Wikimedia Commons (ver licença na página do arquivo)'},
 'Pereskia aculeata':{url:'https://commons.wikimedia.org/wiki/Special:FilePath/Pereskia-aculeata-flowers-and-bees.jpg?width=900',credit:'Wikimedia Commons (ver licença e identificação na página do arquivo)'}
}
export const plants: Plant[] = observedPlants.map(([commonName,scientificName,season])=>{const photo=plantPhotos[scientificName];return {slug:commonName.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,''),commonName,scientificName,family:'Consultar fonte botânica',type:'Planta cultivada observada',cultivation:'Cultivo observado no estudo; não constitui recomendação',light:'Não avaliado nesta ficha',water:'Não avaliado nesta ficha',flowering:'Observação sazonal no estudo local; não é calendário universal',beeResources:'Visitada por Tetragonisca angustula na propriedade estudada em Santa Maria de Jetibá (ES). O estudo observou visitação; não afirma preferência exclusiva.',native:false,region:'Uma propriedade de horticultura orgânica em Santa Maria de Jetibá, ES',image:photo?.url??'',imageAlt:photo?`${commonName} (${scientificName}); a foto da página Wikimedia Commons é ilustrativa da planta, sem afirmar que é a imagem do estudo`:'',imageCredit:photo?.credit,status:'em-validacao',source:'Estudo local de Ferreira et al. (2020), com observações em uma propriedade. Taxonomia, fenologia e recomendações de cultivo devem ser verificadas para a sua região.',observedSeason:season}})

export const guides: LearningGuide[] = [
  { slug: 'primeiros-passos', title: 'Primeiros passos', category: 'Começar', summary: 'O que estudar antes de iniciar um meliponário, com foco em origem das espécies e regras locais.', status: 'publicado', source: sources[1] },
  { slug: 'preparar-iscas', title: 'Como preparar iscas', category: 'Iscas', summary: 'Conteúdo educativo em preparação. A instalação e o acompanhamento devem respeitar regras e boas práticas locais.', status: 'em-revisao', source: sources[1] },
  { slug: 'local-do-meliponario', title: 'Escolha do local', category: 'Estrutura', summary: 'Pontos a considerar para organizar um espaço de observação e manejo responsável.', status: 'em-revisao', source: sources[1] },
  { slug: 'alimentacao', title: 'Alimentação das colônias', category: 'Manejo', summary: 'Orientações técnicas a desenvolver com referências específicas.', status: 'em-revisao', source: sources[4] },
  { slug: 'manejo-responsavel', title: 'Manejo responsável', category: 'Manejo', summary: 'Ocorrência, autorização e conservação precisam ser considerados antes de qualquer manejo.', status: 'publicado', source: sources[2] },
]

export const curiosities: Article[] = [
  { slug: 'polinizacao', title: 'Como funciona a polinização?', category: 'Ecologia', excerpt: 'Flores, visitantes e o movimento de pólen: descubra essa relação sem simplificar demais a diversidade dos polinizadores.', readTime: '3 min', status: 'publicado', body: 'A polinização ocorre quando o pólen chega à parte reprodutiva de uma flor compatível. Diversos animais podem participar desse processo. Abelhas visitam flores para coletar recursos e, nesse contato, podem transportar pólen entre flores. A relação depende das espécies e do ambiente. Consulte materiais técnicos regionais para conhecer exemplos locais.', sources: [sources[4]] },
  { slug: 'todas-produzem-mel', title: 'Todas as abelhas produzem mel?', category: 'Você sabia?', excerpt: 'A diversidade das abelhas também aparece nos diferentes hábitos e formas de vida.', readTime: '2 min', status: 'demonstracao', body: 'Esta curiosidade está em preparação. O texto será publicado após revisão e inclusão de referências adequadas.', sources: [] },
  { slug: 'entrada-do-ninho', title: 'O que a entrada do ninho pode revelar?', category: 'Observação', excerpt: 'Estruturas de entrada podem variar entre espécies. Observe, registre e evite tocar ou abrir ninhos.', readTime: '2 min', status: 'em-revisao', body: 'A forma e os materiais das entradas de ninhos são temas de observação, mas a identificação requer contexto e fontes. Não manipule um ninho para tentar identificar uma abelha.', sources: [sources[0]] },
]

export const diary: JournalEntry[] = [
  { slug: 'inicio-do-diario', title: 'O começo do Diário do Meliponário', date: 'Em preparação', category: 'Nossa jornada', excerpt: 'Este espaço será um registro transparente das experiências reais do projeto, com contexto, fotos e aprendizados.', status: 'rascunho', context: 'Espírito Santo', learning: 'Experiências pessoais serão apresentadas como relatos, sem substituírem orientações técnicas.' },
]

export const featuredArticle: Article = {
  slug: 'jardins-polinizadores', title: 'Um jardim que floresce em diferentes épocas', category: 'Plantas para abelhas', excerpt: 'A diversidade de plantas pode oferecer recursos em diferentes épocas. O planejamento precisa levar em conta o território.', readTime: '4 min', status: 'publicado',
  body: 'Abelhas visitam flores em busca de recursos como néctar e pólen. Um planejamento que considera variedade de plantas e épocas de floração pode ajudar a manter recursos disponíveis no ambiente. A escolha de espécies, no entanto, depende do clima, solo e ecossistema local.\n\nComece observando quais plantas florescem perto de você e registre as épocas. Consulte listas regionais e dê preferência a orientações de instituições locais. Calendários não são universais: use apenas referências compatíveis com a sua região.\n\nO Mundo Melípona está começando o levantamento para o Espírito Santo. As fichas serão completadas à medida que houver referências verificáveis.', sources: [sources[4]]
}
