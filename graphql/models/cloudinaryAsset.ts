// {
//     "url": "http://res.cloudinary.com/alekskukoba/image/upload/v1669824071/test%20report/101_agpoia.jpg",
//     "tags": [],
//     "type": "upload",
//     "bytes": 52020,
//     "width": 472,
//     "format": "jpg",
//     "height": 1024,
//     "derived": [
//       {
//         "url": "http://res.cloudinary.com/alekskukoba/image/upload/q_auto/f_auto/v1669824071/test%20report/101_agpoia.jpg",
//         "secure_url": "https://res.cloudinary.com/alekskukoba/image/upload/q_auto/f_auto/v1669824071/test%20report/101_agpoia.jpg",
//         "raw_transformation": "q_auto/f_auto"
//       },
//       {
//         "url": "http://res.cloudinary.com/alekskukoba/image/upload/c_fill,g_auto,h_80,r_max,w_80/f_auto,q_auto/v1669824071/test%20report/101_agpoia.jpg",
//         "secure_url": "https://res.cloudinary.com/alekskukoba/image/upload/c_fill,g_auto,h_80,r_max,w_80/f_auto,q_auto/v1669824071/test%20report/101_agpoia.jpg",
//         "raw_transformation": "c_fill,g_auto,h_80,r_max,w_80/f_auto,q_auto"
//       }
//     ],
//     "version": 1669824071,
//     "duration": null,
//     "metadata": [],
//     "public_id": "test report/101_agpoia",
//     "created_at": "2022-11-30T16:01:11Z",
//     "created_by": {
//       "id": "4c9049b80e16f0a954e1a9209723c8",
//       "type": "user"
//     },
//     "secure_url": "https://res.cloudinary.com/alekskukoba/image/upload/v1669824071/test%20report/101_agpoia.jpg",
//     "access_mode": "public",
//     "uploaded_by": {
//       "id": "4c9049b80e16f0a954e1a9209723c8",
//       "type": "user"
//     },
//     "resource_type": "image"
//   },

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
