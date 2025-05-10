import { FontsPickerPrim } from '@/components/FontsPicker/FontsPickerPrim'
import { FontsPickerSec } from '@/components/FontsPicker/FontsPickerSec'
import { motion } from 'framer-motion'

export const FontsContent = () => {
  return (
    <div className='space-y-4'>
      <details className='group rounded-lg border border-gray-300 bg-white open:border-gray-300'>
        <summary className='flex cursor-pointer items-center justify-between px-2 py-2 transition-colors hover:bg-gray-100'>
          <span className='text-sm font-semibold text-gray-700'>Fonts</span>
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
          <div className='flex flex-col gap-4'>
            <FontsPickerPrim />
          </div>
          <p className='mb-2 mt-4 text-sm font-semibold text-gray-700'>
            Secondary
          </p>
          <div className='flex flex-col gap-4'>
            <FontsPickerSec />
          </div>
        </motion.div>
      </details>
    </div>
  )
}
