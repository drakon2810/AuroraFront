import { Checkbox } from '../ui/checkbox'
import { Label } from '../ui/label'
import { BuilderSidebarSubCategoryItemField } from './BuilderSidebarSubCategoryItemField'
import { TemplateContext } from '@/contexts/TemplateContext'
import { TemplateEditorContext } from '@/contexts/TemplateEditorContext'
import { useGeneralStore } from '@/store/useGeneralStore'
import {
  TemplateContextValues,
  TemplateEditorContextValues
} from '@/types/contexts'
import { TemplateSubCategoryField, ToggleData } from '@/types/templates'
import { FC, useContext, useState } from 'react'
import { useTranslation } from 'react-i18next'

export const BuilderSidebarSubCategoryItem: FC<TemplateSubCategoryField> = (
  props
) => {
  const { type, name, placeholder = '' } = props
  const { changeIsHide } = useGeneralStore((state) => state)
  const { data, selectedTemplate } = useContext(
    TemplateContext
  ) as TemplateContextValues
  const { updateField } = useContext(
    TemplateEditorContext
  ) as TemplateEditorContextValues
  const [, setIsHidden] = useState(false)
  const { t } = useTranslation()

  const handleHideChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked
    setIsHidden(isChecked)
    changeIsHide(isChecked)
  }
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex items-center'>
        {name === 'tokenImage' || name === 'logoImage' ? (
          <>
            <Label htmlFor={name} className='flex items-center gap-2'>
              {t(`builder.${selectedTemplate}.fields.${name}`)}

              <span
                title='Max size 7 MB'
                className='cursor-help text-sm text-gray-500'
              >
                ⓘ
              </span>
            </Label>

            {name === 'tokenImage' && (
              <label className='ml-8 flex items-center space-x-2'>
                <input
                  type='checkbox'
                  onChange={handleHideChange}
                  className='form-checkbox h-5 w-5 text-blue-600'
                />
                <span className='text-gray-700'>Hide</span>
              </label>
            )}
          </>
        ) : (
          <Label htmlFor={name} className=''>
            {t(`builder.${selectedTemplate}.fields.${name}`)}
          </Label>
        )}
      </div>

      {type === 'toggle' && (
        <Checkbox
          id={name}
          onCheckedChange={(value) => updateField(`${name}.value`, value)}
          checked={(data[name] as ToggleData).value}
        />
      )}
      {type !== 'toggle' && (
        <BuilderSidebarSubCategoryItemField
          type={type}
          name={name}
          placeholder={placeholder}
        />
      )}
    </div>
  )
}
