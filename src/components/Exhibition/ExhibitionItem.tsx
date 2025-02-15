import { PinContainer } from '../ui/3d-pin'
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

  return (
    <PinContainer title={getWebsiteURL(name)} href={getWebsiteURL(name)}>
      <div className='flex h-[18rem] w-[18rem] basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2'>
        <h3 className='!m-0 max-w-xs !pb-2 text-base font-bold capitalize text-slate-100'>
          {name}
        </h3>
        <img
          src={tokenImageSrc || ImagePlaceholder}
          className='h-60 w-full rounded-xl object-fill object-center'
        />
      </div>
    </PinContainer>
  )
}
