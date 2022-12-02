import { CloudinaryAsset } from './models/cloudinaryAsset'
import client from './apollo'
import { gql } from '@apollo/client'

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
          text
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
