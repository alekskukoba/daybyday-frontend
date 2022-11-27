import { gql } from '@apollo/client'
import client from './apollo'
import { Member } from './models/member'

export interface MembersData {
  members: Member[]
}

export const getMembers = async (locale = 'uk') => {
  if (locale === 'default') {
    return []
  }

  const query = gql`
    query Members($locale: Locale!) {
      members(locales: [$locale, en]) {
        id
        name
        title
        photo {
          height
          width
          url
        }
      }
    }
  `

  const {
    data: { members },
  } = await client.query<MembersData>({
    query,
    variables: {
      locale,
    },
  })

  return members
}
