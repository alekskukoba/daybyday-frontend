import { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import Breadcrumbs from '../../../components/breadcrumbs'
import PostCard from '../../../components/post_card'

type Event = {
  id: number
  imgUrl: string
  isVideo: boolean
  title: string
  createdAt: string
}

const Events: Event[] = [
  {
    id: 1,
    imgUrl: '/missions/mission-1.png',
    isVideo: true,
    title: 'Допомога дитячій лікарні у Вінниці',
    createdAt: '24.04.22',
  },
  {
    id: 2,
    imgUrl: '/missions/mission-2.png',
    isVideo: false,
    title: 'Допомога лікарні у Чернігові',
    createdAt: '24.04.22',
  },
  {
    id: 3,
    imgUrl: '/missions/mission-3.png',
    isVideo: true,
    title: 'Закупівля ліків та обладнання для лікарень Житомирської області',
    createdAt: '22.04.22',
  },
  {
    id: 4,
    imgUrl: '/missions/mission-4.png',
    isVideo: true,
    title: 'Lorem ipsum dolor sit amet, consecte adipiscing elit',
    createdAt: '24.04.22',
  },
  {
    id: 5,
    imgUrl: '/missions/mission-5.png',
    isVideo: false,
    title: 'Допомога дитячій лікарні у Полтаві',
    createdAt: '24.04.22',
  },
  {
    id: 6,
    imgUrl: '/missions/mission-6.png',
    isVideo: true,
    title: 'Допомога лікарні у Києві',
    createdAt: '22.04.22',
  },
  {
    id: 7,
    imgUrl: '/missions/mission-7.png',
    isVideo: true,
    title: 'Допомога лікарні у Харкові',
    createdAt: '24.04.22',
  },
  {
    id: 8,
    imgUrl: '/missions/mission-8.png',
    isVideo: false,
    title: 'Lorem ipsum dolor sit amet, consecte',
    createdAt: '24.04.22',
  },
  {
    id: 9,
    imgUrl: '/missions/mission-9.png',
    isVideo: true,
    title:
      'Lorem ipsum dolor sit amet, consecte adipiscing elit ut aliquam, purus sit am molda eoto',
    createdAt: '22.04.22',
  },
  {
    id: 10,
    imgUrl: '/missions/mission-10.png',
    isVideo: true,
    title: 'Авто для ЗСУ (Nissan X-Trail)',
    createdAt: '08.04.22',
  },
]

const MissionsPage: NextPage = () => {
  const router = useRouter()
  const { mission } = router.query
  return (
    <>
      <Head>
        <title>{`${mission}`}</title>
      </Head>
      <section className="container mt-2 mb-6">
        <Breadcrumbs />
      </section>
      <section className="container mb-16 space-y-8">
        <div className="relative">
          <Image src="/missions.png" height={280} width={1200} alt="" />
          <div className="absolute top-0 left-0 flex items-center justify-start w-full h-full px-12">
            <h1 className="text-white font-semibold text-[40px] leading-[56px]">
              Допомога Армії
            </h1>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu in
          sollicitudin eleifend id cursus mi nunc. Mauris sit at sed vitae, eget
          sit. Consequat et suspendisse nullam vestibulum. Mattis integer nulla
          elit auctor eget non lacus, aliquam maecenas. Auctor gravida tincidunt
          amet, ultrices faucibus. Odio at faucibus viverra tincidunt aliquam.
          Penatibus eu eu, phasellus nunc nisi, faucibus. Elit, scelerisque erat
          et tortor libero. Vestibulum duis risus diam faucibus. Ultrices at
          elementum platea ut neque nullam arcu augue. Nullam sed tellus ac
          lobortis cursus neque, nisl. Diam scelerisque pharetra in nisl. At
          massa aliquam sed scelerisque. Hendrerit facilisis tortor donec leo
          dictum in adipiscing quis. Gravida praesent auctor id potenti. Donec
          sagittis non risus enim accumsan consectetur mi. Sagittis dui eget
          neque nisl fringilla in. Cursus ac, imperdiet vitae pretium. Odio at
          sollicitudin quisque dolor tellus.
        </p>
        <p>
          Sollicitudin vel sed nunc ornare nulla nisi sed mattis a. Mi, duis
          mattis at tristique. Mauris congue netus ultrices tortor morbi nunc.
          Purusut ut ut id rutrum. Condimentum in mi, nisl, consectetur augue
          sit et. Pharetra maecenas egestas etiam eu facilisis pellentesque
          pellentesque. Faucibus quis scelerisque et diam. Sem commodo aenean
          malesuada est condimentum. Etiam faucibus vitae quis arcu scelerisque
          integer. Lectus proin nullam ut nibh porta pretium duis imperdiet.
          Morbi bibendum ut tellus dolor sociis risus. Odio cursus curabitur
          fames nulla. Auctor nunc maecenas bibendum facilisis morbi fusce
          lacinia. Volutpat sem augue odio sociis egestas lobortis in nisl.
          Suspendisse condimentum sollicitudin senectus pharetra tellus. Morbi
          neque, sed mi libero mi augue.
        </p>
      </section>

      <section className="container mb-20 space-y-8">
        <div className="space-y-2">
          <h2 className="text-[40px] leading-[56px] font-semibold">
            В процесі
          </h2>
          <p className="text-xl text-[#686868]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-x-6 gap-y-8">
          {Events.map((m) => (
            <div key={m.id} className="basis-1/3">
              <PostCard
                imgUrl={m.imgUrl}
                title={m.title}
                createdAt={m.createdAt}
                url={`/missions/${mission}/${m.id}`}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common', 'footer'])),
    },
  }
}

export default MissionsPage
