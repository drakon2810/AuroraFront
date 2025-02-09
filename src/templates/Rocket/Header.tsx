import { RocketButton } from './Button'
import { Text } from '@/components/TemplateItems/Text'
import { TemplateContext } from '@/contexts/TemplateContext'
import { TemplateContextValues } from '@/types/contexts'
import { FC, useContext } from 'react'

export const RocketHeader: FC = () => {
  const { data } = useContext(TemplateContext) as TemplateContextValues
  if (!data) return

  return (
    <header className='sticky top-0 z-10 border-b border-neutral-800 bg-[#0a0a0a]/95 backdrop-blur-md'>
      <div className='mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-3'>
        <Text fieldName='ticker' />
        <RocketButton href={data.links?.buyTickerLink?.url}>
          <Text fieldName='buyTicker' />
        </RocketButton>
      </div>
    </header>
  )
}
