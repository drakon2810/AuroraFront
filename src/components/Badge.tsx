import { cn } from '@/lib/utils'
import { FC, ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  className?: string
}

export const Badge: FC<BadgeProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        'max-w-max rounded-full bg-black px-2 py-0.5 text-sm font-bold text-white dark:bg-white dark:text-black',
        className
      )}
    >
      {children}
    </div>
  )
}
