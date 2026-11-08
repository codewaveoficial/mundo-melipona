import type { Species, Plant, Article, JournalEntry, LearningGuide, Source } from '../types'

export const sources: Source[] = [
  { name: 'Abelhas sem ferrão do Espírito Santo', organization: 'Incaper em Revista, v. 15', url: 'https://www.revista.incaper.es.gov.br/index.php/ojs/article/view/43', note: 'Revisão estadual com distribuição municipal, nomes populares, descrições e nidificação.' },
  { name: 'Meliponicultura no Espírito Santo', organization: 'IEMA', url: 'https://iema.es.gov.br/meliponicultura', note: 'Informações estaduais sobre conservação e manejo.' },
  { name: 'Autorização de manejo de fauna — meliponicultura', organization: 'IEMA', url: 'https://iema.es.gov.br/autorizacao-de-manejo-de-fauna-meliponicultura', note: 'Orientação administrativa estadual; consultar a página vigente antes de qualquer manejo.' },
  { name: 'Resolução CONAMA nº 496/2020', organization: 'CONAMA / MMA', url: 'https://conama.mma.gov.br/index.php?id=724&option=com_sisconama&view=atonormativo', note: 'Uso e manejo sustentáveis de abelhas nativas sem ferrão.' },
  { name: 'Abelhas e sistemas agroflorestais', organization: 'Embrapa', url: 'https://www.atermaisdigital.cnptia.embrapa.br/web/saf/abelhas-e-safs', note: 'Interações de abelhas com plantas e recursos florais.' },
]

const jataiPhoto = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Tetragonisca_angustula_%28Jata%C3%AD%29_%2851826346548%29.jpg/1280px-Tetragonisca_angustula_%28Jata%C3%AD%29_%2851826346548%29.jpg'
export const species: Species[] = [
  { slug: 'jatai', commonName: 'Jataí', scientificName: 'Tetragonisca angustula', genus: 'Tetragonisca', family: 'Apidae', region: 'Sudeste', states: ['ES'], status: 'documentado', image: jataiPhoto, imageAlt: 'Abelha Jataí, Tetragonisca angustula, em fotografia macro', shortDescription: 'Espécie registrada em publicação educativa do IEMA para o Espírito Santo. A ocorrência estadual não significa presença em todos os municípios.', ecology: 'Abelha nativa sem ferrão. Consulte as referências para informações complementares e contextuais.', sources: [sources[0], { name: 'Abelhas do PEPAZ', organization: 'IEMA', url: 'https://iema.es.gov.br/Media/iema/Unidades%20de%20Conserva%C3%A7%C3%A3o/Abelhas%20do%20PEPAZ%20%282%29_compressed.pdf', note: 'Material educativo estadual que inclui a espécie Jataí.' }], curious: 'O material educativo do IEMA sobre o Parque Estadual Paulo César Vinha apresenta a Jataí entre as abelhas do parque. Consulte a publicação para detalhes e contexto.' },
  ...(['Mandaçaia', 'Uruçu-amarela', 'Iraí', 'Mirim', 'Tubuna'] as const).map((commonName, index) => ({ slug: ['mandacaia','urucu-amarela','irai','mirim','tubuna'][index], commonName, scientificName: '', genus: '', family: '', region: '', states: [] as string[], status: 'pendente' as const, image: '', imageAlt: '', shortDescription: 'Ficha em preparação. Nome científico, imagem e distribuição serão incluídos após validação em fontes técnicas.', ecology: '', sources: [], curious: '' })),
]

export const plants: Plant[] = [
  { slug: 'manjericao', commonName: 'Manjericão', scientificName: 'Ocimum basilicum', family: 'Lamiaceae', type: 'Herbácea aromática', cultivation: 'Vasos e jardins', light: 'A validar para o cultivar e local', water: 'A validar', flowering: 'Variável conforme cultivar e manejo', beeResources: 'Ficha demonstrativa: relação local com polinizadores pendente de confirmação.', native: false, region: 'Ampla área de cultivo; confirmar recomendações locais', image: '', imageAlt: '', status: 'demonstracao', source: 'Nome e ficha básica demonstrativos; informação melitófila e recomendações de cultivo aguardam referência local.' },
  { slug: 'flora-nativa-capixaba', commonName: 'Flora nativa capixaba', scientificName: '', family: '', type: 'Seleção regional', cultivation: 'Jardins', light: 'Depende da espécie', water: 'Depende da espécie', flowering: 'A mapear por espécie e localidade', beeResources: 'Seleção regional em desenvolvimento com fontes técnicas.', native: true, region: 'Espírito Santo', image: '', imageAlt: '', status: 'em-validacao', source: 'Não é uma espécie; área editorial pendente de curadoria e referências.' },
]

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
