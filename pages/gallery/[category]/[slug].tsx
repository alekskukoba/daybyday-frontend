import { gql } from '@apollo/client'
import Moment from 'react-moment'
import { GetStaticPathsContext, GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import Breadcrumbs from '../../../components/Breadcrumbs'
import client from '../../api/apollo'
import { Report } from '../../api/reports'
import { HygraphMedia } from '../../api/types'
import Image from 'next/image'
import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'

interface Props {
  report: Report
}

const GalleryPage: NextPage<Props> = ({ report }) => {
  const [index, setIndex] = useState(-1)

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <div className="container pb-20">
        <div className="mb-4">
          <Breadcrumbs title={report.title} />
        </div>

        <h1 className="mb-2 text-h1">{report.title}</h1>
        <p className="mb-10 text-base text-dbd-grey">
          Опубліковано: <Moment format="DD.MM.YYYY">{report.createdAt}</Moment>
        </p>

        <div className="relative h-[550px] mb-10">
          <Image
            src={report.cover.url}
            layout="fill"
            alt={report.title}
            objectFit="cover"
          />
        </div>

        <div
          className="mb-10"
          dangerouslySetInnerHTML={{ __html: report.body.html }}
        />

        <div className="grid grid-cols-2 gap-6 mb-6">
          {report.youTubeUrls.map((url, idx) => (
            <div key={idx} className="aspect-w-16 aspect-h-9">
              <iframe
                src={url}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-6">
          {report.media.map((item, idx) => (
            <div key={idx} className="relative h-[240px]">
              <Image
                src={item.url}
                layout="fill"
                alt={report.title}
                objectFit="cover"
                objectPosition={'0 0'}
                onClick={() => setIndex(idx)}
                className="cursor-pointer"
              />
            </div>
          ))}
        </div>

        <Lightbox
          open={index >= 0}
          close={() => setIndex(-1)}
          index={index}
          slides={report.media.map((item) => {
            return {
              src: item.url,
            }
          })}
        />
      </div>
    </>
  )
}

export default GalleryPage

export const getStaticPaths = async ({ locales }: GetStaticPathsContext) => {
  interface Data {
    categories: {
      slug: string
      reports: {
        slug: string
      }[]
    }[]
  }

  const query = gql`
    query CategoryBySlug($locale: Locale!) {
      categories(locales: [$locale, en]) {
        slug
        reports {
          slug
        }
      }
    }
  `

  const {
    data: { categories },
  } = await client.query<Data>({
    query,
    variables: {
      locale: 'en',
    },
  })

  const paths = categories.flatMap((category) => {
    return category.reports.flatMap((report) => {
      return locales?.map((locale) => {
        return {
          params: { category: category.slug, slug: report.slug },
          locale,
        }
      })
    })
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
  interface Data {
    report: {
      id: string
      title: string
      cover: HygraphMedia
      body: {
        html: string
      }
      youTubeUrls: string[]
      media: HygraphMedia[]
    }
  }

  const { slug } = params as { slug: string }

  const query = gql`
    query Report($slug: String!, $locale: Locale!) {
      report(where: { slug: $slug }, locales: [$locale, en]) {
        title
        cover {
          url
          width
          height
        }
        body {
          html
        }
        youTubeUrls
        media(first: 50) {
          url
          width
          height
          mimeType
        }
        createdAt
      }
    }
  `

  const {
    data: { report },
  } = await client.query<Data>({
    query,
    variables: {
      slug,
      locale,
    },
  })

  return {
    props: {
      report,
      ...(await serverSideTranslations(locale as string, ['common', 'footer'])),
    },
  }
}
