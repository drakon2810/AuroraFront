import { useTokenDistributionStore } from '@/store/useTokenDistribution'
import { motion } from 'framer-motion'
import { useState } from 'react'

export const TokenomicDescriptionChart = () => {
  const {
    isActiveDes,
    textAreaDes,
    itemsDes,
    setIsActiveDes,
    setTitleDes,
    setTextAreaDes,
    addItemDes,
    removeItemDes,
    updateItemDes,
    updateItemColor
  } = useTokenDistributionStore()

  console.log(itemsDes)

  const handleAddItem = () => {
    if (itemsDes.length < 10) {
      addItemDes()
    }
  }

  const handleColorChange =
    (id: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      updateItemColor(id, event.target.value)
    }

  return (
    <div className='flex flex-col items-start space-y-4'>
      <details className='group w-full rounded-lg border border-gray-300 bg-white open:border-gray-300'>
        <summary className='flex cursor-pointer items-center justify-between px-2 py-2 transition-colors hover:bg-gray-100'>
          <span className='text-sm font-semibold text-gray-700'>
            Token Distribution Chart
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
              onChange={() => setIsActiveDes(!isActiveDes)}
              checked={isActiveDes}
            />
            <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-black peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-300"></div>
            <span className='ml-3 text-sm font-medium text-gray-700'>
              Enable
            </span>
          </label>
          <span className='ml-3 text-sm font-medium text-gray-700'>Title</span>
          <input
            placeholder='Tokenomics'
            onChange={(e) => setTitleDes(e.target.value)}
            className={`mb-2 mt-1 flex h-9 w-full rounded-md border px-3 py-1 text-base shadow-sm focus-visible:ring-1 ${!isActiveDes ? 'cursor-not-allowed opacity-50' : ''}`}
            disabled={!isActiveDes}
          />
          <span className='ml-3 text-sm font-medium text-gray-700'>
            Description
          </span>
          <textarea
            placeholder='Optional'
            className={`mb-4 mt-1 flex h-[100px] w-full rounded-md border px-3 py-1 text-base shadow-sm focus-visible:ring-1 ${!isActiveDes ? 'cursor-not-allowed opacity-50' : ''}`}
            disabled={!isActiveDes}
            value={textAreaDes}
            onChange={(e) => setTextAreaDes(e.target.value)}
          ></textarea>

          {itemsDes.map((item) => (
            <div key={item.id} className='space-y-2'>
              <div className='flex items-center justify-between'>
                <span className='ml-3 text-sm font-medium text-gray-700'>
                  {item.title}
                </span>
                <button
                  onClick={() => removeItemDes(item.id)}
                  className='flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300'
                  disabled={!isActiveDes}
                >
                  &#8722;
                </button>
              </div>
              <div className='flex items-center'>
                <input
                  value={item.value1}
                  placeholder={item.placeholder1}
                  onChange={(e) =>
                    updateItemDes(item.id, 'value1', e.target.value)
                  }
                  className={`flex h-9 w-[100px] rounded-md border px-3 py-1 text-base shadow-sm focus-visible:ring-1 ${!isActiveDes ? 'cursor-not-allowed opacity-50' : ''}`}
                  disabled={!isActiveDes}
                />
                <p className='ml-1 mt-1'>%</p>
                <div className='mb-3 ml-3 flex'>
                  <div className='relative mt-4 flex h-8 w-36'>
                    <input
                      type='color'
                      value={item.color} // Используем цвет из состояния
                      className='absolute inset-0 h-full w-full cursor-pointer opacity-0'
                      onChange={handleColorChange(item.id)} // Обработчик изменения цвета
                      disabled={!isActiveDes}
                    />
                    <div
                      className='h-full w-full rounded-md border border-gray-300'
                      style={{ backgroundColor: item.color }}
                    />
                  </div>
                </div>
              </div>
              <input
                value={item.value2}
                placeholder={item.placeholder2}
                onChange={(e) =>
                  updateItemDes(item.id, 'value2', e.target.value)
                }
                className={`flex h-9 w-full rounded-md border px-3 py-1 text-base shadow-sm focus-visible:ring-1 ${!isActiveDes ? 'cursor-not-allowed opacity-50' : ''}`}
                disabled={!isActiveDes}
              />
            </div>
          ))}

          {itemsDes.length < 10 && (
            <button
              onClick={handleAddItem}
              className={`mt-2 flex h-9 items-center justify-center rounded-md border bg-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-gray-50 ${!isActiveDes ? 'cursor-not-allowed opacity-50' : ''}`}
              disabled={!isActiveDes}
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
