import { cn } from '@/lib/utils'
import { FC, HTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  className?: string
}

export const Button: FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button className={cn('button', className)} {...props}>
      {children}
    </button>
  )
}
