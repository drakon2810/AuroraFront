import { SizeUnitSelect } from '../SizeUnitSelect'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { TemplateEditorContext } from '@/contexts/TemplateEditorContext'
import { TemplateEditorContextValues } from '@/types/contexts'
import { ImageData } from '@/types/templates'
import { useContext } from 'react'

export const EditorSize = () => {
  const { activeSubCategoryData, updateField } = useContext(
    TemplateEditorContext
  ) as TemplateEditorContextValues

  const data = activeSubCategoryData as ImageData
  if (!data) return

  return (
    <div className='flex flex-col gap-2'>
      <Slider
        className='my-2'
        value={[data.width]}
        onValueChange={(value) =>
          updateField(data.name, { ...data, width: value[0], height: 'auto' })
        }
        min={50}
        max={1500}
      />
      <div className='flex items-end gap-4'>
        <div className='flex flex-col gap-2'>
          <Label htmlFor='width'>Width</Label>
          <Input
            type='number'
            id='width'
            value={data.width}
            min={50}
            max={1500}
            onChange={(e) => updateField(`${data.name}.width`, e.target.value)}
          />
        </div>
        <div className='flex flex-col gap-2'>
          <Label htmlFor='height'>Height</Label>
          <Input
            type='number'
            id='height'
            value={data.height}
            min={50}
            max={1500}
            onChange={(e) => updateField(`${data.name}.height`, e.target.value)}
            placeholder='auto'
          />
        </div>
        <SizeUnitSelect />
      </div>
    </div>
  )
}
