import { GetStaticProps, NextPage } from 'next'
import Breadcrumbs from '../components/Breadcrumbs'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

const AboutPage: NextPage = () => {
  const { t } = useTranslation()
  return (
    <>
      <Head>
        <title>{t('seo.about.title')}</title>
        <meta name="description" content={t('page.home')} />
      </Head>

      <div className="container pb-20">
        <div className="mb-4">
          <Breadcrumbs />
        </div>

        <h1 className="mb-6 text-[28px] leading-[32px] font-montserrat font-semibold lg:text-[40px] lg:leading-[56px]">
          {t('page.about')}
        </h1>

        <div className="flex flex-col gap-10 lg:flex-row">
          <div className="relative lg:basis-[450px] shrink-0 h-[240px] lg:h-[320px]">
            <Image
              src={'v1669837416/DayByDay/Pages/page-home_gtvavv.png'}
              alt={t('page.about')}
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
          <div className="space-y-6 text-justify">
            <p>{t('section.aboutTheFund.body')}</p>
            <p>{t('paymentPurpose.fund')}</p>

            <Link href={'/requisites'}>
              <a className="bg-dbd-yellow h-[48px] w-[269px] flex items-center justify-center rounded mx-auto lg:mx-0">
                <span className="text-lg font-semibold leading-6 font-montserrat">
                  {t('button.support')}
                </span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common'])),
    },
  }
}

export default AboutPage
