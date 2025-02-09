import { FeaturesCard } from './FeaturesCard'
import { useTranslation } from 'react-i18next'

export const FeaturesCards = () => {
  const { t } = useTranslation()
  const featuresCards = t('home.features.cards', { returnObjects: true })

  return (
    <div className='flex gap-4'>
      {Object.values(featuresCards).map(({ title, description, iconName }) => (
        <FeaturesCard
          key={title}
          title={title}
          description={description}
          iconName={iconName}
        />
      ))}
    </div>
  )
}
