import { StartItem } from '@/types'
import { useTranslation } from 'react-i18next'

export const StartItems = () => {
  const { t } = useTranslation()
  const items = t('start.items', { returnObjects: true }) as StartItem[]

  return items.map(({ title, list }) => (
    <div key={title} className='flex flex-col gap-2'>
      <h3>{title}</h3>
      <ul className='list-inside list-decimal'>
        {list.map((text) => (
          <li key={text}>{text}</li>
        ))}
      </ul>
    </div>
  ))
}
