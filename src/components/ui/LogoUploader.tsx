import React, { FC } from 'react'

interface LogoUploaderProps {
  image: string | null
  onChange: (imageUrl: string | null) => void
}

export const LogoUploader: FC<LogoUploaderProps> = ({ image, onChange }) => {
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      if (file.size > 7 * 1024 * 1024) {
        alert('File size should not exceed 7 MB')
        return
      }
      const reader = new FileReader()
      reader.onload = (e) => {
        onChange(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleDeleteImage = () => {
    onChange(null)
  }

  return (
    <div className='mb-4 flex items-center gap-2'>
      <label className='relative inline-flex cursor-pointer items-center'>
        <input
          type='file'
          accept='image/*'
          onChange={handleImageUpload}
          className='hidden'
        />
        <div className='flex h-24 w-24 items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 transition-colors hover:bg-gray-100'>
          {image ? (
            <img
              src={image}
              alt='Uploaded logo'
              className='h-full w-full rounded-lg object-cover'
            />
          ) : (
            <span className='text-2xl text-gray-400'>+</span>
          )}

          {image && (
            <button
              onClick={handleDeleteImage}
              className='absolute right-0 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-transparent p-1 text-white shadow-md hover:text-red-500'
            >
              <span className='text-sm'>&#10005;</span>
            </button>
          )}
        </div>
      </label>
    </div>
  )
}
