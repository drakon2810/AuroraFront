import { EmberBlock } from '../../ui/blocks/EmbedBlock'
import { BuilderButton } from '../BuilderButton'
import { Chart } from '@/components/ui/blocks/Chart'
import { Gallery } from '@/components/ui/blocks/Gallery'
import { HowToBut } from '@/components/ui/blocks/HowToBuy'
import { HowToBuyImpressive } from '@/components/ui/blocks/HowToBuyImpressive'
import { Marquee } from '@/components/ui/blocks/Marquee'
import { Roandmap } from '@/components/ui/blocks/Roandmap'
import { RoadmapImpressive } from '@/components/ui/blocks/RoandmapImpressiw'
import { TokenomicDescriptionChart } from '@/components/ui/blocks/TokenDistribytionChart'
import { Tokenomics } from '@/components/ui/blocks/Tokenomics'
import { templatesData } from '@/consts/templatesData'
import { TemplateContext } from '@/contexts/TemplateContext'
import { useTemplateStore } from '@/store/useTemplateStore'
import { TemplateContextValues } from '@/types/contexts'
import { useContext } from 'react'
import { useTranslation } from 'react-i18next'

export const EditorButtons = () => {
  const { isSelectTemplate } = useTemplateStore((state) => state)
  const { selectedTemplate } = useContext(
    TemplateContext
  ) as TemplateContextValues
  const { t } = useTranslation()

  // Проверка существования данных шаблона
  const currentTemplate = templatesData[selectedTemplate]
  if (!currentTemplate) return null

  const currentTemplateCategories = currentTemplate.categories
  if (!currentTemplateCategories) return null

  // Поиск нужной категории
  const textCategory = currentTemplateCategories.find(
    (category) => category.label === 'howToBuy'
  )
  if (!textCategory) return null

  // Общие компоненты для всех шаблонов
  const commonComponents = (
    <>
      <HowToBuyImpressive />
      <EmberBlock />
      <Chart />
      <Marquee />
      <Gallery />
      <Tokenomics />
      <TokenomicDescriptionChart />
    </>
  )

  // Определяем, какой шаблон отображать
  const renderTemplateContent = () => {
    switch (isSelectTemplate) {
      case 'classic':
      case 'simple':
        return (
          <>
            <HowToBut />
            <Roandmap />
            {commonComponents}
          </>
        )
      case 'impressive':
        return (
          <>
            <RoadmapImpressive />
            {commonComponents}
          </>
        )
      default:
        return commonComponents
    }
  }

  return (
    <div className='flex flex-auto flex-col gap-4 p-4'>
      <div className='text-xl font-semibold'>
        {t(`builder.${selectedTemplate}.categories.${textCategory.label}`)}
      </div>

      {renderTemplateContent()}

      <div className='mt-auto'>
        <BuilderButton />
      </div>
    </div>
  )
}
