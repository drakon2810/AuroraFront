import { useStylesStore } from '@/store/useStulesStore'
import { motion } from 'framer-motion'
import { useState } from 'react'

export const ColorContent = () => {
  const [primColor, setPrimColor] = useState('#000000')
  const [secColor, setSecColor] = useState('#000')

  const { setColorPrimary, setColorSecondary } = useStylesStore(
    (state) => state
  )

  const handleColorPrimChange = (event: string) => {
    setColorPrimary(event)
    setPrimColor(event)
  }

  const handleColorSecChange = (event: string) => {
    setColorSecondary(event)
    setSecColor(event)
  }

  const handleDefoltColorPrim = () => {
    setPrimColor('#000000')
    setColorPrimary('#fff')
  }

  const handleDefoltColorSec = () => {
    setSecColor('#000000')
    setColorSecondary('#000000')
  }

  return (
    <div className='space-y-4'>
      <details className='group rounded-lg border border-gray-300 bg-white open:border-gray-300'>
        <summary className='flex cursor-pointer items-center justify-between px-2 py-2 transition-colors hover:bg-gray-100'>
          <span className='text-sm font-semibold text-gray-700'>Color</span>
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
          className='rounded-b-lg border-t border-gray-300 p-4'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <p className='mb-2 text-sm font-semibold text-gray-700'>Primary</p>
          <div className='relative h-8 w-24'>
            <input
              type='color'
              value={primColor}
              className='absolute inset-0 h-full w-full cursor-pointer opacity-0'
              onChange={(e) => handleColorPrimChange(e.target.value)}
            />
            <div
              className='h-full w-full rounded-full border border-gray-300 bg-white'
              style={{ backgroundColor: primColor }}
            />
            <button
              className='absolute left-[69px] top-[4px] flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-gray-200 p-1 text-black'
              onClick={handleDefoltColorPrim}
            >
              X
            </button>
          </div>
          <p className='mb-2 mt-4 text-sm font-semibold text-gray-700'>
            Secondary
          </p>
          <div className='relative h-8 w-24'>
            <input
              type='color'
              value={secColor}
              className='absolute inset-0 h-full w-full cursor-pointer opacity-0'
              onChange={(e) => handleColorSecChange(e.target.value)}
            />
            <div
              className='h-full w-full rounded-full border border-gray-300 bg-white'
              style={{ backgroundColor: secColor }}
            />
            <button
              className='absolute left-[69px] top-[4px] flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-gray-200 p-1 text-black'
              onClick={handleDefoltColorSec}
            >
              X
            </button>
          </div>
        </motion.div>
      </details>
    </div>
  )
}
