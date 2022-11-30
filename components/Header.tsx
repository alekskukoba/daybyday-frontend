import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'next-i18next'
import LocaleSwitcher from './LocaleSwitcher'
import { useRouter } from 'next/router'

interface Route {
  path: string
  text: string
}

const Routes: Route[] = [
  {
    path: '/',
    text: 'nav.home',
  },
  {
    path: '/about',
    text: 'nav.about',
  },
  {
    path: '/gallery',
    text: 'nav.gallery',
  },
  {
    path: '/team',
    text: 'nav.team',
  },
]

const Header = () => {
  const { t } = useTranslation()
  const router = useRouter()
  const { locale } = router
  const [showNav, setShowNav] = useState<boolean>(false)

  useEffect(() => {
    if (showNav) {
      setShowNav(false)
    }
  }, [router.asPath])

  return (
    <header className="fixed z-10 w-full bg-white">
      <div className="container">
        <nav className="flex items-center justify-between h-[96px] lg:px-0">
          <Link href="/">
            <a className="h-[18px] w-[200px]">
              <Image
                loader={() => `/logo-${locale}.svg`}
                src={`/logo-${locale}.svg`}
                alt="Vercel Logo"
                width={200}
                height={37}
                layout="responsive"
                unoptimized
                priority
              />
            </a>
          </Link>

          <div className="flex items-center gap-4 lg:hidden">
            <button
              onClick={() => {
                setShowNav(true)
              }}
            >
              <Bars3Icon className="w-8 h-8 text-[#222222]" />
            </button>
          </div>

          <ul className="items-center hidden gap-8 lg:flex">
            {Routes.map((r, idx) => (
              <li key={idx}>
                <Link href={r.path}>
                  <a
                    className={`relative font-montserrat text-base  ${
                      router.pathname == r.path
                        ? 'after:absolute after:bottom-0 after:left-0 after:translate-y-3 after:w-6 after:h-1 after:bg-dbd-yellow'
                        : ''
                    }`}
                  >
                    {t(r.text)}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <div className="items-center hidden gap-16 lg:flex">
            <LocaleSwitcher />
            <div className="hidden xl:block">
              <Link href={'/requisites'}>
                <a className="bg-dbd-yellow h-[48px] w-[200px] flex items-center justify-center rounded">
                  <span className="text-lg font-semibold leading-6 font-montserrat">
                    {t('button.support')}
                  </span>
                </a>
              </Link>
            </div>
          </div>

          <div id="nav" className={`${showNav ? 'block' : 'hidden'} `}>
            <div className="fixed top-0 left-0 z-10 flex flex-col w-screen h-full px-4 bg-white">
              <div className="container flex items-center justify-between h-20">
                <span className="text-2xl font-bold">Menu</span>
                <button
                  className="flex items-center gap-2"
                  onClick={() => {
                    setShowNav(false)
                  }}
                >
                  <XMarkIcon className="w-8 h-8 text-[#222222]" />
                </button>
              </div>
              <ul className="container flex flex-col items-center justify-center gap-12 grow">
                {Routes.map((r, idx) => (
                  <li key={idx}>
                    <Link href={r.path}>
                      <a
                        className={`relative ${
                          router.pathname == r.path
                            ? 'after:absolute after:bottom-0 after:left-1/2 after:translate-y-3 after:-translate-x-1/2 after:w-6 after:h-1 after:bg-dbd-yellow'
                            : ''
                        }`}
                      >
                        {t(r.text)}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="container">
                <div className="flex items-center justify-center pt-6 pb-10 border-t border-[#222222] border-opacity-20">
                  <LocaleSwitcher />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
