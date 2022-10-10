import React from 'react'
import Image from 'next/image'
import { getStrapiMedia } from '../pages/api/media'
import { StrapiMedia } from '../pages/api/types'

interface Props {
  image: StrapiMedia
}

const Img: React.FC<Props> = ({ image }) => {
  const { alternativeText, width, height } = image.data.attributes

  return (
    <Image
      layout="responsive"
      width={width}
      height={height}
      objectFit="contain"
      src={getStrapiMedia(image)}
      alt={alternativeText || ''}
    />
  )
}

export default Img
