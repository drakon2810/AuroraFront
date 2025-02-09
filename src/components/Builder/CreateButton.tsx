import { FancyButton } from '../FancyButton'
import { WebsiteNameInput } from '../WebsiteNameInput'
import { Button } from '../ui/button'
import { DeployingModal } from './DeployingModal/DeployingModal'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { useCreateWebsite } from '@/hooks/useCreateWebsite'
import { FormEvent, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSearchParams } from 'react-router-dom'

export const CreateButton = () => {
  const { t } = useTranslation()
  const [searchParams] = useSearchParams()
  const name = searchParams.get('name') ?? ''

  const [websiteName, setWebsiteName] = useState(name)

  const {
    name: { errors, isValid, revalidate },
    create,
    status
  } = useCreateWebsite(websiteName)

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    await create()
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <FancyButton className='mb-4 w-full max-w-64 self-center'>
          {t('builder.create.button')}
        </FancyButton>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t('builder.create.title')}</DialogTitle>
          <DialogDescription>
            {t('builder.create.description')}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit}>
          <WebsiteNameInput
            value={websiteName}
            setValue={setWebsiteName}
            errors={errors}
            revalidate={revalidate}
          />
          <DialogFooter className='pt-4'>
            <DeployingModal name={websiteName} status={status}>
              <Button type='submit' disabled={!isValid}>
                {t('builder.create.submitButton')}
              </Button>
            </DeployingModal>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
