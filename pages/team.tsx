import { GetStaticProps, NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import { getMembers, Member } from './api/members'

interface Props {
  members: Member[]
}

const TeamPage: NextPage<Props> = ({ members = [] }) => {
  const { t } = useTranslation()
  return (
    <>
      <Head>
        <title>{t('page.team')}</title>
      </Head>

      <div className="container pb-20">
        <div className="mb-4">
          <Breadcrumbs />
        </div>

        <h1 className="mb-6 text-h1">{t('page.team')}</h1>

        <div className="relative mb-8">
          <Image
            src={'/team.png'}
            layout="responsive"
            height={400}
            width={1200}
            alt={t('page.team')}
          />
        </div>

        <div className="mb-10 space-y-4">
          <p>
            Нас, волонтерів – людей доброї волі, об’єднала ця жахлива війна. Ми
            вирішили день за днем робити добрі та необхідні справи за для нашої
            перемоги. До нашої команди входять військові та медичні експерти,
            менеджери, логісти, фінансист, бухгалтер, юрист, IT відділ,
            спеціалісти з підбору автівок, експерти з експлуатації дронів та
            безпілотників та інші волонтери.
          </p>

          <p>
            Наша мета – допомога.
            <br />
            Наша ціль – перемога!
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 sm:gap-6 lg:grid-cols-3 2xl:grid-cols-4 xl:gap-10">
          {members.map((member) => (
            <div key={member.id} className=" basis-[270px] shrink-0">
              <Image
                src={member.photo.url}
                height={member.photo.height}
                width={member.photo.width}
                layout="responsive"
                alt={member.name}
              />
              <p className="mt-4 mb-2 text-xl font-semibold leading-7 text-dbd-dark-grey font-montserrat">
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
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const members = await getMembers()

  return {
    props: {
      members,
      ...(await serverSideTranslations(locale as string, ['common', 'footer'])),
    },
  }
}

export default TeamPage
