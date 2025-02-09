import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import { Link, LinkProps } from 'react-router-dom'

const commonStyles =
  'text-center disabled:opacity-70 disabled:hover:scale-100 px-4 py-3 font-bold text-lg rounded-full hover:scale-105 transiton-all duration-200'

const styles = {
  primary: 'bg-black text-white dark:bg-white dark:text-black',
  outline:
    'border-2 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black'
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

type Props = {
  children: ReactNode
  className?: string
  to?: string
  href?: string
  variant?: keyof typeof styles
} & (ButtonProps | LinkProps)

export const Button: FC<Props> = ({
  children,
  variant = 'primary',
  className,
  ...props
}) => {
  if (props.href) {
    return (
      <a
        {...(props as LinkProps)}
        className={cn(styles[variant], commonStyles, className)}
      >
        {children}
      </a>
    )
  }

  if (props.to) {
    return (
      <Link
        {...(props as LinkProps)}
        className={cn(styles[variant], commonStyles, className)}
      >
        {children}
      </Link>
    )
  }

  return (
    <button
      {...(props as ButtonProps)}
      className={cn(styles[variant], commonStyles, className)}
    >
      {children}
    </button>
  )
}
