import type { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'

import { getPartners, Partner } from './api/partners'
import Img from '../components/image'
import ProjectCard from '../components/ProjectCard'
import { getProjects, Project } from './api/projects'
import { Button } from '../components/Button'
import { useTranslation } from 'next-i18next'
import { getMembers, Member } from './api/members'

const Home: NextPage<{
  partners: Partner[]
  projects: Project[]
  members: Member[]
}> = ({ partners, projects, members }) => {
  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <section className="pb-20">
        <div className="container">
          <div className="relative h-[600px]">
            <Image src="/hero.png" alt="" layout="fill" objectFit="cover" />
            <div className="absolute w-full h-full">
              <div className="flex flex-col items-center justify-end h-full gap-8 py-16 xl:justify-center xl:px-24">
                <h1 className="text-3xl font-bold text-center text-white xl:text-6xl">
                  Допомагати легко - просто зробіть крок на зустріч
                </h1>
                <div className="xl:hidden">
                  <Button href="" text={t('button.support')} size="lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#EEF0F3] py-20">
        <div className="container space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold lg:text-4xl xl:text-[40px] xl:leading-[56px]">
              {t('page.projects')}
            </h2>
          </div>

          <div className="grid gap-10 lg:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.name}
                brief={project.description.html}
                image={project.image}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#4289F4] py-20">
        <div className="container flex flex-col items-center px-32 gap-y-4">
          <h3 className="text-white text-[40px] leading-[50px] font-bold">
            Допомогти фонду
          </h3>
          <p className="text-lg text-center text-white">
            Усі наші проєкти дуже важливі. Ви можете просто підтримати нас,
            зробивши донат на загальні рахунки
          </p>
          <Button href="" text={t('button.support')} size="lg" />
        </div>
      </section>

      <section className="py-20 ">
        <div className="container space-y-8">
          <div className="flex justify-between items-d">
            <h2 className="text-3xl font-semibold lg:text-4xl xl:text-[40px] xl:leading-[56px]">
              {t('page.team')}
            </h2>
            <Link href="/team">
              <a className="flex items-center gap-3 text-lg">
                Вся команда <FaArrowRight size={16} />
              </a>
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2 sm:gap-6 lg:grid-cols-3 2xl:grid-cols-4 xl:gap-10">
            {members.map((member) => (
              <div key={member.id} className=" basis-[270px] shrink-0">
                <Image
                  src={member.photo.url}
                  height={member.photo.height}
                  width={member.photo.width}
                  layout="responsive"
                  alt={member.name}
                />
                <p className="mt-4 mb-2 text-xl font-semibold leading-7 text-dbd-dark-grey font-montserrat">
                  {member.name}
                </p>
                <p
                  className="text-lg leading-6 text-dbd-grey line-clamp-1"
                  title={member.title}
                >
                  {member.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold lg:text-4xl xl:text-[40px] xl:leading-[56px]">
              {t('page.partners')}
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5">
            {partners.map((partner, idx) => (
              <div key={idx} className="relative my-3 h-14">
                <Img image={partner.logo} fill />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const projects = await getProjects(locale)
  const members = await getMembers(locale)
  const partners = await getPartners(locale)

  return {
    props: {
      projects,
      members,
      partners,
      ...(await serverSideTranslations(locale as string, ['common', 'footer'])),
    },
  }
}

export default Home
