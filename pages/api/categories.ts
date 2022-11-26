import { Report } from './reports'
import { Program } from './programs'
import { HygraphMedia } from './types'
import { gql } from '@apollo/client'
import client from './apollo'

export interface Category {
  id: string
  title: string
  description: {
    html: string
  }
  preview: HygraphMedia
  cover: HygraphMedia
  slug: string
  programs: Program[]
  reports: Report[]
}

export interface CategoriesData {
  categories: Category[]
}

export interface CategoryData {
  category: Category
}

export const getCategories = async (locale = 'uk') => {
  if (locale === 'default') {
    return []
  }

  const query = gql`
    query Categories($locale: Locale!) {
      categories(locales: [$locale, en]) {
        id
        title
        description {
          html
        }
        preview {
          height
          width
          url
        }
        cover {
          height
          width
          url
        }
        slug
      }
    }
  `

  const r = await client.query<CategoriesData>({
    query,
    variables: {
      locale,
    },
  })

  const {
    data: { categories },
  } = r

  return categories
}

export const getCategoryBySlug = async (slug: string, locale = 'uk') => {
  if (locale === 'default') {
    return []
  }

  const query = gql`
    query CategoryBySlug($slug: String!, $locale: Locale!) {
      category(where: { slug: $slug }, locales: [$locale, en]) {
        id
        title
        description {
          html
        }
        preview {
          height
          width
          url
        }
        cover {
          height
          width
          url
        }
        slug
      }
    }
  `

  const {
    data: { category },
  } = await client.query<CategoryData>({
    query,
    variables: {
      slug,
      locale,
    },
  })

  return category
}
