import { Pumpfun, Telegram, Twitter } from '../Icons'
import { ExhibitionItemLink } from './ExhibitionItemLink'
import { TemplateData } from '@/types/templates'
import { FC } from 'react'

export const ExhibitionItemLinks: FC<{ data: TemplateData }> = ({ data }) => {
  const twitterURL = data.links.twitter.url
  const telegramURL = data.links.telegram.url
  const pumpfunURL = data.links.pumpfun.url

  return (
    <div className='z-50 -mt-5 flex w-full items-center gap-0.5 px-2'>
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
  )
}
