import { Card } from '../Cards/Card'
import { Button } from '../ui/button'
import { ChangeDomain } from './ChangeDomain'
import { DeleteWebsite } from './DeleteWebsite'
import ImagePlaceholder from '@/assets/images/placeholder.webp'
import { getTemplateTokenImageSrc } from '@/lib/utils'
import { TemplateData } from '@/types/templates'
import { ExternalLink } from 'lucide-react'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

interface WebsitesItemsProps {
  name: string
  template: string
  data: TemplateData
}

export const WebsitesItem: FC<WebsitesItemsProps> = ({
  name,
  template,
  data
}) => {
  const { t } = useTranslation()

  const { protocol, host } = window.location
  const websiteURL = `${protocol}//${name}.${host}`

  const src = getTemplateTokenImageSrc(data, name)

  return (
    <li className='w-full'>
      <Card className='flex w-full flex-row items-center justify-between gap-4 p-4'>
        <div className='flex items-center justify-between gap-4'>
          <div className='flex items-center gap-4'>
            <img
              src={src || ImagePlaceholder}
              className='h-12 w-12 rounded-full bg-neutral-500'
            />
            <div className='flex flex-col'>
              <h4 className='flex gap-2 text-2xl leading-none'>
                <span>{name}</span>
                <a
                  href={websiteURL}
                  target='_blank'
                  className='text-neutral-400 transition-colors duration-300 hover:text-black dark:hover:text-white'
                >
                  <ExternalLink size={18} />
                </a>
              </h4>
              <span className='text-sm text-neutral-400'>{template}</span>
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <Button asChild>
              <Link to={`/edit?name=${name}&template=${template}`}>
                {t('account.editButton')}
              </Link>
            </Button>
            <ChangeDomain name={name} />
            <DeleteWebsite name={name} />
          </div>
        </div>
      </Card>
    </li>
  )
}
