import { TemplateItemError } from '@/components/TemplateItems/Error'
import { Image } from '@/components/TemplateItems/Image'
import { Text } from '@/components/TemplateItems/Text'
import { TemplateContext } from '@/contexts/TemplateContext'
import { useStylesStore } from '@/store/useStulesStore'
import { TemplateContextValues } from '@/types/contexts'
import { FC, useContext } from 'react'

export const ClassicHowToBuy: FC = () => {
  const { data } = useContext(TemplateContext) as TemplateContextValues
  const { secondary, colorSec } = useStylesStore((state) => state)

  if (!data) return <TemplateItemError />

  return (
    <div className='flex flex-col items-center gap-4 pt-16'>
      <h2 className='tracking-wide text-white'>How to Buy</h2>
      <div className='flex flex-wrap justify-center gap-4'>
        {['first', 'second', 'third'].map((name, index) => (
          <div
            key={name}
            className='flex max-w-72 flex-col items-center justify-between gap-8 rounded-xl bg-white p-6 text-black'
          >
            <div className='flex flex-col items-center gap-2'>
              <h3 className='text-3xl'>Step {index + 1}</h3>
              <Text
                fieldName={`${name}Step`}
                as='p'
                style={{ fontFamily: secondary, color: colorSec }}
              />
            </div>
            <Image
              fieldName={`${name}StepImage`}
              className={{ image: 'rounded-xl' }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
