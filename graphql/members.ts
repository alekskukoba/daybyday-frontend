import { CloudinaryAsset } from './models/cloudinaryAsset'
import { Member } from './models/member'
import client from './apollo'
import { gql } from '@apollo/client'

export interface MembersData {
  members: Member[]
}

export const getMembers = async (locale = 'uk', first = 100) => {
  if (locale === 'default') {
    return []
  }

  const query = gql`
    query Members($locale: Locale!, $first: Int) {
      members(locales: [$locale, en], first: $first, orderBy: priority_ASC) {
        id
        name
        title
        photo
      }
    }
  `

  const {
    data: { members },
  } = await client.query<MembersData>({
    query,
    variables: {
      locale,
      first,
    },
  })

  return members
}

export const getImgPath = (asset: CloudinaryAsset) => {
  return `v${asset.version}/${asset.public_id}.${asset.format}`
}
