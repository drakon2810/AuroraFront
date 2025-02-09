import { Input } from '@/components/ui/input'
import { TemplateEditorContext } from '@/contexts/TemplateEditorContext'
import { TemplateEditorContextValues } from '@/types/contexts'
import { ImageData } from '@/types/templates'
import { useContext } from 'react'

export const EditorURL = () => {
  const { activeSubCategoryData, updateField } = useContext(
    TemplateEditorContext
  ) as TemplateEditorContextValues

  const data = activeSubCategoryData as ImageData
  if (!data) return

  return (
    <Input
      value={data.src}
      onChange={(e) => updateField(`${data.name}.src`, e.target.value)}
      placeholder={data?.placeholder}
    />
  )
}
