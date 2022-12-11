import { GetServerSideProps } from 'next'
import client from '../graphql/apollo'
import { gql } from '@apollo/client'

const Sitemap = () => {
  return null
}

const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://daybyday.com.ua'

const getStaticUrls = (locales: string[]) => {
  const paths = ['', '/about', '/requisites', '/team']

  return paths.flatMap((path) => {
    return locales.map((locale) => {
      return `${BASE_URL}/${locale}${path}`
    })
  })
}

const getDynamicUrls = async (locales: string[]) => {
  interface Data {
    categories: {
      slug: string
      reports: {
        slug: string
      }[]
    }[]
  }
  const query = gql`
    query Slugs {
      categories(locales: [en]) {
        slug
        reports(first: 100) {
          slug
        }
      }
    }
  `

  const {
    data: { categories },
  } = await client.query<Data>({
    query,
  })

  const programPaths = locales.map((l) => `${BASE_URL}/${l}/programs`)
  const galleryPaths = locales.map((l) => `${BASE_URL}/${l}/gallery`)

  categories.forEach((c) => {
    locales.forEach((l) => {
      programPaths.push(`${BASE_URL}/${l}/programs/${c.slug}`)
      galleryPaths.push(`${BASE_URL}/${l}/gallery/${c.slug}`)
    })

    c.reports.forEach((r) => {
      locales.forEach((l) => {
        galleryPaths.push(`${BASE_URL}/${l}/gallery/${c.slug}/${r.slug}`)
      })
    })
  })

  return [...programPaths, ...galleryPaths]
}

export const getServerSideProps: GetServerSideProps = async ({
  res,
  locales,
}) => {
  const l = locales?.filter((loc) => loc !== 'default') || ['uk', 'en']
  const staticPaths = getStaticUrls(l)
  const dynamicPaths = await getDynamicUrls(l)

  const paths = [...staticPaths, ...dynamicPaths]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
   ${paths.map((path) => {
     return `
           <url>
             <loc>${path}</loc>
             <lastmod>${new Date().toISOString()}</lastmod>
             <changefreq>monthly</changefreq>
             <priority>1.0</priority>
           </url>
         `
   })}
   </urlset>
   `

  res.setHeader('Content-Type', 'Text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default Sitemap
