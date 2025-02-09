import { cn } from '@/lib/utils'
import { FC, PropsWithChildren } from 'react'

export const Description: FC<PropsWithChildren<{ className?: string }>> = ({
  children,
  className
}) => {
  return (
    <p
      className={cn(
        'text-sm text-neutral-700 dark:text-neutral-200 sm:text-base md:text-lg',
        className
      )}
    >
      {children}
    </p>
  )
}
