import { Base } from './base'
import { Category } from './category'

export interface Program extends Base {
  title: string
  category: Category
  brief: string
  destination: string
}
