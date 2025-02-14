import { debounce } from 'lodash'
import { ChangeEvent, Dispatch, FC, SetStateAction, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

interface WebsiteNameInputProps {
  value: string
  setValue: Dispatch<SetStateAction<string>>
  errors: { [key: string]: string | null }
  revalidate: () => void
}

export const WebsiteNameInput: FC<WebsiteNameInputProps> = ({
  value,
  setValue,
  errors,
  revalidate
}) => {
  const { t } = useTranslation()

  const verifyName = useCallback(
    debounce(() => revalidate(), 300),
    []
  )

  const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const subdomainPattern = /^[A-Za-z0-9-]{0,20}$/
    const isValid = subdomainPattern.test(e.target.value)

    if (!isValid) return

    setValue(e.target.value)
    verifyName()
  }

  return (
    <div className='flex w-full flex-col'>
      <div className='flex items-center rounded-full border-2 border-neutral-300 bg-neutral-200 dark:border-neutral-500 dark:bg-neutral-600'>
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
        {Object.keys(errors).map((error) => {
          if (error === 'isValidLength' && value.length === 0) return

          return (
            <span key={error} className='text-red-500'>
              {errors[error]}
            </span>
          )
        })}
      </div>
    </div>
  )
}
