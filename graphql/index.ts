import { stringify } from 'querystring'

export function getStrapiURL(path = '') {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'
  }${path}`
}

export async function fetchAPI(
  path: string,
  urlParamsObject = {},
  options = {}
) {
  const mergedOptions = {
    headers: {
      'Content-Type': 'application/json',
      Authorization:
        'Bearer bc7af8dde2d1944410fcb81705a95e61d7d8c667d1270a59cdaef00a1f521cfe0022d83d878b32dde6069f439535fb86b32039c5940f3a83ffc0e45f894ddefa11b7222e7e93a3a52fb2e77df6fb81aafe1d2fa648675ee3180b6b9bba8d5b464d690bcd3d4643bfd14be7b7665b1353695450e1967a798aa4f113a04fe35bff',
    },
    ...options,
  }

  const queryString = stringify(urlParamsObject)
  const requestUrl = `${getStrapiURL(
    `/api/${path}${queryString ? `?${queryString}` : ''}`
  )}`

  const response = await fetch(requestUrl, mergedOptions)

  if (!response.ok) {
    throw new Error(
      `An error occured: ${response.statusText}, url: ${requestUrl}`
    )
  }

  const data = await response.json()
  return data
}
