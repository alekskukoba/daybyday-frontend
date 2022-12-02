import '../styles/globals.css'
import 'nprogress/nprogress.css' //styles of nprogress
import 'yet-another-react-lightbox/styles.css'
import type { AppProps } from 'next/app'
import { CookiesProvider } from 'react-cookie'
import Layout from '../components/Layout'
import NProgress from 'nprogress' //nprogress module
import Router from 'next/router'
import { Toaster } from 'react-hot-toast'
import { appWithTranslation } from 'next-i18next'

NProgress.configure({ showSpinner: false })

//Binding events.
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

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
