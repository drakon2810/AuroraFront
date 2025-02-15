import { Pumpfun, Telegram, Twitter } from '../Icons'
import { PinContainer } from '../ui/3d-pin'
import { ExhibitionItemLink } from './ExhibitionItemLink'
import ImagePlaceholder from '@/assets/images/placeholder.webp'
import { getTemplateTokenImageSrc, getWebsiteURL } from '@/lib/utils'
import { TemplateData } from '@/types/templates'
import { FC } from 'react'

interface ExhibitionItemProps {
  name: string
  data: TemplateData
}

export const ExhibitionItem: FC<ExhibitionItemProps> = ({ name, data }) => {
  const tokenImageSrc = getTemplateTokenImageSrc(data, name)

  const twitterURL = data.links.twitter.url
  const telegramURL = data.links.telegram.url
  const pumpfunURL = data.links.pumpfun.url

  return (
    <div className='flex flex-col items-center'>
      <PinContainer title={getWebsiteURL(name)} href={getWebsiteURL(name)}>
        <div className='flex w-max flex-col gap-4 p-2'>
          <h4 className='capitalize'>{name}</h4>
          <img
            src={tokenImageSrc || ImagePlaceholder}
            className='h-64 w-64 rounded-xl object-fill object-center'
          />
        </div>
      </PinContainer>
      <div className='flex items-center gap-2'>
        {twitterURL && (
          <ExhibitionItemLink href={twitterURL}>
            <Twitter size={18} />
            <span>Twitter</span>
          </ExhibitionItemLink>
        )}
        {telegramURL && (
          <ExhibitionItemLink href={telegramURL}>
            <Telegram size={16} />
            <span>Telegram</span>
          </ExhibitionItemLink>
        )}
        {pumpfunURL && (
          <ExhibitionItemLink href={pumpfunURL}>
            <Pumpfun size={16} />
            <span>Pump.fun</span>
          </ExhibitionItemLink>
        )}
      </div>
    </div>
  )
}
