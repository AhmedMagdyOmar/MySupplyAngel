export interface Category {
  id: number
  name: string
  image: string
}

export interface AgentImage {
  id: number
  media: string
}

export interface AgentFile {
  id: number
  media: string
}

export interface User {
  id: number
  avatar: string
  name: string
  phone_code: string
  phone: string
  whats: string
  email: string
  address: string
  is_need_job: boolean
}

export interface AgentOfferImage {
  id: number
  media: string
}

export interface AgentOfferFile {
  id: number
  media: string
}

export interface AgentOffer {
  id: number
  user: User
  desc: string
  images: AgentOfferImage[]
  files: AgentOfferFile[]
}

export interface RequiredAgent {
  id: number
  title: string
  desc: string
  agent_type: string
  type: string
  user_name: string
  phone: string
  company_name: string
  product_name: string
  categories: Category[]
  agent_images: AgentImage[]
  agent_files: AgentFile[]
  is_favorite: boolean
  expiry_date: string
  is_expired: boolean
  my_agent_offer: any
  agent_offers: AgentOffer[]
  status: string
  added_offer: boolean
  is_my_agent: boolean
  created_at: string
}
