import { cn } from '@/lib/utils'
import { FC, ReactNode } from 'react'
import { NavLink as NavigationLink } from 'react-router-dom'

interface NavLinkProps {
  children: ReactNode
  to: string
  className?: string
}

export const NavLink: FC<NavLinkProps> = ({
  children,
  to,
  className,
  ...props
}) => {
  return (
    <NavigationLink
      {...props}
      to={to}
      className={cn(
        'capitalize text-neutral-700 transition-colors duration-200 hover:text-black dark:text-neutral-200 dark:hover:text-white',
        className
      )}
    >
      {children}
    </NavigationLink>
  )
}
