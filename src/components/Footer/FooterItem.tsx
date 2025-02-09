import { FC, PropsWithChildren } from 'react'

export const FooterItem: FC<PropsWithChildren<{ title: string }>> = ({
  children,
  title
}) => {
  return (
    <div className='max-w-[33%]'>
      <h5 className='mb-4'>{title}</h5>
      {children}
    </div>
  )
}
