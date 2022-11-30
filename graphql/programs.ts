import { CloudinaryAsset } from './models/cloudinaryAsset'
import { gql } from '@apollo/client'
import client from './apollo'

interface Data {
  category: {
    id: string
    title: string
    description: {
      html: string
    }
    preview: CloudinaryAsset
    cover: CloudinaryAsset
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
        cover
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
