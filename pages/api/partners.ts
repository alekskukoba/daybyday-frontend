import { HygraphMedia } from './types'
import { gql } from '@apollo/client'
import client from './apollo'

export interface Partner {
  id: string
  name: string
  logo: HygraphMedia
}

export interface PartnersData {
  partners: Partner[]
}

export const getPartners = async (locale = 'uk') => {
  if (locale === 'default') {
    return []
  }

  const query = gql`
    query Partners($locale: Locale!) {
      partners(locales: [$locale, en]) {
        id
        name
        logo {
          url
          width
          height
        }
      }
    }
  `

  const {
    data: { partners },
  } = await client.query<PartnersData>({
    query,
    variables: {
      locale,
    },
  })

  return partners
}
