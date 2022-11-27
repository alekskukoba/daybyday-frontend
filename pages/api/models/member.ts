import { Asset } from './asset'
import { Base } from './base'

export interface Member extends Base {
  name: string
  title: string
  photo: Asset
}
