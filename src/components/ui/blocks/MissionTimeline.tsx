import { useTimelineStore } from '@/store/useMissionTimeline'
import { motion } from 'framer-motion'

export const MissionTimeline = () => {
  const {
    titleTimeline,
    setTitleTimeline,
    blocksFirstPhase,
    setFirstPhase,
    blocksFirstTitle,
    setFirstTitle,
    blocksFirstDesc,
    setFirstDesc,
    blocksFirstData,
    setFirstData,
    blocksSecondPhase,
    setSecondPhase,
    blocksSecondTitle,
    setSecondTitle,
    blocksSecondDesc,
    setSecondDesc,
    blocksSecondData,
    setSecondData,
    blocksThirdPhase,
    setThirdPhase,
    blocksThirdTitle,
    setThirdTitle,
    blocksThirdDesc,
    setThirdDesc,
    blocksThirdData,
    setThirdData,
    changeIsActiveMissRoc,
    isActiveMissonRoc
  } = useTimelineStore()

  const inputClass =
    'w-full rounded-md border px-3 py-2 text-base shadow-sm focus-visible:ring-1 disabled:bg-gray-100 disabled:cursor-not-allowed'

  return (
    <div className='flex flex-col items-start space-y-4'>
      <details className='group w-full rounded-lg border border-gray-300 bg-white open:border-gray-300'>
        <summary className='flex cursor-pointer items-center justify-between px-2 py-2 transition-colors hover:bg-gray-100'>
          <span className='text-sm font-semibold text-gray-700'>
            Mission Timeline
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
              onChange={() => changeIsActiveMissRoc(!isActiveMissonRoc)}
              checked={isActiveMissonRoc}
            />
            <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-black peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-300"></div>
            <span className='ml-3 text-sm font-medium text-gray-700'>
              Enable
            </span>
          </label>

          {/* Title Timeline */}
          <div className='flex flex-col'>
            <label className='text-sm font-medium text-gray-700'>Title</label>
            <input
              type='text'
              value={titleTimeline}
              onChange={(e) => setTitleTimeline(e.target.value)}
              disabled={!isActiveMissonRoc}
              className={inputClass}
            />
          </div>

          {/* Phase 1 */}
          <div className='space-y-2'>
            <div className='text-lg font-semibold text-gray-800'>Phase 1</div>
            <input
              type='text'
              placeholder='Phase Title'
              value={blocksFirstPhase}
              onChange={(e) => setFirstPhase(e.target.value)}
              disabled={!isActiveMissonRoc}
              className={inputClass}
            />
            <input
              type='text'
              placeholder='Block Title'
              value={blocksFirstTitle}
              onChange={(e) => setFirstTitle(e.target.value)}
              disabled={!isActiveMissonRoc}
              className={inputClass}
            />
            <textarea
              placeholder='Block Description'
              value={blocksFirstDesc}
              onChange={(e) => setFirstDesc(e.target.value)}
              disabled={!isActiveMissonRoc}
              className={inputClass}
            />
            <input
              type='text'
              placeholder='Date'
              value={blocksFirstData}
              onChange={(e) => setFirstData(e.target.value)}
              disabled={!isActiveMissonRoc}
              className={inputClass}
            />
          </div>

          {/* Phase 2 */}
          <div className='space-y-2'>
            <div className='text-lg font-semibold text-gray-800'>Phase 2</div>
            <input
              type='text'
              placeholder='Phase Title'
              value={blocksSecondPhase}
              onChange={(e) => setSecondPhase(e.target.value)}
              disabled={!isActiveMissonRoc}
              className={inputClass}
            />
            <input
              type='text'
              placeholder='Block Title'
              value={blocksSecondTitle}
              onChange={(e) => setSecondTitle(e.target.value)}
              disabled={!isActiveMissonRoc}
              className={inputClass}
            />
            <textarea
              placeholder='Block Description'
              value={blocksSecondDesc}
              onChange={(e) => setSecondDesc(e.target.value)}
              disabled={!isActiveMissonRoc}
              className={inputClass}
            />
            <input
              type='text'
              placeholder='Date'
              value={blocksSecondData}
              onChange={(e) => setSecondData(e.target.value)}
              disabled={!isActiveMissonRoc}
              className={inputClass}
            />
          </div>

          {/* Phase 3 */}
          <div className='space-y-2'>
            <div className='text-lg font-semibold text-gray-800'>Phase 3</div>
            <input
              type='text'
              placeholder='Phase Title'
              value={blocksThirdPhase}
              onChange={(e) => setThirdPhase(e.target.value)}
              disabled={!isActiveMissonRoc}
              className={inputClass}
            />
            <input
              type='text'
              placeholder='Block Title'
              value={blocksThirdTitle}
              onChange={(e) => setThirdTitle(e.target.value)}
              disabled={!isActiveMissonRoc}
              className={inputClass}
            />
            <textarea
              placeholder='Block Description'
              value={blocksThirdDesc}
              onChange={(e) => setThirdDesc(e.target.value)}
              disabled={!isActiveMissonRoc}
              className={inputClass}
            />
            <input
              type='text'
              placeholder='Date'
              value={blocksThirdData}
              onChange={(e) => setThirdData(e.target.value)}
              disabled={!isActiveMissonRoc}
              className={inputClass}
            />
          </div>
        </motion.div>
      </details>
    </div>
  )
}
