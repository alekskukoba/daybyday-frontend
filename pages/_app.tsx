import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CookiesProvider } from 'react-cookie'
import { appWithTranslation } from 'next-i18next'
import Layout from '../components/Layout'
import 'yet-another-react-lightbox/styles.css'
import { Toaster } from 'react-hot-toast'
import Router from 'next/router'
import NProgress from 'nprogress' //nprogress module
import 'nprogress/nprogress.css' //styles of nprogress

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
