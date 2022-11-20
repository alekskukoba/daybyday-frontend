import Link from 'next/link'
import React from 'react'
import { FaPlay } from 'react-icons/fa'
import Moment from 'react-moment'
import { HygraphMedia } from '../pages/api/types'
import Img from './image'

type Props = {
  preview: HygraphMedia
  isVideo?: boolean
  title: string
  createdAt: string
  url: string
}

const PostCard: React.FC<Props> = ({
  preview,
  isVideo,
  title,
  createdAt,
  url,
}) => {
  return (
    <>
      <div className="relative mb-4 text">
        <Img image={preview} />
        {isVideo && (
          <div className="w-[88px] h-[88px] rounded-full flex items-center justify-center bg-black bg-opacity-50 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <FaPlay size={32} />
          </div>
        )}
      </div>
      <p className="h-12 mb-2 leading-6 line-clamp-2">{title}</p>
      <div className="flex items-center justify-between">
        <p className="text-[#929292]">
          <Moment date={createdAt} format="DD.MM.YYYY" />
        </p>
        <Link href={url}>
          <a className="text-[#4289F4]">Дізнатись більше</a>
        </Link>
      </div>
    </>
  )
}

PostCard.defaultProps = {
  isVideo: false,
}

export default PostCard
