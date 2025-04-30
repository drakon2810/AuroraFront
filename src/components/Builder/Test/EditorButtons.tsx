import { EmberBlock } from '../../ui/blocks/EmbedBlock'
import { BuilderButton } from '../BuilderButton'
import { Chart } from '@/components/ui/blocks/Chart'
import { FaqImpressiw } from '@/components/ui/blocks/FaqImpressiw'
import { Gallery } from '@/components/ui/blocks/Gallery'
import { HowToBut } from '@/components/ui/blocks/HowToBuy'
import { HowToBuyImpressive } from '@/components/ui/blocks/HowToBuyImpressive'
import { JoinTheMission } from '@/components/ui/blocks/JoinTheMission'
import { Marquee } from '@/components/ui/blocks/Marquee'
import { MissionConroll } from '@/components/ui/blocks/MissionConroll'
import { MissionFaq } from '@/components/ui/blocks/MissionFaq'
import { MissionTimeline } from '@/components/ui/blocks/MissionTimeline'
import { Roandmap } from '@/components/ui/blocks/Roandmap'
import { RoadmapImpressive } from '@/components/ui/blocks/RoandmapImpressiw'
import { TokenomicDescriptionChart } from '@/components/ui/blocks/TokenDistribytionChart'
import { Tokenomics } from '@/components/ui/blocks/Tokenomics'
import { TokenomicsRocet } from '@/components/ui/blocks/TokenomicsRocet'
import { templatesData } from '@/consts/templatesData'
import { TemplateContext } from '@/contexts/TemplateContext'
import { TemplateContextValues } from '@/types/contexts'
import { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'

const useQuery = () => {
  return new URLSearchParams(useLocation().search)
}

export const EditorButtons = () => {
  const { selectedTemplate } = useContext(
    TemplateContext
  ) as TemplateContextValues
  const { t } = useTranslation()
  const query = useQuery()

  const templateFromURL = query.get('template')

  const currentTemplate = templatesData[selectedTemplate]
  if (!currentTemplate) return null

  const currentTemplateCategories = currentTemplate.categories
  if (!currentTemplateCategories) return null

  const textCategory = currentTemplateCategories.find(
    (category) => category.label === 'howToBuy'
  )

  if (!textCategory) return null

  const commonComponents = (
    <>
      <EmberBlock />
      <Chart />
      <Marquee />
      <Gallery />

      <TokenomicDescriptionChart />
    </>
  )

  const renderTemplateContent = () => {
    switch (templateFromURL) {
      case 'classic':
      case 'simple':
        return (
          <>
            <HowToBut />
            <Roandmap />
            <Tokenomics />
            {commonComponents}
          </>
        )
      case 'impressive':
        return (
          <>
            <HowToBuyImpressive />
            <RoadmapImpressive />
            <FaqImpressiw />
            <Tokenomics />
            {commonComponents}
          </>
        )
      case 'rocket':
        return (
          <>
            <TokenomicsRocet />
            <MissionTimeline />
            <MissionConroll />
            <MissionFaq />
            <JoinTheMission />
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
