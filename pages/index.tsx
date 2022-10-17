import type { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FaChevronRight, FaArrowRight } from 'react-icons/fa'

import PostCard from '../components/post_card'
import Tabs from '../components/tabs'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import Head from 'next/head'

type Report = {
  id: number
  imgUrl: string
  isVideo: boolean
  title: string
  createdAt: string
}

const Reports: Report[] = [
  {
    id: 1,
    imgUrl: '/report-1.png',
    isVideo: true,
    title: 'Lorem ipsum dolor sit amet, consecte adipiscing elit',
    createdAt: '24.04.22',
  },
  {
    id: 2,
    imgUrl: '/report-2.png',
    isVideo: false,
    title: 'Lorem ipsum dolor sit amet, consecte',
    createdAt: '24.04.22',
  },
  {
    id: 3,
    imgUrl: '/report-3.png',
    isVideo: true,
    title:
      'Lorem ipsum dolor sit amet, consecte adipiscing elit ut aliquam, purus sit am molda eoto',
    createdAt: '22.04.22',
  },
]

type TeamMember = {
  id: number
  imgUrl: string
  name: string
  title: string
}

const TeamMembers: TeamMember[] = [
  {
    id: 1,
    imgUrl: '/team/member-1.png',
    name: 'Name Surname',
    title: 'Co-founder',
  },
  {
    id: 2,
    imgUrl: '/team/member-2.png',
    name: 'Name Surname',
    title: 'Co-founder, Head of Animal Aid',
  },
  {
    id: 3,
    imgUrl: '/team/member-3.png',
    name: 'Name Surname',
    title: 'Head of Animal Aid',
  },
  {
    id: 4,
    imgUrl: '/team/member-4.png',
    name: 'Name Surname',
    title: 'Head of Animal Aid',
  },
  {
    id: 5,
    imgUrl: '/team/member-5.png',
    name: 'Name Surname',
    title: 'Co-founder, Head of Animal Aid',
  },
]

interface Partner {
  imgUrl: string
}

const Partners: Partner[] = [
  { imgUrl: '/partners/bs.jpeg' },
  { imgUrl: '/partners/kfc.jpeg' },
  { imgUrl: '/partners/ids.jpeg' },
  { imgUrl: '/partners/patriot.jpeg' },
  { imgUrl: '/partners/fozzy.jpeg' },
]

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <section className="pb-20">
        <div className="container">
          <div className="relative h-[680px]">
            <Image src="/hero.png" alt="" layout="fill" objectFit="cover" />
            <div className="absolute w-full h-full">
              <div className="flex flex-col items-center justify-end h-full gap-8 py-16 xl:justify-center xl:px-24">
                <h1 className="text-3xl font-bold text-center text-white xl:text-6xl">
                  Допомагати легко - просто зробіть крок на зустріч
                </h1>
                <Link href="/">
                  <a className="flex items-center justify-center bg-[#FFD233] w-72 h-14 rounded text-[#222222] xl:hidden">
                    Задонатити
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#EEF0F3] py-20">
        <div className="container space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold lg:text-4xl xl:text-[40px] xl:leading-[56px]">
              Наші проєкти
            </h2>
            <Link href="/">
              <a className="flex items-center gap-3 text-lg">
                <span>Більше проєктів</span>
                <ArrowRightIcon className="w-6 h-6 text-[#222222]" />
              </a>
            </Link>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="relative h-64 md:h-80 ">
              <Image
                src={'/project-1.png'}
                alt="project"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="space-y-8">
              <p className="text-2xl font-semibold">Виробництво буржуйок</p>
              <div className="space-y-3">
                <p>
                  На багаточисельні запити від військових ми запустили
                  виробництво буржуйок. Також будемо робити бойлери на дровах.
                </p>
                <p>
                  На сьогоднішній день ми виробляємо 1 буржуйку в день. При
                  стабільному фінансуванні можемо виробляти 100 шт.в місяць.
                </p>
              </div>
              <button className="h-12 w-full bg-[#FFD233] rounded font-semibold">
                Підтримати проєкт
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container space-y-8">
          <h2 className="text-3xl font-semibold lg:text-4xl xl:text-[40px] xl:leading-[56px]">
            Місії
          </h2>
          <div className="gap-10 lg:flex">
            <div className="relative basis-1/2 h-[360px]">
              <Image src="/humanitarian-aid.png" alt="" layout="fill" />
              <Link href="/">
                <a className="absolute top-0 left-0 flex items-end w-full h-full p-6 text-white">
                  <div className="flex items-center justify-between grow">
                    <span className="text-2xl font-bold">
                      Гуманітарна допомога
                    </span>
                    <FaChevronRight size={16} />
                  </div>
                </a>
              </Link>
            </div>
            <div className="relative basis-1/2 h-[360px]">
              <Image src="/military-aid.png" alt="" layout="fill" />
              <Link href="/missions/military-aid">
                <a className="absolute top-0 left-0 flex items-end w-full h-full p-6 text-white">
                  <div className="flex items-center justify-between grow">
                    <span className="text-2xl font-bold ">Допомога армії</span>
                    <FaChevronRight size={16} />
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#4289F4] py-20">
        <div className="container flex flex-col items-center px-32 gap-y-4">
          <h3 className="text-white text-[40px] leading-[50px] font-bold">
            Від кожного з нас залежить доля України
          </h3>
          <p className="text-lg text-center text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum,
            et ipsum aliquet tempus pellentesque ut iaculis turpis. Sit ut donec
            adipiscing a eros, enim. Convallis quam sit convallis et sem.
          </p>
          <Link href="/">
            <a className="flex items-center justify-center bg-[#FFD233] w-72 h-14 rounded text-[#222222] mt-6">
              Задонатити
            </a>
          </Link>
        </div>
      </section>

      <section className="py-20">
        <div className="container space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold lg:text-4xl xl:text-[40px] xl:leading-[56px]">
              Звіти
            </h2>
            <Link href="/">
              <a className="flex items-center gap-3 text-lg">
                Більше звітів <FaArrowRight size={16} />
              </a>
            </Link>
          </div>
          <div className="flex gap-10 overflow-x-scroll">
            {Reports.map((r) => (
              <div key={r.id} className="basis-1/3">
                <PostCard
                  imgUrl={r.imgUrl}
                  title={r.title}
                  createdAt={r.createdAt}
                  url={'asd'}
                  isVideo={r.isVideo}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className=" bg-[#EEF0F3] py-20">
        <div className="container space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold lg:text-4xl xl:text-[40px] xl:leading-[56px]">
              Команда
            </h2>
            <Link href="/">
              <a className="flex items-center gap-3 text-lg">
                Вся команда <FaArrowRight size={16} />
              </a>
            </Link>
          </div>
          <div className="flex gap-5 overflow-x-scroll">
            {TeamMembers.map((m) => (
              <div key={m.id} className="basis-full">
                <Image
                  src={m.imgUrl}
                  height={240}
                  width={224}
                  layout="responsive"
                  alt={m.name}
                />
                <p className="mt-4 text-lg font-semibold">{m.name}</p>
                <p className="text-sm text-[#929292]">{m.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FFD233] py-20">
        <div className="container flex flex-col items-center px-32 gap-y-4">
          <h3 className="text-[#222222] text-[40px] leading-[50px] font-bold">
            Потрібна допомога?
          </h3>
          <p className="text-lg text-center text-[#222222]">
            Якщо вам потрібна допомога або ви знаєте, кому вона також потрібна -
            зв&apos;яжіться з нами.
          </p>
          <Link href="/">
            <a className="flex items-center justify-center bg-[#4289F4] w-72 h-14 rounded text-white mt-6">
              Повідомити
            </a>
          </Link>
        </div>
      </section>

      <section className="py-20">
        <div className="container space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold lg:text-4xl xl:text-[40px] xl:leading-[56px]">
              Допомога
            </h2>
            <p className="text-xl text-[#686868]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <Tabs />
        </div>
      </section>

      <section className="pb-20 ">
        <div className="container space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold lg:text-4xl xl:text-[40px] xl:leading-[56px]">
              Партнери Фонду
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {Partners.map((partner, idx) => (
              <div key={idx} className="relative h-16">
                <Image
                  src={partner.imgUrl}
                  alt="partner"
                  layout="fill"
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
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common', 'footer'])),
    },
  }
}

export default Home
export { Reports }
