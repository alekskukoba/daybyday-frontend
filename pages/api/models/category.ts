import { Report } from './report'
import { Asset } from './asset'
import { Program } from './program'
import { Base } from './base'

export interface Category extends Base {
  description: {
    html: string
  }
  preview: Asset
  cover: Asset
  slug: string
  reports: Report[]
  programs: Program[]
}
