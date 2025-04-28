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
    setThirdData
  } = useTimelineStore()

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
          {/* Title Timeline */}
          <div className='flex flex-col'>
            <label className='text-sm font-medium text-gray-700'>Title</label>
            <input
              type='text'
              value={titleTimeline}
              onChange={(e) => setTitleTimeline(e.target.value)}
              className='mt-1 w-full rounded-md border px-3 py-2 shadow-sm focus-visible:ring-1'
            />
          </div>

          {/* Block 1 */}
          <div className='space-y-2'>
            <div className='text-lg font-semibold text-gray-800'>Phase 1</div>

            <input
              type='text'
              placeholder='Phase Title'
              value={blocksFirstPhase}
              onChange={(e) => setFirstPhase(e.target.value)}
              className='w-full rounded-md border px-3 py-2 text-base shadow-sm focus-visible:ring-1'
            />

            <input
              type='text'
              placeholder='Block Title'
              value={blocksFirstTitle}
              onChange={(e) => setFirstTitle(e.target.value)}
              className='w-full rounded-md border px-3 py-2 text-base shadow-sm focus-visible:ring-1'
            />

            <textarea
              placeholder='Block Description'
              value={blocksFirstDesc}
              onChange={(e) => setFirstDesc(e.target.value)}
              className='w-full rounded-md border px-3 py-2 text-base shadow-sm focus-visible:ring-1'
            />

            <input
              type='text'
              placeholder='Date'
              value={blocksFirstData}
              onChange={(e) => setFirstData(e.target.value)}
              className='w-full rounded-md border px-3 py-2 text-base shadow-sm focus-visible:ring-1'
            />
          </div>

          {/* Block 2 */}
          <div className='space-y-2'>
            <div className='text-lg font-semibold text-gray-800'>Phase 2</div>

            <input
              type='text'
              placeholder='Phase Title'
              value={blocksSecondPhase}
              onChange={(e) => setSecondPhase(e.target.value)}
              className='w-full rounded-md border px-3 py-2 text-base shadow-sm focus-visible:ring-1'
            />

            <input
              type='text'
              placeholder='Block Title'
              value={blocksSecondTitle}
              onChange={(e) => setSecondTitle(e.target.value)}
              className='w-full rounded-md border px-3 py-2 text-base shadow-sm focus-visible:ring-1'
            />

            <textarea
              placeholder='Block Description'
              value={blocksSecondDesc}
              onChange={(e) => setSecondDesc(e.target.value)}
              className='w-full rounded-md border px-3 py-2 text-base shadow-sm focus-visible:ring-1'
            />

            <input
              type='text'
              placeholder='Date'
              value={blocksSecondData}
              onChange={(e) => setSecondData(e.target.value)}
              className='w-full rounded-md border px-3 py-2 text-base shadow-sm focus-visible:ring-1'
            />
          </div>

          {/* Block 3 */}
          <div className='space-y-2'>
            <div className='text-lg font-semibold text-gray-800'>Phase 3</div>

            <input
              type='text'
              placeholder='Phase Title'
              value={blocksThirdPhase}
              onChange={(e) => setThirdPhase(e.target.value)}
              className='w-full rounded-md border px-3 py-2 text-base shadow-sm focus-visible:ring-1'
            />

            <input
              type='text'
              placeholder='Block Title'
              value={blocksThirdTitle}
              onChange={(e) => setThirdTitle(e.target.value)}
              className='w-full rounded-md border px-3 py-2 text-base shadow-sm focus-visible:ring-1'
            />

            <textarea
              placeholder='Block Description'
              value={blocksThirdDesc}
              onChange={(e) => setThirdDesc(e.target.value)}
              className='w-full rounded-md border px-3 py-2 text-base shadow-sm focus-visible:ring-1'
            />

            <input
              type='text'
              placeholder='Date'
              value={blocksThirdData}
              onChange={(e) => setThirdData(e.target.value)}
              className='w-full rounded-md border px-3 py-2 text-base shadow-sm focus-visible:ring-1'
            />
          </div>
        </motion.div>
      </details>
    </div>
  )
}
