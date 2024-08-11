export interface Tender {
  id: number
  title: string
  desc: string
  company_name: string
  user_name: string
  phone: string
  categories: Category[]
  tender_images: TenderImage[]
  tender_other_files: TenderOtherFile[]
  is_favorite: boolean
  expiry_date: string
  is_expired: boolean
  insurance_value: number
  created_at: string
  tender_specifications_value: number
  tender_specifications_file: TenderSpecificationsFile
  my_tender_offer: any // Type according to your actual data structure
  status: string
  tender_offers: any[] // Type according to your actual data structure
  added_offer: boolean
  is_my_agent: boolean
  is_my_tender: boolean
}
export interface TenderMassage {
  data: any
  message: string
  status: boolean
}

interface Category {
  id: number
  name: string
  image: string
}

interface TenderImage {
  id: number
  media: string
}

interface TenderOtherFile {
  id: number
  media: string
}

interface TenderSpecificationsFile {
  id: number
  media: string
}
