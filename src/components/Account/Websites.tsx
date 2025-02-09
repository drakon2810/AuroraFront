import { WebsitesItem } from './WebsitesItem'
import { Website } from '@/types/api'
import { FC } from 'react'

export const Websites: FC<{ data: Website[] }> = ({ data }) => {
  return (
    <ul className='flex w-full flex-col gap-4'>
      {data.map(({ name, template, data }) => (
        <WebsitesItem key={name} name={name} template={template} data={data} />
      ))}
    </ul>
  )
}
