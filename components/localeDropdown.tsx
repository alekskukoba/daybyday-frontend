import React, { Fragment, useEffect, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import Image from 'next/image'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { useCookies } from 'react-cookie'
import { useRouter } from 'next/router'

interface Locale {
  locale: string
  name: string
  imgUrl: string
}

const Locales: Locale[] = [
  { locale: 'uk', name: 'UK', imgUrl: '/locale/ua.png' },
  { locale: 'en', name: 'EN', imgUrl: '/locale/en.png' },
  { locale: 'pl', name: 'PL', imgUrl: '/locale/pl.png' },
]

const LocaleDropdown: React.FC = () => {
  const router = useRouter()
  const { pathname, asPath, query, locale = 'en' } = router
  const [cookies, setCookie] = useCookies(['NEXT_LOCALE'])
  const [selectedLang, setSelectedLang] = useState<string>(locale)

  const loc = Locales.find((l) => l.locale == selectedLang) || Locales[0]

  console.log(cookies.NEXT_LOCALE)

  useEffect(() => {
    setCookie('NEXT_LOCALE', selectedLang)

    router.push({ pathname, query }, asPath, {
      locale: selectedLang,
    })
  }, [selectedLang])

  return (
    <Popover as={'div'} className={'relative'}>
      <Popover.Button className={'flex items-center gap-3'}>
        <Image src={loc.imgUrl} width={32} height={32} alt={'ua'} />
        <div className="flex items-center gap-1">
          <span className="w-6">{loc.name}</span>
          <ChevronDownIcon className={'h-6 w-6 text-[#222222]'} />
        </div>
      </Popover.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Popover.Panel
          className={
            'absolute -left-3 -right-3 top-full translate-y-2 bg-white py-3  rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'
          }
        >
          {({ close }) => (
            <>
              {Locales.map((l, idx) => {
                const active = l.locale == selectedLang

                return (
                  <button
                    key={idx}
                    onClick={() => {
                      setSelectedLang(l.locale)
                      close()
                    }}
                    className={`flex items-center gap-3 w-full p-3 ${
                      active ? 'bg-black bg-opacity-5' : ''
                    }`}
                  >
                    <Image src={l.imgUrl} width={32} height={32} alt={l.name} />
                    <span className="w-6 text-left">{l.name}</span>
                  </button>
                )
              })}
            </>
          )}
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default LocaleDropdown
