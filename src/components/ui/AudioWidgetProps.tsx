import { useFallingImagesStore } from '../../store/useWidgetsStore'
import styles from '../Styles/AudioWidgetProps.module.css'
import { MusicalNoteIcon } from '@heroicons/react/24/outline'
import { FC, useState, ChangeEvent } from 'react'

interface AudioWidgetProps {
  onAudioChange?: (file: File | null) => void
}

export const AudioWidget: FC<AudioWidgetProps> = ({ onAudioChange }) => {
  const [isAutoplay, setIsAutoplay] = useState(false)
  const [audioFile, setAudioFile] = useState<File | null>(null)
  const [isActiveAudio, setIsActiveAudio] = useState<boolean>(false)
  const [color, setColor] = useState<string>('#000000')
  const [colorIcon, setColorIcon] = useState<string>('#4a5568')
  const [shape, setShape] = useState('circle')

  const addAudioIcon = useFallingImagesStore((state) => state.addAudioIcon)
  const addAudioIconColor = useFallingImagesStore(
    (state) => state.addAudioIconColor
  )
  const addAudioFile = useFallingImagesStore((state) => state.addAudioFile)
  const changeShape = useFallingImagesStore((state) => state.changeShape)
  const addAudioIconColorImg = useFallingImagesStore(
    (state) => state.addAudioIconColorImg
  )

  const handleToggleAudio = () => {
    const newValue = !isActiveAudio
    setIsActiveAudio(newValue)
    addAudioIcon(newValue)
  }

  const handleAutoplayChange = (event: ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked
    setIsAutoplay(checked)
  }

  const handleAudioUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setAudioFile(file)
      onAudioChange?.(file)
      addAudioFile(file)
    }
  }

  const handleAudioIconColorDefault = () => {
    const defaultColor = '#000000'
    setColor(defaultColor)
    addAudioIconColor(defaultColor)
  }

  const handleAudioIconColorDefaultImg = () => {
    const defaultColor = '#4a5568'
    setColorIcon(defaultColor)
    addAudioIconColorImg(defaultColor)
  }

  const handleAudioIconColor = (event: ChangeEvent<HTMLInputElement>) => {
    const newColor = event.target.value
    setColor(newColor)
    addAudioIconColor(newColor)
  }

  const handleAudioIconColorImg = (event: ChangeEvent<HTMLInputElement>) => {
    const newColor = event.target.value
    setColorIcon(newColor)
    addAudioIconColorImg(newColor)
  }

  const handleSetShape = (e: string) => {
    setShape(e)
    changeShape(e)
  }

  return (
    <div className={styles.widget}>
      <div className='flex'>
        <div className='mb-4 flex items-center gap-2'>
          <label className='relative inline-flex cursor-pointer items-center'>
            <input
              type='checkbox'
              checked={isActiveAudio}
              onChange={handleToggleAudio}
              className='peer sr-only'
            />
            <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-black peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-300"></div>
          </label>
          <span className='text-sm font-medium text-gray-700'>Audio</span>
        </div>
        <div className={styles.autoplayContainer}>
          <input
            type='checkbox'
            checked={isAutoplay}
            onChange={handleAutoplayChange}
            className={styles.checkbox}
            disabled={!isActiveAudio}
          />
          <span className={styles.checkboxLabel}>autoplay</span>
        </div>
      </div>
      <label className={styles.audioUpload}>
        <input
          type='file'
          accept='audio/*'
          onChange={handleAudioUpload}
          className={styles.fileInput}
          disabled={!isActiveAudio}
        />
        <div className='flex flex-col items-center justify-center text-center'>
          <MusicalNoteIcon className={styles.audioIcon} />
          <span className='h-6 w-48 overflow-hidden whitespace-nowrap text-sm text-gray-700'>
            {audioFile?.name
              ? audioFile.name.length > 20
                ? `${audioFile.name.slice(0, 20)}...`
                : audioFile.name
              : 'No file selected'}
          </span>
        </div>
      </label>
      {isActiveAudio && (
        <div className={styles.colorSelectContainer}>
          <strong>
            <span>Button</span>
          </strong>
          <span>color</span>
        </div>
      )}
      {isActiveAudio && (
        <div className='relative w-20'>
          <input
            type='color'
            value={color}
            onChange={handleAudioIconColor}
            className='h-12 w-40 rounded-lg bg-transparent p-1'
          />
          <button
            onClick={handleAudioIconColorDefault}
            className='absolute left-[124px] top-[12px] flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-transparent p-1 text-white' // Круглая кнопка с прозрачным фоном и белой границей
          >
            X
          </button>
        </div>
      )}
      {isActiveAudio && (
        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-700'>
            SHAPE
          </label>
          <div className='mt-2 flex gap-4'>
            <div className='grid gap-2'>
              <label className='flex items-center gap-2'>
                <button
                  type='button'
                  onClick={() => handleSetShape('circle')}
                  className={`h-8 w-28 rounded-lg ${shape === 'circle' ? 'bg-gray-500 text-white' : 'bg-white text-gray-800'} ${shape === 'circle' ? '' : 'border-2'} border-gray-300 focus:ring-indigo-500`}
                >
                  circle
                </button>
              </label>

              <label className='flex items-center gap-2'>
                <button
                  type='button'
                  onClick={() => handleSetShape('square')}
                  className={`h-8 w-28 rounded-lg ${shape === 'square' ? 'bg-gray-500 text-white' : 'bg-white text-gray-800'} ${shape === 'square' ? '' : 'border-2'} border-gray-300 focus:ring-indigo-500`}
                >
                  square
                </button>
              </label>
            </div>
            <div className='grid gap-2'>
              <label className='flex items-center gap-2'>
                <button
                  type='button'
                  onClick={() => handleSetShape('rounded')}
                  className={`h-8 w-28 rounded-lg ${shape === 'rounded' ? 'bg-gray-500 text-white' : 'bg-white text-gray-800'} ${shape === 'rounded' ? '' : 'border-2'} border-gray-300 focus:ring-indigo-500`}
                >
                  rounded
                </button>
              </label>

              <label className='flex items-center gap-2'>
                <button
                  type='button'
                  onClick={() => handleSetShape('none')}
                  className={`h-8 w-28 rounded-lg ${shape === 'none' ? 'bg-gray-500 text-white' : 'bg-white text-gray-800'} ${shape === 'none' ? '' : 'border-2'} border-gray-300 focus:ring-indigo-500`}
                >
                  none
                </button>
              </label>
            </div>
          </div>
        </div>
      )}
      {isActiveAudio && (
        <div className={styles.colorSelectContainer}>
          <strong>
            <span>Icon</span>
          </strong>
          <span>color</span>
        </div>
      )}
      {isActiveAudio && (
        <div className='relative w-20'>
          <input
            type='color'
            value={colorIcon}
            onChange={handleAudioIconColorImg}
            className='h-12 w-40 rounded-lg bg-transparent p-1'
          />
          <button
            onClick={handleAudioIconColorDefaultImg}
            className='absolute left-[124px] top-[12px] flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-transparent p-1 text-white' // Круглая кнопка с прозрачным фоном и белой границей
          >
            X
          </button>
        </div>
      )}
    </div>
  )
}
