import { PricingCard } from '@/components/Cards/PricingCard'
import { Section } from '@/components/Sections/Section'
import { Slider } from '@/components/Slider'
import { useTranslation } from 'react-i18next'

export const Pricing = () => {
  const { t } = useTranslation()
  const pricingCards = t('pricing.cards', { returnObjects: true })

  return (
    <Section className='container flex items-center'>
      <Slider cards={Object(pricingCards)} CardElement={PricingCard} />
    </Section>
  )
}
