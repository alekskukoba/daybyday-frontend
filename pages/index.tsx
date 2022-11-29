import type { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ArrowRightIcon } from '@heroicons/react/24/solid'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'

import { getPartners } from './api/partners'
import CategoryCard from '../components/CategoryCard'
import { getCategories, Category } from './api/categories'
import { useTranslation } from 'next-i18next'
import { getMembers } from './api/members'
import { Partner } from './api/models/partner'
import { Member } from './api/models/member'

const Home: NextPage<{
  partners: Partner[]
  categories: Category[]
  members: Member[]
}> = ({ partners, categories, members }) => {
  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <section className="lg:pb-20">
        <div className="lg:container">
          <div className="relative h-[500px] lg:h-[600px]">
            <Image
              src="/page-home.png"
              alt=""
              layout="fill"
              objectFit="cover"
              objectPosition="50% 70%"
              priority
            />
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="container flex flex-col justify-end h-full gap-20 lg:justify-center">
                <h1 className="font-montserrat text-white font-bold text-[40px] leading-[48px] text-center lg:text-[64px] lg:leading-tight">
                  {t('page.home')}
                </h1>
                <Link href={'/requisites'}>
                  <a className="bg-dbd-yellow h-[48px] w-full flex items-center justify-center rounded mb-10 lg:hidden">
                    <span className="text-lg font-semibold leading-6 font-montserrat">
                      {t('button.support')}
                    </span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-dbd-footer-primary-bg xl:py-20">
        <div className="container space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-[28px] leading-[32px] font-montserrat font-semibold lg:text-[40px] lg:leading-[56px]">
              {t('page.projects')}
            </h2>
          </div>

          <div className="space-y-6">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                title={category.title}
                brief={category.description.html}
                image={category.preview}
                url={`/programs/${category.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#4289F4] py-12 xl:py-20">
        <div className="container flex flex-col items-center">
          <h3 className="text-[28px] leading-[32px] font-montserrat font-semibold lg:text-[40px] lg:leading-[56px] text-white mb-2">
            {t('section.supportTheFund.title')}
          </h3>
          <p className="mb-6 text-lg text-center text-white">
            {t('section.supportTheFund.body')}
          </p>
          <Link href={'/requisites'}>
            <a className="bg-dbd-yellow h-[56px] w-full lg:w-[292px] flex items-center justify-center rounded">
              <span className="text-lg font-semibold leading-6 font-montserrat">
                {t('button.support')}
              </span>
            </a>
          </Link>
        </div>
      </section>

      <section className="py-12 xl:py-20">
        <div className="container space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-[28px] leading-[32px] font-montserrat font-semibold lg:text-[40px] lg:leading-[56px]">
              {t('page.team')}
            </h2>
            <Link href="/team">
              <a className="flex items-center gap-3 ">
                <span className="">{t('button.allTeam')}</span>{' '}
                <ArrowRightIcon className="w-5 h-5" />
              </a>
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-10">
            {members.map((member) => (
              <div key={member.id}>
                <div className="relative aspect-1">
                  <Image
                    src={member.photo.url}
                    layout="fill"
                    objectFit="cover"
                    alt={member.name}
                    priority
                  />
                </div>
                <p className="mt-4 mb-2 text-xl font-semibold leading-6 text-dbd-dark-grey font-montserrat">
                  {member.name}
                </p>
                <p
                  className="text-lg leading-6 text-dbd-grey line-clamp-1"
                  title={member.title}
                >
                  {member.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-12 xl:pb-20">
        <div className="container space-y-8">
          <div className="space-y-2">
            <h2 className="text-[28px] leading-[32px] font-montserrat font-semibold lg:text-[40px] lg:leading-[56px]">
              {t('page.partners')}
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 2xl:grid-cols-5">
            {partners.map((partner, idx) => (
              <div key={idx} className="relative my-3 h-14">
                <Image
                  src={partner.logo.url}
                  layout="fill"
                  priority
                  alt={partner.name}
                  objectFit="contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const categories = await getCategories(locale)
  const members = await getMembers(locale, 4)
  const partners = await getPartners(locale)

  return {
    props: {
      categories,
      members,
      partners,
      ...(await serverSideTranslations(locale as string, ['common'])),
    },
  }
}

export default Home
