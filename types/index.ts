// Types for the portfolio project

export interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  image: string
  images: string[]
  category: string
  features: string[]
  links?: {
    demo?: string
    github?: string
    live?: string
  }
}

export interface Skill {
  category: string
  skills: string[]
}

export interface Experience {
  id: number
  title: string
  company: string
  period: string
  description: string
  responsibilities: string[]
}

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface SiteConfig {
  siteName: string
  siteUrl: string
  description: string
  author: {
    name: string
    email: string
    phone: string
    location: string
  }
  social: {
    linkedin?: string
    github?: string
    twitter?: string
    instagram?: string
  }
  nav: Array<{
    href: string
    label: string
  }>
}

export interface NavigationLink {
  href: string
  label: string
}
