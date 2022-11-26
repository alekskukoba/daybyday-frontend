import { gql } from '@apollo/client'
import client from './apollo'

export interface Program {
  id: string
  brief: string
  title: string
  destination: string
}

export interface ProgramsData {
  programs: Program[]
}

export const getPrograms = async (locale = 'uk') => {
  if (locale === 'default') {
    return []
  }

  const query = gql`
    query Programs($locale: Locale!) {
      programs(locales: [$locale, en]) {
        title
        brief {
          html
        }
        body {
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
      }
    }
  `

  const {
    data: { programs },
  } = await client.query<ProgramsData>({
    query,
    variables: {
      locale,
    },
  })

  return programs
}
