import { Button } from './ui/button'
import { cn } from '@/lib/utils'
import { TemplateName } from '@/types/templates'
import { useTranslation } from 'react-i18next'
import { useSearchParams } from 'react-router-dom'

export const TemplatesSelector = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const { t } = useTranslation()

  const selectedTemplate = searchParams.get('template')
  const templates = t('templates.cards', { returnObjects: true })

  const selectTemplate = (templateName: TemplateName) => {
    if (selectedTemplate === templateName) return

    const params = new URLSearchParams(searchParams)
    params.set('template', templateName)
    setSearchParams(params)
  }

  return (
    <div className='flex flex-col gap-4 p-4'>
      {Object.keys(templates).map((templateName) => (
        <div
          key={templateName}
          onClick={() => selectTemplate(templateName as TemplateName)}
          className={cn(
            'flex items-center justify-between rounded-xl border-2 p-2',
            {
              'border-neutral-200 dark:border-neutral-600':
                templateName === selectedTemplate,
              'border-transparent dark:border-transparent':
                templateName !== selectedTemplate
            }
          )}
        >
          <span className='font-arial-black'>
            {t(`templates.cards.${templateName}.label`)}
          </span>
          <Button
            className={cn('transition-colors duration-300', {
              'bg-neutral-200 text-black hover:bg-neutral-300 dark:bg-neutral-500 dark:text-white dark:hover:bg-neutral-400':
                templateName !== selectedTemplate
            })}
          >
            {selectedTemplate === templateName ? 'Selected' : 'Select'}
          </Button>
        </div>
      ))}
    </div>
  )
}
