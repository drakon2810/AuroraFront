import { BuilderSidebarSubCategoryEditorMenu } from '../../Builder/BuilderSidebarSubCategoryEditorMenu'
import { BuilderButton } from '../BuilderButton'
import { BuilderSidebarSubCategoryItem } from '../BuilderSidebarSubCategoryItem'
import { templatesData } from '@/consts/templatesData'
import { TemplateContext } from '@/contexts/TemplateContext'
import { TemplateContextValues } from '@/types/contexts'
import { useContext } from 'react'
import { useTranslation } from 'react-i18next'

export const EditorButtons = () => {
  const { selectedTemplate } = useContext(
    TemplateContext
  ) as TemplateContextValues

  const currentTemplateCategories = templatesData[selectedTemplate].categories

  const textCategory = currentTemplateCategories.find(
    (category) => category.label === 'howToBuy'
  )

  const { t } = useTranslation()

  if (!textCategory) {
    return null
  }

  const { label, fields } = textCategory

  return (
    <div className='flex flex-auto flex-col justify-between gap-4 p-4'>
      <div className='p-3 font-arial-black'>
        {t(`builder.${selectedTemplate}.categories.${label}`)}
      </div>
      <BuilderSidebarSubCategoryEditorMenu />
      <div className='flex flex-auto flex-col gap-4 rounded-md py-2 pl-8'>
        {fields.map((field) => (
          <BuilderSidebarSubCategoryItem key={field.name} {...field} />
        ))}
      </div>

      <BuilderButton />
    </div>
  )
}

{
}
