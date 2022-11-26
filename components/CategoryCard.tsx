import React from 'react'
import Image from 'next/image'
import { HygraphMedia } from '../pages/api/types'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'

interface Props {
  title: string
  brief: string
  image: HygraphMedia
  url: string
  type?: 'home' | 'gallery'
}

const CategoryCard: React.FC<Props> = ({
  title,
  brief,
  image,
  url,
  type = 'home',
}) => {
  const { t } = useTranslation()

  return (
    <div className="flex overflow-hidden bg-white rounded shadow-lg">
      <div className="relative h-[300px] basis-[478px] shrink-0 grow-0">
        <Image src={image.url} alt="project" layout="fill" objectFit="cover" />
      </div>
      <div className="flex flex-col p-6">
        <h3 className="mb-2 text-h3">{title}</h3>
        <div
          className="mb-6 grow text-body line-clamp-4"
          dangerouslySetInnerHTML={{ __html: brief }}
        />
        <div className="flex items-center gap-4">
          {type === 'home' && (
            <>
              <div className="basis-1/2">
                <Link href={'/requisites'}>
                  <a className="bg-dbd-yellow border-2 border-dbd-yellow h-[56px] w-full flex items-center justify-center rounded">
                    <span className="text-lg font-semibold leading-6 font-montserrat">
                      {t('button.support')}
                    </span>
                  </a>
                </Link>
              </div>
              <div className="basis-1/2">
                <Link href={url}>
                  <a className="border-2 border-dbd-dark-grey h-[56px] w-full flex items-center justify-center rounded">
                    <span className="text-lg font-semibold leading-6 font-montserrat">
                      {t('button.details')}
                    </span>
                  </a>
                </Link>
              </div>
            </>
          )}
          {type === 'gallery' && (
            <div className="basis-1/2">
              <Link href={url}>
                <a className="bg-dbd-yellow border-2 border-dbd-yellow h-[56px] w-full flex items-center justify-center rounded">
                  <span className="text-lg font-semibold leading-6 font-montserrat">
                    {t('button.watch')}
                  </span>
                </a>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CategoryCard
