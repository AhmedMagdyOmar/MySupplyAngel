import { CategoryList } from './category'

interface Country {
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

interface City {
  id: number
  name: string
  slug: string
  country: Country
  short_name: string
  postal_code: number
  created_at: string
}

export interface Person {
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
  categories: CategoryList[] // You may need to replace `any` with an appropriate type
  is_need_job: boolean
  previous_work: any // You may need to replace `any` with an appropriate type
  is_subcribed: boolean
}
