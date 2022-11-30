import { CloudinaryAsset } from './cloudinaryAsset'
import { Base } from './base'

export interface Partner extends Base {
  name: string
  logo: CloudinaryAsset
}
