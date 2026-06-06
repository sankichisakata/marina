export interface BlogPost {
  id: string | number
  slug: string
  title: string
  date: string
  category: string
  excerpt: string
  content: string
  thumbnail: string
}

export interface ContactFormData {
  name: string
  company: string
  email: string
  inquiryType: string
  message: string
  honeypot: string
}
