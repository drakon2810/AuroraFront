import { useFallingImagesStore } from '../../store/useWidgetsStore'
import styles from '../Styles/AudioWidgetProps.module.css'
import { MusicalNoteIcon } from '@heroicons/react/24/outline'
import { FC, useState, ChangeEvent } from 'react'
import { ColorPicker, useColor } from 'react-color-palette'
import 'react-color-palette/css'

interface AudioWidgetProps {
  onAudioChange?: (file: File | null) => void
}

export const AudioWidget: FC<AudioWidgetProps> = ({ onAudioChange }) => {
  const [isAutoplay, setIsAutoplay] = useState(false)
  const [audioFile, setAudioFile] = useState<File | null>(null)
  const [isActiveAudio, setIsActiveAudio] = useState<boolean>(false)
  const [color, setColor] = useColor('#000000')
  const [active, setActive] = useState(false)
  const addAudioIcon = useFallingImagesStore((state) => state.addAudioIcon)
  const addAudioIconColor = useFallingImagesStore(
    (state) => state.addAudioIconColor
  )
  const addAudioFile = useFallingImagesStore((state) => state.addAudioFile)

  const handleToggleAudio = () => {
    const newValue = !isActiveAudio
    setIsActiveAudio(newValue)
    addAudioIcon(newValue)
  }

  const handleAutoplayChange = (event: ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked
    setIsAutoplay(checked)
  }

  const handleDefaultChange = (event: ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked
    setActive(checked)
  }

  const handleAudioUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setAudioFile(file)
      onAudioChange?.(file)
      addAudioFile(file)
    }
  }

  const newColor = {
    hex: '#000000',
    rgb: { r: 255, g: 0, b: 0, a: 1 },
    hsv: { h: 0, s: 1, v: 1, a: 1 }
  }

  const handleAudioIconColorDefault = () => {
    setColor(newColor)
    addAudioIconColor(color.hex)
  }

  const handleAudioIconColor = (newColor: any) => {
    setColor(newColor)
    addAudioIconColor(newColor.hex)
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
      <div className={styles.colorSelectContainer}>
        <span>Button color:</span>
        <div className={styles.defaultConteiner}>
          <input
            type='checkbox'
            checked={active}
            onChange={handleDefaultChange}
            className={styles.checkbox}
            disabled={!isActiveAudio}
          />

          <span className={styles.checkboxLabel}>
            <span style={{ color: `${color.hex}` }}>Default</span>
          </span>
          {active && (
            <button
              onClick={handleAudioIconColorDefault}
              className={styles.btn}
            >
              х
            </button>
          )}
        </div>
      </div>
      {active && (
        <div>
          <div className='w-60'>
            <ColorPicker
              hideInput={['rgb', 'hsv']}
              color={color}
              onChange={handleAudioIconColor}
            />
          </div>
        </div>
      )}
    </div>
  )
}
