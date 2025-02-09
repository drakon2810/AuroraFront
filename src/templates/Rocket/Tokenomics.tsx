import { RocketCard } from './Card'
import { Text } from '@/components/TemplateItems/Text'
import { FC } from 'react'

interface RocketTokenomicsProps {
  primaryColor: string
  secondaryColor: string
}

export const RocketTokenomics: FC<RocketTokenomicsProps> = ({
  primaryColor,
  secondaryColor
}) => {
  return (
    <section className='bg-[#0a0a0a]/95 py-24'>
      <div className='mx-auto flex max-w-6xl flex-col items-center justify-center gap-12'>
        <Text
          fieldName='tokenomicsTitle'
          defaultColor={primaryColor}
          className={{ text: 'tracking-wider' }}
          as='h2'
        />
        <div className='flex flex-wrap justify-center gap-4'>
          {['first', 'second', 'third', 'fourth'].map((item) => (
            <RocketCard key={item} className='items-center'>
              <Text
                fieldName={`${item}TokenomicsIcon`}
                defaultColor={primaryColor}
                style={{ filter: `drop-shadow(0 0 10px ${primaryColor})` }}
              />
              <Text
                fieldName={`${item}TokenomicsTitle`}
                defaultColor={primaryColor}
              />
              <Text
                fieldName={`${item}TokenomicsValue`}
                defaultColor={secondaryColor}
              />
            </RocketCard>
          ))}
        </div>
      </div>
    </section>
  )
}
