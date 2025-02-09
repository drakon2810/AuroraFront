import { Input } from '@/components/ui/input'
import { TemplateEditorContext } from '@/contexts/TemplateEditorContext'
import { TemplateEditorContextValues } from '@/types/contexts'
import { TextData } from '@/types/templates'
import { useContext } from 'react'

export const EditorContent = () => {
  const { activeSubCategoryData, updateField } = useContext(
    TemplateEditorContext
  ) as TemplateEditorContextValues

  const data = activeSubCategoryData as TextData
  if (!data) return

  return (
    <Input
      value={data.value}
      onChange={(e) => updateField(`${data.name}.value`, e.target.value)}
    />
  )
}
