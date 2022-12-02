import { Category, getCategories } from '../../graphql/categories'
import { GetStaticProps, NextPage } from 'next'
import Breadcrumbs from '../../components/Breadcrumbs'
import CategoryCard from '../../components/CategoryCard'
import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

interface Props {
  categories: Category[]
}

const GalleryPage: NextPage<Props> = ({ categories = [] }) => {
  const { t } = useTranslation()
  return (
    <>
      <Head>
        <title>{t('seo.gallery.title')}</title>
        <meta name="description" content={t('seo.gallery.description')} />
      </Head>

      <div className="container pb-12 lg:pb-20">
        <div className="mb-4">
          <Breadcrumbs />
        </div>

        <h1 className="mb-6 text-[28px] leading-[32px] font-montserrat font-semibold lg:text-[40px] lg:leading-[56px]">
          {t('page.gallery')}
        </h1>

        <div className="space-y-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              title={category.title}
              brief={category.description.html}
              image={category.preview}
              url={`/gallery/${category.slug}`}
              type="gallery"
              grey
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
      ...(await serverSideTranslations(locale as string, ['common'])),
    },
  }
}
