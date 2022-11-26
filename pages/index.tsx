import type { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'

import { getPartners, Partner } from './api/partners'
import Img from '../components/image'
import CategoryCard from '../components/CategoryCard'
import { getCategories, Category } from './api/categories'
import { Button } from '../components/Button'
import { useTranslation } from 'next-i18next'
import { getMembers, Member } from './api/members'

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
      <section className="pb-8 md:pb-10 xl:pb-20">
        <div className="container">
          <div className="relative h-[200px] sm:h-[300px] md:h-[400px] xl:h-[600px]">
            <Image
              src="/page-home.png"
              alt=""
              layout="fill"
              objectFit="cover"
              objectPosition="50% 70%"
              quality={100}
            />
            <div className="absolute w-full h-full bg-black bg-opacity-40">
              <div className="flex flex-col items-center justify-center h-full gap-8 px-4 py-16 sm:px-8 xl:justify-center xl:px-24">
                <h1 className="text-xl font-bold text-center text-white sm:text-3xl md:text-4xl xl:text-6xl">
                  {t('page.home')}
                </h1>
                <div className="hidden sm:block xl:hidden">
                  <Button href="" text={t('button.support')} size="sm" />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 sm:hidden">
            <Button href="" text={t('button.support')} size="sm" full />
          </div>
        </div>
      </section>

      <section className="bg-[#EEF0F3] py-8 md:py-10 xl:py-20">
        <div className="container space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="font-montserrat font-semibold text-[40px] leading-[56px]">
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

      <section className="bg-[#4289F4] py-8 md:py-10 xl:py-20">
        <div className="container flex flex-col items-center px-32 gap-y-4">
          <h3 className="font-montserrat font-semibold text-[40px] leading-[56px] text-white">
            {t('section.supportTheFund.title')}
          </h3>
          <p className="text-lg text-center text-white">
            {t('section.supportTheFund.body')}
          </p>
          <Link href={'/requisites'}>
            <a className="bg-dbd-yellow h-[56px] w-[292px] flex items-center justify-center rounded">
              <span className="text-lg font-semibold leading-6 font-montserrat">
                {t('button.support')}
              </span>
            </a>
          </Link>
        </div>
      </section>

      <section className="py-8 md:py-10 xl:py-20">
        <div className="container space-y-8">
          <div className="flex justify-between items-d">
            <h2 className="font-montserrat font-semibold text-[40px] leading-[56px]">
              {t('page.team')}
            </h2>
            <Link href="/team">
              <a className="flex items-center gap-3 text-lg">
                {t('button.allTeam')} <FaArrowRight size={16} />
              </a>
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-10">
            {members.map((member) => (
              <div key={member.id} className=" basis-[270px] shrink-0">
                <Image
                  src={member.photo.url}
                  height={member.photo.height}
                  width={member.photo.width}
                  layout="responsive"
                  alt={member.name}
                />
                <p className="mt-4 mb-2 text-lg font-semibold leading-7 text-dbd-dark-grey font-montserrat">
                  {member.name}
                </p>
                <p
                  className="text-base leading-6 text-dbd-grey line-clamp-1"
                  title={member.title}
                >
                  {member.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-8 md:pb-10 xl:pb-20">
        <div className="container space-y-8">
          <div className="space-y-2">
            <h2 className="font-montserrat font-semibold text-[40px] leading-[56px]">
              {t('page.partners')}
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5">
            {partners.map((partner, idx) => (
              <div key={idx} className="relative my-3 h-14">
                <Img image={partner.logo} fill />
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
  const members = await getMembers(locale)
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
