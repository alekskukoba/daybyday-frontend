import { Base } from './base'
import { CloudinaryAsset } from './cloudinaryAsset'

export interface Member extends Base {
  name: string
  title: string
  photo: CloudinaryAsset
}
