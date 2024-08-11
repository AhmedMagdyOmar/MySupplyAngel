interface Location {
  lat: number
  lng: number
  description_location: string
}

export interface Social {
  facebook: string
  twitter: string
  instagram: string
  linkedin: string
  youtube: string
  tiktok: string
}

export interface ContactInfo {
  address: string
  location: Location
  messenger: string
  whatsapp: string
  social: Social
}

export interface ContentApiResponse {
  status: boolean
  data: null
  message: string
}
