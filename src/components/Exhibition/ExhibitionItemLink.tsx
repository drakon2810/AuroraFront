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
      className='flex flex-auto items-center justify-center gap-1 rounded-md border border-neutral-500 bg-white p-1 font-medium dark:border-neutral-800 dark:bg-black'
    >
      {children}
    </a>
  )
}
