import { templates } from '@/consts/templates'
import { TemplateContext } from '@/contexts/TemplateContext'
import { TemplateContextValues } from '@/types/contexts'
import { useContext } from 'react'

export const Website = () => {
  const { selectedTemplate } = useContext(
    TemplateContext
  ) as TemplateContextValues
  const { protocol, host } = window.location
  const homeURL = `${protocol}//${host.split('.').slice(1).join('.')}`

  if (!selectedTemplate) window.location.href = homeURL

  const TemplateElement = templates[selectedTemplate]
  return <TemplateElement />
}
