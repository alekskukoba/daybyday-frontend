import { GetStaticProps, NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import Breadcrumbs from '../../components/Breadcrumbs'
import CategoryCard from '../../components/CategoryCard'
import { Category, getCategories } from '../api/categories'

interface Props {
  categories: Category[]
}

const GalleryPage: NextPage<Props> = ({ categories = [] }) => {
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

        <h1 className="mb-6 text-h1">{t('page.projects')}</h1>

        <div className="grid gap-10 lg:grid-cols-2">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              title={category.title}
              brief={category.description.html}
              image={category.preview}
              url={`/programs/${category.slug}`}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default GalleryPage

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const categories = await getCategories(locale)

  return {
    props: {
      categories,
      ...(await serverSideTranslations(locale as string, ['common', 'footer'])),
    },
  }
}
