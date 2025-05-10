import { useJoinTheMission } from '@/store/useJoinTheMission'
import { motion } from 'framer-motion'

export const JoinTheMission = () => {
  const {
    changeIsActiveMissonJoin,
    setTitleJoin,
    titleJoin,
    isActiveMissonJoin,

    setFirstBlockTitleJoin,
    setSecondBlockTitleJoin,
    setThierdBlockTitleJoin,

    setFirstBlockDescriptionJoin,
    setSecondBlockDescriptionJoin,
    setThierdBlockDescriptionJoin,

    setFirstBlockLinkJoin,
    setSecondBlockLinkJoin,
    setThierdBlockLinkJoin,

    firstBlockTitleJoin,
    secondBlockTitleJoin,
    thierdBlockTitleJoin,

    firstBlockDescriptionJoin,
    secondBlockDescriptionJoin,
    thierdBlockDescriptionJoin,

    firstBlockLinkJoin,
    secondBlockLinkJoin,
    thierdBlockLinkJoin
  } = useJoinTheMission((state) => state)

  const inputClass =
    'w-full rounded-md border px-3 py-2 text-base shadow-sm focus-visible:ring-1 disabled:bg-gray-100 disabled:cursor-not-allowed'

  return (
    <div className='flex flex-col items-start space-y-4'>
      <details className='group w-full rounded-lg border border-gray-300 bg-white open:border-gray-300'>
        <summary className='flex cursor-pointer items-center justify-between px-2 py-2 transition-colors hover:bg-gray-100'>
          <span className='text-sm font-semibold text-gray-700'>
            Join The Mission
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
              onChange={() => changeIsActiveMissonJoin(!isActiveMissonJoin)}
              checked={isActiveMissonJoin}
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
              value={titleJoin}
              onChange={(e) => setTitleJoin(e.target.value)}
              disabled={!isActiveMissonJoin}
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
              value={firstBlockTitleJoin}
              onChange={(e) => setFirstBlockTitleJoin(e.target.value)}
              disabled={!isActiveMissonJoin}
              className={inputClass}
            />
            <label className='mb-2 mt-4 text-sm font-medium text-gray-700'>
              Block 1 Description
            </label>
            <textarea
              value={firstBlockDescriptionJoin}
              onChange={(e) => setFirstBlockDescriptionJoin(e.target.value)}
              disabled={!isActiveMissonJoin}
              className={inputClass}
            />
            <label className='mb-2 mt-4 text-sm font-medium text-gray-700'>
              Block 1 Link
            </label>
            <input
              type='text'
              value={firstBlockLinkJoin}
              onChange={(e) => setFirstBlockLinkJoin(e.target.value)}
              disabled={!isActiveMissonJoin}
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
              value={secondBlockTitleJoin}
              onChange={(e) => setSecondBlockTitleJoin(e.target.value)}
              disabled={!isActiveMissonJoin}
              className={inputClass}
            />
            <label className='mb-2 mt-4 text-sm font-medium text-gray-700'>
              Block 2 Description
            </label>
            <textarea
              value={secondBlockDescriptionJoin}
              onChange={(e) => setSecondBlockDescriptionJoin(e.target.value)}
              disabled={!isActiveMissonJoin}
              className={inputClass}
            />
            <label className='mb-2 mt-4 text-sm font-medium text-gray-700'>
              Block 2 Link
            </label>
            <input
              type='text'
              value={secondBlockLinkJoin}
              onChange={(e) => setSecondBlockLinkJoin(e.target.value)}
              disabled={!isActiveMissonJoin}
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
              value={thierdBlockTitleJoin}
              onChange={(e) => setThierdBlockTitleJoin(e.target.value)}
              disabled={!isActiveMissonJoin}
              className={inputClass}
            />
            <label className='mb-2 mt-4 text-sm font-medium text-gray-700'>
              Block 3 Description
            </label>
            <textarea
              value={thierdBlockDescriptionJoin}
              onChange={(e) => setThierdBlockDescriptionJoin(e.target.value)}
              disabled={!isActiveMissonJoin}
              className={inputClass}
            />
            <label className='mb-2 mt-4 text-sm font-medium text-gray-700'>
              Block 3 Link
            </label>
            <input
              type='text'
              value={thierdBlockLinkJoin}
              onChange={(e) => setThierdBlockLinkJoin(e.target.value)}
              disabled={!isActiveMissonJoin}
              className={inputClass}
            />
          </div>
        </motion.div>
      </details>
    </div>
  )
}
