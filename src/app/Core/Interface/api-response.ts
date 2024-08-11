interface MetaLink {
  url: string | null
  label: string
  active: boolean
}

interface Meta {
  current_page: number
  from: number
  last_page: number
  links: MetaLink[]
  path: string
  per_page: number
  to: number
  total: number
}

export interface ApiResponse<T> {
  data: T
  links: {
    first: string
    last: string
    prev: string | null
    next: string | null
  }
  meta: Meta
  status: boolean
  message: string
  messages: string
}
