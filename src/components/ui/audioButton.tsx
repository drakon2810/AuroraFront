// components/AudioButton.tsx
import styles from '../Styles/AudioButton.module.css'
import { AudioDefaultLoader } from './audioDefaultLoader'
import { AudioPlayer } from './audioPlayer'
import { useFallingImagesStore } from '@/store/useWidgetsStore'
import { useState } from 'react'

export const AudioButton = () => {
  const [isActive, setIsActive] = useState(false)
  const audioFile = useFallingImagesStore((state) => state.audioFile)
  const color = useFallingImagesStore((state) => state.color)
  const shape = useFallingImagesStore((state) => state.shape)
  const colorImg = useFallingImagesStore((state) => state.colorImg)

  console.log(audioFile)
  const handleToggle = () => {
    setIsActive((prev) => !prev)
  }

  const handleAudioEnd = () => {
    setIsActive(false)
  }

  return (
    <div>
      <button
        onClick={handleToggle}
        className={`${styles.audioButton} ${isActive ? styles.active : ''} ${shape === 'circle' ? 'rounded-full' : ''} ${shape === 'rounded' ? 'rounded-lg' : ''} ${shape === 'square' ? 'rounded-none' : ''} `}
        style={{
          backgroundColor: shape === 'none' ? 'transparent' : color
        }}
      >
        <div className={styles.iconContainer}>
          <svg
            style={{
              width: '24px',
              height: '24px',
              color: colorImg || '#4a5568'
            }}
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M5 9v6h4l5 5V4l-5 5H5z'
            />
          </svg>
          {isActive && <div className={styles.audioLines}></div>}
        </div>
      </button>

      <AudioPlayer
        audioFile={audioFile}
        isActive={isActive}
        onAudioEnd={handleAudioEnd}
      />
      <AudioDefaultLoader />
    </div>
  )
}
