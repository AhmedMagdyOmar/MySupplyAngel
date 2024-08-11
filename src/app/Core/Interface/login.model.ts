export interface Country {
  id: number
  name: string
  nationality: string
  currency: string | null
  slug: string | null
  continent: string
  phone_code: string
  short_name: string
  image: string
  created_at: string
}

export interface City {
  id: number
  name: string
  slug: string
  country: Country
  short_name: string
  postal_code: number
  created_at: string
}

export interface Category {
  id: number
  name: string
  image: string
}

export interface UserProfile {
  id: number
  avatar: string
  name: string
  phone_code: string
  phone: string
  whats: string
  email: string
  address: string
  company_name: string
  commercial_register_num: string
  tax_card_num: string
  country: Country
  city: City
  categories: Category[]
  is_need_job: boolean
  previous_work: string | null
  is_subcribed: boolean
  token: string
}
