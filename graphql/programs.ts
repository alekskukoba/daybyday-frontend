import { gql } from '@apollo/client'
import client from './apollo'
import { Asset } from './models/asset'

interface Data {
  category: {
    id: string
    title: string
    description: {
      html: string
    }
    preview: Asset
    cover: Asset
    slug: string
    programs: {
      id: string
      brief: string
      title: string
      destination: string
    }
  }
}

export const getPrograms = async (locale = 'uk', slug: string) => {
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
        cover {
          height
          width
          url
        }
        programs {
          id
          brief
          title
          destination
        }
      }
    }
  `

  const {
    data: { category },
  } = await client.query<Data>({
    query,
    variables: {
      slug,
      locale,
    },
  })

  return category
}
