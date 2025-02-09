import { Label } from '../ui/label'
import { BuilderButton } from './BuilderButton'
import { BuilderSidebarHeader } from './BuilderSidebarHeader'
import { editorFields } from '@/consts/editor'
import { TemplateEditorContext } from '@/contexts/TemplateEditorContext'
import type { TemplateEditorContextValues } from '@/types/contexts'
import { TemplateSubCategoryField } from '@/types/templates'
import { AnimatePresence, motion } from 'motion/react'
import { FC, useContext } from 'react'

const getFields = (activeSubCategory: TemplateSubCategoryField | null) => {
  if (!activeSubCategory) return null
  const type = activeSubCategory.type

  if (editorFields.hasOwnProperty(type)) {
    return editorFields[type as keyof typeof editorFields]
  }

  return null
}

export const BuilderSidebarSubCategoryEditorMenu: FC = () => {
  const { activeSubCategory, setActiveSubCategory } = useContext(
    TemplateEditorContext
  ) as TemplateEditorContextValues

  const fields = getFields(activeSubCategory)

  return (
    <AnimatePresence>
      {activeSubCategory && (
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          exit={{ x: '-100%' }}
          transition={{ duration: 0.2 }}
          className='absolute inset-0 z-20 overflow-y-auto bg-white dark:bg-neutral-900'
        >
          <BuilderSidebarHeader onClick={() => setActiveSubCategory(null)} />
          <div className='flex flex-col gap-8 p-4'>
            {fields?.map(({ label, element: Element }) => (
              <div key={label} className='flex flex-col gap-2'>
                <Label>{label}</Label>
                <Element />
              </div>
            ))}

            {!fields && (
              <span>
                It seems like there's no editor for this type of component
              </span>
            )}
            <BuilderButton />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
