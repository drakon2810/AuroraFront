import { useRoadMapImpressiveStore } from '@/store/useRoadMapStoreImpressive'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export const RoadmapImpressive = () => {
  const [localActive, setLocalActive] = useState(false)
  const [localColor, setLocalColor] = useState('#cfcfcf')

  // Получаем все значения и методы из хранилища
  const {
    isActiveRMImp,
    titleRMImp,
    roadmapFirstStepTitle,
    roadmapSecondStepTitle,
    roadmapThirdStepTitle,
    roadmapFirstStepDescription,
    roadmapSecondStepDescription,
    roadmapThirdStepDescription,
    colorBackgrond,
    setisActiveRMImp,
    setTitleRMImp,
    setStageOneRMImp,
    setStageTwoRMImp,
    setStageFreeRMImp,
    setTeaxtAreaOneRMImp,
    setTeaxtAreaTwoRMImp,
    setTeaxtAreaFreeRMImp,
    setColorBackgrond
  } = useRoadMapImpressiveStore()

  // Синхронизируем локальное состояние с хранилищем
  useEffect(() => {
    setLocalActive(isActiveRMImp)
    setLocalColor(colorBackgrond || '#cfcfcf')
  }, [isActiveRMImp, colorBackgrond])

  // Обработчики изменений
  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleRMImp(e.target.value)
  }

  const handleStageOne = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStageOneRMImp(e.target.value)
  }

  const handleStageTwo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStageTwoRMImp(e.target.value)
  }

  const handleStageFree = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStageFreeRMImp(e.target.value)
  }

  const handleTextAreaOne = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTeaxtAreaOneRMImp(e.target.value)
  }

  const handleTextAreaTwo = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTeaxtAreaTwoRMImp(e.target.value)
  }

  const handleTextAreaFree = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTeaxtAreaFreeRMImp(e.target.value)
  }

  const handleIsActive = () => {
    const newActive = !localActive
    setLocalActive(newActive)
    setisActiveRMImp(newActive)
  }

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalColor(e.target.value)
    setColorBackgrond(e.target.value)
  }

  const handleDefaultColor = () => {
    setLocalColor('#cfcfcf')
    setColorBackgrond('')
  }

  console.log(roadmapFirstStepTitle)

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
              value={titleRMImp}
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
              Stage 1
            </label>
            <input
              value={roadmapFirstStepTitle}
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
              value={roadmapFirstStepDescription}
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
              Stage 2
            </label>
            <input
              value={roadmapSecondStepTitle}
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
              value={roadmapSecondStepDescription}
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
              Stage 3
            </label>
            <input
              value={roadmapThirdStepTitle}
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
              value={roadmapThirdStepDescription}
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

          {/* Color Picker */}
          <div>
            <label className='ml-3 text-sm font-medium text-gray-700'>
              Background Color
            </label>
            <div className='relative mt-2 h-8 w-36'>
              <input
                type='color'
                value={localColor}
                onChange={handleColorChange}
                disabled={!localActive}
                className='absolute h-full w-full opacity-0'
              />
              <div
                className='h-full w-full rounded-md border border-gray-300'
                style={{ backgroundColor: localColor }}
              />
              <button
                onClick={handleDefaultColor}
                disabled={!localActive}
                className='absolute right-1 top-1 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-gray-200 text-xs font-bold text-gray-700'
              >
                ×
              </button>
            </div>
          </div>
        </motion.div>
      </details>
    </div>
  )
}
