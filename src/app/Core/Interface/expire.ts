interface Category {
  id: number
  name: string
  image: string
}

interface Media {
  id: number
  media: string
}

export interface expireItem {
  id: number
  title: string
  desc: string
  type: string
  company_name: string
  product_name: string
  user_name: string
  phone: string
  categories: Category[]
  expiration_images: Media[]
  expiration_files: Media[]
  is_favorite: boolean
  expiry_date: string
  is_expired: boolean
  status: string
  created_at: string
}

export interface Links {
  first: string
  last: string
  prev: string | null
  next: string | null
}

interface Link {
  url: string | null
  label: string
  active: boolean
}

export interface Meta {
  current_page: number
  from: number
  last_page: number
  links: Link[]
  path: string
  per_page: number
  to: number
  total: number
}
