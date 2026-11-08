import { curiosities, diary, featuredArticle, guides, plants, sources, species } from '../data/content'
import type { Article, JournalEntry, LearningGuide, Plant, Source, Species } from '../types'

export interface ContentService {
  listSpecies(): Species[]
  getSpecies(slug: string): Species | undefined
  listPlants(): Plant[]
  getPlant(slug: string): Plant | undefined
  listArticles(): Article[]
  getArticle(slug: string): Article | undefined
  listGuides(): LearningGuide[]
  getGuide(slug: string): LearningGuide | undefined
  listDiary(): JournalEntry[]
  listSources(): Source[]
}

// All UI pages read through this adapter. Replace its local data source with an API adapter when a backend is configured.
export const contentService: ContentService = {
  listSpecies: () => species,
  getSpecies: slug => species.find(item => item.slug === slug),
  listPlants: () => plants,
  getPlant: slug => plants.find(item => item.slug === slug),
  listArticles: () => [featuredArticle, ...curiosities],
  getArticle: slug => [featuredArticle, ...curiosities].find(item => item.slug === slug),
  listGuides: () => guides,
  getGuide: slug => guides.find(item => item.slug === slug),
  listDiary: () => diary,
  listSources: () => sources,
}

