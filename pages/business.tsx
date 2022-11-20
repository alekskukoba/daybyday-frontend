import { GetStaticProps, NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import Image from 'next/image'
import Breadcrumbs from '../components/Breadcrumbs'

const AboutPage: NextPage = () => {
  const { t } = useTranslation()
  return (
    <>
      <Head>
        <title>{t('page.business')}</title>
      </Head>

      <div className="container pb-20">
        <div className="mb-4">
          <Breadcrumbs />
        </div>

        <h1 className="mb-6 text-h1">{t('page.business')}</h1>

        <div className="relative mb-8">
          <Image
            src={'/business.png'}
            layout="responsive"
            height={400}
            width={1200}
            alt={t('page.business')}
          />
        </div>

        <div className="space-y-4">
          <p>
            Нас, а саме людей доброї волі, котрі називають себе волонтерами,
            об’єднала ця жахлива війна. Ми вірішили день за днем робити добрі та
            необхідні справи за для нашої перемоги. В усіх цих людей різні
            історії, але у всіх них велике і мужнє серце.
            <br />
            Для нас - Укарїна, це живий організм і ми я є його частиною.
          </p>

          <p>
            Нашою метою є якнайшвидше дістатися з гуманітарною допомогою туди,
            де ми найбільше потрібні українцям. Якщо у вас є бажання приєднатись
            до нашої команди і зробити свій внесок у перемогу України - пишіть
            нам:
            <br />
            <a
              href="mailto:Help@daybyday.com.ua"
              className="underline text-dbd-blue"
            >
              Help@daybyday.com.ua
            </a>
          </p>
        </div>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common', 'footer'])),
    },
  }
}

export default AboutPage
