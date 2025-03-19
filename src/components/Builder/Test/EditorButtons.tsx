import { EmberBlock } from '../../ui/blocks/EmbedBlock'
import { BuilderButton } from '../BuilderButton'
import { HowToBut } from '@/components/ui/blocks/HowToBuy'
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

  const { label } = textCategory

  return (
    <div className='flex flex-auto flex-col gap-4 p-4'>
      <div className='text-xl font-semibold'>
        {t(`builder.${selectedTemplate}.categories.${label}`)}
      </div>

      <HowToBut />
      <EmberBlock />

      <div className='mt-auto'>
        <BuilderButton />
      </div>
    </div>
  )
}
