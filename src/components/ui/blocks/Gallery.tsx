import { useGallaryStore } from '@/store/useGalleryStore'
import { motion } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'

export const Gallery = () => {
  const [isActive, setIsActive] = useState(false)
  const [title, setTitle] = useState('')
  const [toggleTheme, setToggleTheme] = useState('grid')
  const [photos, setPhotos] = useState<(string | null)[]>(Array(8).fill(null))
  const fileInputRefs = useRef<(HTMLInputElement | null)[]>(Array(8).fill(null))

  const {
    setIsActiveGallary,
    setTitleGallary,
    setToggleGallary,
    setPhotosGallary,
    photosGallary
  } = useGallaryStore((state) => state)

  useEffect(() => {
    if (photosGallary) {
      const loadedPhotos = Array(8)
        .fill(null)
        .map((_, i) =>
          photosGallary[i] ? URL.createObjectURL(photosGallary[i]) : null
        )
      setPhotos(loadedPhotos)
    }
  }, [photosGallary])

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setTitle(value)
    setTitleGallary(value)
  }

  const handleIsActive = () => {
    const newIsActive = !isActive
    setIsActive(newIsActive)
    setIsActiveGallary(newIsActive)

    if (!newIsActive) {
      setPhotos(Array(8).fill(null))
      Array(8)
        .fill(null)
        .forEach((_, i) => setPhotosGallary(i, null))
    }
  }

  const handleToggleTheme = (value: string) => {
    setToggleTheme(value)
    setToggleGallary(value)
  }

  const handleFileChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!e.target.files || !e.target.files[0]) return

    const file = e.target.files[0]

    if (file.size > 7 * 1024 * 1024) {
      alert('File is too large (max 7MB)')
      return
    }

    if (!file.type.startsWith('image/')) {
      alert('Please select an image file')
      return
    }

    setPhotosGallary(index, file)

    const reader = new FileReader()
    reader.onload = (event) => {
      const newPhotos = [...photos]
      newPhotos[index] = event.target?.result as string
      setPhotos(newPhotos)
    }
    reader.readAsDataURL(file)
  }

  const triggerFileInput = (index: number) => {
    if (isActive) {
      fileInputRefs.current[index]?.click()
    }
  }

  const removePhoto = (index: number) => {
    const newPhotos = [...photos]
    newPhotos[index] = null
    setPhotos(newPhotos)
    setPhotosGallary(index, null)
  }

  return (
    <div className='flex flex-col items-start space-y-4'>
      <details className='group w-full rounded-lg border border-gray-300 bg-white open:border-gray-300'>
        <summary
          className={`flex cursor-pointer items-center justify-between px-2 py-2 transition-colors ${isActive ? 'hover:bg-gray-100' : ''}`}
        >
          <span className='text-sm font-semibold text-gray-700'>Gallery</span>
          <svg
            className='h-6 w-6 transform transition-transform group-open:rotate-180'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M19 9l-7 7-7-7'
            />
          </svg>
        </summary>

        <motion.div
          className='flex flex-col space-y-4 rounded-b-lg border-t border-gray-300 p-4'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <label className='relative inline-flex cursor-pointer items-center'>
            <input
              type='checkbox'
              className='peer sr-only'
              onChange={handleIsActive}
              checked={isActive}
            />
            <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-black peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-300"></div>
            <span className='ml-3 text-sm font-medium text-gray-700'>
              Enable
            </span>
          </label>

          <div>
            <span className='ml-3 text-sm font-medium text-gray-700'>
              Title
            </span>
            <input
              placeholder='Enter title'
              value={title}
              onChange={handleTitle}
              className={`mt-2 flex h-9 w-full rounded-md border border-neutral-200 bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-neutral-950 placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:file:text-neutral-50 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300 md:text-sm ${
                !isActive ? 'cursor-not-allowed opacity-50' : ''
              }`}
              disabled={!isActive}
            />
          </div>

          <div>
            <span className='ml-3 text-sm font-medium text-gray-700'>Type</span>
            <div className='mt-2 flex w-full justify-center'>
              <div className='flex w-full max-w-[500px] items-center justify-between rounded-md bg-gray-200 p-1'>
                {['grid', 'album'].map((option) => (
                  <button
                    key={option}
                    onClick={() => isActive && handleToggleTheme(option)}
                    disabled={!isActive}
                    className={`flex-1 rounded-md px-6 py-1.5 text-sm font-semibold transition-all ${
                      toggleTheme === option
                        ? 'bg-white text-black'
                        : 'bg-gray-200 text-gray-700'
                    } ${!isActive ? 'cursor-not-allowed opacity-50' : ''}`}
                  >
                    {option.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className='mt-4'>
            <div className='mt-3 grid grid-cols-2 gap-4'>
              {Array(8)
                .fill(0)
                .map((_, index) => (
                  <div key={index} className='relative h-20'>
                    <input
                      type='file'
                      ref={(el) => (fileInputRefs.current[index] = el)}
                      onChange={(e) => handleFileChange(index, e)}
                      className='hidden'
                      accept='image/*'
                      disabled={!isActive}
                    />

                    {photos[index] ? (
                      <div
                        className={`group relative h-full w-full overflow-hidden rounded-lg border ${isActive ? 'hover:border-gray-400' : ''}`}
                      >
                        <img
                          src={photos[index] as string}
                          alt={`Preview ${index}`}
                          className='h-full w-full object-cover'
                        />
                        {isActive && (
                          <button
                            type='button'
                            onClick={() => removePhoto(index)}
                            className='absolute right-2 top-2 rounded-full bg-red-500 p-1.5 opacity-0 transition-opacity group-hover:opacity-100'
                            title='Remove photo'
                          >
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              className='h-4 w-4 text-white'
                              viewBox='0 0 20 20'
                              fill='currentColor'
                            >
                              <path
                                fillRule='evenodd'
                                d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                                clipRule='evenodd'
                              />
                            </svg>
                          </button>
                        )}
                      </div>
                    ) : (
                      <button
                        type='button'
                        onClick={() => triggerFileInput(index)}
                        disabled={!isActive}
                        className={`flex h-full w-full flex-col items-center justify-center rounded-lg border-2 border-dashed transition-colors ${
                          isActive
                            ? 'border-gray-300 bg-gray-50 hover:border-gray-400 hover:bg-gray-100'
                            : 'border-gray-200 bg-gray-100'
                        }`}
                      >
                        <svg
                          className={`mx-auto h-12 w-12 ${
                            isActive ? 'text-gray-400' : 'text-gray-300'
                          }`}
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
                          />
                        </svg>
                        <span
                          className={`mt-1 text-xs ${
                            isActive ? 'text-gray-500' : 'text-gray-400'
                          }`}
                        >
                          Photo {index + 1}
                        </span>
                      </button>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </motion.div>
      </details>
    </div>
  )
}
