import { Image } from '@/components/TemplateItems/Image'
import { cn } from '@/lib/utils'
import { FC, ReactNode } from 'react'

interface TemplateLayoutProps {
  children: ReactNode
  className?: string
  backgroundFieldName?: string
}

export const TemplateLayout: FC<TemplateLayoutProps> = ({
  children,
  className,
  backgroundFieldName
}) => {
  return (
    <div className='relative'>
      <div
        className={cn('relative z-10 p-8 pt-16 backdrop-blur-lg', className)}
      >
        {children}
      </div>
      <Image
        fieldName={backgroundFieldName ?? 'background'}
        className={{
          wrapper: 'absolute left-0 top-0 h-full w-full',
          image: 'object-cover'
        }}
      />
    </div>
  )
}
