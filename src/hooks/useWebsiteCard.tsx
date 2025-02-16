import {
  getDateLocale,
  getTemplateTokenImageSrc,
  getWebsiteURL
} from '@/lib/utils'
import { TemplateData } from '@/types/templates'
import { formatDistance } from 'date-fns'
import { useTranslation } from 'react-i18next'

export const useWebsiteCard = (website: {
  name: string
  data: TemplateData
  createdAt: string
}) => {
  const tokenImageSrc = getTemplateTokenImageSrc(website.data, website.name)

  const { t, i18n } = useTranslation()
  const locale = getDateLocale(i18n.language)

  const date = new Date(website.createdAt)
  const timeAgo = formatDistance(date, new Date(), {
    addSuffix: true,
    locale
  })

  const websiteURL = getWebsiteURL(website.name)

  return {
    tokenImageSrc,
    createdLabel: `${t('exhibition.createdLabel')} ${timeAgo}`,
    websiteURL
  }
}
