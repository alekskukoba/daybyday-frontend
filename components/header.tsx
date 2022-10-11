import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import LocaleDropdown from './localeDropdown'
import { useTranslation } from 'next-i18next'

const Header = () => {
  const { t } = useTranslation()
  return (
    <header className="fixed z-10 w-full bg-white">
      <nav className="container h-[88px] flex items-center justify-between">
        <Link href="/">
          <a>
            <Image src="/logo.svg" alt="Vercel Logo" width={200} height={32} />
          </a>
        </Link>

        <ul className="flex items-center gap-8">
          <li>
            <Link href="/">
              <a>{t('nav.about')}</a>
            </Link>
          </li>
          <li>
            <Link href="/missions">
              <a>{t('nav.missions')}</a>
            </Link>
          </li>
          <li>
            <Link href="/reports">
              <a>{t('nav.reports')}</a>
            </Link>
          </li>
          <li>
            <Link href="/team">
              <a>{t('nav.team')}</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>{t('nav.donations')}</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>{t('nav.partners')}</a>
            </Link>
          </li>
        </ul>

        <LocaleDropdown />
      </nav>
    </header>
  )
}

export default Header
