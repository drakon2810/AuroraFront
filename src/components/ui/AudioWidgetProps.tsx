import styles from '../Styles/AudioWidgetProps.module.css'
import { MusicalNoteIcon } from '@heroicons/react/24/outline'
import { FC, useState, ChangeEvent } from 'react'

interface AudioWidgetProps {
  onAudioChange?: (file: File | null) => void
  onAudioToggle?: (isEnabled: boolean) => void
  onAutoplayChange?: (isAutoplay: boolean) => void
  onButtonColorChange?: (color: string) => void
}

export const AudioWidget: FC<AudioWidgetProps> = ({
  onAudioChange,
  onAutoplayChange,
  onButtonColorChange
}) => {
  const [isAutoplay, setIsAutoplay] = useState(false)
  const [audioFile, setAudioFile] = useState<File | null>(null)
  const [buttonColor, setButtonColor] = useState('Default')
  const [isActiveAudio, setIsActiveAudio] = useState<boolean>(false)

  const handleToggleAudio = () => {
    setIsActiveAudio(!isActiveAudio)
  }

  // Обработчик автоплея
  const handleAutoplayChange = (event: ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked
    setIsAutoplay(checked)
    onAutoplayChange?.(checked)
  }

  const handleAudioUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setAudioFile(file)
      onAudioChange?.(file)
    }
  }

  const handleButtonColorChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const color = event.target.value
    setButtonColor(color)
    onButtonColorChange?.(color)
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
        <MusicalNoteIcon className={styles.audioIcon} />
      </label>

      <div className={styles.colorSelectContainer}>
        <span>Button color:</span>
        <select
          value={buttonColor}
          onChange={handleButtonColorChange}
          className={styles.select}
          disabled={!isActiveAudio}
        >
          <option value='Default'>Default</option>
          <option value='Red'>Red</option>
          <option value='Blue'>Blue</option>
          <option value='Green'>Green</option>
        </select>
      </div>
    </div>
  )
}
