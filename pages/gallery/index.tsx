import { GetStaticProps, NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import Breadcrumbs from '../../components/Breadcrumbs'
import ProjectCard from '../../components/ProjectCard'
import { getProjects, Project } from '../api/projects'

interface Props {
  projects: Project[]
}

const GalleryPage: NextPage<Props> = ({ projects = [] }) => {
  const { t } = useTranslation()
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <div className="container pb-20">
        <div className="mb-4">
          <Breadcrumbs />
        </div>

        <h1 className="mb-6 text-h1">{t('page.gallery')}</h1>

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
    </>
  )
}

export default GalleryPage

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const projects = await getProjects()

  return {
    props: {
      projects,
      ...(await serverSideTranslations(locale as string, ['common', 'footer'])),
    },
  }
}
