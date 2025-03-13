import { BuilderSidebarSubCategoryItem } from '../../BuilderSidebarSubCategoryItem'
import { gradients } from './gradients'
import { templatesData } from '@/consts/templatesData'
import { TemplateContext } from '@/contexts/TemplateContext'
import { useStylesStore } from '@/store/useStulesStore'
import { TemplateContextValues } from '@/types/contexts'
import { motion } from 'framer-motion'
import { useState, useContext } from 'react'

export const BackgroundContent = () => {
  const [toggle, setToggleValue] = useState('color')
  const [activeSize, setActiveSize] = useState('none')
  const [color, setColor] = useState('#cfcfcf')
  const [colorOverlay, setColorOverlay] = useState('#cfcfcf')
  const [isOverlay, setIsOverlay] = useState(false)
  const [isOpacity, setIsOpacity] = useState(50)
  const [selectedGradient, setSelectedGradient] = useState<string | null>(null)
  const {
    setColorBackground,
    setToggle,
    setActiveSizeBtn,
    setOverlayColor,
    setOverlayOpacity,
    setBackgroundGradient
  } = useStylesStore((state) => state)

  const handleSizeChange = (size: string) => {
    setActiveSize(size)
    setActiveSizeBtn(size)
  }

  console.log(selectedGradient)

  const { selectedTemplate } = useContext(
    TemplateContext
  ) as TemplateContextValues
  const currentTemplateCategories = templatesData[selectedTemplate].categories
  const textCategory = currentTemplateCategories.find(
    (category) => category.label === 'images'
  )

  const handleToggle = (value: string) => {
    setToggleValue(value)
    setToggle(value)
  }

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value)
    setColorBackground(event.target.value)
  }
  const handleColorChangeOverlay = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setColorOverlay(event.target.value)
    setOverlayColor(event.target.value)
  }

  const handleDefoltColorSec = () => {
    setColor('#cfcfcf')
    setColorBackground('')
  }
  const handleDefoltColorOvarlay = () => {
    setColorOverlay('#cfcfcf')
    setOverlayColor('')
  }

  const handleHideChangeToken = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked
    setIsOverlay(isChecked)
  }

  const handleOpacity = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value)
    setIsOpacity(value)
    setOverlayOpacity(value / 100)
  }

  const handleGradientSelect = (gradient: string) => {
    setSelectedGradient(selectedGradient === gradient ? '' : gradient)
    setBackgroundGradient(selectedGradient === gradient ? '' : gradient)
  }

  const fields = textCategory?.fields ?? []

  if (!textCategory) {
    return null
  }

  return (
    <div className='space-y-4'>
      <details className='group rounded-lg border border-gray-300 bg-white open:border-gray-300'>
        <summary className='flex cursor-pointer items-center justify-between px-2 py-2 transition-colors hover:bg-gray-100'>
          <span className='text-sm font-semibold text-gray-700'>
            Background
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
          className='rounded-b-lg border-t border-gray-300 p-4'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <p className='mb-2 text-sm font-semibold text-gray-700'>Hero</p>
          <div className='flex w-full justify-center'>
            <div className='flex w-full max-w-[500px] items-center justify-between rounded-md bg-gray-200 p-1'>
              <button
                onClick={() => handleToggle('color')}
                className={`flex-1 rounded-md px-6 py-1.5 text-sm font-semibold transition-all ${
                  toggle === 'color'
                    ? 'bg-white text-black'
                    : 'bg-gray-200 text-gray-700'
                }`}
              >
                Color
              </button>
              <button
                onClick={() => handleToggle('gradient')}
                className={`flex-1 rounded-md px-6 py-1.5 text-sm font-semibold transition-all ${
                  toggle === 'gradient'
                    ? 'bg-white text-black'
                    : 'bg-gray-200 text-gray-700'
                }`}
              >
                Gradient
              </button>
              <button
                onClick={() => handleToggle('image')}
                className={`flex-1 rounded-md px-6 py-1.5 text-sm font-semibold transition-all ${
                  toggle === 'image'
                    ? 'bg-white text-black'
                    : 'bg-gray-200 text-gray-700'
                }`}
              >
                Image
              </button>
            </div>
          </div>

          {toggle === 'image' && (
            <div>
              <div className='flex flex-auto flex-col gap-4 rounded-md py-2'>
                {fields.map((field) => (
                  <BuilderSidebarSubCategoryItem key={field.name} {...field} />
                ))}
              </div>
              <div>
                <p className='mb-2 text-xs font-semibold text-gray-700'>
                  Image blur
                </p>
                <div className='flex w-full max-w-[500px] items-center space-x-4 rounded-md bg-gray-200 p-1'>
                  {['none', 'small', 'medium', 'large'].map((size) => (
                    <button
                      key={size}
                      onClick={() => handleSizeChange(size)}
                      className={`rounded-md border-2 text-sm font-semibold transition-all ${
                        activeSize === size
                          ? 'bg-white text-black'
                          : 'bg-gray-200 text-gray-700'
                      } px-2 py-1`}
                    >
                      {size.charAt(0).toUpperCase() + size.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
              <div className='mt-4'>
                <div className='flex items-start'>
                  <p className='mb-4 text-sm font-semibold text-gray-700'>
                    Overlay
                  </p>
                  <label className='ml-2 flex items-center space-x-2'>
                    <div className='relative flex items-center'>
                      <input
                        type='checkbox'
                        onChange={handleHideChangeToken}
                        className='peer h-5 w-5 appearance-none rounded-md border-2 border-gray-400 checked:border-black checked:bg-black focus:ring-2 focus:ring-black'
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
                  </label>
                </div>
              </div>
              {isOverlay === true ? (
                <div>
                  <p className='mb-2 text-xs font-semibold text-gray-700'>
                    Overlay color
                  </p>
                  <div className='relative mt-4 h-8 w-36'>
                    <input
                      type='color'
                      value={colorOverlay} // Теперь используем правильное состояние
                      className='absolute inset-0 h-full w-full cursor-pointer opacity-0'
                      onChange={handleColorChangeOverlay} // Теперь используем обработчик для оверлея
                      disabled={!isOverlay}
                    />
                    <div
                      className='h-full w-full rounded-md border border-gray-300'
                      style={{ backgroundColor: colorOverlay }} // Теперь отображается правильный цвет
                    />
                    <button
                      className='absolute left-[114px] top-[5px] flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-transparent font-bold leading-none text-white'
                      onClick={handleDefoltColorOvarlay}
                    >
                      <span className='pb-[1px]'>X</span>
                    </button>
                  </div>

                  <div className='mt-4'>
                    <p className='mb-2 text-xs font-semibold text-gray-700'>
                      Overlay opacity
                    </p>
                    <input
                      type='range'
                      min='0'
                      max='100'
                      step='1'
                      value={isOpacity}
                      onChange={handleOpacity}
                      className='h-2 w-full appearance-none rounded-lg'
                      style={{
                        background: `linear-gradient(to right, black ${isOpacity}%, gray ${isOpacity}%)`
                      }}
                    />
                  </div>
                </div>
              ) : (
                <div
                  className={`${isOverlay ? '' : 'pointer-events-none opacity-50'}`}
                >
                  <p className='mb-2 text-xs font-semibold text-gray-700'>
                    Overlay color
                  </p>
                  <div className='relative mt-4 h-8 w-36'>
                    <input
                      type='color'
                      value={colorOverlay}
                      className='absolute inset-0 h-full w-full cursor-pointer opacity-0'
                      onChange={handleColorChangeOverlay}
                      disabled={!isOverlay}
                    />
                    <div
                      className='h-full w-full rounded-md border border-gray-300'
                      style={{ backgroundColor: colorOverlay }}
                    />
                    <button
                      className='absolute left-[114px] top-[5px] flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-transparent font-bold leading-none text-white disabled:opacity-50'
                      onClick={handleDefoltColorSec}
                      disabled={!isOverlay}
                    >
                      <span className='pb-[1px]'>X</span>
                    </button>
                  </div>
                  <div className='mt-4'>
                    <p className='mb-2 text-xs font-semibold text-gray-700'>
                      Overlay opacity
                    </p>
                    <input
                      type='range'
                      min='0'
                      max='100'
                      step='1'
                      value={isOpacity}
                      onChange={handleOpacity}
                      className='h-2 w-full appearance-none rounded-lg'
                      disabled={!isOverlay} // Блокируем ползунок при false
                      style={{
                        background: `linear-gradient(to right, black ${isOpacity}%, gray ${isOpacity}%)`
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          )}
          {toggle === 'color' && (
            <div className='relative mt-4 h-8 w-36'>
              <input
                type='color'
                value={color}
                className='absolute inset-0 h-full w-full cursor-pointer opacity-0'
                onChange={handleColorChange}
              />
              <div
                className='h-full w-full rounded-md border border-gray-300'
                style={{ backgroundColor: color }}
              />
              <button
                className='absolute left-[114px] top-[5px] flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-transparent font-bold leading-none text-white'
                onClick={handleDefoltColorSec}
              >
                <span className='pb-[1px]'>X</span>
              </button>
            </div>
          )}
          {toggle === 'gradient' && (
            <div>
              <div className='mt-4 grid grid-cols-6 gap-4'>
                {gradients.map((gradient, index) => (
                  <div
                    key={index}
                    className='relative h-8 w-8 cursor-pointer rounded-lg shadow-md transition-all'
                    style={{
                      backgroundImage: gradient,
                      border:
                        selectedGradient === gradient
                          ? '2px solid black'
                          : '2px solid white'
                    }}
                    onClick={() => handleGradientSelect(gradient)}
                  >
                    {selectedGradient === gradient && (
                      <span className='absolute right-1 top-1 text-white'>
                        ✔
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </details>
    </div>
  )
}
