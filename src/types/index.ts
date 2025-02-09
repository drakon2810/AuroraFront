import { PropertyPath } from 'lodash'
import { LucideIcon } from 'lucide-react'
import { FC } from 'react'

export interface PricingCard {
  price: number
  oldPrice?: number
  path: string
}

export type UpdateField = (path: PropertyPath, value: unknown) => void
// export type CategoryName = keyof typeof categoriesFields

export type CategoriesField = {
  label: string
  icon: LucideIcon
  element: FC
  creatorOnly?: boolean
}
export interface CategoriesFields {
  [key: string]: CategoriesField
}

interface Category {
  label: string
  icon: LucideIcon
  element: FC
  creatorOnly?: boolean
}

export interface Categories {
  [key: string]: Category
}

export interface NavLink {
  label: string
  path: string
}

export interface StartItem {
  title: string
  list: string[]
}
