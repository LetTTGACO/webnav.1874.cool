import { siteList } from "@/lib/site-list"

export default async function getNavLinks() {
  return siteList
}

export type CategoryWithLinks = {
  id: string
  icon: string
  title: string
  links: NavItems[]
  [key: string]: any
}

export interface NavItems {
  icon: string
  url: string
  title: string
  description: string
  [key: string]: any
}
