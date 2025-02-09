import { FontsPicker } from '@/components/FontsPicker/FontsPicker'
import { TemplateEditorContext } from '@/contexts/TemplateEditorContext'
import { TemplateEditorContextValues } from '@/types/contexts'
import { TextData } from '@/types/templates'
import { useContext } from 'react'

export const EditorFontsPicker = () => {
  const { activeSubCategoryData, updateField } = useContext(
    TemplateEditorContext
  ) as TemplateEditorContextValues

  const data = activeSubCategoryData as TextData
  if (!data) return

  return (
    <FontsPicker
      onChange={(value) => updateField(`${data.name}.fontFamily`, value)}
    />
  )
}
