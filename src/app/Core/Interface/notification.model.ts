export interface Title {
  change_status: string
}

export interface Body {
  change_status: string
}

export interface SenderData {
  id: number
  name: string
  phone_code: string
  phone: string
  avatar: string
}

export interface Notification {
  id: string
  created_time: string
  created_at: string
  read_at: string
  is_readed: boolean
  key: string
  status: string
  key_id: number
  title: Title
  body: Body
  sender_data: SenderData
  order_id: string | null
}
