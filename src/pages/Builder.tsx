import RotatingImages from '../components/ui/RotatingImages'
import { useFallingImagesStore } from '../store/useFallingImagesStore'
import { BuilderCategories } from '@/components/Builder/BuilderCategories'
import { BuilderSidebar } from '@/components/Builder/BuilderSidebar'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup
} from '@/components/ui/resizable'
import { templates } from '@/consts/templates'
import { TemplateContext } from '@/contexts/TemplateContext'
import { TemplateContextValues } from '@/types/contexts'
import { useContext } from 'react'

export const Builder = () => {
  const { selectedTemplate } = useContext(
    TemplateContext
  ) as TemplateContextValues
  const statusCheckbox = useFallingImagesStore(
    (state) => state.isCheckboxChecked
  )

  if (!selectedTemplate) return
  const Template = templates[selectedTemplate]
  console.log(statusCheckbox)
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
        <main className='relative h-full flex-auto text-white'>
          <Template />
          {statusCheckbox && (
            <div className='pointer-events-none absolute bottom-0 left-0 right-0 top-0 z-50'>
              <RotatingImages />
            </div>
          )}
        </main>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
