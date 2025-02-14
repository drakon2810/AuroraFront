import { MagicCard } from '../magicui/magic-card'
import { ThemeContext } from '@/contexts/ThemeContext'
import { cn } from '@/lib/utils'
import { ThemeContextValues } from '@/types/contexts'
import { FC, ReactNode, useContext } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
}

export const Card: FC<CardProps> = ({ children, className }) => {
  const { theme } = useContext(ThemeContext) as ThemeContextValues

  return (
    <MagicCard
      gradientColor={theme === 'dark' ? '#5e5e5e' : '#bdbbbb'}
      gradientOpacity={0.6}
      gradientSize={130}
      className={cn(
        'flex w-full max-w-96 flex-col gap-4 rounded-2xl border border-neutral-300 bg-neutral-200 p-8 dark:border-neutral-500 dark:bg-neutral-700',
        className
      )}
    >
      {children}
    </MagicCard>
  )
}
