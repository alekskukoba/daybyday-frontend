import { gql } from '@apollo/client'
import Moment from 'react-moment'
import { GetStaticPathsContext, GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import Breadcrumbs from '../../../components/Breadcrumbs'
import client from '../../api/apollo'
import { Report } from '../../api/reports'
import Image from 'next/image'
import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import { useTranslation } from 'next-i18next'
import { Asset } from '../../api/models/asset'

interface Props {
  report: Report
}

const GalleryPage: NextPage<Props> = ({ report }) => {
  const [index, setIndex] = useState(-1)
  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <div className="container pb-20">
        <div className="mb-4">
          <Breadcrumbs title={report.title} />
        </div>

        <h1 className="mb-3 lg:mb-2 text-[28px] leading-[32px] font-montserrat font-semibold lg:text-[40px] lg:leading-[56px]">
          {report.title}
        </h1>
        <p className="mb-8 lg:mb-10 text-dbd-grey">
          {t('message.published')}:{' '}
          <Moment format="DD.MM.YYYY">{report.createdAt}</Moment>
        </p>

        <div className="relative h-[240px] lg:h-[550px] mb-8 lg:mb-10">
          <Image
            src={report.cover.url}
            layout="fill"
            alt={report.title}
            objectFit="cover"
            priority
          />
        </div>

        <div
          className="mb-8 lg:mb-10"
          dangerouslySetInnerHTML={{ __html: report.body.html }}
        />

        {report.youTubeUrls.length > 0 && (
          <div className="grid gap-6 mb-6 lg:grid-cols-2">
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
        )}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {report.media.map((item, idx) => (
            <div key={idx} className="relative aspect-w-1 aspect-h-1">
              <Image
                src={item.url}
                layout="fill"
                alt={report.title}
                objectFit="cover"
                objectPosition={'0 0'}
                onClick={() => setIndex(idx)}
                className="cursor-pointer"
                priority
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
      return locales
        ?.filter((locale) => locale !== 'default')
        .map((locale) => {
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
      cover: Asset
      body: {
        html: string
      }
      youTubeUrls: string[]
      media: Asset[]
    }
  }

  const { slug } = params as { slug: string }

  let reportParam

  if (locale !== 'default') {
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

    reportParam = report
  }

  return {
    props: {
      report: reportParam,
      ...(await serverSideTranslations(locale as string, ['common', 'footer'])),
    },
  }
}
