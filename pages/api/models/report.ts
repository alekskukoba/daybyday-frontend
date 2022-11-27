import { Asset } from './asset'
import { Base } from './base'
import { Category } from './category'

export interface Report extends Base {
  title: string
  preview: Asset
  cover: Asset
  body: {
    html: string
  }
  youTubeUrls: string[]
  media: Asset[]
  category: Category
  slug: string
}
