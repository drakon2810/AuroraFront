import { cn } from '@/lib/utils'
import { debounce } from 'lodash'
import { ChangeEvent, Dispatch, FC, SetStateAction, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

interface WebsiteNameInputProps {
  value: string
  setValue: Dispatch<SetStateAction<string>>
  errors: { [key: string]: string | null }
  validate: () => void
}

export const WebsiteNameInput: FC<WebsiteNameInputProps> = ({
  value,
  setValue,
  errors,
  validate
}) => {
  const { t } = useTranslation()

  const verifyName = useCallback(
    debounce(() => validate(), 300),
    []
  )

  const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const subdomainPattern = /^[A-Za-z0-9-]{0,20}$/
    const isValid = subdomainPattern.test(e.target.value)

    if (!isValid) return

    setValue(e.target.value)
    verifyName()
  }

  const errorValues = Object.values(errors).filter(Boolean)

  return (
    <div className='flex w-full flex-col'>
      <div
        className={cn(
          'flex items-center rounded-xl border-2 border-neutral-300 bg-neutral-200 dark:border-neutral-600 dark:bg-neutral-700',
          {
            'border-red-500 text-red-500 dark:border-red-500':
              errorValues.length > 0
          }
        )}
      >
        <input
          id='domain'
          value={value}
          onChange={onNameChange}
          className='flex-auto bg-transparent py-2 pl-4'
          placeholder={t('home.launch.inputPlaceholder')}
        />
        <span className='pr-4'>.{window.location.host}</span>
      </div>
      <div className='flex flex-col text-sm'>
        {errorValues.map((error) => {
          return (
            <span key={error} className='text-red-500'>
              {error}
            </span>
          )
        })}
      </div>
    </div>
  )
}
