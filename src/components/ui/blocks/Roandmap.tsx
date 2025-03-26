import { useRoadMapStore } from '@/store/useRoadMapStore'
import { motion } from 'framer-motion'
import { useState } from 'react'

export const Roandmap = () => {
  const [isActive, setIsActive] = useState(false)
  const [, setTitle] = useState('')
  const [stageOne, setStageOne] = useState('')
  const [stageTwo, setStageTwo] = useState('')
  const [stageFree, setStageFree] = useState('')
  const [teaxtAreaOne, setTextAreaOne] = useState('')
  const [teaxtAreaTwo, setTextAreaTwo] = useState('')
  const [teaxtAreaFree, setTextAreaFree] = useState('')
  const {
    setisActiveRM,
    setTitleRM,
    setStageOneRM,
    setStageTwoRM,
    setStageFreeRM,
    setTeaxtAreaOneRM,
    setTeaxtAreaTwoRM,
    setTeaxtAreaFreeRM
  } = useRoadMapStore((state) => state)

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setTitle(value)
    setTitleRM(value)
  }

  const handleStageOne = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setStageOne(value)
    setStageOneRM(value)
  }

  const handleStageTwo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setStageTwo(value)
    setStageTwoRM(value)
  }

  const handleStageFree = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setStageFree(value)
    setStageFreeRM(value)
  }

  const handleTextAreaOne = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    setTextAreaOne(value)
    setTeaxtAreaOneRM(value)
  }

  const handleTextAreaTwo = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    setTextAreaTwo(value)
    setTeaxtAreaTwoRM(value)
  }

  const handleTextAreaFree = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    setTextAreaFree(value)
    setTeaxtAreaFreeRM(value)
  }

  const handleIsActive = () => {
    setIsActive((prev) => {
      const newIsActive = !prev
      setisActiveRM(newIsActive)
      return newIsActive
    })
  }
  return (
    <div className='flex flex-col items-start space-y-4'>
      <details className='group w-full rounded-lg border border-gray-300 bg-white open:border-gray-300'>
        <summary className='flex cursor-pointer items-center justify-between px-2 py-2 transition-colors hover:bg-gray-100'>
          <span className='text-sm font-semibold text-gray-700'>Roadmap</span>
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
            <span className='ml-3 text-sm font-medium text-gray-700'>
              Stage 1
            </span>
            <div>
              <input
                placeholder='Stage 1'
                onChange={handleStageOne}
                value={stageOne}
                className={`mt-2 flex h-9 w-full rounded-md border border-neutral-200 bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-neutral-950 placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:file:text-neutral-50 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300 md:text-sm ${
                  !isActive ? 'cursor-not-allowed opacity-50' : ''
                }`}
                disabled={!isActive}
              />
              <textarea
                placeholder='Stage description goes here'
                className={`mb-4 mt-2 flex h-[100px] w-full rounded-md border border-neutral-200 bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-neutral-950 placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:file:text-neutral-50 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300 md:text-sm ${
                  !isActive ? 'cursor-not-allowed opacity-50' : ''
                }`}
                disabled={!isActive}
                value={teaxtAreaOne}
                onChange={handleTextAreaOne}
              ></textarea>
            </div>
            <span className='ml-3 text-sm font-medium text-gray-700'>
              Stage 2
            </span>
            <div>
              <input
                placeholder='Stage 2'
                onChange={handleStageTwo}
                value={stageTwo}
                className={`mt-2 flex h-9 w-full rounded-md border border-neutral-200 bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-neutral-950 placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:file:text-neutral-50 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300 md:text-sm ${
                  !isActive ? 'cursor-not-allowed opacity-50' : ''
                }`}
                disabled={!isActive}
              />
              <textarea
                placeholder='Stage description goes here'
                className={`mb-4 mt-2 flex h-[100px] w-full rounded-md border border-neutral-200 bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-neutral-950 placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:file:text-neutral-50 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300 md:text-sm ${
                  !isActive ? 'cursor-not-allowed opacity-50' : ''
                }`}
                disabled={!isActive}
                value={teaxtAreaTwo}
                onChange={handleTextAreaTwo}
              ></textarea>
            </div>
            <span className='ml-3 text-sm font-medium text-gray-700'>
              Stage 3
            </span>
            <div>
              <input
                placeholder='Stage 3'
                value={stageFree}
                onChange={handleStageFree}
                className={`mt-2 flex h-9 w-full rounded-md border border-neutral-200 bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-neutral-950 placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:file:text-neutral-50 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300 md:text-sm ${
                  !isActive ? 'cursor-not-allowed opacity-50' : ''
                }`}
                disabled={!isActive}
              />
              <textarea
                placeholder='Stage description goes here'
                className={`mt-2 flex h-[100px] w-full rounded-md border border-neutral-200 bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-neutral-950 placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:file:text-neutral-50 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300 md:text-sm ${
                  !isActive ? 'cursor-not-allowed opacity-50' : ''
                }`}
                disabled={!isActive}
                value={teaxtAreaFree}
                onChange={handleTextAreaFree}
              ></textarea>
            </div>
          </div>
        </motion.div>
      </details>
    </div>
  )
}
