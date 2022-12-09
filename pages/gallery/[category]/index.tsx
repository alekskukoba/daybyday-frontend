import { GetServerSideProps, NextPage } from 'next'
import Breadcrumbs from '../../../components/Breadcrumbs'
import { Category } from '../../../graphql/categories'
import { CloudinaryAsset } from '../../../graphql/models/cloudinaryAsset'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Moment from 'react-moment'
import client from '../../../graphql/apollo'
import { getImgPath } from '../../../graphql/members'
import { gql } from '@apollo/client'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

interface Props {
  category: Category
}

const GalleryPage: NextPage<Props> = ({ category }) => {
  const { t } = useTranslation()
  return (
    <>
      <Head>
        <title>
          {t('seo.galleryCategory.title', { title: category.title })}
          <meta name="description" content={category.description.text} />
        </title>
      </Head>

      <div className="container">
        <div className="mb-4">
          <Breadcrumbs title={category.title} />
        </div>
      </div>
      <div className="lg:container">
        <div className="relative h-[240px] lg:h-[320px] mb-10">
          <Image
            src={getImgPath(category.cover)}
            layout="fill"
            objectFit="cover"
            objectPosition={'0 30%'}
            alt={category.title}
            priority
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40">
            <div className="container flex flex-col justify-center h-full lg:p-16">
              <div className="space-y-2 text-white">
                <h1 className="font-montserrat font-semibold text-[24px] leading-[28px] lg:text-[40px] lg:leading-[56px]">
                  {category.title}
                </h1>
                <div
                  dangerouslySetInnerHTML={{
                    __html: category.description.html,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container pb-20">
        <div className="grid gap-6 lg:grid-cols-3">
          {category.reports.map((report) => (
            <div key={report.id}>
              <div className="relative h-[200px] lg:h-[233px] mb-4 rounded overflow-hidden">
                <Image
                  src={getImgPath(report.preview)}
                  layout="fill"
                  objectFit="cover"
                  alt={report.title}
                />
              </div>
              <h3 className="mb-2 font-semibold font-montserrat line-clamp-1">
                {report.title}
              </h3>
              <div className="flex items-center justify-between">
                <span className="text-dbd-grey">
                  <Moment format="DD.MM.YYYY">{report.createdAt}</Moment>
                </span>
                <Link href={`${category.slug}/${report.slug}`}>
                  <a className="font-medium text-dbd-blue font-montserrat">
                    {t('button.watch')}
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default GalleryPage

interface Data {
  category: {
    id: string
    title: string
    description: {
      html: string
    }
    preview: CloudinaryAsset
    cover: CloudinaryAsset
    slug: string
    reports: {
      id: string
      title: string
      preview: CloudinaryAsset
      createdAt: string
    }
  }
}

export const getServerSideProps: GetServerSideProps = async ({
  locale,
  params,
}) => {
  const slug = (params as { category: string }).category

  let categoryParam

  if (locale !== 'default') {
    const query = gql`
      query CategoryBySlug($slug: String!, $locale: Locale!) {
        category(where: { slug: $slug }, locales: [$locale, en]) {
          id
          title
          description {
            html
            text
          }
          cover
          slug
          reports(irst: 100, orderBy: publishedAt_DESC) {
            id
            title
            preview
            createdAt
            slug
          }
        }
      }
    `

    const {
      data: { category },
    } = await client.query<Data>({
      query,
      variables: {
        slug,
        locale,
      },
    })

    categoryParam = category
  }

  return {
    props: {
      category: categoryParam,
      ...(await serverSideTranslations(locale as string, ['common'])),
    },
  }
}
