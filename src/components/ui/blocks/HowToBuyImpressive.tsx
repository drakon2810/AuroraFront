import { useBlocksStore } from '@/store/useBlocksStore'
import { motion } from 'framer-motion'
import { useState } from 'react'

export const HowToBuyImpressive = () => {
  const {
    titleHowToBuyBlock,
    firstBlock,
    secondBlock,
    thirdBlock,
    fourthBlock,
    setTitleHowToBuyBlock,
    setFirstBlock,
    setSecondBlock,
    setThirdBlock,
    setFourthBlock,
    toggleHowToBuyBlock,
    setColorBackgroundBlock
  } = useBlocksStore((state) => state)
  const [isActive, setIsActive] = useState(false)
  const [color, setColor] = useState('#fa6f0c')

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value)
    setColorBackgroundBlock(event.target.value)
  }

  const handleDefoltColorSec = () => {
    setColor('#fa6f0c')
    setColorBackgroundBlock('#fa6f0c')
  }

  const handleIsActive = () => {
    setIsActive((prev) => {
      const newIsActive = !prev
      toggleHowToBuyBlock(newIsActive)
      return newIsActive
    })
  }
  const handleChange =
    (storeSetter: (value: string) => void) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      storeSetter(e.target.value)
    }

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleHowToBuyBlock(e.target.value)
  }

  const inputClass = `mt-2 flex h-9 w-full rounded-md border border-neutral-200 bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 ${
    !isActive ? 'cursor-not-allowed opacity-50' : ''
  }`

  return (
    <div className='flex flex-col items-start space-y-4'>
      <details className='group w-full rounded-lg border border-gray-300 bg-white open:border-gray-300'>
        <summary className='flex cursor-pointer items-center justify-between px-2 py-2 transition-colors hover:bg-gray-100'>
          <span className='text-sm font-semibold text-gray-700'>
            How to Buy
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

          <div className='flex flex-col gap-4'>
            <div>
              <span className='text-sm font-medium text-gray-700'>Title</span>
              <input
                placeholder='Title'
                value={titleHowToBuyBlock}
                onChange={handleTitle}
                className={inputClass}
                disabled={!isActive}
              />
            </div>

            <div>
              <span className='text-sm font-medium text-gray-700'>
                First Block
              </span>
              <input
                placeholder='First Block'
                value={firstBlock}
                onChange={handleChange(setFirstBlock)}
                className={inputClass}
                disabled={!isActive}
              />
            </div>

            <div>
              <span className='text-sm font-medium text-gray-700'>
                Second Block
              </span>
              <input
                placeholder='Second Block'
                value={secondBlock}
                onChange={handleChange(setSecondBlock)}
                className={inputClass}
                disabled={!isActive}
              />
            </div>

            <div>
              <span className='text-sm font-medium text-gray-700'>
                Third Block
              </span>
              <input
                placeholder='Third Block'
                value={thirdBlock}
                onChange={handleChange(setThirdBlock)}
                className={inputClass}
                disabled={!isActive}
              />
            </div>

            <div>
              <span className='text-sm font-medium text-gray-700'>
                Fourth Block
              </span>
              <input
                placeholder='Fourth Block'
                value={fourthBlock}
                onChange={handleChange(setFourthBlock)}
                className={inputClass}
                disabled={!isActive}
              />
            </div>
          </div>

          <span className='text-sm font-medium text-gray-700'>
            Background Color
          </span>
          <div className='relative mt-4 h-8 w-36'>
            <input
              type='color'
              value={color}
              className='absolute inset-0 h-full w-full cursor-pointer opacity-0'
              onChange={handleColorChange}
              disabled={!isActive}
            />
            <div
              className='h-full w-full rounded-md border border-gray-300'
              style={{ backgroundColor: color }}
            />
            <button
              className='absolute left-[114px] top-[5px] flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-transparent font-bold leading-none text-white'
              onClick={handleDefoltColorSec}
              disabled={!isActive}
            >
              <span className='pb-[1px]'>X</span>
            </button>
          </div>
        </motion.div>
      </details>
    </div>
  )
}
