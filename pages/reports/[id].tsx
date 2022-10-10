import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import Breadcrumbs from '../../components/breadcrumbs'
import Layout from '../../components/layout'

const ReportPage: React.FC = () => {
  const router = useRouter()
  const { id } = router.query
  return (
    <Layout title={`${id}`}>
      <div className="container">
        <section className="mb-6">
          <Breadcrumbs />
        </section>

        <section className="mb-10">
          <h1 className="font-semibold text-[#222222] text-[40px] leading-[56px]">
            Допомога притулку для тварин у Чернігові
          </h1>
          <p className="text-[#929292]">Опубліковано: 24.04.22</p>
        </section>

        <section className="flex justify-center mb-16">
          <Image
            src={'/report-media.png'}
            alt="Допомога притулку для тварин у Чернігові"
            width={994}
            height={551}
          />
        </section>

        <section className="mb-20 space-y-6">
          <h3 className="font-bold text-[28px] leading-[32px]">Виконано:</h3>
          <ul className="space-y-6">
            <li>✅ Lorem ipsum dolor sit amet,</li>
            <li>✅ Lorem ipsum dolor sit amet,</li>
            <li>✅ Lorem ipsum dolor sit amet,</li>
            <li>✅ Lorem ipsum dolor sit amet,</li>
          </ul>
        </section>

        <section className="mb-20">
          <h1 className="font-semibold text-[#222222] text-[40px] leading-[56px] mb-2">
            Звіт
          </h1>
          <p className="text-[#929292] mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="grid grid-cols-3 grid-rows-3 gap-x-6 gap-y-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i}>
                <Image
                  src={`/reports/1/${i}.png`}
                  alt={'image'}
                  width={384}
                  height={240}
                  layout="responsive"
                />
              </div>
            ))}
            <Link href={'/'}>
              <a className="bg-[#F5F5F5] flex items-center justify-center gap-2">
                <span>Переглянути всі 167 фото</span>
                <FaArrowRight />
              </a>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default ReportPage
