import { cursor } from '../cursor/cursor'
import { useFallingImagesStore } from '@/store/useWidgetsStore'
import { motion } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'

export const CustomCursor = () => {
  const {
    setCustomCursor,
    setCustomPointer,
    setIsActiveCustomCursor,
    customCursor,
    customPointer,
    isActiveCursor: isActiveCustomCursor
  } = useFallingImagesStore()

  const [cursorImages, setCursorImages] = useState<(File | number | null)[]>([
    null,
    null
  ])
  const [showPresetDropdown, setShowPresetDropdown] = useState(false)
  const [selectedPresetType, setSelectedPresetType] = useState<
    'cursor' | 'pointer' | null
  >(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  console.log(customCursor, customPointer)

  useEffect(() => {
    setCustomCursor(cursorImages[0])
    setCustomPointer(cursorImages[1])
  }, [cursorImages])

  const handleIsActive = () => {
    const newActiveState = !isActiveCustomCursor
    setIsActiveCustomCursor(newActiveState)
  }

  const handleFileUpload = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0]
    if (file) {
      setCursorImages((prev) => {
        const newImages = [...prev]
        newImages[index] = file
        return newImages
      })
    }
  }

  const handleRemoveImage = (index: number) => {
    setCursorImages((prev) => {
      const newImages = [...prev]
      newImages[index] = null
      return newImages
    })
  }

  const togglePresetDropdown = (type: 'cursor' | 'pointer') => {
    setSelectedPresetType(type)
    setShowPresetDropdown((prev) => !prev)
  }

  const selectPreset = (index: number) => {
    setCursorImages((prev) => {
      const newImages = [...prev]
      newImages[selectedPresetType === 'cursor' ? 0 : 1] = index
      return newImages
    })
    setShowPresetDropdown(false)
  }

  return (
    <div className='flex flex-col items-start space-y-4'>
      <details className='group w-full rounded-lg border border-gray-300 bg-white open:border-gray-300'>
        <summary className='flex cursor-pointer items-center justify-between px-2 py-2 transition-colors hover:bg-gray-100'>
          <span className='text-sm font-semibold text-gray-700'>
            Custom Cursor
          </span>
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
          className={`flex flex-col space-y-4 rounded-b-lg border-t border-gray-300 p-4`}
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
              checked={isActiveCustomCursor}
            />
            <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-black peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-300"></div>
            <span className='ml-3 text-sm font-medium text-gray-700'>
              Enable
            </span>
          </label>

          <div className='mt-4'>
            <p className='mb-2 text-xs text-gray-500'>
              Maximum width and height are 50px
            </p>

            <div className='flex gap-2'>
              {[0, 1].map((index) => (
                <div key={index} className='relative'>
                  <label
                    className={`flex h-24 w-24 cursor-pointer items-center justify-center rounded-lg border-2 border-dashed ${
                      !isActiveCustomCursor
                        ? 'cursor-not-allowed opacity-50'
                        : 'hover:border-gray-400 hover:bg-gray-50'
                    }`}
                  >
                    {cursorImages[index] !== null ? (
                      <div className='flex h-full w-full items-center justify-center'>
                        {typeof cursorImages[index] === 'number' ? (
                          cursor[cursorImages[index] as number]
                        ) : (
                          <img
                            src={URL.createObjectURL(
                              cursorImages[index] as File
                            )}
                            alt='Custom cursor'
                            className='h-full w-full object-contain'
                          />
                        )}
                      </div>
                    ) : (
                      <svg
                        className='text-gray-400'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      >
                        <path d='M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 9l5 5 5-5M12 1v8' />
                      </svg>
                    )}
                    <input
                      type='file'
                      accept='image/*'
                      onChange={(e) => handleFileUpload(index, e)}
                      disabled={!isActiveCustomCursor}
                      className='hidden'
                    />
                  </label>
                  {cursorImages[index] !== null && (
                    <button
                      onClick={() => handleRemoveImage(index)}
                      disabled={!isActiveCustomCursor}
                      className='absolute right-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 p-1 text-white hover:bg-red-600 disabled:opacity-50'
                      title='Remove image'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                        className='h-3 w-3'
                      >
                        <path d='M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z' />
                      </svg>
                    </button>
                  )}
                </div>
              ))}
            </div>

            <div className='relative mt-4 flex gap-2'>
              <button
                className='w-[95px] rounded border border-gray-300 px-3 py-1 text-xs hover:bg-gray-100 disabled:opacity-50'
                disabled={!isActiveCustomCursor}
                onClick={() => togglePresetDropdown('cursor')}
              >
                Cursor Preset
              </button>
              <button
                className='w-[95px] rounded border border-gray-300 px-3 py-1 text-xs hover:bg-gray-100 disabled:opacity-50'
                disabled={!isActiveCustomCursor}
                onClick={() => togglePresetDropdown('pointer')}
              >
                Pointer Preset
              </button>

              {showPresetDropdown && (
                <motion.div
                  ref={dropdownRef}
                  className='absolute left-0 top-full z-10 mt-1 w-[240px] rounded-lg border border-gray-200 bg-white p-2 shadow-lg'
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <div className='grid grid-cols-4 gap-1'>
                    {cursor.map((svg, index) => (
                      <div
                        key={index}
                        className='flex h-12 w-12 cursor-pointer items-center justify-center rounded border border-gray-200 hover:border-blue-400 hover:bg-gray-50'
                        onClick={() => selectPreset(index)}
                      >
                        <div className='flex h-full w-full items-center justify-center p-1'>
                          {svg}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </details>
    </div>
  )
}
