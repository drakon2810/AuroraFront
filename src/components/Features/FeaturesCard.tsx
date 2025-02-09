import { Card } from '../Cards/Card'
import { Description } from '../Description'
import { featuresCardIcons } from '@/consts'
import { FC } from 'react'

interface FeaturesCardProps {
  title: string
  description: string
  iconName: string
}

export const FeaturesCard: FC<FeaturesCardProps> = ({
  title,
  description,
  iconName
}) => {
  const Icon = featuresCardIcons[iconName as keyof typeof featuresCardIcons]

  return (
    <Card>
      <div className='max-w-max rounded-xl bg-black p-3 text-white dark:bg-white dark:text-black'>
        <Icon size={28} />
      </div>
      <h4>{title}</h4>
      <Description className='max-w-xs'>{description}</Description>
    </Card>
  )
}
