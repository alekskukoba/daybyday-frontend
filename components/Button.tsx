import Link from 'next/link'
import React from 'react'

interface Props {
  href: string
  text: string
  size?: 'sm' | 'md' | 'lg'
  full?: boolean
}

export const Button: React.FC<Props> = ({
  href,
  text,
  size = 'sm',
  full = false,
}) => {
  const sizeMap = {
    sm: 'w-40 h-12',
    md: 'w-48 h-12',
    lg: 'w-72 h-14',
  }

  return (
    <>
      <Link href={href}>
        <a
          className={`flex items-center justify-center ${sizeMap[size]} ${
            full && 'w-full'
          } rounded bg-dbd-yellow text-button`}
        >
          {text}
        </a>
      </Link>
    </>
  )
}
