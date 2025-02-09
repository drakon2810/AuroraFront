import { TemplateEditorContext } from '@/contexts/TemplateEditorContext'
import { TemplateEditorContextValues } from '@/types/contexts'
import { TextData } from '@/types/templates'
import { useContext } from 'react'
import { HexColorPicker } from 'react-colorful'

export const EditorColor = () => {
  const { activeSubCategoryData, updateField } = useContext(
    TemplateEditorContext
  ) as TemplateEditorContextValues

  const data = activeSubCategoryData as TextData
  if (!data) return

  return (
    <HexColorPicker
      color={data.color}
      onChange={(color) => updateField(`${data.name}.color`, color)}
    />
  )
}
