import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { TemplateEditorContext } from '@/contexts/TemplateEditorContext'
import { TemplateEditorContextValues } from '@/types/contexts'
import { ImageData } from '@/types/templates'
import { useContext } from 'react'
import { HexColorPicker } from 'react-colorful'

export const EditorBorder = () => {
  const { activeSubCategoryData, updateField } = useContext(
    TemplateEditorContext
  ) as TemplateEditorContextValues

  const data = activeSubCategoryData as ImageData
  if (!data) return

  return (
    <>
      <HexColorPicker
        color={data.borderColor}
        onChange={(color) => updateField(`${data.name}.borderColor`, color)}
      />
      <div className='flex items-center gap-4'>
        <Label>Width</Label>
        <Slider
          value={[data.borderWidth]}
          onValueChange={(value) =>
            updateField(`${data.name}.borderWidth`, value[0])
          }
        />
      </div>
    </>
  )
}
