import { useTokenomicsStoreRocet } from '@/store/useTokenomicsStoreRocet'
import { motion } from 'framer-motion'

export const TokenomicsRocet = () => {
  const {
    isActiveTokRocet,
    changeIsActiveRocetTok,
    changeTitleRocet,
    blocksFirst,
    blocksFirstTilte,
    blocksSecond,
    blocksSecondTilte,
    blocksTherd,
    blocksTherdTilte,
    blocksFour,
    blocksFourTilte,
    setFirstBlock,
    setFirstBlockTilte,
    setSecondBlock,
    setSecondBlockTilte,
    setTherdBlock,
    setTherdBlockTilte,
    setFourBlock,
    setFourBlockTilte
  } = useTokenomicsStoreRocet((state) => state)

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
              onChange={() => changeIsActiveRocetTok(!isActiveTokRocet)}
              checked={isActiveTokRocet}
            />
            <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-black peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-300"></div>
            <span className='ml-3 text-sm font-medium text-gray-700'>
              Enable
            </span>
          </label>

          <span className='ml-3 text-sm font-medium text-gray-700'>Title</span>
          <input
            placeholder='Tokenomics'
            onChange={(e) => changeTitleRocet(e.target.value)}
            className={`mb-2 mt-1 flex h-9 w-full rounded-md border px-3 py-1 text-base shadow-sm focus-visible:ring-1 ${
              !isActiveTokRocet ? 'cursor-not-allowed opacity-50' : ''
            }`}
            disabled={!isActiveTokRocet}
          />

          {/* Блок 1 */}
          <div
            className={`flex flex-col md:flex-row md:items-center md:space-x-4 ${!isActiveTokRocet ? 'cursor-not-allowed opacity-50' : ''}`}
          >
            <div className='flex-1'>
              <label className='text-sm text-gray-700'>Title 1</label>
              <input
                type='text'
                value={blocksFirstTilte}
                onChange={(e) => setFirstBlockTilte(e.target.value)}
                disabled={!isActiveTokRocet}
                className='mb-2 mt-1 w-full rounded-md border px-3 py-1 text-base shadow-sm focus-visible:ring-1'
              />
            </div>
            <div className='flex-1'>
              <label className='text-sm text-gray-700'>Value 1</label>
              <input
                type='text'
                value={blocksFirst}
                onChange={(e) => setFirstBlock(e.target.value)}
                disabled={!isActiveTokRocet}
                className='mb-2 mt-1 w-full rounded-md border px-3 py-1 text-base shadow-sm focus-visible:ring-1'
              />
            </div>
          </div>

          {/* Блок 2 */}
          <div
            className={`flex flex-col md:flex-row md:items-center md:space-x-4 ${!isActiveTokRocet ? 'cursor-not-allowed opacity-50' : ''}`}
          >
            <div className='flex-1'>
              <label className='text-sm text-gray-700'>Title 2</label>
              <input
                type='text'
                value={blocksSecondTilte}
                onChange={(e) => setSecondBlockTilte(e.target.value)}
                disabled={!isActiveTokRocet}
                className='mb-2 mt-1 w-full rounded-md border px-3 py-1 text-base shadow-sm focus-visible:ring-1'
              />
            </div>
            <div className='flex-1'>
              <label className='text-sm text-gray-700'>Value 2</label>
              <input
                type='text'
                value={blocksSecond}
                onChange={(e) => setSecondBlock(e.target.value)}
                disabled={!isActiveTokRocet}
                className='mb-2 mt-1 w-full rounded-md border px-3 py-1 text-base shadow-sm focus-visible:ring-1'
              />
            </div>
          </div>

          {/* Блок 3 */}
          <div
            className={`flex flex-col md:flex-row md:items-center md:space-x-4 ${!isActiveTokRocet ? 'cursor-not-allowed opacity-50' : ''}`}
          >
            <div className='flex-1'>
              <label className='text-sm text-gray-700'>Title 3</label>
              <input
                type='text'
                value={blocksTherdTilte}
                onChange={(e) => setTherdBlockTilte(e.target.value)}
                disabled={!isActiveTokRocet}
                className='mb-2 mt-1 w-full rounded-md border px-3 py-1 text-base shadow-sm focus-visible:ring-1'
              />
            </div>
            <div className='flex-1'>
              <label className='text-sm text-gray-700'>Value 3</label>
              <input
                type='text'
                value={blocksTherd}
                onChange={(e) => setTherdBlock(e.target.value)}
                disabled={!isActiveTokRocet}
                className='mb-2 mt-1 w-full rounded-md border px-3 py-1 text-base shadow-sm focus-visible:ring-1'
              />
            </div>
          </div>

          {/* Блок 4 */}
          <div
            className={`flex flex-col md:flex-row md:items-center md:space-x-4 ${!isActiveTokRocet ? 'cursor-not-allowed opacity-50' : ''}`}
          >
            <div className='flex-1'>
              <label className='text-sm text-gray-700'>Title 4</label>
              <input
                type='text'
                value={blocksFourTilte}
                onChange={(e) => setFourBlockTilte(e.target.value)}
                disabled={!isActiveTokRocet}
                className='mb-2 mt-1 w-full rounded-md border px-3 py-1 text-base shadow-sm focus-visible:ring-1'
              />
            </div>
            <div className='flex-1'>
              <label className='text-sm text-gray-700'>Value 4</label>
              <input
                type='text'
                value={blocksFour}
                onChange={(e) => setFourBlock(e.target.value)}
                disabled={!isActiveTokRocet}
                className='mb-2 mt-1 w-full rounded-md border px-3 py-1 text-base shadow-sm focus-visible:ring-1'
              />
            </div>
          </div>
        </motion.div>
      </details>
    </div>
  )
}
