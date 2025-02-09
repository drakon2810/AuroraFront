import { Label } from '../ui/label'
import { Slider } from '../ui/slider'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { animations } from '@/consts'
import { TemplateEditorContext } from '@/contexts/TemplateEditorContext'
import { TemplateEditorContextValues } from '@/types/contexts'
import { TextData, ImageData, LinkData } from '@/types/templates'
import { FC, useContext } from 'react'

export const EditorAnimations: FC = () => {
  const { activeSubCategoryData, updateField } = useContext(
    TemplateEditorContext
  ) as TemplateEditorContextValues

  const data = activeSubCategoryData as TextData | ImageData | LinkData
  if (!data) return

  return (
    <>
      <ToggleGroup
        type='single'
        value={data.animation || undefined}
        onValueChange={(value) => updateField(`${data.name}.animation`, value)}
        className='flex flex-wrap gap-2'
      >
        {animations.map(({ label, value }) => (
          <ToggleGroupItem
            key={value}
            value={value}
            className='border border-neutral-600/40'
          >
            {label}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <div className='flex items-center gap-4'>
        <Label>Duration:</Label>
        <Slider
          defaultValue={[data.animationDuration]}
          min={100}
          max={5000}
          onValueChange={(value) =>
            updateField(`${data.name}.animationDuration`, value[0])
          }
        />
      </div>
    </>
  )
}
