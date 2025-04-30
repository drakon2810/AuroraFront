import { useMissionFaq } from '@/store/useMissionFaq'
import { motion } from 'framer-motion'

export const MissionFaq = () => {
  const {
    changeIsActiveMissonFaq,
    setTitleFaq,
    isActiveMissonFaq,
    titleFaq,
    setFirstBlockTitleFaq,
    setSecondBlockTitleFaq,
    setThierdBlockTitleFaq,
    setFourBlockTitleFaq,
    setFirstBlockDescriptionFaq,
    setSecondBlockDescriptionFaq,
    setThierdBlockDescriptionFaq,
    setFourBlockDescriptionFaq,
    firstBlockTitleFaq,
    secondBlockTitleFaq,
    thierdBlockTitleFaq,
    fourBlockTitleFaq,
    firstBlockDescriptionFaq,
    secondBlockDescriptionFaq,
    thierdBlockDescriptionFaq,
    fourBlockDescriptionFaq
  } = useMissionFaq((state) => state)

  const inputClass =
    'w-full rounded-md border px-3 py-2 text-base shadow-sm focus-visible:ring-1 disabled:bg-gray-100 disabled:cursor-not-allowed'

  return (
    <div className='flex flex-col items-start space-y-4'>
      <details className='group w-full rounded-lg border border-gray-300 bg-white open:border-gray-300'>
        <summary className='flex cursor-pointer items-center justify-between px-2 py-2 transition-colors hover:bg-gray-100'>
          <span className='text-sm font-semibold text-gray-700'>
            Mission Faq
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
          {/* Toggle */}
          <label className='relative mb-4 inline-flex cursor-pointer items-center'>
            <input
              type='checkbox'
              className='peer sr-only'
              onChange={() => changeIsActiveMissonFaq(!isActiveMissonFaq)}
              checked={isActiveMissonFaq}
            />
            <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-black peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-300"></div>
            <span className='ml-3 text-sm font-medium text-gray-700'>
              Enable
            </span>
          </label>

          {/* Title */}
          <div className='mb-4 flex flex-col'>
            <label className='mb-2 text-sm font-medium text-gray-700'>
              Title
            </label>
            <input
              type='text'
              value={titleFaq}
              onChange={(e) => setTitleFaq(e.target.value)}
              disabled={!isActiveMissonFaq}
              className={inputClass}
            />
          </div>

          {/* Block 1 */}
          <div className='mb-4 flex flex-col'>
            <label className='mb-2 text-sm font-medium text-gray-700'>
              Block 1 Title
            </label>
            <input
              type='text'
              value={firstBlockTitleFaq}
              onChange={(e) => setFirstBlockTitleFaq(e.target.value)}
              disabled={!isActiveMissonFaq}
              className={inputClass}
            />
            <label className='mb-2 mt-4 text-sm font-medium text-gray-700'>
              Block 1 Description
            </label>
            <textarea
              value={firstBlockDescriptionFaq}
              onChange={(e) => setFirstBlockDescriptionFaq(e.target.value)}
              disabled={!isActiveMissonFaq}
              className={inputClass}
            />
          </div>

          {/* Block 2 */}
          <div className='mb-4 flex flex-col'>
            <label className='mb-2 text-sm font-medium text-gray-700'>
              Block 2 Title
            </label>
            <input
              type='text'
              value={secondBlockTitleFaq}
              onChange={(e) => setSecondBlockTitleFaq(e.target.value)}
              disabled={!isActiveMissonFaq}
              className={inputClass}
            />
            <label className='mb-2 mt-4 text-sm font-medium text-gray-700'>
              Block 2 Description
            </label>
            <textarea
              value={secondBlockDescriptionFaq}
              onChange={(e) => setSecondBlockDescriptionFaq(e.target.value)}
              disabled={!isActiveMissonFaq}
              className={inputClass}
            />
          </div>

          {/* Block 3 */}
          <div className='mb-4 flex flex-col'>
            <label className='mb-2 text-sm font-medium text-gray-700'>
              Block 3 Title
            </label>
            <input
              type='text'
              value={thierdBlockTitleFaq}
              onChange={(e) => setThierdBlockTitleFaq(e.target.value)}
              disabled={!isActiveMissonFaq}
              className={inputClass}
            />
            <label className='mb-2 mt-4 text-sm font-medium text-gray-700'>
              Block 3 Description
            </label>
            <textarea
              value={thierdBlockDescriptionFaq}
              onChange={(e) => setThierdBlockDescriptionFaq(e.target.value)}
              disabled={!isActiveMissonFaq}
              className={inputClass}
            />
          </div>

          {/* Block 4 */}
          <div className='mb-4 flex flex-col'>
            <label className='mb-2 text-sm font-medium text-gray-700'>
              Block 4 Title
            </label>
            <input
              type='text'
              value={fourBlockTitleFaq}
              onChange={(e) => setFourBlockTitleFaq(e.target.value)}
              disabled={!isActiveMissonFaq}
              className={inputClass}
            />
            <label className='mb-2 mt-4 text-sm font-medium text-gray-700'>
              Block 4 Description
            </label>
            <textarea
              value={fourBlockDescriptionFaq}
              onChange={(e) => setFourBlockDescriptionFaq(e.target.value)}
              disabled={!isActiveMissonFaq}
              className={inputClass}
            />
          </div>
        </motion.div>
      </details>
    </div>
  )
}
