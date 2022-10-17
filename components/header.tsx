import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { useTranslation } from 'next-i18next'
import LocaleSwitcher from './LocaleSwitcher'
import { useRouter } from 'next/router'

interface Route {
  path: string
  text: string
}

const Routes: Route[] = [
  {
    path: '/about',
    text: 'nav.about',
  },
  {
    path: '/missions',
    text: 'nav.missions',
  },
  {
    path: '/reports',
    text: 'nav.reports',
  },
  {
    path: '/team',
    text: 'nav.team',
  },
]

const Header = () => {
  const { t } = useTranslation()
  const router = useRouter()
  const [showNav, setShowNav] = useState<boolean>(false)

  return (
    <header className="fixed z-10 w-full bg-white">
      <div className="container">
        <nav className="flex items-center justify-between h-20 lg:px-0">
          <Link href="/">
            <a className="h-[18px] w-[200px]">
              <Image
                src="/logo.svg"
                alt="Vercel Logo"
                width={200}
                height={18}
                layout="responsive"
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
                    className={`relative ${
                      router.pathname == r.path
                        ? 'after:absolute after:bottom-0 after:left-1/2 after:translate-y-3 after:-translate-x-1/2 after:w-6 after:h-1 after:bg-[#FFD233]'
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
            <button className="hidden h-12 w-48 bg-[#FFD233] rounded font-semibold xl:block">
              {t('button.donate')}
            </button>
          </div>

          <div
            id="nav"
            className={`${
              showNav ? 'flex flex-col' : 'hidden'
            } fixed z-10 bg-white top-0 left-0 w-screen h-full px-4`}
          >
            <div className="flex items-center justify-between h-20">
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
            <ul className="flex flex-col items-center justify-center gap-12 grow">
              {Routes.map((r, idx) => (
                <li key={idx}>
                  <Link href={r.path}>
                    <a
                      className={`relative ${
                        router.pathname == r.path
                          ? 'after:absolute after:bottom-0 after:left-1/2 after:translate-y-3 after:-translate-x-1/2 after:w-6 after:h-1 after:bg-[#FFD233]'
                          : ''
                      }`}
                    >
                      {t(r.text)}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-center pt-6 pb-10 border-t border-[#222222] border-opacity-20">
              <LocaleSwitcher />
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
