import { useMissionConrol } from '@/store/useMissionConroll'
import { motion } from 'framer-motion'
import { ChangeEvent } from 'react'
import { useRef } from 'react'

export const MissionConroll = () => {
  const {
    isActiveMissonControll,
    titleControl,
    firstBlockImg,
    secondBlockImg,
    thierdBlockImg,
    firstBlockTitle,
    secondBlockTitle,
    thierdBlockTitle,
    firstBlockDescription,
    secondBlockDescription,
    thierdBlockDescription,

    changeIsActiveMissControl,
    setTitleControl,

    setFirstBlockImg,
    setSecondBlockImg,
    setThierdBlockImg,

    setFirstBlockTitle,
    setSecondBlockTitle,
    setThierdBlockTitle,

    setFirstBlockDescription,
    setSecondBlockDescription,
    setThierdBlockDescription
  } = useMissionConrol()

  const inputClass =
    'w-full rounded-md border px-3 py-2 text-base shadow-sm focus-visible:ring-1 disabled:bg-gray-100 disabled:cursor-not-allowed'

  const handleFileChange = (
    e: ChangeEvent<HTMLInputElement>,
    setter: (file: File | null) => void
  ) => {
    const file = e.target.files?.[0] || null
    setter(file)
  }

  return (
    <div className='flex flex-col items-start space-y-4'>
      <details className='group w-full rounded-lg border border-gray-300 bg-white open:border-gray-300'>
        <summary className='flex cursor-pointer items-center justify-between px-2 py-2 transition-colors hover:bg-gray-100'>
          <span className='text-sm font-semibold text-gray-700'>
            Mission Conroll
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
          <label className='relative inline-flex cursor-pointer items-center'>
            <input
              type='checkbox'
              className='peer sr-only'
              onChange={() =>
                changeIsActiveMissControl(!isActiveMissonControll)
              }
              checked={isActiveMissonControll}
            />
            <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-black peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-300"></div>
            <span className='ml-3 text-sm font-medium text-gray-700'>
              Enable
            </span>
          </label>

          {/* Title */}
          <div className='flex flex-col'>
            <label className='text-sm font-medium text-gray-700'>Title</label>
            <input
              type='text'
              value={titleControl}
              onChange={(e) => setTitleControl(e.target.value)}
              disabled={!isActiveMissonControll}
              className={inputClass}
            />
          </div>

          {/* Block 1 */}
          <BlockEditor
            blockNumber='First'
            image={firstBlockImg}
            onImageChange={(e) => handleFileChange(e, setFirstBlockImg)}
            title={firstBlockTitle}
            setTitle={setFirstBlockTitle}
            description={firstBlockDescription}
            setDescription={setFirstBlockDescription}
            disabled={!isActiveMissonControll}
            inputClass={inputClass}
          />

          {/* Block 2 */}
          <BlockEditor
            blockNumber='Second'
            image={secondBlockImg}
            onImageChange={(e) => handleFileChange(e, setSecondBlockImg)}
            title={secondBlockTitle}
            setTitle={setSecondBlockTitle}
            description={secondBlockDescription}
            setDescription={setSecondBlockDescription}
            disabled={!isActiveMissonControll}
            inputClass={inputClass}
          />

          {/* Block 3 */}
          <BlockEditor
            blockNumber='Third'
            image={thierdBlockImg}
            onImageChange={(e) => handleFileChange(e, setThierdBlockImg)}
            title={thierdBlockTitle}
            setTitle={setThierdBlockTitle}
            description={thierdBlockDescription}
            setDescription={setThierdBlockDescription}
            disabled={!isActiveMissonControll}
            inputClass={inputClass}
          />
        </motion.div>
      </details>
    </div>
  )
}

interface BlockEditorProps {
  blockNumber: string
  image: File | null
  onImageChange: (e: ChangeEvent<HTMLInputElement>) => void
  title: string
  setTitle: (val: string) => void
  description: string
  setDescription: (val: string) => void
  disabled: boolean
  inputClass: string
}

const BlockEditor = ({
  blockNumber,
  image,
  onImageChange,
  title,
  setTitle,
  description,
  setDescription,
  disabled,
  inputClass
}: BlockEditorProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleDeleteImage = () => {
    onImageChange({ target: { files: null } } as any) // сбрасываем файл
    if (inputRef.current) {
      inputRef.current.value = ''
    }
  }

  return (
    <div className='space-y-2'>
      <h4 className='text-sm font-semibold text-gray-800'>
        {blockNumber} Block
      </h4>

      {/* Image Upload */}
      <label className='relative inline-flex cursor-pointer items-center'>
        <input
          type='file'
          accept='image/*'
          ref={inputRef}
          onChange={onImageChange}
          className='hidden'
          disabled={disabled}
        />
        <div className='flex h-24 w-24 items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 transition-colors hover:bg-gray-100'>
          {image ? (
            <img
              src={URL.createObjectURL(image)}
              alt='Uploaded'
              className='h-full w-full rounded-lg object-cover'
            />
          ) : (
            <span className='text-2xl text-gray-400'>+</span>
          )}

          {image && (
            <button
              type='button'
              onClick={(e) => {
                e.preventDefault()
                handleDeleteImage()
              }}
              className='absolute right-0 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-white text-gray-600 hover:text-red-600'
            >
              <span className='text-sm'>&#10005;</span>
            </button>
          )}
        </div>
      </label>

      {/* Title */}
      <div className='flex flex-col'>
        <label className='text-sm text-gray-700'>Title</label>
        <input
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          disabled={disabled}
          className={inputClass}
        />
      </div>

      {/* Description */}
      <div className='flex flex-col'>
        <label className='text-sm text-gray-700'>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          disabled={disabled}
          className={inputClass}
          rows={3}
        />
      </div>
    </div>
  )
}
