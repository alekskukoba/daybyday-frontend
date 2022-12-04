import '../styles/globals.css'
import 'nprogress/nprogress.css' //styles of nprogress
import 'yet-another-react-lightbox/styles.css'
import * as ga from '../lib/ga'
import Router, { useRouter } from 'next/router'
import type { AppProps } from 'next/app'
import { CookiesProvider } from 'react-cookie'
import Layout from '../components/Layout'
import NProgress from 'nprogress' //nprogress module
import Script from 'next/script'
import { Toaster } from 'react-hot-toast'
import { appWithTranslation } from 'next-i18next'
import { useEffect } from 'react'

NProgress.configure({ showSpinner: false })

//Binding events.
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      ga.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="lazyOnload" id="ga">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
      </Script>

      <CookiesProvider>
        <Layout>
          <Component {...pageProps} />
          <Toaster position="bottom-center" />
        </Layout>
      </CookiesProvider>
    </>
  )
}

export default appWithTranslation(MyApp)
