import { GetServerSideProps, NextPage } from 'next'
import Breadcrumbs from '../../../components/Breadcrumbs'
import { CloudinaryAsset } from '../../../graphql/models/cloudinaryAsset'
import Head from 'next/head'
import Image from 'next/image'
import Lightbox from 'yet-another-react-lightbox'
import Moment from 'react-moment'
import { Report } from '../../../graphql/models/report'
import client from '../../../graphql/apollo'
import { getImgPath } from '../../../graphql/members'
import { gql } from '@apollo/client'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useState } from 'react'
import { useTranslation } from 'next-i18next'

interface Props {
  report: Report
}

const GalleryPage: NextPage<Props> = ({ report }) => {
  const [mediaIndex, setMediaIndex] = useState(-1)
  const [financialMediaIndex, setFinancialMediaIndex] = useState(-1)
  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>{t('seo.report.title', { title: report.title })}</title>
        <meta name="description" content={report.title} />
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
            src={getImgPath(report.cover)}
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

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {report.media.map((item, idx) => (
            <div key={idx} className="relative aspect-w-1 aspect-h-1">
              <Image
                src={getImgPath(item)}
                layout="fill"
                alt={report.title}
                objectFit="cover"
                objectPosition={'0 0'}
                onClick={() => setMediaIndex(idx)}
                className="cursor-pointer"
                priority
              />
            </div>
          ))}
        </div>

        <Lightbox
          open={mediaIndex >= 0}
          close={() => setMediaIndex(-1)}
          index={mediaIndex}
          slides={report.media.map((item) => {
            return {
              src: item.url,
            }
          })}
        />

        {report.financialMedia.length > 0 && (
          <>
            <h3 className="my-10 font-montserrat font-semibold text-[24px] leading-[28px]">
              {t('title.financialReport')}
            </h3>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
              {report.financialMedia.map((item, idx) => (
                <div key={idx} className="relative aspect-w-1 aspect-h-1">
                  <Image
                    src={getImgPath(item)}
                    layout="fill"
                    alt={report.title}
                    objectFit="cover"
                    objectPosition={'0 0'}
                    onClick={() => setFinancialMediaIndex(idx)}
                    className="cursor-pointer"
                    priority
                  />
                </div>
              ))}
            </div>

            <Lightbox
              open={financialMediaIndex >= 0}
              close={() => setFinancialMediaIndex(-1)}
              index={financialMediaIndex}
              slides={report.financialMedia.map((item) => {
                return {
                  src: item.url,
                }
              })}
            />
          </>
        )}
      </div>
    </>
  )
}

export default GalleryPage

export const getServerSideProps: GetServerSideProps = async ({
  locale,
  params,
}) => {
  interface Data {
    report: {
      id: string
      title: string
      cover: CloudinaryAsset
      body: {
        html: string
      }
      youTubeUrls: string[]
      media: CloudinaryAsset[]
    }
  }

  const { slug } = params as { slug: string }

  let reportParam

  if (locale !== 'default') {
    const query = gql`
      query Report($slug: String!, $locale: Locale!) {
        report(where: { slug: $slug }, locales: [$locale, en]) {
          title
          cover
          body {
            html
          }
          youTubeUrls
          media
          financialMedia
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
      ...(await serverSideTranslations(locale as string, ['common'])),
    },
  }
}
