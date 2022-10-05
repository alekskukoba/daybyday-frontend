import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

type Breadcrumb = {
  href: string
  text: string
}

const Breadcrumbs: React.FC = () => {
  const router = useRouter()

  function generateBreadcrumbs(): Breadcrumb[] {
    const asPathWithoutQuery = router.asPath.split('?')[0]
    const asPathNestedRoutes = asPathWithoutQuery
      .split('/')
      .filter((v) => v.length > 0)

    const crumblist = asPathNestedRoutes.map((subpath, idx) => {
      const href = '/' + asPathNestedRoutes.slice(0, idx + 1).join('/')
      return { href, text: subpath }
    })

    return [{ href: '/', text: 'Home' }, ...crumblist]
  }

  const breadcrumbs = generateBreadcrumbs()

  return (
    <ul className="flex items-center gap-2">
      {breadcrumbs.map((b, idx) => (
        <li key={idx}>
          <Link href={b.href}>
            <a>{b.text}</a>
          </Link>
          {idx < breadcrumbs.length - 1 && <span className="ml-2">/</span>}
        </li>
      ))}
    </ul>
  )
}

export default Breadcrumbs
