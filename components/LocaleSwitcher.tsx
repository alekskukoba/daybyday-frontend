import React from 'react'

import { GlobeAltIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

const LocaleSwitcher: React.FC = () => {
  const router = useRouter()
  const {
    pathname,
    asPath,
    query,
    locale = 'uk',
    locales = ['uk', 'en'],
  } = router
  const { t } = useTranslation()
  // const [, setCookie] = useCookies(['NEXT_LOCALE'])

  const availableLocales = locales.filter((l) => l != 'default')

  const setLocale = (locale: string) => {
    // setCookie('NEXT_LOCALE', locale, { path: '/' })
    router.push({ pathname, query }, asPath, {
      locale: locale,
    })
  }

  return (
    <div className="flex items-center gap-2">
      <GlobeAltIcon className="w-6 h-6 text-[#222222]" />
      {availableLocales.map((l, idx) => (
        <button
          key={idx}
          onClick={() => setLocale(l)}
          className={`text-base ${l == locale ? 'underline' : ''}`}
        >
          {t(`locale.${l}`)}
        </button>
      ))}
    </div>
  )
}

export default LocaleSwitcher
