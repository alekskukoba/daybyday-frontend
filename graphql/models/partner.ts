import { Asset } from './asset'
import { Base } from './base'

export interface Partner extends Base {
  name: string
  logo: Asset
}
