import { Base } from './base'
import { CloudinaryAsset } from './cloudinaryAsset'

export interface Partner extends Base {
  name: string
  logo: CloudinaryAsset
}
