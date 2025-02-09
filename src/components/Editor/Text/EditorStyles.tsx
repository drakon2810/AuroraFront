import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { TemplateEditorContext } from '@/contexts/TemplateEditorContext'
import { TemplateEditorContextValues } from '@/types/contexts'
import { TextData } from '@/types/templates'
import { Bold, Italic, Underline, Minus } from 'lucide-react'
import { useContext } from 'react'

const items = [
  {
    value: 'bold',
    icon: Bold
  },
  {
    value: 'italic',
    icon: Italic
  },
  {
    value: 'underline',
    icon: Underline
  },
  {
    value: 'line-through',
    icon: Minus
  }
]

export const EditorStyles = () => {
  const { activeSubCategoryData, updateField } = useContext(
    TemplateEditorContext
  ) as TemplateEditorContextValues

  const data = activeSubCategoryData as TextData
  if (!data) return

  return (
    <ToggleGroup
      type='multiple'
      onValueChange={(value) => updateField(`${data.name}.styles`, value)}
    >
      {items.map(({ value, icon: Icon }) => (
        <ToggleGroupItem key={value} value={value}>
          <Icon />
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  )
}
