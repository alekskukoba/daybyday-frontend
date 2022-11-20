import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HygraphMedia } from '../pages/api/types'

interface Props {
  title: string
  brief: string
  image: HygraphMedia
}

const ProjectCard: React.FC<Props> = ({ title, brief, image }) => {
  return (
    <div className="overflow-hidden bg-white rounded shadow-lg">
      <div className="relative h-[320px]">
        <Image src={image.url} alt="project" layout="fill" objectFit="cover" />
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-h3">{title}</h3>
        <div
          className="h-24 mb-6 text-body line-clamp-3"
          dangerouslySetInnerHTML={{ __html: brief }}
        />
        <div className="flex items-center gap-4">
          <Link href={'/'}>
            <a className="flex items-center justify-center px-4 text-center rounded h-14 grow bg-dbd-yellow text-button">
              Підтримати
            </a>
          </Link>
          <Link href={'/'}>
            <a className="flex items-center justify-center px-4 text-center border border-black rounded h-14 grow text-button">
              Детальніше
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
