import { Image } from '@/components/TemplateItems/Image'
import { cursor } from '@/components/cursor/cursor'
import { cn } from '@/lib/utils'
import { useStylesStore } from '@/store/useStulesStore'
import { useFallingImagesStore } from '@/store/useWidgetsStore'
import { FC, ReactNode } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

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
  const {
    colorBackground,
    activeSize,
    overlayColor,
    overlayOpacity,
    backgroundGradient
  } = useStylesStore((state) => state)

  const { customCursor } = useFallingImagesStore((state) => state)

  const getCursorValue = (cursorConfig: number | string | null) => {
    if (cursorConfig === null) return null
    if (typeof cursorConfig === 'number') return cursor[cursorConfig]
    return cursorConfig
  }

  const elementToDataUrl = (element: React.ReactElement) => {
    const svgString = renderToStaticMarkup(element)
    return `data:image/svg+xml;utf8,${encodeURIComponent(svgString)}`
  }

  const currentCursor = getCursorValue(customCursor)

  // Применение фона в зависимости от условий
  const backgroundStyle = colorBackground
    ? { backgroundColor: colorBackground }
    : backgroundGradient
      ? { backgroundImage: backgroundGradient }
      : {}

  const cursorStyle = currentCursor
    ? {
        cursor: `url("${
          typeof currentCursor === 'string'
            ? currentCursor
            : elementToDataUrl(currentCursor)
        }"), auto`
      }
    : {}

  // Если задан и цвет фона, и градиент, то предпочтение отдается градиенту
  const isBackgroundImageAvailable = !colorBackground && !backgroundGradient

  return (
    <div className='relative' style={{ ...backgroundStyle, ...cursorStyle }}>
      {/* Фоновое изображение, если нет фона или градиента */}
      {isBackgroundImageAvailable && (
        <Image
          fieldName={backgroundFieldName ?? 'background'}
          className={{
            wrapper: 'absolute left-0 top-0 h-full w-full',
            image: 'object-cover'
          }}
        />
      )}

      {/* Наложение с цветом и прозрачностью */}
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
