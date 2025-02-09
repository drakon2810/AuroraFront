import { cn } from '@/lib/utils'
import { CSSProperties, FC, ReactNode } from 'react'

interface RocketButtonProps {
  children: ReactNode
  href: string
  className?: string
  style?: CSSProperties
}

export const RocketButton: FC<RocketButtonProps> = ({
  children,
  href,
  className,
  style
}) => {
  return (
    <a
      href={href}
      target='_blank'
      className={cn(
        'before:ease relative max-w-max overflow-hidden rounded-lg border border-neutral-600 bg-gradient-to-r from-neutral-500 from-5% to-neutral-800 px-6 py-2 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-full before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-neutral-500 hover:before:-translate-x-40',
        className
      )}
      style={style}
    >
      {children}
    </a>
  )
}
