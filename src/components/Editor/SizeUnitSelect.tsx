import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '../ui/select'
import { fontSizeUnits } from '@/consts'
import { TemplateEditorContext } from '@/contexts/TemplateEditorContext'
import { TemplateEditorContextValues } from '@/types/contexts'
import { TextData, ImageData } from '@/types/templates'
import { useContext } from 'react'

export const SizeUnitSelect = () => {
  const { activeSubCategoryData, updateField } = useContext(
    TemplateEditorContext
  ) as TemplateEditorContextValues

  const data = activeSubCategoryData as TextData | ImageData
  if (!data) return

  return (
    <Select
      value={data.sizeUnit}
      onValueChange={(unit) => updateField(`${data.name}.sizeUnit`, unit)}
    >
      <SelectTrigger className='w-1/4'>
        <SelectValue placeholder={fontSizeUnits[0]} />
      </SelectTrigger>
      <SelectContent>
        {fontSizeUnits.map((unit) => (
          <SelectItem key={unit} value={unit}>
            {unit}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
