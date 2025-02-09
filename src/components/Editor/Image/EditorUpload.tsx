import { Button } from '@/components/ui/button'
import { TemplateContext } from '@/contexts/TemplateContext'
import { TemplateEditorContext } from '@/contexts/TemplateEditorContext'
import {
  TemplateContextValues,
  TemplateEditorContextValues
} from '@/types/contexts'
import { ImageData } from '@/types/templates'
import { ChangeEvent, useContext } from 'react'

export const EditorUpload = () => {
  const { data } = useContext(TemplateContext) as TemplateContextValues
  const { activeSubCategoryData, updateField } = useContext(
    TemplateEditorContext
  ) as TemplateEditorContextValues

  const imageData = activeSubCategoryData as ImageData
  if (!data) return

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file || !file.type.includes('image/')) return

    updateField(`uploads.${imageData.name}`, file)
    updateField(`${imageData.name}.isUploaded`, true)
  }

  return (
    <>
      <Button asChild>
        <label htmlFor='upload'>Upload</label>
      </Button>
      <input
        type='file'
        id='upload'
        className='hidden'
        onChange={handleChange}
        accept='image/png, image/jpeg, image/gif'
        placeholder='Upload'
      />
      {/*
      {data.uploads?.[imageData.name] && <span>{data.uploads[imageData.name]}</span>}
        */}
    </>
  )
}
