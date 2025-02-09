import { Button } from '@/components/Button'
import { TemplateCard } from '@/components/Cards/TemplateCard'
import { Section } from '@/components/Sections/Section'
import { Slider } from '@/components/Slider'
import { ChevronLeft } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export const Templates = () => {
  const [isSliderView, setIsSliderView] = useState(true)
  const { t } = useTranslation()

  const templates = t('templates.cards', { returnObjects: true })

  return (
    <Section className='container flex flex-col gap-16'>
      <div className='flex justify-between gap-4'>
        <Button to='/' className='flex items-center py-2 text-sm'>
          <ChevronLeft />
          <span>{t('templates.backButton')}</span>
        </Button>
        <Button
          className='flex items-center py-2 text-sm'
          onClick={() => setIsSliderView(!isSliderView)}
        >
          {t('templates.toggleViewButton')}(
          {isSliderView ? t('templates.gridView') : t('templates.sliderView')})
        </Button>
      </div>
      {isSliderView && (
        <Slider cards={Object(templates)} CardElement={TemplateCard} />
      )}
      {!isSliderView && (
        <div className='grid grid-cols-3 gap-12'>
          {Object.keys(templates).map((templateName) => (
            <TemplateCard key={templateName} name={templateName} />
          ))}
        </div>
      )}
    </Section>
  )
}
