import React from 'react'
import Image from 'next/image'
import { HygraphMedia } from '../pages/api/types'

interface Props {
  image: HygraphMedia
  fill?: boolean
}

const Img: React.FC<Props> = ({ image, fill = false }) => {
  const { url, width, height } = image

  return (
    <Image
      layout={fill ? 'fill' : 'responsive'}
      width={width}
      height={height}
      objectFit="contain"
      src={url}
      alt={''}
    />
  )
}

export default Img
