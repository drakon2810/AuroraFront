import { RocketCard } from './Card'
import { Text } from '@/components/TemplateItems/Text'
import { FC } from 'react'

export const RocketRoadmap: FC<{ primaryColor: string }> = ({
  primaryColor
}) => {
  return (
    <section className='mx-auto flex max-w-6xl flex-col items-center justify-center gap-12 py-24'>
      <Text
        fieldName='missionTimelineTitle'
        defaultColor={primaryColor}
        className={{ text: 'tracking-wider' }}
        as='h2'
      />
      <div className='flex w-full flex-wrap justify-center gap-4'>
        {['first', 'second', 'third'].map((item) => (
          <RocketCard key={item} className='max-w-[370px] flex-auto'>
            <div
              className='max-w-max rounded-full px-4 py-2'
              style={{ background: primaryColor }}
            >
              <Text fieldName={`${item}TimelinePhaseTitle`} />
            </div>
            <Text fieldName={`${item}TimelineTitle`} />
            <Text fieldName={`${item}TimelineDescription`} />
            <Text fieldName={`${item}TimelineDate`} />
          </RocketCard>
        ))}
      </div>
    </section>
  )
}
