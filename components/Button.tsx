import Link from 'next/link'
import React from 'react'

interface Props {
  href: string
  text: string
  size?: 'sm' | 'md' | 'lg'
  full?: boolean
  outline?: boolean
}

export const Button: React.FC<Props> = ({
  href,
  text,
  size = 'sm',
  full = false,
  outline = false,
}) => {
  const sizeMap = {
    sm: `${full ? 'w-full' : 'w-40'} h-12`,
    md: `${full ? 'w-full' : 'w-48'} h-12`,
    lg: `${full ? 'w-full' : 'w-72'} h-14`,
  }

  const outlineStyle = outline
    ? 'border-dbd-dark-grey'
    : 'bg-dbd-yellow border-dbd-yellow'

  return (
    <>
      <Link href={href}>
        <a
          className={`flex items-center justify-center border-2 ${sizeMap[size]} ${outlineStyle} rounded font-montserrat font-semibold text-sm sm:text-base`}
        >
          {text}
        </a>
      </Link>
    </>
  )
}
