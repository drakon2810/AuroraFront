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
  const { changeIsHideToke, changeIsHideLogo } = useGeneralStore(
    (state) => state
  )
  const { data, selectedTemplate } = useContext(
    TemplateContext
  ) as TemplateContextValues
  const { updateField } = useContext(
    TemplateEditorContext
  ) as TemplateEditorContextValues
  const [, setIsHidden] = useState(false)
  const { t } = useTranslation()

  const handleHideChangeToken = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked
    setIsHidden(isChecked)
    changeIsHideToke(isChecked)
  }

  const handleHideChangeLogo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked
    setIsHidden(isChecked)
    changeIsHideLogo(isChecked)
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
              <label className='ml-[154px] flex items-center space-x-2'>
                <div className='relative flex items-center'>
                  <input
                    type='checkbox'
                    onChange={handleHideChangeToken}
                    className='peer h-5 w-5 appearance-none rounded-md border-2 border-gray-400 checked:border-black checked:bg-black focus:ring-2 focus:ring-black'
                  />
                  <svg
                    className='pointer-events-none absolute left-1/2 top-1/2 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 transform text-white peer-checked:block'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <span className='text-gray-700'>Hide</span>
              </label>
            )}

            {name === 'logoImage' && (
              <label className='ml-[205px] flex items-center space-x-2'>
                <div className='relative flex items-center'>
                  <input
                    type='checkbox'
                    onChange={handleHideChangeLogo}
                    className='peer h-5 w-5 appearance-none rounded-md border-2 border-gray-400 checked:border-black checked:bg-black focus:ring-2 focus:ring-black'
                  />
                  <svg
                    className='pointer-events-none absolute left-1/2 top-1/2 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 transform text-white peer-checked:block'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <span className='text-gray-700'>Hide</span>
              </label>
            )}
          </>
        ) : (
          name !== 'Falling animation' && (
            <Label htmlFor={name} className=''>
              {t(`builder.${selectedTemplate}.fields.${name}`)}
            </Label>
          )
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
