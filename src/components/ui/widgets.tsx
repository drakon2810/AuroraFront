import { FC, useState, ChangeEvent } from 'react'

interface FallingImageWidgetProps {
  value: string[]
  onChange: (value: string[]) => void
}

export const FallingImageWidget: FC<FallingImageWidgetProps> = ({
  value = ['', '', ''],
  onChange
}) => {
  const [isActive, setIsActive] = useState<boolean>(false)

  const handleToggle = () => {
    setIsActive(!isActive)
  }

  const handleFileUpload = (
    index: number,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    if (!isActive) return

    const file = event.target.files?.[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      const newValue = [...value]
      newValue[index] = imageUrl
      onChange(newValue)
      event.target.value = ''
    }
  }

  return (
    <div className='rounded-lg border-2 bg-[#fff] p-4 shadow-sm'>
      <div className='mb-4 flex items-center gap-2'>
        <label className='relative inline-flex cursor-pointer items-center'>
          <input
            type='checkbox'
            checked={isActive}
            onChange={handleToggle}
            className='peer sr-only'
          />
          <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-black peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-300"></div>
        </label>
        <span className='text-sm font-medium text-gray-700'>
          Falling animation
        </span>
      </div>

      <div className='flex justify-center gap-2'>
        {[0, 1, 2].map((index) => (
          <label
            key={index}
            className={`flex h-24 w-24 cursor-pointer items-center justify-center rounded-lg border-2 border-dashed ${
              !isActive
                ? 'cursor-not-allowed opacity-50'
                : 'hover:border-gray hover:bg-gray-50'
            }`}
          >
            {value[index] ? (
              <img
                src={value[index]}
                alt={`Uploaded ${index}`}
                className='h-full w-full rounded-lg border-2 object-cover'
              />
            ) : (
              <svg
                className='text-gray-400'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 9l5 5 5-5M12 1v8' />
              </svg>
            )}
            <input
              type='file'
              accept='image/*'
              onChange={(e) => handleFileUpload(index, e)}
              disabled={!isActive}
              className='hidden'
            />
          </label>
        ))}
      </div>
    </div>
  )
}
