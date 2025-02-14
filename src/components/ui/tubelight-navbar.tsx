import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'
import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { NavLink, useLocation } from 'react-router-dom'

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const { pathname } = useLocation()
  const { t } = useTranslation()

  return (
    <div
      className={cn(
        'fixed bottom-0 left-1/2 z-50 mb-6 -translate-x-1/2 sm:top-0 sm:pt-4',
        className
      )}
    >
      <div className='flex items-center gap-3 rounded-full border border-neutral-200 bg-white/5 px-1 py-1 shadow-lg backdrop-blur-lg dark:border-neutral-800 dark:bg-neutral-950/5'>
        {items.map((item) => {
          const Icon = item.icon
          const isActive = item.url === pathname

          return (
            <NavLink
              key={item.name}
              to={item.url}
              className={({ isActive }) =>
                cn(
                  'relative cursor-pointer rounded-full px-6 py-2 text-sm font-semibold transition-colors',
                  'text-neutral-950/80 hover:text-neutral-900 dark:text-neutral-50/80 dark:hover:text-neutral-50',
                  isActive &&
                    'bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-50'
                )
              }
            >
              <span className='hidden md:inline'>
                {t(`navLinks.${item.name}`)}
              </span>
              <span className='md:hidden'>
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId='lamp'
                  className='absolute inset-0 -z-10 w-full rounded-full bg-neutral-900/5 dark:bg-neutral-50/5'
                  initial={false}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 30
                  }}
                >
                  <div className='absolute -top-2 left-1/2 h-1 w-8 -translate-x-1/2 rounded-t-full bg-neutral-900 dark:bg-neutral-50'>
                    <div className='absolute -left-2 -top-2 h-6 w-12 rounded-full bg-neutral-900/20 blur-md dark:bg-neutral-50/20' />
                    <div className='absolute -top-1 h-6 w-8 rounded-full bg-neutral-900/20 blur-md dark:bg-neutral-50/20' />
                    <div className='absolute left-2 top-0 h-4 w-4 rounded-full bg-neutral-900/20 blur-sm dark:bg-neutral-50/20' />
                  </div>
                </motion.div>
              )}
            </NavLink>
          )
        })}
      </div>
    </div>
  )
}
