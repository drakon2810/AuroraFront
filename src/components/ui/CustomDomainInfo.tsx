import { FullscreenModalDomen } from './DomenHelp'
import { Nameservers } from './Nameservers'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { CiWarning } from 'react-icons/ci'

export const CustomDomainInfo = () => {
  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const [, setTitle] = useState('')

    const value = e.target.value
    setTitle(value)
  }
  return (
    <div className='flex flex-col items-start space-y-4'>
      <details className='group w-full rounded-lg border border-gray-300 bg-white open:border-gray-300'>
        <summary className='flex cursor-pointer items-center justify-between px-2 py-2 transition-colors hover:bg-gray-100'>
          <span className='text-sm font-semibold text-gray-700'>
            Custom domain
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
          <div>
            <input
              placeholder='Optional'
              onChange={handleTitle}
              className={`mt-2 flex h-9 w-full rounded-md border border-neutral-200 bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-neutral-950 placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:file:text-neutral-50 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300 md:text-sm`}
            />
          </div>
          <div className='flex justify-between'>
            <Nameservers />
            <FullscreenModalDomen />
          </div>
          <div className='flex'>
            <div className='h-4 w-4'>
              <CiWarning />
            </div>
            <p className='text-sm font-normal text-gray-600'>
              You can add it later, but you won't be able to change this domain
              afterward, so please enter a valid one.
            </p>
          </div>
        </motion.div>
      </details>
    </div>
  )
}
