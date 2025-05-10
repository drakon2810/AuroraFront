// components/AudioPlayer.tsx
import { useEffect, useRef } from 'react'

interface AudioPlayerProps {
  audioFile: Blob | null
  isActive: boolean
  onAudioEnd: () => void
}

export const AudioPlayer = ({
  audioFile,
  isActive,
  onAudioEnd
}: AudioPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    if (audioFile && audioRef.current) {
      audioRef.current.src = URL.createObjectURL(audioFile)
      if (isActive) {
        audioRef.current
          .play()
          .catch((e) => console.error('Ошибка воспроизведения:', e))
      } else {
        audioRef.current.pause()
      }
    }
  }, [audioFile, isActive])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.onended = onAudioEnd
    }
  }, [onAudioEnd])

  return <audio ref={audioRef} />
}
