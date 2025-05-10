import { useTokenomicsStore } from '@/store/useTokenomicsStore'
import { motion } from 'framer-motion'
import { useState } from 'react'

export const Tokenomics = () => {
  const {
    isActiveTK,
    textArea,
    items,
    setIsActive,
    setTitle,
    setTextArea,
    addItem,
    removeItem,
    updateItem,
    setHandleChooseTK,
    setColorTK
  } = useTokenomicsStore()
  const [color, setColor] = useState('#cfcfcf')
  const [, setIsHidden] = useState(false)

  const handleAddItem = () => {
    if (items.length < 10) {
      addItem()
    }
  }

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value)
    setColorTK(event.target.value)
  }

  const handleDefoltColorSec = () => {
    setColor('#cfcfcf')
    setColorTK('white')
  }

  const handleChoose = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked
    setIsHidden(isChecked)
    setHandleChooseTK(isChecked)
  }

  return (
    <div className='flex flex-col items-start space-y-4'>
      <details className='group w-full rounded-lg border border-gray-300 bg-white open:border-gray-300'>
        <summary className='flex cursor-pointer items-center justify-between px-2 py-2 transition-colors hover:bg-gray-100'>
          <span className='text-sm font-semibold text-gray-700'>
            Tokenomics
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
              onChange={() => setIsActive(!isActiveTK)}
              checked={isActiveTK}
            />
            <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-black peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-300"></div>
            <span className='ml-3 text-sm font-medium text-gray-700'>
              Enable
            </span>
          </label>
          <span className='ml-3 text-sm font-medium text-gray-700'>Title</span>
          <input
            placeholder='Tokenomics'
            onChange={(e) => setTitle(e.target.value)}
            className={`mb-2 mt-1 flex h-9 w-full rounded-md border px-3 py-1 text-base shadow-sm focus-visible:ring-1 ${!isActiveTK ? 'cursor-not-allowed opacity-50' : ''}`}
            disabled={!isActiveTK}
          />
          <span className='ml-3 text-sm font-medium text-gray-700'>
            Description
          </span>
          <textarea
            placeholder='Optional'
            className={`mb-4 mt-1 flex h-[100px] w-full rounded-md border px-3 py-1 text-base shadow-sm focus-visible:ring-1 ${!isActiveTK ? 'cursor-not-allowed opacity-50' : ''}`}
            disabled={!isActiveTK}
            value={textArea}
            onChange={(e) => setTextArea(e.target.value)}
          ></textarea>

          {items.map((item) => (
            <div key={item.id} className='space-y-2'>
              <div className='flex items-center justify-between'>
                <span className='ml-3 text-sm font-medium text-gray-700'>
                  {item.title}
                </span>
                <button
                  onClick={() => removeItem(item.id)}
                  className='flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300'
                  disabled={!isActiveTK}
                >
                  &#8722;
                </button>
              </div>
              <input
                value={item.value1}
                placeholder={item.placeholder1}
                onChange={(e) => updateItem(item.id, 'value1', e.target.value)}
                className={`flex h-9 w-full rounded-md border px-3 py-1 text-base shadow-sm focus-visible:ring-1 ${!isActiveTK ? 'cursor-not-allowed opacity-50' : ''}`}
                disabled={!isActiveTK}
              />
              <input
                value={item.value2}
                placeholder={item.placeholder2}
                onChange={(e) => updateItem(item.id, 'value2', e.target.value)}
                className={`flex h-9 w-full rounded-md border px-3 py-1 text-base shadow-sm focus-visible:ring-1 ${!isActiveTK ? 'cursor-not-allowed opacity-50' : ''}`}
                disabled={!isActiveTK}
              />
            </div>
          ))}
          <div className='flex'>
            <div className='relative mt-4 flex h-8 w-36'>
              <input
                type='color'
                value={color}
                className='absolute inset-0 h-full w-full cursor-pointer opacity-0'
                onChange={handleColorChange}
                disabled={!isActiveTK}
              />
              <div
                className='h-full w-full rounded-md border border-gray-300'
                style={{ backgroundColor: color }}
              />
              <button
                className='absolute left-[114px] top-[5px] flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-transparent font-bold leading-none text-white'
                onClick={handleDefoltColorSec}
                disabled={!isActiveTK}
              >
                <span className='pb-[1px]'>X</span>
              </button>
            </div>
            <label className='ml-8 mt-3 flex items-center space-x-2'>
              <div className='relative flex items-center'>
                <input
                  type='checkbox'
                  onChange={handleChoose}
                  className='peer h-4 w-4 appearance-none rounded-md border-2 border-gray-400 checked:border-black checked:bg-black focus:ring-2 focus:ring-black'
                  disabled={!isActiveTK}
                />
                <svg
                  className='pointer-events-none absolute left-1/2 top-1/2 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 transform text-white peer-checked:block'
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
              <span className='text-sm text-gray-700'>Transparency</span>
            </label>
          </div>

          {items.length < 10 && (
            <button
              onClick={handleAddItem}
              className={`mt-2 flex h-9 items-center justify-center rounded-md border bg-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-gray-50 ${!isActiveTK ? 'cursor-not-allowed opacity-50' : ''}`}
              disabled={!isActiveTK}
            >
              <span className='mr-2 flex items-center justify-center'>
                <span className='inline-flex h-5 w-5 items-center justify-center rounded-full border border-gray-400 text-gray-700'>
                  +
                </span>
              </span>
              Add item
            </button>
          )}
        </motion.div>
      </details>
    </div>
  )
}
