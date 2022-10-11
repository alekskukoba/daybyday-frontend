import React, { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import Image from 'next/image'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { useCookies } from 'react-cookie'
import { useRouter } from 'next/router'

const LocaleDropdown: React.FC = () => {
  const router = useRouter()
  const { pathname, asPath, query, locale = 'en', locales = [] } = router

  const availableLocales = locales.filter((l) => l != 'default')

  // const [selectedLang, setSelectedLang] = useState<string>(locale)
  const [, setCookie] = useCookies(['NEXT_LOCALE'])

  // useEffect(() => {
  //   const handleChange = (lang: string) => {
  //     setCookie('NEXT_LOCALE', lang, { path: '/' })
  //     router.push({ pathname, query }, asPath, {
  //       locale: lang,
  //     })
  //   }
  //   handleChange(selectedLang)
  // }, [selectedLang])

  const onChange = (lang: string) => {
    setCookie('NEXT_LOCALE', lang, { path: '/' })
    router.push({ pathname, query }, asPath, {
      locale: lang,
    })
  }

  return (
    <Popover as={'div'} className={'relative'}>
      <Popover.Button className={'flex items-center gap-3'}>
        <Image
          src={`/locale/${locale}.png`}
          width={32}
          height={32}
          alt={'ua'}
        />
        <div className="flex items-center gap-1">
          <span className="w-6">{locale.toUpperCase()}</span>
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
              {availableLocales.map((l, idx) => {
                const active = locale == l

                return (
                  <button
                    key={idx}
                    onClick={() => {
                      onChange(l)
                      close()
                    }}
                    className={`flex items-center gap-3 w-full p-3 ${
                      active ? 'bg-black bg-opacity-5' : ''
                    }`}
                  >
                    <Image
                      src={`/locale/${l}.png`}
                      width={32}
                      height={32}
                      alt={l}
                    />
                    <span className="w-6 text-left">{l.toUpperCase()}</span>
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
