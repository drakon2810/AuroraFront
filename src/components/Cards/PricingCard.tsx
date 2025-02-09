import { Button } from '../Button'
import { Card } from './Card'
import { pricingCards } from '@/consts'
import { cn } from '@/lib/utils'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

export const PricingCard: FC<{ name: string }> = ({ name }) => {
  const { t } = useTranslation()

  const { price, oldPrice, path } = pricingCards[name]

  const label = t(`pricing.cards.${name}.label`)
  const features = Object.values(
    t(`pricing.cards.${name}.features`, { returnObjects: true })
  )

  return (
    <Card className='w-80'>
      <div className='flex flex-col gap-4'>
        <h4 className='text-center'>{label}</h4>
        <div className='flex flex-col text-center text-4xl font-bold tracking-wider'>
          {oldPrice && (
            <span className='text-nowrap line-through decoration-red-500'>
              {oldPrice} sol
            </span>
          )}
          <span
            className={cn('text-nowrap', oldPrice && 'text-lg text-red-500')}
          >
            {price} sol
          </span>
        </div>
        <ul className='flex list-inside list-disc flex-col gap-4'>
          {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
        <Button to={path} className='mt-4 w-full py-2'>
          {t('pricing.createButton')}
        </Button>
      </div>
    </Card>
  )
}
