import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CookiesProvider } from 'react-cookie'
import { appWithTranslation } from 'next-i18next'
import Layout from '../components/Layout'
import 'yet-another-react-lightbox/styles.css'
import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CookiesProvider>
      <Layout>
        <Component {...pageProps} />
        <Toaster position="bottom-center" />
      </Layout>
    </CookiesProvider>
  )
}

export default appWithTranslation(MyApp)
