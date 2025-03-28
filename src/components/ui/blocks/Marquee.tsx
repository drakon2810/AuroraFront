import { useMarqueeStore } from '@/store/useMarqueeStore'
import { motion } from 'framer-motion'
import { useState } from 'react'

export const Marquee = () => {
  const [isActive, setIsActive] = useState(false)
  const [, setIsHidden] = useState(false)
  const { setIsActiveMarquee, setMarqueeUp, setMarqueeDown, setMarqueeMidle } =
    useMarqueeStore((state) => state)

  const handleIsActive = () => {
    setIsActive((prev) => {
      const newIsActive = !prev
      setIsActiveMarquee(newIsActive)
      return newIsActive
    })
  }

  const handleChooseUp = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked
    setIsHidden(isChecked)
    setMarqueeUp(isChecked)
  }
  const handleChooseMiddle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked
    setIsHidden(isChecked)
    setMarqueeMidle(isChecked)
  }
  const handleChooseDown = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked
    setIsHidden(isChecked)
    setMarqueeDown(isChecked)
  }

  return (
    <div className='flex flex-col items-start space-y-4'>
      <details className='group w-full rounded-lg border border-gray-300 bg-white open:border-gray-300'>
        <summary className='flex cursor-pointer items-center justify-between px-2 py-2 transition-colors hover:bg-gray-100'>
          <span className='text-sm font-semibold text-gray-700'>Marquee</span>
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
              checked={isActive}
            />
            <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-black peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-300"></div>
            <span className='ml-3 text-sm font-medium text-gray-700'>
              Enable
            </span>
          </label>
          <div className='flex justify-between'>
            <label className='flex items-center space-x-2'>
              <div className='relative flex items-center'>
                <input
                  type='checkbox'
                  onChange={handleChooseUp}
                  className='peer h-5 w-5 appearance-none rounded-md border-2 border-gray-400 checked:border-black checked:bg-black focus:ring-2 focus:ring-black'
                  disabled={!isActive}
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
              <span className='text-gray-700'>Up</span>
            </label>
            <label className='flex items-center space-x-2'>
              <div className='relative flex items-center'>
                <input
                  type='checkbox'
                  onChange={handleChooseMiddle}
                  className='peer h-5 w-5 appearance-none rounded-md border-2 border-gray-400 checked:border-black checked:bg-black focus:ring-2 focus:ring-black'
                  disabled={!isActive}
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
              <span className='text-gray-700'>Middle</span>
            </label>
            <label className='flex items-center space-x-2'>
              <div className='relative flex items-center'>
                <input
                  type='checkbox'
                  onChange={handleChooseDown}
                  className='peer h-5 w-5 appearance-none rounded-md border-2 border-gray-400 checked:border-black checked:bg-black focus:ring-2 focus:ring-black'
                  disabled={!isActive}
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
              <span className='text-gray-700'>Down</span>
            </label>
          </div>
        </motion.div>
      </details>
    </div>
  )
}
