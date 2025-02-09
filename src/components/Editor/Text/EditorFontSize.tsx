import { SizeUnitSelect } from '../SizeUnitSelect'
import { Input } from '@/components/ui/input'
import { Slider } from '@/components/ui/slider'
import { TemplateEditorContext } from '@/contexts/TemplateEditorContext'
import { TemplateEditorContextValues } from '@/types/contexts'
import { TextData } from '@/types/templates'
import { useContext } from 'react'

export const EditorFontSize = () => {
  const { activeSubCategoryData, updateField } = useContext(
    TemplateEditorContext
  ) as TemplateEditorContextValues

  const data = activeSubCategoryData as TextData
  if (!data) return

  return (
    <>
      <div className='flex items-center gap-2'>
        <Input
          type='number'
          min={10}
          max={300}
          value={data.fontSizeValue}
          onChange={(e) =>
            updateField(`${data.name}fontSizeValue`, e.target.value)
          }
        />
        <SizeUnitSelect />
      </div>
      <Slider
        defaultValue={[data.fontSizeValue]}
        min={10}
        max={300}
        onValueChange={(value) =>
          updateField(`${data.name}.fontSizeValue`, value[0])
        }
      />
    </>
  )
}
