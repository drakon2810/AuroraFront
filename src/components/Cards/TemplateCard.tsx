import { Button } from '../Button'
import { Description } from '../Description'
import { Solana } from '../Icons'
import { Card } from './Card'
import { templatesData } from '@/consts/templatesData'
import { TemplateName } from '@/types/templates'
import { Check } from 'lucide-react'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useSearchParams } from 'react-router-dom'

export const TemplateCard: FC<{ name: string }> = ({ name }) => {
  const { price, preview } = templatesData[name as TemplateName]
  const { t } = useTranslation()

  const label = t(`templates.cards.${name}.label`)
  const shortDescription = t(`templates.cards.${name}.shortDescription`)
  const features = Object.values(
    t(`templates.cards.${name}.features`, { returnObjects: true })
  )

  const [searchParams] = useSearchParams()
  const params = new URLSearchParams(searchParams)
  params.set('template', name)
  params.set('category', 'editor')

  return (
    <Card className='group relative justify-between overflow-hidden'>
      <div className='flex flex-col gap-4'>
        <div className='h-48 overflow-hidden rounded-md'>
          <img
            className='min-h-full object-cover object-top group-hover:animate-scroll'
            src={preview}
          />
        </div>
        <h4>{label}</h4>
        <Description>{shortDescription}</Description>
        <ul className='flex flex-col gap-1 pb-4'>
          {features.map((feature) => (
            <li key={feature} className='flex items-center gap-2'>
              <Check size={20} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className='flex flex-col gap-4'>
        <div className='flex items-center gap-2'>
          <span className='text-lg font-medium'>
            {t('templates.price')}: {price} sol
          </span>
          <Solana />
        </div>
        <Button to={`/create?${params.toString()}`}>
          {t('templates.selectButton')}
        </Button>
      </div>
    </Card>
  )
}
