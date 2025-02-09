import { ContractAddressButton } from '../ContractAddressButton'
import { SocialLinks } from '../SocialLinks'
import { TemplateLayout } from '../TemplateLayout'
import { Image } from '@/components/TemplateItems/Image'
import { Text } from '@/components/TemplateItems/Text'
import { FC } from 'react'

export const Simple: FC = () => {
  return (
    <TemplateLayout className='flex h-dvh w-full flex-col'>
      <SocialLinks visibility='header' className='self-end' />
      <div className='mx-auto flex w-full max-w-5xl flex-auto flex-wrap items-center justify-center gap-12'>
        <Image fieldName='tokenImage' className={{ image: 'rounded-xl' }} />
        <div className='flex flex-auto flex-col items-center'>
          <Text fieldName='ticker' as='h1' placeholder='Ticker' />
          <ContractAddressButton className='w-full' />
          <hr className='my-4 w-full border border-white' />
          <SocialLinks />
        </div>
      </div>
    </TemplateLayout>
  )
}
