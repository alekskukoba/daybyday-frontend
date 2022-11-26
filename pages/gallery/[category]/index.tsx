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

      <div className="container pb-20">
        <div className="mb-4">
          <Breadcrumbs title={category.title} />
        </div>

        <div className="relative h-[320px] mb-10">
          <Image
            src={category.cover.url}
            layout="fill"
            objectFit="cover"
            objectPosition={'0 30%'}
            alt={category.title}
          />
          <div className="absolute top-0 left-0 flex items-center w-full h-full p-16 bg-black bg-opacity-40">
            <div className="space-y-2 text-white">
              <h1 className="font-semibold font-montserrat text-[40px] leading-[56px]">
                {category.title}
              </h1>
              <div
                dangerouslySetInnerHTML={{ __html: category.description.html }}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3">
          {category.reports.map((report) => (
            <div key={report.id}>
              <div className="relative h-[233px] mb-4">
                <Image
                  src={report.preview.url}
                  layout="fill"
                  objectFit="cover"
                  alt={report.title}
                />
              </div>
              <h3 className="mb-2 text-base font-semibold leading-6 font-montserrat line-clamp-2">
                {report.title}
              </h3>
              <div className="flex items-center justify-between">
                <span className="text-base text-dbd-grey">
                  <Moment format="DD.MM.YYYY">{report.createdAt}</Moment>
                </span>
                <Link href={`${category.slug}/${report.slug}`}>
                  <a className="text-base font-medium leading-6 text-dbd-blue font-montserrat">
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
