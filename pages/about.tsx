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
        <title>{t('page.about')}</title>
      </Head>

      <div className="container pb-20">
        <div className="mb-4">
          <Breadcrumbs />
        </div>

        <h1 className="mb-6 text-h1">{t('page.about')}</h1>

        <div className="relative mb-8">
          <Image
            src={'/about.png'}
            layout="responsive"
            height={400}
            width={1200}
            alt={t('page.about')}
          />
        </div>

        <div className="space-y-4">
          <p className="font-semibold">
            Наша мета – допомога.
            <br />
            Наша ціль – перемога!
          </p>
          <p>
            Ми – Благодійний Фонд «DAY BY DAY» («ДЕНЬ ЗА ДНЕМ»). З перших днів
            війни допомагаємо військовим та цивільному населенню. До нашої
            команди входять військові та медичні експерти, менеджери, логісти,
            фінансист, бухгалтер, юрист, IT відділ, спеціалісти з підбору
            автівок, експерти з експлуатації дронів та безпілотників та інші
            волонтери. Всі ми – волонтери. Забезпечуємо продуктами харчування
            десятки тисяч людей на деокупованих територіях Київської,
            Чернігівської, Харківської областей, доставляємо ліки, засоби
            особистої гігієни, одяг, взуття та ін. Приймаємо участь в
            благодійних заходах, спрямованих на підтримку дітей, які постраждали
            від наслідків війни. На постійній основі допомагаємо
            Спецпризначенцям ВЧ А4051, 57й бригаді - спецпідрозділу
            &quot;Хорт&quot;, та іншим військовим за запитом.
          </p>

          <p>
            Ми запрошуємо долучатися до нашої команди людей з України та усього
            світу, хто має бажання та можливість прискорити перемогу України та
            допомагати сотням тисяч українців, які найбільше цього
            потребують.Статут нашої організації відкритий для нових членів
            фонду. Будемо раді бачити Вас у нашій команді!
            <br />
            Пишіть нам:{' '}
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
