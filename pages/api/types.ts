export interface StrapiMedia {
  data: {
    id: number
    attributes: {
      name: string
      alternativeText: string
      caption: string
      width: number
      height: number
      url: string
    }
  }
}

export interface StrapiMeta {
  pagination: {
    page: number
    pageSize: number
    pageCount: number
    total: number
  }
}

export interface Partner {
  id: number
  attributes: {
    name: string
    logo: StrapiMedia
    createdAt: string
    updateAt: string
    publishedAt: string
    locale: string
  }
}

export interface Partners {
  data: Partner[]
  meta: StrapiMeta
}

export interface HygraphMedia {
  url: string
  width: number
  height: number
}
