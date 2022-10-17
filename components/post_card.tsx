import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { FaPlay } from 'react-icons/fa'

type Props = {
  imgUrl: string
  isVideo?: boolean
  title: string
  createdAt: string
  url: string
}

const PostCard: React.FC<Props> = ({
  imgUrl,
  isVideo,
  title,
  createdAt,
  url,
}) => {
  return (
    <>
      <div className="relative mb-4 text">
        <Image src={imgUrl} height={240} width={384} alt={title} />
        {isVideo && (
          <div className="w-[88px] h-[88px] rounded-full flex items-center justify-center bg-black bg-opacity-50 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <FaPlay size={32} />
          </div>
        )}
      </div>
      <p className="h-12 mb-2 leading-6 line-clamp-2">{title}</p>
      <div className="flex items-center justify-between">
        <p className="text-[#929292]">{createdAt}</p>
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
