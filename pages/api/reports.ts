import { HygraphMedia } from './types'
import { gql } from '@apollo/client'
import client from './apollo'

export interface Report {
  id: string
  title: string
  preview: HygraphMedia
  cover: HygraphMedia
  body: {
    html: string
  }
  youTubeUrls: string[]
  media: HygraphMedia[]
  createdAt: string
  slug: string
}

export interface ReportData {
  report: Report
}

export interface ReportsData {
  reports: Report[]
}

export const getReports = async (locale = 'en') => {
  const query = gql`
    query Reports($locale: Locale!) {
      reports(locales: [$locale, en]) {
        id
        title
        preview {
          url
          width
          height
        }
        body {
          markdown
        }
        publishedAt
        updatedAt
      }
    }
  `
  const {
    data: { reports },
  } = await client.query<ReportsData>({
    query,
    variables: {
      locale,
    },
  })

  return reports
}

export const getReportById = async (id: string, locale = 'en') => {
  const query = gql`
    query Report($id: ID!, $locale: Locale!) {
      report(locales: [$locale, en], where: { id: $id }) {
        id
        title
        preview {
          url
          width
          height
        }
        body {
          markdown
          html
        }
        publishedAt
        updatedAt
      }
    }
  `

  const {
    data: { report },
  } = await client.query<ReportData>({
    query,
    variables: {
      id,
      locale,
    },
  })

  console.log(report)

  return report
}
