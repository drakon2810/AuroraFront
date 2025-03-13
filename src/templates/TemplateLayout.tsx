import { Image } from '@/components/TemplateItems/Image'
import { cn } from '@/lib/utils'
import { useStylesStore } from '@/store/useStulesStore'
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
  const { colorBackground, activeSize, overlayColor, overlayOpacity } =
    useStylesStore((state) => state)

  console.log(overlayOpacity)
  return (
    <div className='relative' style={{ backgroundColor: colorBackground }}>
      {/* Фоновое изображение, если нет цветного фона */}
      {!colorBackground && (
        <Image
          fieldName={backgroundFieldName ?? 'background'}
          className={{
            wrapper: 'absolute left-0 top-0 h-full w-full',
            image: 'object-cover'
          }}
        />
      )}

      {/* Наложение цвета поверх фона с прозрачностью */}
      {overlayColor && (
        <div
          className='absolute inset-0'
          style={{
            backgroundColor: `${overlayColor}${Math.round(overlayOpacity * 255)
              .toString(16)
              .padStart(2, '0')}`,
            mixBlendMode: 'multiply'
          }}
        />
      )}

      {/* Контент с эффектом blur */}
      <div
        className={cn(
          'relative z-10 p-8 pt-16',
          {
            'backdrop-blur-sm': activeSize === 'small',
            'backdrop-blur-md': activeSize === 'medium',
            'backdrop-blur-lg': activeSize === 'large'
          },
          className
        )}
      >
        {children}
      </div>
    </div>
  )
}
