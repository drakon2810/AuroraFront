import { PinContainer } from '../ui/3d-pin'
import { ExhibitionItemLinks } from './ExhibitionItemLinks'
import ImagePlaceholder from '@/assets/images/placeholder.webp'
import { useWebsiteCard } from '@/hooks/useWebsiteCard'
import { WebsiteData } from '@/types'
import { FC } from 'react'

export const ExhibitionItem: FC<WebsiteData> = ({ ...website }) => {
  const { tokenImageSrc, websiteURL, createdLabel } = useWebsiteCard(website)

  return (
    <div className='flex flex-col items-center'>
      <PinContainer title={websiteURL} href={websiteURL}>
        <div className='flex w-max flex-col gap-4 p-2'>
          <h4 className='capitalize'>{website.name}</h4>
          <img
            src={tokenImageSrc || ImagePlaceholder}
            className='h-64 w-64 rounded-xl object-fill object-center'
          />
          <span className='text-neutral-500 dark:text-neutral-300'>
            {createdLabel}
          </span>
        </div>
      </PinContainer>
      <ExhibitionItemLinks data={website.data} />
    </div>
  )
}
