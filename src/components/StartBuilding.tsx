import { WebsiteNameInput } from './WebsiteNameInput'
import { RainbowButton } from './ui/rainbow-button'
import { useValidateName } from '@/hooks/useValidateName'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

export const StartBuilding = () => {
  const [name, setName] = useState('')
  const { errors, revalidate } = useValidateName(name)

  const navigate = useNavigate()
  const { t } = useTranslation()

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        navigate(`/templates?name=${name}`)
      }}
      className='flex flex-col items-center gap-2 pt-4'
    >
      <WebsiteNameInput
        value={name}
        setValue={setName}
        errors={errors}
        revalidate={revalidate}
      />
      <RainbowButton
        type='submit'
        className='w-full whitespace-nowrap rounded-xl'
      >
        {t('home.launch.startBuildingButton')}
      </RainbowButton>
    </form>
  )
}
