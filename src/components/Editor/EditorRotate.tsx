import { Input } from '@/components/ui/input'
import { TemplateEditorContext } from '@/contexts/TemplateEditorContext'
import { TemplateEditorContextValues } from '@/types/contexts'
import { ImageData, LinkData, TextData } from '@/types/templates'
import { useContext } from 'react'

export const EditorRotate = () => {
  const { activeSubCategoryData, updateField } = useContext(
    TemplateEditorContext
  ) as TemplateEditorContextValues

  const data = activeSubCategoryData as TextData | ImageData | LinkData
  if (!data) return

  return (
    <div className='flex items-center gap-2'>
      <Input
        type='number'
        min={0}
        max={360}
        value={data.rotation}
        onChange={(e) => updateField(`${data.name}.rotation`, e.target.value)}
      />
      <span>deg</span>
    </div>
  )
}
