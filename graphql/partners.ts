import { gql } from '@apollo/client'
import client from './apollo'
import { Partner } from './models/partner'

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