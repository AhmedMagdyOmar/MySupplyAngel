export interface Tender {
  id: number
  title: string
  desc: string
  company_name: string
  user_name: string
  phone: string
  categories: Category[]
  tender_images: TenderImage[]
  tender_other_files: TenderFile[]
  is_favorite: boolean
  expiry_date: string
  is_expired: boolean
  insurance_value: number
  created_at: string
  tender_specifications_value: number
  tender_specifications_file: TenderFile
  my_tender_offer: any // Change the type if applicable
  status: string
  tender_offers: any[] // Change the type if applicable
  added_offer: boolean
  is_my_agent: boolean
  is_my_tender: boolean
}

export interface Category {
  id: number
  name: string
  image: string
}

export interface TenderImage {
  id: number
  media: string
}

export interface TenderFile {
  id: number
  media: string
}

// service.interface.ts
export interface Service {
  id: number
  avatar: string
  title: string
  desc: string
}

// client.interface.ts
export interface Client {
  id: number
  avatar: string
  name: string
  comment: string
}

export interface homeResponse {
  data: {
    categories: Category[]
    our_clients: Client[]
    our_services: Service[]
    tenders: Tender[]
  }
  message: string
  status: boolean
}
