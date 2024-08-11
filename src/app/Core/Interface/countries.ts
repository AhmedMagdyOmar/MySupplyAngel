export interface Country {
  id: number
  name: string | null
  nationality: string | null
  currency: string | null
  slug: string | null
  continent: string
  phoneCode: string
  short_name: string
  image: string
  createdAt: string // You might want to parse this as Date in your application
}

export interface cities {
  id: number
  name: string
  slug: string
  country: {
    id: number
    name: string | null
    nationality: string | null
    currency: string | null
    slug: string | null
    continent: string
    phoneCode: string
    shortName: string
    image: string
    createdAt: string // You might want to parse this as Date in your application
  }
  short_name: string
  postalCode: number
  createdAt: string // You might want to parse this as Date in your application
}
