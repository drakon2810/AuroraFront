import { useFallingImagesStore } from '../../store/useWidgetsStore'
import { FontsPicker } from '../FontsPicker/FontsPicker'
import { ThemeContext } from '@/contexts/ThemeContext'
import { ThemeContextValues } from '@/types/contexts'
import { motion } from 'framer-motion'
import { FC, useState } from 'react'
import { useContext } from 'react'

interface PopUpTickerProps {
  isActiveTicker: boolean
  onToggleTicker: () => void
}

export const PopUpTicker: FC<PopUpTickerProps> = ({
  isActiveTicker,
  onToggleTicker
}) => {
  const [color, setColor] = useState<string>('#ffffff')
  const { theme } = useContext(ThemeContext) as ThemeContextValues
  const [fontSize, setFontSize] = useState<string>('16')
  const changePopTickerFontSize = useFallingImagesStore(
    (state) => state.changePopTickerFontSize
  )
  const changePopTickerColor = useFallingImagesStore(
    (state) => state.changePopTickerColor
  )

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value)
    changePopTickerColor(event.target.value)
  }

  const handleFontSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFontSize(event.target.value)
    changePopTickerFontSize(event.target.value)
  }

  return (
    <div
      className={`mb-4 rounded-lg border-2 shadow-sm ${
        theme === 'dark'
          ? 'border-gray-700 bg-transparent'
          : 'border-gray-200 bg-[#fff]'
      }`}
    >
      <div className='flex items-center gap-2 px-4 py-2'>
        <label className='relative inline-flex cursor-pointer items-center'>
          <input
            type='checkbox'
            checked={isActiveTicker}
            onChange={onToggleTicker}
            className='peer sr-only'
          />
          <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-black peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-300"></div>
        </label>
        <span
          className={`text-sm font-medium text-gray-700 ${theme === 'dark' ? 'text-white' : 'text-black'}`}
        >
          Pop-up Ticker on hero click
        </span>
      </div>

      {isActiveTicker && (
        <motion.div
          className='border-t border-gray-200 p-4'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-2'>
              <label
                className={`text-sm font-medium text-gray-700 ${theme === 'dark' ? 'text-white' : 'text-black'}`}
              >
                Color
              </label>
              <input
                type='color'
                value={color}
                onChange={handleColorChange}
                className='h-8 w-16 rounded border border-gray-300'
              />
            </div>

            <div className='flex items-center gap-2'>
              <label
                className={`text-sm font-medium text-gray-700 ${theme === 'dark' ? 'text-white' : 'text-black'}`}
              >
                Font Size
              </label>
              <input
                type='number'
                value={fontSize}
                onChange={handleFontSizeChange}
                className='w-20 rounded border border-gray-300 p-1'
                min='10'
                max='100'
              />
            </div>

            <FontsPicker />
          </div>
        </motion.div>
      )}
    </div>
  )
}
