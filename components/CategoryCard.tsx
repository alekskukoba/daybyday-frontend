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
    <div className="flex flex-col overflow-hidden bg-white rounded shadow-lg lg:flex-row">
      <div className="relative h-[200px] lg:h-[300px] lg:basis-[478px] shrink-0 grow-0">
        <Image
          src={image.url}
          alt="project"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="flex flex-col p-6">
        <h3 className="mb-2 font-montserrat font-semibold text-[24px] leading-[28px]">
          {title}
        </h3>
        <div
          className="mb-4 lg:mb-6 grow text-body line-clamp-4"
          dangerouslySetInnerHTML={{ __html: brief }}
        />
        <div className="flex items-center gap-4">
          {type === 'home' && (
            <>
              <div className="basis-1/2">
                <Link href={'/requisites'}>
                  <a className="bg-dbd-yellow border-2 border-dbd-yellow h-[48px] lg:h-[56px] w-full flex items-center justify-center rounded">
                    <span className="font-semibold leading-6 lg:text-lg font-montserrat">
                      {t('button.support')}
                    </span>
                  </a>
                </Link>
              </div>
              <div className="basis-1/2">
                <Link href={url}>
                  <a className="border-2 border-dbd-dark-grey h-[48px] lg:h-[56px] w-full flex items-center justify-center rounded">
                    <span className="font-semibold leading-6 lg:text-lg font-montserrat">
                      {t('button.details')}
                    </span>
                  </a>
                </Link>
              </div>
            </>
          )}
          {type === 'gallery' && (
            <div className=" basis-full lg:basis-1/2">
              <Link href={url}>
                <a className="bg-dbd-yellow border-2 border-dbd-yellow h-[48px] lg:h-[56px] w-full flex items-center justify-center rounded">
                  <span className="font-semibold leading-6 lg:text-lg font-montserrat">
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
