import audio from '../../audio/Galaxy-Hensonn-slowed-reverbed-BASS-BOOSTED.m4a'
import { useFallingImagesStore } from '../../store/useWidgetsStore'
import { useEffect } from 'react'

export const AudioDefaultLoader = () => {
  const addAudioFile = useFallingImagesStore((state) => state.addAudioFile)

  useEffect(() => {
    const loadDefaultAudio = async () => {
      try {
        // Загружаем файл с сервера или локально
        const response = await fetch(audio)
        const audioBlob = await response.blob()

        // Создаем объект File
        const audioFile = new File([audioBlob], 'defaultAudio.m4a', {
          type: 'audio/m4a'
        })

        // Сохраняем в store
        addAudioFile(audioFile)
      } catch (error) {
        console.error('Ошибка загрузки аудиофайла:', error)
      }
    }

    loadDefaultAudio()
  }, [addAudioFile])

  return null
}
