import RotatingImages from '../components/ui/RotatingImages'
import { useFallingImagesStore } from '../store/useWidgetsStore'
import { BuilderCategories } from '@/components/Builder/BuilderCategories'
import { BuilderSidebar } from '@/components/Builder/BuilderSidebar'
import { AudioButton } from '@/components/ui/audioButton'
import { DisplayValueOnClick } from '@/components/ui/displayValueOnClick'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup
} from '@/components/ui/resizable'
import { templates } from '@/consts/templates'
import { TemplateContext } from '@/contexts/TemplateContext'
import { TemplateContextValues } from '@/types/contexts'
import { useContext, useState } from 'react'

export const Builder = () => {
  const { selectedTemplate } = useContext(
    TemplateContext
  ) as TemplateContextValues
  const statusCheckbox = useFallingImagesStore(
    (state) => state.isCheckboxChecked
  )
  const isAudioaIcon = useFallingImagesStore((state) => state.isAudioaIcon)
  const isPopTicker = useFallingImagesStore((state) => state.isPopTicker)
  const value = useFallingImagesStore((state) => state.value) // Значение из стора

  // Состояние для хранения списка текстов
  const [texts, setTexts] = useState<
    { id: number; x: number; y: number; value: string }[]
  >([])

  if (!selectedTemplate) return null
  const Template = templates[selectedTemplate]

  const handleScreenClick = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    // Добавляем новый текст с уникальным id и текущим значением из стора
    const newText = {
      id: Date.now(), // Уникальный идентификатор
      x,
      y,
      value: value.value || 'Ticker' // Используем значение из стора или дефолтное
    }

    setTexts((prevTexts) => [...prevTexts, newText])

    // Удаляем текст через 2 секунды
    setTimeout(() => {
      setTexts((prevTexts) =>
        prevTexts.filter((text) => text.id !== newText.id)
      )
    }, 2000) // Время жизни текста — 2 секунды
  }

  return (
    <ResizablePanelGroup direction='horizontal' className='flex max-h-dvh'>
      <BuilderCategories />
      <ResizablePanel
        defaultSize={20}
        minSize={5}
        maxSize={80}
        className='min-w-52'
      >
        <BuilderSidebar />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel>
        <main
          className='relative h-full flex-auto overflow-visible text-white'
          onClick={isPopTicker ? handleScreenClick : undefined}
        >
          {isPopTicker && <DisplayValueOnClick texts={texts} />}
          <Template />

          {statusCheckbox && (
            <div className='pointer-events-none absolute bottom-0 left-0 right-0 top-0 z-50'>
              <RotatingImages />
            </div>
          )}
          {isAudioaIcon && (
            <div className='absolute right-10 top-10 z-20'>
              <AudioButton />
            </div>
          )}
        </main>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
