import { TemplateContext } from './TemplateContext'
import { categoriesFields } from '@/consts/editor'
import { UpdateField } from '@/types'
import {
  TemplateContextValues,
  TemplateEditorContextValues
} from '@/types/contexts'
import { TemplateSubCategoryField } from '@/types/templates'
import { createContext, PropsWithChildren, useContext, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export const TemplateEditorContext =
  createContext<TemplateEditorContextValues | null>(null)

export const TemplateEditorContextProvider = ({
  children
}: PropsWithChildren) => {
  const { data, updateField } = useContext(
    TemplateContext
  ) as TemplateContextValues
  const [searchParams] = useSearchParams()

  const [activeCategory, setActiveCategory] = useState(getActiveCategory)
  const [activeSubCategory, setActiveSubCategory] =
    useState<TemplateSubCategoryField | null>(null)

  const activeSubCategoryData = getActiveSubCategoryData()

  function getActiveCategory() {
    const categoryParam = searchParams.get('category')
    if (categoriesFields.hasOwnProperty(categoryParam ?? '')) {
      return categoryParam as keyof typeof categoriesFields
    }

    return Object.keys(categoriesFields)[0] as keyof typeof categoriesFields
  }

  function getActiveSubCategoryData() {
    if (!activeSubCategory) return null

    if (activeSubCategory.type === 'link') {
      return data.links[activeSubCategory.name]
    }

    return data[activeSubCategory.name]
  }

  const value = {
    updateField: updateField as UpdateField,
    activeCategory,
    setActiveCategory,
    activeSubCategory,
    setActiveSubCategory,
    activeSubCategoryData
  }

  return (
    <TemplateEditorContext.Provider value={value}>
      {children}
    </TemplateEditorContext.Provider>
  )
}
