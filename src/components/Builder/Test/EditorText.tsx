import { BuilderSidebarSubCategoryEditorMenu } from '../../Builder/BuilderSidebarSubCategoryEditorMenu'
import { BuilderButton } from '../BuilderButton'
import { BuilderSidebarSubCategoryItem } from '../BuilderSidebarSubCategoryItem'
import { CustomDomainInfo } from '@/components/ui/CustomDomainInfo'
import { templatesData } from '@/consts/templatesData'
import { TemplateContext } from '@/contexts/TemplateContext'
import { TemplateContextValues } from '@/types/contexts'
import { useContext } from 'react'
import { useTranslation } from 'react-i18next'

export const EditorText = () => {
  const { selectedTemplate } = useContext(
    TemplateContext
  ) as TemplateContextValues
  const currentTemplateCategories = templatesData[selectedTemplate].categories

  const textCategory = currentTemplateCategories.find(
    (category) => category.label === 'text'
  )

  const { t } = useTranslation()

  if (!textCategory) {
    return null
  }

  const { label, fields } = textCategory

  return (
    <div className='flex flex-auto flex-col justify-between gap-4 p-4'>
      <div className='text-xl font-semibold'>
        {t(`builder.${selectedTemplate}.categories.${label}`)}
      </div>
      <div className='flex flex-auto flex-col gap-4 rounded-md py-2'>
        {fields
          .filter((field) => field.type !== 'image')
          .map((field) => (
            <BuilderSidebarSubCategoryItem key={field.name} {...field} />
          ))}
        <div className='flex flex-col items-start'>
          {fields
            .filter(
              (field) =>
                field.type === 'image' &&
                (field.name === 'logoImage' || field.name === 'tokenImage')
            )
            .map((field) => (
              <div key={field.name} className='flex flex-col items-center'>
                <BuilderSidebarSubCategoryItem {...field} />
              </div>
            ))}
        </div>
        <CustomDomainInfo />
      </div>

      <BuilderButton />
    </div>
  )
}
