import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FaChevronRight, FaArrowRight, FaPlay } from 'react-icons/fa'

import Layout from '../components/layout'
import Tabs from '../components/tabs'

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
    <Layout title="DayByDay">
      <section className="container mb-20">
        <div className="relative h-[680px]">
          <Image src="/hero.png" alt="" layout="fill" />
          <div className="absolute flex flex-col items-center justify-center w-full h-full gap-20 p-24">
            <h1 className="text-6xl font-bold text-center text-white">
              Допомагати легко - просто зробіть крок на зустріч
            </h1>
            <Link href="/">
              <a className="flex items-center justify-center bg-[#FFD233] w-72 h-14 rounded text-[#222222]">
                Задонатити
              </a>
            </Link>
          </div>
        </div>
      </section>

      <section className="container mb-20 space-y-8">
        <h2 className="text-[40px] leading-[56px] font-semibold">Про проєкт</h2>
        <div className="flex gap-10">
          <Image src="/about.png" alt="" width={580} height={440} />

          <div className="space-y-4">
            <p>
              Нас, а саме людей доброї волі, котрі називають себе волонтерами,
              об’єднала ця жахлива війна. Ми вірішили день за днем робити добрі
              та необхідні справи за для нашої перемоги. В усіх цих людей різні
              історії, але у всіх них великеі мужнє серце. Для нас - Укарїна, це
              живий організм і мия є його частиною.
            </p>
            <p>
              Нашою метою є якнайшвидше дістатися з гуманітарною допомогою туди,
              де ми найбільше потрібні українцям. Якщо у вас є бажання
              приєднатись до нашої командиі зробити свій внесок у перемогу
              України - пишіть нам: Help@daybyday.com.ua
            </p>
          </div>
        </div>
      </section>

      <section className="container mb-20 space-y-8">
        <h2 className="text-[40px] leading-[56px] font-semibold">Місії</h2>
        <div className="flex gap-10">
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
            <Link href="/">
              <a className="absolute top-0 left-0 flex items-end w-full h-full p-6 text-white">
                <div className="flex items-center justify-between grow">
                  <span className="text-2xl font-bold ">Допомога армії</span>
                  <FaChevronRight size={16} />
                </div>
              </a>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#4289F4] mb-20">
        <div className="container flex flex-col items-center px-32 py-20 gap-y-4">
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

      <section className="container mb-20 space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-[40px] leading-[56px] font-semibold">Звіти</h2>
          <Link href="/">
            <a className="flex items-center gap-3 text-lg">
              Більше звітів <FaArrowRight size={16} />
            </a>
          </Link>
        </div>
        <div className="flex gap-10">
          {Reports.map((r) => (
            <div key={r.id} className="basis-1/3">
              <div className="relative mb-4">
                <Image src={r.imgUrl} height={240} width={384} alt={r.title} />
                {r.isVideo && (
                  <div className="w-[88px] h-[88px] rounded-full flex items-center justify-center bg-black bg-opacity-50 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <FaPlay size={32} />
                  </div>
                )}
              </div>
              <p className="mb-2 text-ellipsis">{r.title}</p>
              <div className="flex items-center justify-between">
                <p className="text-[#929292]">{r.createdAt}</p>
                <Link href="/">
                  <a className="text-[#4289F4]">Переглянути</a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container mb-20 space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-[40px] leading-[56px] font-semibold">Команда</h2>
          <Link href="/">
            <a className="flex items-center gap-3 text-lg">
              Вся команда <FaArrowRight size={16} />
            </a>
          </Link>
        </div>
        <div className="flex gap-5">
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
      </section>

      <section className="bg-[#FFD233] mb-20">
        <div className="container flex flex-col items-center px-32 py-20 gap-y-4">
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

      <section className="container mb-20 space-y-8">
        <div className="space-y-2">
          <h2 className="text-[40px] leading-[56px] font-semibold">Допомога</h2>
          <p className="text-xl text-[#686868]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <Tabs />
      </section>

      <section className="container mb-20 space-y-8">
        <div className="space-y-2">
          <h2 className="text-[40px] leading-[56px] font-semibold">
            Партнери Фонду
          </h2>
        </div>
        <div className="grid grid-cols-5">
          {Partners.map((p, idx) => (
            <div key={idx} className="relative h-14">
              <Image src={p.imgUrl} layout="fill" alt={p.imgUrl} />
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default Home
export { Reports }
