import { useFallingImagesStore } from '../../store/useWidgetsStore'
import { AudioWidget } from './AudioWidgetProps'
import { CustomCursor } from './CastomCursor'
import { AnimationsWidgets } from './animations'
import { PopUpTicker } from './popUpTicker'
import { ThemeContext } from '@/contexts/ThemeContext'
import { ThemeContextValues } from '@/types/contexts'
import { motion } from 'framer-motion'
import { FC, useState, ChangeEvent } from 'react'
import { useContext } from 'react'

interface FallingImageWidgetProps {
  value: (File | null)[]
  onChange: (value: (File | null)[]) => void
}

export const FallingImageWidget: FC<FallingImageWidgetProps> = ({
  value = [null, null, null],
  onChange
}) => {
  const [isActive, setIsActive] = useState<boolean>(false)
  const [isActiveTicker, setIsActiveTicker] = useState<boolean>(false)
  const { theme } = useContext(ThemeContext) as ThemeContextValues
  const addFallingImage = useFallingImagesStore(
    (state) => state.addFallingImage
  )

  const statusCheckbox = useFallingImagesStore((state) => state.statusCheckbox)
  const changePopTicker = useFallingImagesStore(
    (state) => state.changePopTicker
  )

  const handleToggle = () => {
    setIsActive(!isActive)
  }

  const handleToggleTicker = () => {
    setIsActiveTicker(!isActiveTicker)
  }

  const handleFileUpload = (
    index: number,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    if (!isActive) return

    const file = event.target.files?.[0]
    if (file) {
      const newValue = [...value]
      newValue[index] = file
      onChange(newValue)
      addFallingImage(file, 10)

      event.target.value = ''
    }
  }
  statusCheckbox(isActive)
  changePopTicker(isActiveTicker)

  return (
    <div>
      <div className='mb-4'>
        <AnimationsWidgets />
      </div>
      <div className='flex flex-col items-start space-y-4'>
        <details className='group w-full rounded-lg border border-gray-300 bg-white open:border-gray-300'>
          <summary className='flex cursor-pointer items-center justify-between px-2 py-2 transition-colors hover:bg-gray-100'>
            <span className='text-sm font-semibold text-gray-700'>
              Pop-up Ticker on hero click
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
            <PopUpTicker
              isActiveTicker={isActiveTicker}
              onToggleTicker={handleToggleTicker}
            />
          </motion.div>
        </details>
      </div>
      <div className='mt-4 flex flex-col items-start space-y-4'>
        <details className='group w-full rounded-lg border border-gray-300 bg-white open:border-gray-300'>
          <summary className='flex cursor-pointer items-center justify-between px-2 py-2 transition-colors hover:bg-gray-100'>
            <span className='text-sm font-semibold text-gray-700'>
              Falling animation
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
            <div>
              <div>
                <div className='mb-4 flex items-center gap-2'>
                  <label className='relative inline-flex cursor-pointer items-center'>
                    <input
                      type='checkbox'
                      checked={isActive}
                      onChange={handleToggle}
                      className='peer sr-only'
                    />
                    <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-black peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-300"></div>
                  </label>
                  <span
                    className={`text-sm font-medium text-gray-700 ${
                      theme === 'dark' ? 'text-white' : 'text-black'
                    }`}
                  >
                    Enable
                  </span>
                </div>

                <div className='flex justify-center gap-2'>
                  {[0, 1, 2].map((index) => (
                    <label
                      key={index}
                      className={`flex h-24 w-24 cursor-pointer items-center justify-center rounded-lg border-2 border-dashed ${
                        !isActive
                          ? 'cursor-not-allowed opacity-50'
                          : 'hover:border-gray hover:bg-gray-50'
                      }`}
                    >
                      {value[index] ? (
                        <img
                          src={URL.createObjectURL(value[index]!)}
                          alt={`Uploaded ${index}`}
                          className='h-full w-full rounded-lg border-2 object-cover'
                        />
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
                        disabled={!isActive}
                        className='hidden'
                      />
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </details>
      </div>
      <div className='mt-4 flex flex-col items-start space-y-4'>
        <details className='group w-full rounded-lg border border-gray-300 bg-white open:border-gray-300'>
          <summary className='flex cursor-pointer items-center justify-between px-2 py-2 transition-colors hover:bg-gray-100'>
            <span className='text-sm font-semibold text-gray-700'>Audio</span>
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
            <div className={`rounded-lg`}>
              <AudioWidget />
            </div>
          </motion.div>
        </details>
      </div>
      <div className='mt-4'>
        <CustomCursor />
      </div>
    </div>
  )
}
