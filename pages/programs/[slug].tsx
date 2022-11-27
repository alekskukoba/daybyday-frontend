import { gql } from '@apollo/client'
import { GetStaticPathsContext, GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import Image from 'next/image'
import Breadcrumbs from '../../components/Breadcrumbs'
import client from '../api/apollo'
import { Category, getCategories } from '../api/categories'
import { HygraphMedia } from '../api/types'
import {
  InformationCircleIcon,
  Square2StackIcon,
} from '@heroicons/react/24/outline'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import CopyToClipboard from 'react-copy-to-clipboard'
import toast from 'react-hot-toast'

const ProgramPage: NextPage<{
  category: Category
}> = ({ category }) => {
  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>{category.title}</title>
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
        <div className="space-y-10 divide-y">
          {category.programs.map((program) => (
            <div key={program.id} className="pt-8 first:pt-0">
              <h2 className="mb-4 font-montserrat font-semibold text-[24px] leading-[28px] lg:text-[32px] lg:leading-[40px]">
                {program.title}
              </h2>
              <p className="mb-4 lg:mb-6">{program.brief}</p>
              <div className="flex items-center gap-3 p-4 mb-4 rounded lg:mb-8 lg:p-6 bg-dbd-lite-grey">
                <div className="basis-6">
                  <InformationCircleIcon className="w-6 h-6 text-dbd-dark-yellow" />
                </div>
                <p className=" text-dbd-grey">
                  {t('paymentPurpose.program', {
                    purpose: program.destination,
                  })}
                  <CopyToClipboard
                    text={program.destination}
                    onCopy={() =>
                      toast(
                        t('message.copied', {
                          text: t('message.paymentPurposeCopied'),
                        })
                      )
                    }
                  >
                    <button className="inline-block ml-2 align-middle">
                      <Square2StackIcon className="w-6 h-6" />
                    </button>
                  </CopyToClipboard>
                </p>
              </div>
              <Link href={'/requisites'}>
                <a className="bg-dbd-yellow h-[48px] w-full lg:w-[269px] flex items-center justify-center rounded">
                  <span className="font-semibold font-montserrat ">
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
