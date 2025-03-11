import { BuilderSidebarSubCategoryEditorMenu } from '../../Builder/BuilderSidebarSubCategoryEditorMenu'
import { BuilderButton } from '../BuilderButton'
import { BuilderSidebarSubCategoryItem } from '../BuilderSidebarSubCategoryItem'
import { BackgroundContent } from './StylesContent/Background'
import { ColorContent } from './StylesContent/Color'
import { FontsContent } from './StylesContent/Fontes'
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

  const { label } = textCategory

  return (
    <div className='flex flex-auto flex-col gap-4 p-4'>
      <div className='text-xl font-semibold'>
        {t(`builder.${selectedTemplate}.categories.${label}`)}
      </div>

      <FontsContent />
      <ColorContent />
      <BackgroundContent />

      <div className='mt-auto'>
        <BuilderButton />
      </div>
    </div>
  )
}

{
}
