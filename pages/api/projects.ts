import { HygraphMedia } from './types'
import { gql } from '@apollo/client'
import client from './apollo'

export interface Project {
  id: string
  name: string
  description: {
    html: string
  }
  image: HygraphMedia
  slug: string
}

export interface ProjectsData {
  projects: Project[]
}

export const getProjects = async (locale = 'uk') => {
  if (locale === 'default') {
    return []
  }

  const query = gql`
    query Projects($locale: Locale!) {
      projects(locales: [$locale, en]) {
        id
        name
        description {
          html
        }
        image {
          height
          width
          url
        }
      }
    }
  `

  console.trace(query, locale)

  const {
    data: { projects },
  } = await client.query<ProjectsData>({
    query,
    variables: {
      locale,
    },
  })

  return projects
}
