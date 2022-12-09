import Footer from './Footer'
import Head from 'next/head'
import Header from './Header'
import React from 'react'

type Props = {
  children?: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen text-base leading-6 lg:text-lg lg:leading-8 font-atkinson">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="pt-[96px] grow ">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
