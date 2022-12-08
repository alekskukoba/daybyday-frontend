import { Base } from './base'
import { Category } from './category'

export interface Fundraising {
  title: string
  target: number
  jarUrl: string
  cardNumber: string
}

export interface Program extends Base {
  title: string
  category: Category
  brief: string
  destination: string
  fundraisings: Fundraising[]
}
