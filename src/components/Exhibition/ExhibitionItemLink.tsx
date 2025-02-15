import { FC, ReactNode } from 'react'

interface ExhibitionItemLinkProps {
  href: string
  children: ReactNode
}

export const ExhibitionItemLink: FC<ExhibitionItemLinkProps> = ({
  href,
  children
}) => {
  return (
    <a
      href={href}
      target='_blank'
      className='flex items-center gap-1 rounded-md border-2 border-neutral-500 px-1 py-px'
    >
      {children}
    </a>
  )
}
