import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { TemplateEditorContext } from '@/contexts/TemplateEditorContext'
import { TemplateEditorContextValues } from '@/types/contexts'
import { TextData } from '@/types/templates'
import { useContext } from 'react'
import { HexColorPicker } from 'react-colorful'

export const EditorStroke = () => {
  const { activeSubCategoryData, updateField } = useContext(
    TemplateEditorContext
  ) as TemplateEditorContextValues

  const data = activeSubCategoryData as TextData
  if (!data) return

  return (
    <>
      <HexColorPicker
        color={data.strokeColor}
        onChange={(color) => {
          updateField(`${data.name}.strokeColor`, color)
        }}
      />
      <div className='flex items-center gap-4'>
        <Label>Width:</Label>
        <Slider
          defaultValue={[data.strokeWidth]}
          min={0.2}
          max={20}
          step={0.1}
          onValueChange={(value) =>
            updateField(`${data.name}.strokeWidth`, value[0])
          }
        />
      </div>
    </>
  )
}
