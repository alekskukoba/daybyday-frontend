import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CookiesProvider } from 'react-cookie'
import { appWithTranslation } from 'next-i18next'
import Layout from '../components/Layout'
import 'yet-another-react-lightbox/styles.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CookiesProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CookiesProvider>
  )
}

export default appWithTranslation(MyApp)
