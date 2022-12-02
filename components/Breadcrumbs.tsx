import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

interface Props {
  title?: string
}

type Breadcrumb = {
  href: string
  text: string
}

const Breadcrumbs: React.FC<Props> = ({ title }) => {
  const router = useRouter()
  const { t } = useTranslation()

  function generateBreadcrumbs(): Breadcrumb[] {
    const asPathWithoutQuery = router.asPath.split('?')[0]
    const asPathNestedRoutes = asPathWithoutQuery
      .split('/')
      .filter((v) => v.length > 0)

    const crumblist = asPathNestedRoutes.map((subpath, idx) => {
      const href = '/' + asPathNestedRoutes.slice(0, idx + 1).join('/')
      let text = `nav.${subpath}`
      if (title && idx === asPathNestedRoutes.length - 1) {
        text = title
      }
      return { href, text }
    })

    return [{ href: '/', text: t('nav.home') }, ...crumblist]
  }

  const breadcrumbs = generateBreadcrumbs()

  return (
    <ul className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
      {breadcrumbs.map((b, idx) => (
        <li key={idx} className="whitespace-nowrap">
          <Link href={b.href}>
            <a
              className={`text-sm ${
                idx == breadcrumbs.length - 1 && 'text-dbd-grey'
              }`}
            >
              {t(b.text)}
            </a>
          </Link>
          {idx < breadcrumbs.length - 1 && (
            <span className="ml-2 text-sm">/</span>
          )}
        </li>
      ))}
    </ul>
  )
}

export default Breadcrumbs
