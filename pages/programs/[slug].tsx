import { GetServerSideProps, NextPage } from 'next'
import {
  InformationCircleIcon,
  Square2StackIcon,
} from '@heroicons/react/24/outline'
import Breadcrumbs from '../../components/Breadcrumbs'
import { Category } from '../../graphql/categories'
import CopyToClipboard from 'react-copy-to-clipboard'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import PaymentCard from '../../components/PaymentCard'
import { getImgPath } from '../../graphql/members'
import { getPrograms } from '../../graphql/programs'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import toast from 'react-hot-toast'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

const ProgramPage: NextPage<{
  category: Category
}> = ({ category }) => {
  const { t } = useTranslation()
  const { locale } = useRouter()

  return (
    <>
      <Head>
        <title>{t('seo.program.title', { title: category.title })}</title>
        <meta name="description" content={category.description.text} />
      </Head>

      <div className="container">
        <div className="mb-4">
          <Breadcrumbs title={category.title} />
        </div>
      </div>
      <div className="lg:container">
        <div className="relative h-[240px] lg:h-[320px] mb-10">
          <Image
            src={getImgPath(category.cover)}
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
              <Link href={'/requisites'}>
                <a className="bg-dbd-yellow h-[48px] w-full lg:w-[269px] flex items-center justify-center rounded mb-4 lg:mb-8">
                  <span className="font-semibold font-montserrat ">
                    {t('button.support')}
                  </span>
                </a>
              </Link>
              <div className="flex items-center gap-3 p-4 rounded lg:p-6 bg-dbd-lite-grey">
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
              {locale === 'uk' && program.fundraisings.length > 0 && (
                <div className="grid mt-6 lg:grid-cols-2 lg:mt-10">
                  {program.fundraisings.map((fundraising, idx) => (
                    <PaymentCard
                      key={idx}
                      imgUrl={'/payments/monobank.svg'}
                      title={fundraising.title}
                      value={''}
                      details={[
                        {
                          key: 'Ціль',
                          value: `${fundraising.target.toLocaleString()} ₴`,
                          isCopyable: false,
                        },
                        {
                          key: 'Посилання на банку',
                          value: fundraising.jarUrl,
                          isUrl: true,
                        },
                        {
                          key: 'Номер картки банки',
                          value: fundraising.cardNumber,
                        },
                      ]}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ProgramPage

export const getServerSideProps: GetServerSideProps = async ({
  locale,
  params,
}) => {
  const { slug } = params as { slug: string }

  const category = await getPrograms(locale, slug)

  return {
    props: {
      category,
      ...(await serverSideTranslations(locale as string, ['common'])),
    },
  }
}
