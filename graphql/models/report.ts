import { Base } from './base'
import { Category } from './category'
import { CloudinaryAsset } from './cloudinaryAsset'

export interface Report extends Base {
  title: string
  preview: CloudinaryAsset
  cover: CloudinaryAsset
  body: {
    html: string
  }
  youTubeUrls: string[]
  media: CloudinaryAsset[]
  financialMedia: CloudinaryAsset[]

  category: Category
  slug: string
  eventDate: string
}
