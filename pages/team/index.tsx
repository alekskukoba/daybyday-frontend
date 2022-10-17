import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Image from 'next/image'
import React from 'react'
import Breadcrumbs from '../../components/breadcrumbs'

interface Member {
  id: number
  name: string
  title: string
  description: string
}

const Members: Member[] = [
  {
    id: 1,
    name: 'Name Surname',
    title: 'Co-founder',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum, et ipsum aliquet tempus pellentesque ut iaculis turpis. Sit ut donec adipiscing a eros, enim. Convallis quam sit convallis et sem. Amet tortor vulputateerat neque, ut quis. Vitae donec viverra vitae dui aliquam nibh. Potenti elementum, proin fermentum ornare scelerisque sit. Aliquet justo adipiscing pulvinar lorem',
  },
  {
    id: 2,
    name: 'Name Surname',
    title: 'Co-founder',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum, et ipsum aliquet tempus pellentesque ut iaculis turpis. Sit ut donec adipiscing a eros, enim. Convallis quam sit convallis et sem. Amet tortor vulputateerat neque, ut quis. Vitae donec viverra vitae dui aliquam nibh. Potenti elementum, proin fermentum ornare scelerisque sit. Aliquet justo adipiscing pulvinar lorem',
  },
  {
    id: 3,
    name: 'Name Surname',
    title: 'Co-founder',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum, et ipsum aliquet tempus pellentesque ut iaculis turpis. Sit ut donec adipiscing a eros, enim. Convallis quam sit convallis et sem. Amet tortor vulputateerat neque, ut quis. Vitae donec viverra vitae dui aliquam nibh. Potenti elementum, proin fermentum ornare scelerisque sit. Aliquet justo adipiscing pulvinar lorem',
  },
  {
    id: 4,
    name: 'Name Surname',
    title: 'Co-founder',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum, et ipsum aliquet tempus pellentesque ut iaculis turpis. Sit ut donec adipiscing a eros, enim. Convallis quam sit convallis et sem. Amet tortor vulputateerat neque, ut quis. Vitae donec viverra vitae dui aliquam nibh. Potenti elementum, proin fermentum ornare scelerisque sit. Aliquet justo adipiscing pulvinar lorem',
  },
  {
    id: 5,
    name: 'Name Surname',
    title: 'Co-founder',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum, et ipsum aliquet tempus pellentesque ut iaculis turpis. Sit ut donec adipiscing a eros, enim. Convallis quam sit convallis et sem. Amet tortor vulputateerat neque, ut quis. Vitae donec viverra vitae dui aliquam nibh. Potenti elementum, proin fermentum ornare scelerisque sit. Aliquet justo adipiscing pulvinar lorem',
  },
  {
    id: 6,
    name: 'Name Surname',
    title: 'Co-founder',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum, et ipsum aliquet tempus pellentesque ut iaculis turpis. Sit ut donec adipiscing a eros, enim. Convallis quam sit convallis et sem. Amet tortor vulputateerat neque, ut quis. Vitae donec viverra vitae dui aliquam nibh. Potenti elementum, proin fermentum ornare scelerisque sit. Aliquet justo adipiscing pulvinar lorem',
  },
  {
    id: 7,
    name: 'Name Surname',
    title: 'Co-founder',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum, et ipsum aliquet tempus pellentesque ut iaculis turpis. Sit ut donec adipiscing a eros, enim. Convallis quam sit convallis et sem. Amet tortor vulputateerat neque, ut quis. Vitae donec viverra vitae dui aliquam nibh. Potenti elementum, proin fermentum ornare scelerisque sit. Aliquet justo adipiscing pulvinar lorem',
  },
  {
    id: 8,
    name: 'Name Surname',
    title: 'Co-founder',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum, et ipsum aliquet tempus pellentesque ut iaculis turpis. Sit ut donec adipiscing a eros, enim. Convallis quam sit convallis et sem. Amet tortor vulputateerat neque, ut quis. Vitae donec viverra vitae dui aliquam nibh. Potenti elementum, proin fermentum ornare scelerisque sit. Aliquet justo adipiscing pulvinar lorem',
  },
  {
    id: 9,
    name: 'Name Surname',
    title: 'Co-founder',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum, et ipsum aliquet tempus pellentesque ut iaculis turpis. Sit ut donec adipiscing a eros, enim. Convallis quam sit convallis et sem. Amet tortor vulputateerat neque, ut quis. Vitae donec viverra vitae dui aliquam nibh. Potenti elementum, proin fermentum ornare scelerisque sit. Aliquet justo adipiscing pulvinar lorem',
  },
  {
    id: 10,
    name: 'Name Surname',
    title: 'Co-founder',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum, et ipsum aliquet tempus pellentesque ut iaculis turpis. Sit ut donec adipiscing a eros, enim. Convallis quam sit convallis et sem. Amet tortor vulputateerat neque, ut quis. Vitae donec viverra vitae dui aliquam nibh. Potenti elementum, proin fermentum ornare scelerisque sit. Aliquet justo adipiscing pulvinar lorem',
  },
  {
    id: 11,
    name: 'Name Surname',
    title: 'Co-founder',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum, et ipsum aliquet tempus pellentesque ut iaculis turpis. Sit ut donec adipiscing a eros, enim. Convallis quam sit convallis et sem. Amet tortor vulputateerat neque, ut quis. Vitae donec viverra vitae dui aliquam nibh. Potenti elementum, proin fermentum ornare scelerisque sit. Aliquet justo adipiscing pulvinar lorem',
  },
  {
    id: 12,
    name: 'Name Surname',
    title: 'Co-founder',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum, et ipsum aliquet tempus pellentesque ut iaculis turpis. Sit ut donec adipiscing a eros, enim. Convallis quam sit convallis et sem. Amet tortor vulputateerat neque, ut quis. Vitae donec viverra vitae dui aliquam nibh. Potenti elementum, proin fermentum ornare scelerisque sit. Aliquet justo adipiscing pulvinar lorem',
  },
]

const TeamPage: React.FC = () => {
  return (
    <div className="container">
      <section className="mb-6">
        <Breadcrumbs />
      </section>

      <section className="mb-10">
        <h1 className="font-semibold text-[#222222] text-[40px] leading-[56px]">
          Команда
        </h1>
      </section>

      <section className="w-full h-[400px] mb-8">
        <Image
          src={'/team.png'}
          alt={'Команда'}
          width={1200}
          height={400}
          layout="responsive"
        />
      </section>

      <section className="grid grid-cols-2 gap-10 mb-20">
        <p className="text-[18px] leading-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum, et
          ipsum aliquet tempus pellentesque ut iaculis turpis. Sit ut donec
          adipiscing a eros, enim. Convallis quam sit convallis et sem. Amet
          tortor vulputateerat neque, ut quis. Vitae donec viverra vitae dui
          aliquam nibh. Potenti elementum, proin fermentum ornare scelerisque
          sit. Aliquet justo adipiscing pulvinar lorem integer tortor cras eget
          integer.
        </p>
        <p className="text-[18px] leading-8">
          Sed suspendisse tortor egestas sagittis est eget pellentesque massa
          et. Neque ultrices commodo dolor odio at. Eu ut pellentesque ut
          feugiat interdum. In sed tincidunt ornare ipsum hendrerit turpis.
          Cursus tortor enim pellentesque porttitor. Proin condimentum dictumst
          ullamcorper donec a vitae blandit non non.
        </p>
      </section>

      <section className="grid grid-cols-3 gap-10 mb-20">
        {Members.map((m, idx) => (
          <div key={idx} className="relative overflow-hidden group">
            <Image
              src={`/team/member-${m.id}.png`}
              alt={m.name}
              width={373}
              height={368}
              layout="responsive"
              quality={100}
            />
            <div className="absolute top-0 left-0 w-full h-full bg-[#4289F4] text-white translate-y-full group-hover:translate-y-0 transition-transform flex flex-col p-6">
              <p className="grow">{m.description}</p>
              <p className="text-2xl font-semibold">{m.name}</p>
              <p className="leading-6 text-opacity-50">{m.title}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common', 'footer'])),
    },
  }
}

export default TeamPage
