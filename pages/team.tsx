import { GetServerSideProps, NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import { getMembers } from '../graphql/members'
import { Member } from '../graphql/models/member'

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

      <div className="container pb-12 lg:pb-20">
        <div className="mb-4">
          <Breadcrumbs />
        </div>

        <h1 className="mb-6 text-[28px] leading-[32px] font-montserrat font-semibold lg:text-[40px] lg:leading-[56px]">
          {t('page.team')}
        </h1>

        <div className="relative mb-8">
          <div className="h-[240px]">
            <Image
              src={'/page-team.png'}
              layout="fill"
              objectFit="cover"
              alt={t('page.team')}
              priority
            />
          </div>
        </div>

        <div className="mb-10 space-y-4">
          <p className="text-justify whitespace-pre-line lg:text-left">
            {t('section.team.body')}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-10">
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
                className="text-[16px] leading-[24px] text-dbd-grey line-clamp-2"
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

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const members = await getMembers(locale)

  return {
    props: {
      members,
      ...(await serverSideTranslations(locale as string, ['common'])),
    },
  }
}

export default TeamPage
