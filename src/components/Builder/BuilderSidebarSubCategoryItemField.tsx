import { Input } from '../ui/input'
import { FallingImageWidget } from '../ui/widgets'
import { TemplateContext } from '@/contexts/TemplateContext'
import { TemplateEditorContext } from '@/contexts/TemplateEditorContext'
import {
  TemplateContextValues,
  TemplateEditorContextValues
} from '@/types/contexts'
import {
  ColorData,
  ImageData,
  LinkData,
  TemplateSubCategoryFieldType,
  TextData,
  WidgetsData
} from '@/types/templates'
import { FC, useContext } from 'react'
import { HexColorPicker } from 'react-colorful'

interface BuilderSidebarSubCategoryItemFieldProps {
  type: TemplateSubCategoryFieldType
  name: string
  placeholder?: string
}

export const BuilderSidebarSubCategoryItemField: FC<
  BuilderSidebarSubCategoryItemFieldProps
> = ({ type, name, placeholder }) => {
  const { data } = useContext(TemplateContext) as TemplateContextValues
  const { updateField } = useContext(
    TemplateEditorContext
  ) as TemplateEditorContextValues

  switch (type) {
    case 'text':
      return (
        <Input
          value={(data[name] as TextData).value}
          id={name}
          onChange={(e) => updateField(`${name}.value`, e.target.value)}
          placeholder={placeholder}
        />
      )

    case 'image':
      return (
        <Input
          type='url'
          id={name}
          value={(data[name] as ImageData).src}
          onChange={(e) => updateField(`${name}.src`, e.target.value)}
          placeholder={placeholder}
        />
      )

    case 'link':
      return (
        <Input
          type='url'
          id={name}
          value={(data.links[name] as LinkData).url}
          onChange={(e) => updateField(`links.${name}.url`, e.target.value)}
          placeholder={placeholder}
        />
      )

    case 'color':
      return (
        <HexColorPicker
          color={(data[name] as ColorData).value}
          onChange={(color) => updateField(`${name}.value`, color)}
        />
      )

    case 'widgets':
      return (
        <FallingImageWidget
          value={(data[name] as WidgetsData)?.value || []}
          onChange={(newValue: (File | null)[]) => {
            updateField(`${name}.value`, newValue)
          }}
        />
      )
  }
}
