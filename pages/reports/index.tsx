import { NextPage } from 'next'
import Image from 'next/image'
import { useState } from 'react'
import Checkbox from '../../components/checkbox'
import Layout from '../../components/layout'
import PostCard from '../../components/post_card'

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

const ReportsPage: NextPage = () => {
  const [all, setAll] = useState<boolean>(false)
  const [hum, setHum] = useState<boolean>(false)
  const [mil, setMil] = useState<boolean>(false)

  return (
    <Layout title="Reports">
      <section className="container relative mb-8">
        <Image src={'/reports.png'} width={1200} height={200} />
        <div className="absolute top-0 left-0 flex items-center justify-start w-full h-full px-12">
          <h1 className="font-semibold text-white text-[40px] leading-[56px]">
            Звіти
          </h1>
        </div>
      </section>

      <section className="container flex gap-10 mb-20">
        <div className="basis-[270px] space-y-12 shrink-0">
          <div className="space-y-6">
            <p className="text-[#222222] text-opacity-30 font-semibold">
              Фільтрувати по місіям
            </p>

            <ul className="space-y-6">
              <li className="space-x-3">
                <Checkbox
                  label="Всі"
                  checked={all}
                  onChange={(checked) => {
                    setAll(checked)
                    setHum(checked)
                    setMil(checked)
                  }}
                />
              </li>
              <li className="space-x-3">
                <Checkbox
                  label="Гуманітарна допомога (6)"
                  checked={hum}
                  onChange={(checked) => {
                    setHum(checked)
                    if (!checked) {
                      setAll(false)
                    }
                  }}
                />
              </li>
              <li className="space-x-3">
                <Checkbox
                  label="Допомога армії (18)"
                  checked={mil}
                  onChange={(checked) => {
                    setMil(checked)
                    if (!checked) {
                      setAll(false)
                    }
                  }}
                />
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <p className="text-[#222222] text-opacity-30 font-semibold">
              Сортувати за
            </p>

            <ul className="space-y-6">
              <li className="space-x-3">
                <input type="radio" name="sort" id="sort-asc" />
                <label htmlFor="sort-asc">Всі</label>
              </li>
              <li className="space-x-3">
                <input type="radio" name="sort" id="sort-desc" />
                <label htmlFor="sort-desc">Гуманітарна допомога (6)</label>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-x-6 gap-y-8 ">
          {Reports.map((r, idx) => (
            <div key={idx}>
              <PostCard
                imgUrl={r.imgUrl}
                title={r.title}
                createdAt={r.createdAt}
                url={`/reports/${r.id}`}
              />
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default ReportsPage
