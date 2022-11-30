import { Report } from './reports'
import { gql } from '@apollo/client'
import client from './apollo'
import { Asset } from './models/asset'
import { Program } from './models/program'

export interface Category {
  id: string
  title: string
  description: {
    html: string
  }
  preview: Asset
  cover: Asset
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
      categories(locales: [$locale, en], orderBy: priority_ASC) {
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
    data: { categories },
  } = await client.query<CategoriesData>({
    query,
    variables: {
      locale,
    },
  })

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