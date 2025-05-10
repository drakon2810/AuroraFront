import { useFaqStore } from '@/store/useFaqStore'
import { motion } from 'framer-motion'
import { useState } from 'react'

export const FaqImpressiw = () => {
  const [localActive, setLocalActive] = useState(false)
  const {
    toggleIsActiveFaq,
    setTitleFaq,
    setFirstFaq,
    setFirstAnsw,
    setSecondFaq,
    setSecondAnsw,
    setThirdFaq,
    setThirdAnsw,
    setFourthFaq,
    setFourthAnsw,
    firstFaq,
    firstAnsw,
    secondFaq,
    secondAnsw,
    thirdFaq,
    thirdAnsw,
    fourthFaq,
    fourAnsw,
    titleFaq
  } = useFaqStore((state) => state)

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleFaq(e.target.value)
  }

  const handleStageOne = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstFaq(e.target.value)
  }

  const handleStageTwo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSecondFaq(e.target.value)
  }

  const handleStageFree = (e: React.ChangeEvent<HTMLInputElement>) => {
    setThirdFaq(e.target.value)
  }
  const handleStageFour = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFourthFaq(e.target.value)
  }

  const handleTextAreaOne = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFirstAnsw(e.target.value)
  }

  const handleTextAreaTwo = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSecondAnsw(e.target.value)
  }

  const handleTextAreaFree = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setThirdAnsw(e.target.value)
  }
  const handleTextAreaFour = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFourthAnsw(e.target.value)
  }

  const handleIsActive = () => {
    const newActive = !localActive
    setLocalActive(newActive)
    toggleIsActiveFaq(newActive)
  }

  return (
    <div className='flex flex-col items-start space-y-4'>
      <details className='group w-full rounded-lg border border-gray-300 bg-white open:border-gray-300'>
        <summary className='flex cursor-pointer items-center justify-between px-2 py-2 transition-colors hover:bg-gray-100'>
          <span className='text-sm font-semibold text-gray-700'>Faq</span>
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
          transition={{ duration: 0.3 }}
        >
          {/* Toggle */}
          <label className='relative inline-flex cursor-pointer items-center'>
            <input
              type='checkbox'
              className='peer sr-only'
              checked={localActive}
              onChange={handleIsActive}
            />
            <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-black peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-300"></div>
            <span className='ml-3 text-sm font-medium text-gray-700'>
              Enable
            </span>
          </label>

          {/* Title */}
          <div>
            <label className='ml-3 text-sm font-medium text-gray-700'>
              Title
            </label>
            <input
              value={titleFaq}
              onChange={handleTitle}
              placeholder='Enter title'
              disabled={!localActive}
              className={`mt-2 w-full rounded-md border border-gray-200 p-2 text-sm ${
                !localActive
                  ? 'cursor-not-allowed bg-gray-100 opacity-50'
                  : 'bg-white'
              }`}
            />
          </div>

          {/* Stage 1 */}
          <div>
            <label className='ml-3 text-sm font-medium text-gray-700'>
              Block 1
            </label>
            <input
              value={firstFaq}
              onChange={handleStageOne}
              placeholder='Stage 1 title'
              disabled={!localActive}
              className={`mt-2 w-full rounded-md border border-gray-200 p-2 text-sm ${
                !localActive
                  ? 'cursor-not-allowed bg-gray-100 opacity-50'
                  : 'bg-white'
              }`}
            />
            <textarea
              value={firstAnsw}
              onChange={handleTextAreaOne}
              placeholder='Stage 1 description'
              disabled={!localActive}
              className={`mt-2 h-24 w-full rounded-md border border-gray-200 p-2 text-sm ${
                !localActive
                  ? 'cursor-not-allowed bg-gray-100 opacity-50'
                  : 'bg-white'
              }`}
            />
          </div>

          {/* Stage 2 */}
          <div>
            <label className='ml-3 text-sm font-medium text-gray-700'>
              Block 2
            </label>
            <input
              value={secondFaq}
              onChange={handleStageTwo}
              placeholder='Stage 2 title'
              disabled={!localActive}
              className={`mt-2 w-full rounded-md border border-gray-200 p-2 text-sm ${
                !localActive
                  ? 'cursor-not-allowed bg-gray-100 opacity-50'
                  : 'bg-white'
              }`}
            />
            <textarea
              value={secondAnsw}
              onChange={handleTextAreaTwo}
              placeholder='Stage 2 description'
              disabled={!localActive}
              className={`mt-2 h-24 w-full rounded-md border border-gray-200 p-2 text-sm ${
                !localActive
                  ? 'cursor-not-allowed bg-gray-100 opacity-50'
                  : 'bg-white'
              }`}
            />
          </div>

          {/* Stage 3 */}
          <div>
            <label className='ml-3 text-sm font-medium text-gray-700'>
              Block 3
            </label>
            <input
              value={thirdFaq}
              onChange={handleStageFree}
              placeholder='Stage 3 title'
              disabled={!localActive}
              className={`mt-2 w-full rounded-md border border-gray-200 p-2 text-sm ${
                !localActive
                  ? 'cursor-not-allowed bg-gray-100 opacity-50'
                  : 'bg-white'
              }`}
            />
            <textarea
              value={thirdAnsw}
              onChange={handleTextAreaFree}
              placeholder='Stage 3 description'
              disabled={!localActive}
              className={`mt-2 h-24 w-full rounded-md border border-gray-200 p-2 text-sm ${
                !localActive
                  ? 'cursor-not-allowed bg-gray-100 opacity-50'
                  : 'bg-white'
              }`}
            />
          </div>

          <div>
            <label className='ml-3 text-sm font-medium text-gray-700'>
              Block 4
            </label>
            <input
              value={fourthFaq}
              onChange={handleStageFour}
              placeholder='Stage 3 title'
              disabled={!localActive}
              className={`mt-2 w-full rounded-md border border-gray-200 p-2 text-sm ${
                !localActive
                  ? 'cursor-not-allowed bg-gray-100 opacity-50'
                  : 'bg-white'
              }`}
            />
            <textarea
              value={fourAnsw}
              onChange={handleTextAreaFour}
              placeholder='Stage 3 description'
              disabled={!localActive}
              className={`mt-2 h-24 w-full rounded-md border border-gray-200 p-2 text-sm ${
                !localActive
                  ? 'cursor-not-allowed bg-gray-100 opacity-50'
                  : 'bg-white'
              }`}
            />
          </div>
        </motion.div>
      </details>
    </div>
  )
}
