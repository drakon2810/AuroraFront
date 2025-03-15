import Base from '../../../../public/images/base-logo-in-blue.svg'
import Bnb from '../../../../public/images/bnb-bnb-logo.svg'
import Custom from '../../../../public/images/custom.svg'
import SolanaIcon from '../../../../public/images/solana-sol-icon(1).svg'
import Sui from '../../../../public/images/sui-sui-logo.svg'
import { BuilderSidebarSubCategoryItem } from '@/components/Builder/BuilderSidebarSubCategoryItem'
import { templatesData } from '@/consts/templatesData'
import { TemplateContext } from '@/contexts/TemplateContext'
import { useBlocksStore } from '@/store/useBlocksStore'
import { TemplateContextValues } from '@/types/contexts'
import { motion } from 'framer-motion'
import { useState, useContext } from 'react'

const networkIcons: Record<string, string> = {
  Solana: SolanaIcon,
  Sui: Sui,
  Base: Base,
  'BNB Chain': Bnb,
  Custom: Custom
}

export const HowToBut = () => {
  const options = ['Solana', 'Sui', 'Base', 'BNB Chain', 'Custom']
  const [selected, setSelected] = useState(options[0])
  const [isOpen, setIsOpen] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [, setTitle] = useState('')
  const { toggleHowToBuy, setSelectedNetwork, setTitleHowToBuy } =
    useBlocksStore((state) => state)

  const { selectedTemplate } = useContext(
    TemplateContext
  ) as TemplateContextValues

  const currentTemplateCategories =
    templatesData[selectedTemplate]?.categories || []

  const textCategory = currentTemplateCategories.find(
    (category) => category.label === 'howToBuy'
  )

  if (!textCategory) {
    return null
  }

  const fields = textCategory.fields || []

  const handleSelect = (option: string) => {
    if (isActive) {
      setSelected(option)
      setSelectedNetwork(option)
      setIsOpen(false)
    }
  }
  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setTitle(value)
    setTitleHowToBuy(value)
  }

  const handleIsActive = () => {
    setIsActive((prev) => {
      const newIsActive = !prev
      toggleHowToBuy(newIsActive)
      return newIsActive
    })
  }

  console.log(fields)

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

          <div className='relative inline-block'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`flex w-full items-center justify-between rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-700 shadow-sm hover:bg-gray-100 ${
                !isActive ? 'cursor-not-allowed opacity-50' : ''
              }`}
              disabled={!isActive}
            >
              <div className='flex items-center gap-2'>
                <img
                  src={networkIcons[selected]}
                  alt={selected}
                  className='h-5 w-5'
                />
                <span>{selected}</span>
              </div>
              <svg
                className={`ml-auto h-5 w-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
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
            </button>

            {isOpen && (
              <ul
                className={`absolute left-0 z-50 mt-2 w-full rounded-lg border border-gray-300 bg-white shadow-md ${
                  selected === 'Custom' ? 'bottom-full' : 'top-full'
                }`}
              >
                {options.map((option, index) => (
                  <li
                    key={index}
                    className={`flex cursor-pointer items-center gap-2 px-3 py-2 hover:bg-gray-100 ${selected === option ? 'bg-gray-200' : ''}`}
                    onClick={() => handleSelect(option)}
                  >
                    <img
                      src={networkIcons[option]}
                      alt={option}
                      className='h-5 w-5'
                    />
                    {option}
                  </li>
                ))}
              </ul>
            )}

            {selected === 'Custom' && (
              <div
                className={`flex flex-auto flex-col gap-4 rounded-md py-2 ${!isActive ? 'pointer-events-none opacity-50' : ''}`}
              >
                {fields
                  .filter(
                    (field) =>
                      field.name === 'firstStep' ||
                      field.name === 'firstStepImage' ||
                      field.name === 'secondStep' ||
                      field.name === 'secondStepImage' ||
                      field.name === 'thirdStep' ||
                      field.name === 'thirdStepImage'
                  )
                  .map((field) => (
                    <div>
                      <BuilderSidebarSubCategoryItem
                        key={field.name}
                        {...field}
                      />
                    </div>
                  ))}
              </div>
            )}
          </div>

          <div>
            <span className='ml-3 text-sm font-medium text-gray-700'>
              Title
            </span>
            <input
              placeholder='How to Buy'
              onChange={handleTitle}
              className={`mt-2 flex h-9 w-full rounded-md border border-neutral-200 bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-neutral-950 placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:file:text-neutral-50 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300 md:text-sm ${
                !isActive ? 'cursor-not-allowed opacity-50' : ''
              }`}
              disabled={!isActive}
            />
          </div>
        </motion.div>
      </details>
    </div>
  )
}
