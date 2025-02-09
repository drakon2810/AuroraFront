import { cn } from '@/lib/utils'
import { FC, ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
}

export const Card: FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        'flex w-96 flex-col gap-4 rounded-2xl border border-neutral-300 bg-neutral-200 p-8 dark:border-neutral-500 dark:bg-neutral-700',
        className
      )}
    >
      {children}
    </div>
  )
}
