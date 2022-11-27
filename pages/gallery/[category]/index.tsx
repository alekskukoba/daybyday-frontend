import { gql } from '@apollo/client'
import { GetStaticPathsContext, GetStaticProps, NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Moment from 'react-moment'
import Breadcrumbs from '../../../components/Breadcrumbs'
import client from '../../api/apollo'
import { getCategories, Category } from '../../api/categories'
import { HygraphMedia } from '../../api/types'

interface Props {
  category: Category
}

const GalleryPage: NextPage<Props> = ({ category }) => {
  const { t } = useTranslation()
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <div className="container">
        <div className="mb-4">
          <Breadcrumbs title={category.title} />
        </div>
      </div>
      <div className="lg:container">
        <div className="relative h-[240px] lg:h-[320px] mb-10">
          <Image
            src={category.cover.url}
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
        <div className="grid lg:grid-cols-3">
          {category.reports.map((report) => (
            <div key={report.id}>
              <div className="relative h-[200px] lg:h-[233px] mb-4 rounded overflow-hidden">
                <Image
                  src={report.preview.url}
                  layout="fill"
                  objectFit="cover"
                  alt={report.title}
                  priority
                />
              </div>
              <h3 className="mb-2 font-semibold font-montserrat line-clamp-2">
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

export const getStaticPaths = async ({ locales }: GetStaticPathsContext) => {
  const categories = await getCategories()
  const paths = categories.flatMap((c) => {
    return locales?.map((locale) => {
      return {
        params: { category: c.slug },
        locale,
      }
    })
  })

  return {
    paths,
    fallback: false,
  }
}

interface Data {
  category: {
    id: string
    title: string
    description: {
      html: string
    }
    preview: HygraphMedia
    cover: HygraphMedia
    slug: string
    reports: {
      id: string
      title: string
      preview: HygraphMedia
      createdAt: string
    }
  }
}

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
  const slug = (params as { category: string }).category

  const query = gql`
    query CategoryBySlug($slug: String!, $locale: Locale!) {
      category(where: { slug: $slug }, locales: [$locale, en]) {
        id
        title
        description {
          html
        }
        cover {
          height
          width
          url
        }
        slug
        reports {
          id
          title
          preview {
            height
            width
            url
          }
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

  return {
    props: {
      category,
      ...(await serverSideTranslations(locale as string, ['common', 'footer'])),
    },
  }
}
