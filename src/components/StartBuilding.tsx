import { Button } from './Button'
import { WebsiteNameInput } from './WebsiteNameInput'
import { useValidateName } from '@/hooks/useValidateName'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

export const StartBuilding = () => {
  const [name, setName] = useState('')
  const { errors, isValid, revalidate } = useValidateName(name)

  const navigate = useNavigate()
  const { t } = useTranslation()

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        navigate(`/templates?name=${name}`)
      }}
      className='flex items-center gap-4 pt-4'
    >
      <div className='h-12 w-full max-w-sm'>
        <WebsiteNameInput
          value={name}
          setValue={setName}
          errors={errors}
          revalidate={revalidate}
        />
      </div>
      <Button type='submit' className='whitespace-nowrap' disabled={!isValid}>
        {t('home.launch.startBuildingButton')}
      </Button>
    </form>
  )
}
