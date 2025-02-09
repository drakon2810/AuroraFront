import { RocketCard } from './Card'
import { Text } from '@/components/TemplateItems/Text'
import { FC } from 'react'

export const RocketFAQ: FC<{ primaryColor: string }> = ({ primaryColor }) => {
  return (
    <section className='mx-auto flex max-w-6xl flex-col items-center justify-center gap-12 py-24'>
      <Text
        fieldName='FAQTitle'
        defaultColor={primaryColor}
        className={{ text: 'tracking-wider' }}
        as='h2'
      />
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
        {['first', 'second', 'third', 'fourth'].map((item) => (
          <RocketCard key={item} className='max-w-full'>
            <Text fieldName={`${item}Question`} defaultColor={primaryColor} />
            <Text fieldName={`${item}Answer`} />
          </RocketCard>
        ))}
      </div>
    </section>
  )
}
