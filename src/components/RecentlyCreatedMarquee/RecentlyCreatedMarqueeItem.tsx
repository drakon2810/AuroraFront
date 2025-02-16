import { Card } from '../Cards/Card'
import ImagePlaceholder from '@/assets/images/placeholder.webp'
import { useWebsiteCard } from '@/hooks/useWebsiteCard'
import { WebsiteData } from '@/types'
import { FC } from 'react'
import { Link } from 'react-router-dom'

export const RecentlyCreatedMarqueeItem: FC<WebsiteData> = ({ ...website }) => {
  const { tokenImageSrc, websiteURL, createdLabel } = useWebsiteCard(website)

  return (
    <Card className='w-64 cursor-pointer p-4'>
      <Link to={websiteURL} target='_blank'>
        <div className='flex items-center gap-2'>
          <img
            src={tokenImageSrc || ImagePlaceholder}
            className='h-10 w-10 rounded-full'
            alt={website.name}
          />
          <h6 className='font-medium capitalize dark:text-white'>
            {website.name}
          </h6>
        </div>
        <span className='text-xs font-medium dark:text-neutral-400'>
          {createdLabel}
        </span>
      </Link>
    </Card>
  )
}
