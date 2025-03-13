import { TemplateItemError } from './Error'
import { TemplateContext } from '@/contexts/TemplateContext'
import { useSlideshow } from '@/hooks/useSlideshow'
import { cn, getSubdomain, getUploadedImageURL } from '@/lib/utils'
import { TemplateContextValues } from '@/types/contexts'
import { ImageData } from '@/types/templates'
import { motion, AnimatePresence } from 'motion/react'
import { FC, useContext } from 'react'
import { useSearchParams } from 'react-router-dom'

interface ImageProps {
  fieldName: string
  className?: {
    wrapper?: string
    image?: string
    width?: string
    height?: string
  }
}

const subdomain = getSubdomain()

export const Image: FC<ImageProps> = ({ fieldName, className }) => {
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

  if (!fieldData) return <TemplateItemError />

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
            width: `${fieldData.width}${fieldData.sizeUnit}`,
            height:
              fieldData.height === 'auto'
                ? fieldData.height
                : `${fieldData.height}${fieldData.sizeUnit}`
          }}
        />
      </AnimatePresence>
    </div>
  )
}
