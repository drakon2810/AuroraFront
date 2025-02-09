import { AnimateCircle } from './AnimatedCircle'
import { RocketButton } from './Button'
import { RocketCopyButton } from './CopyButton'
import { Text } from '@/components/TemplateItems/Text'
import { TemplateContext } from '@/contexts/TemplateContext'
import { TemplateContextValues } from '@/types/contexts'
import { FC, useContext } from 'react'

interface RocketHeroProps {
  primaryColor: string
  secondaryColor: string
}

export const RocketHero: FC<RocketHeroProps> = ({
  primaryColor,
  secondaryColor
}) => {
  const { data } = useContext(TemplateContext) as TemplateContextValues
  if (!data) return

  return (
    <div className='mx-auto flex min-h-dvh w-full max-w-6xl flex-auto items-center gap-40 py-24'>
      <div className='flex max-w-lg flex-col gap-6'>
        <Text
          fieldName='heroTitle'
          defaultColor={primaryColor}
          className={{ text: 'tracking-wider' }}
          as='h1'
        />
        <Text fieldName='ticker' />
        <Text fieldName='description' placeholder='Description...' />
        <div className='flex flex-col gap-2'>
          <Text fieldName='contractAddressLabel' />
          <RocketCopyButton color={primaryColor} />
        </div>
        <div className='flex gap-4'>
          <RocketButton
            href={data.links?.buyNowLink?.url}
            className='px-8 py-4'
            style={{
              background: `linear-gradient(45deg, ${primaryColor}, ${secondaryColor})`
            }}
          >
            <Text fieldName='buyNow' />
          </RocketButton>
          <RocketButton
            href={data.links?.joinUsLink?.url}
            className='px-8 py-4'
          >
            <Text fieldName='joinUs' />
          </RocketButton>
        </div>
      </div>
      <AnimateCircle color={primaryColor} />
    </div>
  )
}
