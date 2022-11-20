import { HygraphMedia } from './types'
import { gql } from '@apollo/client'
import client from './apollo'

export interface Mission {
  id: string
  title: string
  description: string
  preview: HygraphMedia
  slug: string
}

export interface MissionsData {
  missions: Mission[]
}

export const getMissions = async (locale = 'uk') => {
  const query = gql`
    query Missions($locale: Locale!) {
      missions(locales: [$locale, en]) {
        title
        slug
        preview {
          height
          width
          url
        }
        description
      }
    }
  `

  const {
    data: { missions },
  } = await client.query<MissionsData>({
    query,
    variables: {
      locale,
    },
  })

  return missions
}
