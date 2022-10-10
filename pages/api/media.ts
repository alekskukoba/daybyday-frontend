import { getStrapiURL } from '.'
import { StrapiMedia } from './types'

export function getStrapiMedia(media: StrapiMedia): string {
  const { url } = media.data.attributes
  const imgUrl = url.startsWith('/') ? getStrapiURL(url) : url

  return imgUrl
}
