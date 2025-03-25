import Base from '../../../../public/images/base-logo-in-blue.svg'
import Bnb from '../../../../public/images/bnb-bnb-logo.svg'
import SolanaIcon from '../../../../public/images/solana-sol-icon(1).svg'
import Sui from '../../../../public/images/sui-sui-logo.svg'
import { templatesData } from '@/consts/templatesData'
import { TemplateContext } from '@/contexts/TemplateContext'
import { useChartStore } from '@/store/useChartStore'
import { TemplateContextValues } from '@/types/contexts'
import { motion } from 'framer-motion'
import { useState, useContext } from 'react'

const networkIcons: Record<string, string> = {
  Solana: SolanaIcon,
  Sui: Sui,
  Base: Base,
  Bnb: Bnb
}

export const Chart = () => {
  const options = ['Solana', 'Sui', 'Base', 'Bnb']
  const [isActive, setIsActive] = useState(false)
  const [, setTitle] = useState('')
  const [, setContract] = useState('')
  const [toggleVariant, setToggleVariant] = useState('dexscreener')
  const [toggleTheme, setToggleTheme] = useState('dark')
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState(options[0])
  const {
    setTitleChart,
    setContractChart,
    setIsActiveChart,
    setToggleVariantChart,
    setToggleThemeChart,
    setOptionChat
  } = useChartStore((state) => state)

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

  const handleSelect = (option: string) => {
    if (isActive) {
      setSelected(option)
      setOptionChat(option)
      setIsOpen(false)
    }
  }

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setTitle(value)
    setTitleChart(value)
  }

  const handleContract = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setContract(value)
    setContractChart(value)
  }

  const handleIsActive = () => {
    setIsActive((prev) => {
      const newIsActive = !prev
      setIsActiveChart(newIsActive)
      return newIsActive
    })
  }

  const handleToggleVariant = (value: string) => {
    setToggleVariant(value)
    setToggleVariantChart(value)
  }
  const handleToggleTheme = (value: string) => {
    setToggleTheme(value)
    setToggleThemeChart(value)
  }

  return (
    <div className='flex flex-col items-start space-y-4'>
      <details className='group w-full rounded-lg border border-gray-300 bg-white open:border-gray-300'>
        <summary className='flex cursor-pointer items-center justify-between px-2 py-2 transition-colors hover:bg-gray-100'>
          <span className='text-sm font-semibold text-gray-700'>Chart</span>
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
                className={`absolute left-0 z-50 mt-2 w-full rounded-lg border border-gray-300 bg-white shadow-md`}
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
          </div>

          <div>
            <span className='ml-3 text-sm font-medium text-gray-700'>
              Title
            </span>
            <input
              placeholder='Enter title'
              onChange={handleTitle}
              className={`mt-2 flex h-9 w-full rounded-md border border-neutral-200 bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-neutral-950 placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:file:text-neutral-50 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300 md:text-sm ${
                !isActive ? 'cursor-not-allowed opacity-50' : ''
              }`}
              disabled={!isActive}
            />
          </div>
          <div>
            {toggleVariant === 'dexscreener' ? (
              <span className='ml-3 text-sm font-medium text-gray-700'>
                Contract
              </span>
            ) : (
              <span className='ml-3 text-sm font-medium text-gray-700'>
                Pair
              </span>
            )}
            <input
              placeholder={
                toggleVariant === 'dexscreener'
                  ? 'Enter Contract'
                  : 'Enter Pair'
              }
              onChange={handleContract}
              className={`mt-2 flex h-9 w-full rounded-md border border-neutral-200 bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-neutral-950 placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:file:text-neutral-50 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300 md:text-sm ${
                !isActive ? 'cursor-not-allowed opacity-50' : ''
              }`}
              disabled={!isActive}
            />
          </div>
          <div>
            <span className='ml-3 text-sm font-medium text-gray-700'>
              Variant
            </span>
            <div className='mb-4 mt-2 flex w-full justify-center'>
              <div className='flex w-full max-w-[500px] items-center justify-between rounded-md bg-gray-200 p-1'>
                <button
                  onClick={() => isActive && handleToggleVariant('dexscreener')}
                  disabled={!isActive}
                  className={`flex-1 rounded-md px-6 py-1.5 text-sm font-semibold transition-all ${
                    toggleVariant === 'dexscreener'
                      ? 'bg-white text-black'
                      : 'bg-gray-200 text-gray-700'
                  } ${!isActive ? 'cursor-not-allowed opacity-50' : ''}`}
                >
                  Dexscreener
                </button>
                <button
                  onClick={() => isActive && handleToggleVariant('dextools')}
                  disabled={selected === 'Sui'}
                  className={`flex-1 rounded-md px-6 py-1.5 text-sm font-semibold transition-all ${
                    toggleVariant === 'dextools'
                      ? 'bg-white text-black'
                      : 'bg-gray-200 text-gray-700'
                  } ${selected === 'Sui' ? 'cursor-not-allowed text-gray-400 opacity-50' : ''}`}
                >
                  Dextools
                </button>
              </div>
            </div>
            <span className='ml-3 text-sm font-medium text-gray-700'>
              Theme
            </span>
            <div className='mt-2 flex w-full justify-center'>
              <div className='flex w-full max-w-[500px] items-center justify-between rounded-md bg-gray-200 p-1'>
                {['dark', 'light'].map((option) => (
                  <button
                    key={option}
                    onClick={() => isActive && handleToggleTheme(option)}
                    disabled={!isActive}
                    className={`flex-1 rounded-md px-6 py-1.5 text-sm font-semibold transition-all ${
                      toggleTheme === option
                        ? 'bg-white text-black'
                        : 'bg-gray-200 text-gray-700'
                    } ${!isActive ? 'cursor-not-allowed opacity-50' : ''}`}
                  >
                    {option.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </details>
    </div>
  )
}
