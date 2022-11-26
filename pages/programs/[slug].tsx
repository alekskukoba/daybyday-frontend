import { gql } from '@apollo/client'
import { GetStaticPathsContext, GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import Image from 'next/image'
import Breadcrumbs from '../../components/Breadcrumbs'
import client from '../api/apollo'
import { Category, getCategories } from '../api/categories'
import { HygraphMedia } from '../api/types'
import { InformationCircleIcon } from '@heroicons/react/24/outline'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'

const ProgramPage: NextPage<{
  category: Category
}> = ({ category }) => {
  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>{category.title}</title>
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

        <div className="space-y-10 divide-y">
          {category.programs.map((program) => (
            <div key={program.id} className="pt-8 first:pt-0">
              <h2 className="mb-4 text-h3">{program.title}</h2>
              <p className="mb-6">{program.brief}</p>
              <div className="flex items-center gap-3 p-6 mb-8 rounded bg-dbd-lite-grey">
                <InformationCircleIcon className="w-6 h-6 text-dbd-dark-yellow" />
                <p className="text-base text-dbd-grey">
                  Щоб підтримати цю програму в призначенні платежу вказуйте{' '}
                  {`«${program.destination}»`}
                </p>
              </div>
              <Link href={'/requisites'}>
                <a className="bg-dbd-yellow h-[48px] w-[269px] flex items-center justify-center rounded">
                  <span className="text-lg font-semibold leading-6 font-montserrat">
                    {t('button.support')}
                  </span>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ProgramPage

export const getStaticPaths = async ({ locales }: GetStaticPathsContext) => {
  const categories = await getCategories()
  const paths = categories.flatMap((c) => {
    return locales?.map((locale) => {
      return {
        params: { slug: c.slug },
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
    programs: {
      id: string
      brief: string
      title: string
      destination: string
    }
  }
}

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
  const { slug } = params as { slug: string }

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
        programs {
          id
          brief
          title
          destination
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
