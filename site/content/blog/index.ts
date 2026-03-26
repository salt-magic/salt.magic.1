export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: 'Hydration Science' | 'Lifestyle' | 'Product'
  date: string
  readTime: string
  heroGradient: string
  content: string
}

import { deadWaterCrisis } from './dead-water-crisis'
import { wellnessVsSportsElectrolytes } from './wellness-vs-sports-electrolytes'

export const blogPosts: BlogPost[] = [
  deadWaterCrisis,
  wellnessVsSportsElectrolytes,
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getAllSlugs(): string[] {
  return blogPosts.map((post) => post.slug)
}
