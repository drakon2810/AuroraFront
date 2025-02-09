import { TemplateItemError } from './Error'
import { TemplateContext } from '@/contexts/TemplateContext'
import { cn, loadFonts } from '@/lib/utils'
import { TemplateContextValues } from '@/types/contexts'
import { TemplateData, TextData } from '@/types/templates'
import { CSSProperties, FC, useContext } from 'react'
import ContentEditable from 'react-contenteditable'

interface TextProps {
  fieldName: keyof TemplateData
  placeholder?: string
  as?: string
  defaultColor?: string
  className?: {
    wrapper?: string
    text?: string
  }
  style?: CSSProperties
}

export const Text: FC<TextProps> = ({
  fieldName,
  placeholder = '',
  as = 'span',
  defaultColor,
  className,
  style
}) => {
  const { data, updateField } = useContext(
    TemplateContext
  ) as TemplateContextValues

  const fieldData = data?.[fieldName] as TextData
  if (!fieldData) return <TemplateItemError />

  loadFonts([fieldData.fontFamily])

  return (
    <div
      data-animation={fieldData.animation}
      className={cn(
        'template-element-animations max-w-max',
        className?.wrapper
      )}
      style={{
        textAlign: fieldData.align,
        transform: `rotate(${fieldData.rotation}deg)`,
        animationDuration: `${fieldData.animationDuration}ms`
      }}
    >
      <ContentEditable
        disabled={!updateField}
        html={fieldData.value || placeholder}
        tagName={as}
        onChange={(e) => {
          if (!updateField) return
          updateField(`${fieldName}.value`, e.currentTarget.innerText)
        }}
        className={className?.text}
        style={{
          fontFamily: `'${fieldData.fontFamily}'`,
          fontSize: fieldData.fontSizeValue + fieldData.sizeUnit,
          color: fieldData.color || defaultColor,
          textDecoration: fieldData.styles
            .filter((style) => ['underline', 'line-through'].includes(style))
            .join(' '),
          fontStyle: fieldData.styles.includes('italic') && 'italic',
          fontWeight: fieldData.styles.includes('bold') && 'bold',
          WebkitTextStroke: `${fieldData.strokeWidth}px ${fieldData.strokeColor}`,
          backgroundColor: fieldData.backgroundColor,
          ...style
        }}
      />
    </div>
  )
}
