import { BuilderSidebarHeader } from './BuilderSidebarHeader'
import { categoriesFields } from '@/consts/editor'
import { TemplateEditorContext } from '@/contexts/TemplateEditorContext'
import { cn } from '@/lib/utils'
import { TemplateEditorContextValues } from '@/types/contexts'
import { FC, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

export const BuilderSidebar: FC = () => {
  const { activeCategory, activeSubCategory } = useContext(
    TemplateEditorContext
  ) as TemplateEditorContextValues

  const navigate = useNavigate()
  const { t } = useTranslation()

  const CurrentCategoryElement = categoriesFields[activeCategory].element

  return (
    <div className='flex h-dvh'>
      <aside
        className={cn('relative flex h-full w-full flex-col', {
          'overflow-y-auto': activeSubCategory === null
        })}
      >
        <BuilderSidebarHeader
          buttonLabel={t('builder.backToTemplates')}
          onClick={() => navigate('/templates')}
        />
        <CurrentCategoryElement />
      </aside>
    </div>
  )
}
