import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent
} from '../ui/collapsible'
import { BuilderSidebarSubCategoryItem } from './BuilderSidebarSubCategoryItem'
import { TemplateContext } from '@/contexts/TemplateContext'
import { TemplateContextValues } from '@/types/contexts'
import { TemplateSubCategoryField } from '@/types/templates'
import { MoveRight } from 'lucide-react'
import { FC, useContext } from 'react'
import { useTranslation } from 'react-i18next'

interface BuilderSidebarSubCategoryProps {
  label: string
  fields: TemplateSubCategoryField[]
}

export const BuilderSidebarSubCategory: FC<BuilderSidebarSubCategoryProps> = ({
  label,
  fields
}) => {
  const { selectedTemplate } = useContext(
    TemplateContext
  ) as TemplateContextValues
  const { t } = useTranslation()

  return (
    <Collapsible>
      <CollapsibleTrigger className='flex w-full items-center justify-between gap-2 rounded-md p-3 text-start transition-colors duration-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black'>
        <span className='font-arial-black'>
          {t(`builder.${selectedTemplate}.categories.${label}`)}
        </span>
        <MoveRight size={16} />
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className='flex flex-auto flex-col gap-4 rounded-md py-2 pl-8'>
          {fields.map((field) => (
            <BuilderSidebarSubCategoryItem key={field.name} {...field} />
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}
