import { BuilderSidebarSubCategoryEditorMenu } from '../../Builder/BuilderSidebarSubCategoryEditorMenu'
import { BuilderSidebarSubCategoryItem } from '../BuilderSidebarSubCategoryItem'
import { templatesData } from '@/consts/templatesData'
import { TemplateContext } from '@/contexts/TemplateContext'
import { TemplateContextValues } from '@/types/contexts'
import { useContext } from 'react'
import { useTranslation } from 'react-i18next'

export const EditorImage = () => {
  const { selectedTemplate } = useContext(
    TemplateContext
  ) as TemplateContextValues

  const currentTemplateCategories = templatesData[selectedTemplate].categories

  const textCategory = currentTemplateCategories.find(
    (category) => category.label === 'images'
  )

  const { t } = useTranslation()

  if (!textCategory) {
    return null
  }

  const { label, fields } = textCategory

  return (
    <div>
      <div className='p-3 font-arial-black'>
        {t(`builder.${selectedTemplate}.categories.${label}`)}
      </div>
      <BuilderSidebarSubCategoryEditorMenu />
      <div className='flex flex-auto flex-col gap-4 rounded-md py-2 pl-8'>
        {fields.map((field) => (
          <BuilderSidebarSubCategoryItem key={field.name} {...field} />
        ))}
      </div>
    </div>
  )
}

{
}
