export interface CloudinaryAsset {
  url: string
  tags: string[]
  type: string
  bytes: number
  width: number
  height: number
  format: string
  derived: {
    url: string
    secure_url: string
    raw_transformation: string
  }[]
  version: number
  public_id: string
  resource_type: string
}
