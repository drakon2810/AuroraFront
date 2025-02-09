import { cn } from '@/lib/utils'
import { FC, ReactNode } from 'react'

interface RocketCardProps {
  children: ReactNode
  className?: string
}

export const RocketCard: FC<RocketCardProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        'flex min-w-64 max-w-96 flex-col gap-4 rounded-xl border border-neutral-700 bg-neutral-800 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-[0px_0px_40px_8px_rgba(255,_255,_255,_0.1)]',
        className
      )}
    >
      {children}
    </div>
  )
}
