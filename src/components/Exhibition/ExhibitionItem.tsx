import { Pumpfun, Telegram, Twitter } from '../Icons'
import { PinContainer } from '../ui/3d-pin'
import { ExhibitionItemLink } from './ExhibitionItemLink'
import ImagePlaceholder from '@/assets/images/placeholder.webp'
import { dateLocales } from '@/consts'
import { getTemplateTokenImageSrc, getWebsiteURL } from '@/lib/utils'
import { TemplateData } from '@/types/templates'
import { formatDistance } from 'date-fns'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

const getDateLocale = (locale: string) => {
  if (dateLocales.hasOwnProperty(locale)) {
    return dateLocales[locale as keyof typeof dateLocales]
  }

  return dateLocales.en
}

interface ExhibitionItemProps {
  name: string
  data: TemplateData
  createdAt: string
}

export const ExhibitionItem: FC<ExhibitionItemProps> = ({
  name,
  data,
  createdAt
}) => {
  const tokenImageSrc = getTemplateTokenImageSrc(data, name)

  const { t, i18n } = useTranslation()
  const locale = getDateLocale(i18n.language)

  const date = new Date(createdAt)
  const timeAgo = formatDistance(date, new Date(), {
    addSuffix: true,
    locale
  })

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
          <span className='text-neutral-300'>
            {t('exhibition.createdLabel')} {timeAgo}
          </span>
        </div>
      </PinContainer>
      <div className='z-50 -mt-5 flex w-full items-center gap-0.5 px-3'>
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
