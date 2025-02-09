import { RocketCard } from './Card'
import { Image } from '@/components/TemplateItems/Image'
import { Text } from '@/components/TemplateItems/Text'
import { FC } from 'react'

interface RocketMissionControlProps {
  primaryColor: string
  secondaryColor: string
}

export const RocketMissionControl: FC<RocketMissionControlProps> = ({
  primaryColor
}) => {
  return (
    <section className='bg-[#0a0a0a]/95 py-24'>
      <div className='mx-auto flex max-w-6xl flex-col items-center justify-center gap-12'>
        <Text
          fieldName='missionControlTitle'
          defaultColor={primaryColor}
          className={{ text: 'tracking-wider' }}
          as='h2'
        />
        <div className='flex w-full flex-wrap justify-center gap-4'>
          {['first', 'second', 'third'].map((item) => (
            <RocketCard
              key={item}
              className='max-w-[370px] flex-auto items-center'
            >
              <Image
                fieldName={`${item}ControlAvatar`}
                className={{ image: 'rounded-full object-contain' }}
              />
              <Text
                fieldName={`${item}ControlName`}
                defaultColor={primaryColor}
              />
              <Text
                fieldName={`${item}ControlJob`}
                defaultColor={primaryColor}
              />
            </RocketCard>
          ))}
        </div>
      </div>
    </section>
  )
}
