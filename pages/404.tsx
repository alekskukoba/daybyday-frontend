import { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Custom404: NextPage = () => {
  return (
    <div className="flex flex-col justify-end h-full">
      <div className="container">
        <div className="relative max-w-[478px] mx-auto translate-y-2">
          <Image
            loader={() => `/404.svg`}
            src={'/404.svg'}
            alt="404"
            width={478}
            height={168}
            layout="responsive"
            unoptimized
            priority
          />
        </div>
      </div>
    </div>
  )
}

export default Custom404

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common'])),
    },
  }
}
