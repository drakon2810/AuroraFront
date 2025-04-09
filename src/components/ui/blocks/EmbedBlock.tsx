import { FullscreenModal } from '../EmbedHelp'
import { templatesData } from '@/consts/templatesData'
import { TemplateContext } from '@/contexts/TemplateContext'
import { useBlocksStore } from '@/store/useBlocksStore'
import { TemplateContextValues } from '@/types/contexts'
import { motion } from 'framer-motion'
import { useState, useContext } from 'react'

export const EmberBlock = () => {
  const [toggle, setToggleValue] = useState('youtube')
  const [isActive, setIsActive] = useState(false)
  const [, setTitle] = useState('')
  const [video, setVideo] = useState('')
  const [color, setColor] = useState('white')
  const {
    setEmberVidoe,
    setisActiveEmbed,
    setEmberX,
    setEmberTicTok,
    setEmbedChoiseBtn,
    setEmbedTitle,
    setEmbedColorX,
    emberX,
    emberVideo,
    emberTictok
  } = useBlocksStore((state) => state)

  console.log(`emberX ${emberX}`)
  console.log(`emberVideo ${emberVideo}`)
  console.log(`emberTictok ${emberTictok}`)

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

  const handleColorX = (value: string) => {
    setColor(value)
    setEmbedColorX(value)
  }

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setTitle(value)
    setEmbedTitle(value)
  }

  const handleVideo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setVideo(value)

    switch (toggle) {
      case 'youtube':
        setEmberVidoe(value)
        break
      case 'x':
        setEmberX(value)
        break
      case 'tiktok':
        setEmberTicTok(value)
        break
      default:
        break
    }
  }

  const handleIsActive = () => {
    setIsActive((prev) => {
      const newIsActive = !prev
      setisActiveEmbed(newIsActive)
      return newIsActive
    })
  }

  const handleToggle = (value: string) => {
    setToggleValue(value)
    setEmbedChoiseBtn(value)

    switch (value) {
      case 'youtube':
        setEmberVidoe(video)
        break
      case 'x':
        setEmberX(video)
        break
      case 'tiktok':
        setEmberTicTok(video)
        break
      default:
        break
    }
  }

  return (
    <div className='flex flex-col items-start space-y-4'>
      <details className='group w-full rounded-lg border border-gray-300 bg-white open:border-gray-300'>
        <summary className='flex cursor-pointer items-center justify-between px-2 py-2 transition-colors hover:bg-gray-100'>
          <span className='text-sm font-semibold text-gray-700'>Embed</span>

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
          <div className='flex items-center'>
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
            <div className='ml-24'>
              <FullscreenModal />
            </div>
          </div>
          <div className='flex w-full justify-center'>
            <div className='flex w-full max-w-[500px] items-center justify-between rounded-md bg-gray-200 p-1'>
              {['youtube', 'x', 'tiktok'].map((option) => (
                <button
                  key={option}
                  onClick={() => isActive && handleToggle(option)}
                  disabled={!isActive}
                  className={`flex-1 rounded-md px-6 py-1.5 text-sm font-semibold transition-all ${
                    toggle === option
                      ? 'bg-white text-black'
                      : 'bg-gray-200 text-gray-700'
                  } ${!isActive ? 'cursor-not-allowed opacity-50' : ''}`}
                >
                  {option.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div>
            <span className='ml-3 text-sm font-medium text-gray-700'>
              Title
            </span>
            <input
              placeholder='Optional'
              onChange={handleTitle}
              className={`mt-2 flex h-9 w-full rounded-md border border-neutral-200 bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-neutral-950 placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:file:text-neutral-50 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300 md:text-sm ${
                !isActive ? 'cursor-not-allowed opacity-50' : ''
              }`}
              disabled={!isActive}
            />
          </div>
          <div>
            <span className='ml-3 text-sm font-medium text-gray-700'>
              Embed link
            </span>
            <input
              value={
                toggle === 'youtube'
                  ? emberVideo
                  : toggle === 'x'
                    ? emberX
                    : emberTictok
              }
              onChange={handleVideo}
              placeholder='Enter your link'
              className={`mt-2 flex h-9 w-full rounded-md border border-neutral-200 bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-neutral-950 placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:file:text-neutral-50 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300 md:text-sm ${
                !isActive ? 'cursor-not-allowed opacity-50' : ''
              }`}
              disabled={!isActive}
            />
          </div>
          {toggle === 'x' && (
            <div className='flex w-full justify-center'>
              <div className='flex w-full max-w-[500px] items-center justify-between rounded-md bg-gray-200 p-1'>
                {['white', 'dark'].map((option) => (
                  <button
                    key={option}
                    onClick={() => isActive && handleColorX(option)}
                    disabled={!isActive}
                    className={`flex-1 rounded-md px-6 py-1.5 text-sm font-semibold transition-all ${
                      color === option
                        ? 'bg-white text-black'
                        : 'bg-gray-200 text-gray-700'
                    } ${!isActive ? 'cursor-not-allowed opacity-50' : ''}`}
                  >
                    {option.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </details>
    </div>
  )
}
