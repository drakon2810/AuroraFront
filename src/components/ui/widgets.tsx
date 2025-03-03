import { useFallingImagesStore } from '../../store/useWidgetsStore'
import { AudioWidget } from './AudioWidgetProps'
import { PopUpTicker } from './popUpTicker'
import { ThemeContext } from '@/contexts/ThemeContext'
import { ThemeContextValues } from '@/types/contexts'
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
      <PopUpTicker
        isActiveTicker={isActiveTicker}
        onToggleTicker={handleToggleTicker}
      />
      <div
        className={`rounded-lg border-2 p-4 shadow-sm ${
          theme === 'dark'
            ? 'border-gray-700 bg-transparent'
            : 'border-gray-200 bg-[#fff]'
        }`}
      >
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
            Falling animation
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
      <div
        className={`mt-4 rounded-lg border-2 p-4 shadow-sm ${
          theme === 'dark'
            ? 'border-gray-700 bg-transparent'
            : 'border-gray-200 bg-[#fff]'
        }`}
      >
        <AudioWidget />
      </div>
    </div>
  )
}
