export type Source = { name: string; organization: string; url: string; note: string }
export type ContentStatus = 'documentado' | 'pendente' | 'demonstracao' | 'em-validacao' | 'publicado' | 'em-revisao' | 'rascunho'
export type Species = { slug: string; commonName: string; scientificName: string; genus: string; family: string; region: string; states: string[]; status: 'documentado' | 'pendente'; image: string; imageAlt: string; shortDescription: string; ecology: string; sources: Source[]; curious: string }
export type Plant = { slug: string; commonName: string; scientificName: string; family: string; type: string; cultivation: string; light: string; water: string; flowering: string; beeResources: string; native: boolean; region: string; image: string; imageAlt: string; status: 'demonstracao' | 'em-validacao'; source: string }
export type Article = { slug: string; title: string; category: string; excerpt: string; readTime: string; status: 'publicado' | 'demonstracao' | 'em-revisao'; body: string; sources: Source[] }
export type JournalEntry = { slug: string; title: string; date: string; category: string; excerpt: string; status: 'rascunho' | 'publicado'; context: string; learning: string }
export type LearningGuide = { slug: string; title: string; category: string; summary: string; status: 'publicado' | 'em-revisao'; source: Source }
