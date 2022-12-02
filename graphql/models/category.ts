import { Base } from './base'
import { CloudinaryAsset } from './cloudinaryAsset'
import { Program } from './program'
import { Report } from './report'

export interface Category extends Base {
  description: {
    html: string
  }
  preview: CloudinaryAsset
  cover: CloudinaryAsset
  slug: string
  reports: Report[]
  programs: Program[]
}
