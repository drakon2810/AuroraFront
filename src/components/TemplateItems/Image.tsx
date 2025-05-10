import { TemplateItemError } from './Error'
import { cursor } from '@/components/cursor/cursor'
import { TemplateContext } from '@/contexts/TemplateContext'
import { useSlideshow } from '@/hooks/useSlideshow'
import { cn, getSubdomain, getUploadedImageURL } from '@/lib/utils'
import { useFallingImagesStore } from '@/store/useWidgetsStore'
import { TemplateContextValues } from '@/types/contexts'
import { ImageData } from '@/types/templates'
import { motion, AnimatePresence } from 'motion/react'
import { FC, useContext } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { useSearchParams } from 'react-router-dom'

interface ImageProps {
  fieldName: string
  style?: any
  className?: {
    wrapper?: string
    image?: string
    width?: string
    height?: string
  }
  isIconStep?: boolean
}

const subdomain = getSubdomain()

export const Image: FC<ImageProps> = ({ fieldName, className, isIconStep }) => {
  const { data } = useContext(TemplateContext) as TemplateContextValues
  const fieldData = data?.[fieldName] as ImageData

  const [searchParams] = useSearchParams()
  const websiteName = subdomain ?? searchParams.get('name') ?? ''

  const imageURL = fieldData?.src
  const uploadedImageURL = getUploadedImageURL(fieldName, websiteName, data)
  const slideshowItems = fieldData?.slideshowItems ?? []

  const items = [imageURL, uploadedImageURL, ...slideshowItems].filter(Boolean)

  const currentImageIndex = useSlideshow(
    items.length,
    fieldData?.slideshowInterval
  )
  const { customPointer } = useFallingImagesStore((state) => state)

  if (!fieldData) return <TemplateItemError />

  const imageLink = fieldData.link || '#'
  const secondImageLink = fieldData.secondLink || '#'

  const getPointerValue = (pointerConfig: number | string | null) => {
    if (pointerConfig === null) return null
    if (typeof pointerConfig === 'number') return cursor[pointerConfig]
    return pointerConfig
  }

  const elementToDataUrl = (element: React.ReactElement) => {
    const svgString = renderToStaticMarkup(element)
    return `data:image/svg+xml;utf8,${encodeURIComponent(svgString)}`
  }

  const currentPointer = getPointerValue(customPointer)

  const pointerStyle = currentPointer
    ? {
        cursor: `url("${
          typeof currentPointer === 'string'
            ? currentPointer
            : elementToDataUrl(currentPointer)
        }"), pointer`
      }
    : {}

  return (
    <div
      data-animation={fieldData.animation}
      className={cn(
        'template-element-animations relative max-w-full',
        className?.wrapper
      )}
      style={{
        transform: `rotate(${fieldData.rotation}deg)`,
        opacity: fieldData.opacity / 100,
        animationDuration: `${fieldData.animationDuration}ms`
      }}
    >
      <AnimatePresence mode='popLayout'>
        <a
          href={imageLink}
          target='_blank'
          rel='noopener noreferrer'
          style={pointerStyle}
        >
          <motion.img
            key={currentImageIndex}
            src={items[currentImageIndex] || fieldData.imagePlaceholder}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={className?.image}
            style={{
              borderColor: fieldData.borderColor,
              borderWidth: `${fieldData.borderWidth}px`,
              width:
                className?.width || `${fieldData.width}${fieldData.sizeUnit}`,
              height:
                fieldData.height === 'auto'
                  ? fieldData.height
                  : className?.height ||
                    `${fieldData.height}${fieldData.sizeUnit}`,
              objectFit: 'cover'
            }}
          />
        </a>

        {isIconStep && fieldData.imageSecondPlaceholder && (
          <a
            href={secondImageLink}
            target='_blank'
            rel='noopener noreferrer'
            style={pointerStyle}
          >
            <motion.img
              key='secondImage'
              src={fieldData.imageSecondPlaceholder}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className={className?.image}
              style={{
                borderColor: fieldData.borderColor,
                borderWidth: `${fieldData.borderWidth}px`,
                width:
                  className?.width || `${fieldData.width}${fieldData.sizeUnit}`,
                height:
                  fieldData.height === 'auto'
                    ? fieldData.height
                    : className?.height ||
                      `${fieldData.height}${fieldData.sizeUnit}`,
                objectFit: 'cover'
              }}
            />
          </a>
        )}
      </AnimatePresence>
    </div>
  )
}
