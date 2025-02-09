import { TemplateItemError } from './Error'
import { templateSocialIcons } from '@/consts/templatesData'
import { TemplateContext } from '@/contexts/TemplateContext'
import { TemplateContextValues } from '@/types/contexts'
import { LinkData, TemplateData } from '@/types/templates'
import { FC, useContext } from 'react'

const getIcon = (name: string) => {
  if (templateSocialIcons.hasOwnProperty(name)) {
    return templateSocialIcons[name as keyof typeof templateSocialIcons]
  }

  return templateSocialIcons.default
}

export const Link: FC<{ fieldName: keyof TemplateData }> = ({ fieldName }) => {
  const { data } = useContext(TemplateContext) as TemplateContextValues
  if (!data) return <TemplateItemError />

  const fieldData = data.links[fieldName] as LinkData
  const iconSrc = getIcon(fieldData.name)

  return (
    <a
      href={fieldData.url}
      target='_blank'
      data-animation={fieldData.animation}
      className='template-element-animations relative'
      style={{
        transform: `rotate(${fieldData.rotation}deg)`,
        animationDuration: `${fieldData.animationDuration}ms`
      }}
    >
      <img
        src={iconSrc}
        className='rounded-full'
        width={fieldData.size}
        alt={fieldData.name}
      />
    </a>
  )
}
