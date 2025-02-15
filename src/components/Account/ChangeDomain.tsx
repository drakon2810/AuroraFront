import { WebsiteNameInput } from '../WebsiteNameInput'
import { Button } from '../ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { useToast } from '@/hooks/useToast'
import { useValidateName } from '@/hooks/useValidateName'
import { updateWebsite } from '@/services/api'
import { useWallet } from '@solana/wallet-adapter-react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { FC, FormEvent, useState } from 'react'
import { useTranslation } from 'react-i18next'

export const ChangeDomain: FC<{ name: string }> = ({ name = '' }) => {
  const [websiteName, setWebsiteName] = useState(name)
  const { errors, isValid, validate } = useValidateName(websiteName)

  const { publicKey } = useWallet()
  const { toast } = useToast()
  const { t } = useTranslation()

  const queryClient = useQueryClient()
  const { mutate } = useMutation({
    mutationFn: updateWebsite,
    onSuccess: () => {
      toast({
        title: 'Your domain was successfully changed!',
        variant: 'successful'
      })
      queryClient.invalidateQueries({ queryKey: ['userWebsites'] })
    },
    onError: (error) => {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive'
      })
    }
  })

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (!isValid) {
      return toast({
        title: 'Error',
        description: Object.values(errors),
        variant: 'destructive'
      })
    }

    mutate({
      currentName: name,
      newName: websiteName,
      publicKey: publicKey?.toString() ?? ''
    })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>{t('account.changeDomain.button')}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t('account.changeDomain.title')}</DialogTitle>
          <DialogDescription>
            {t('account.changeDomain.description')}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit}>
          <WebsiteNameInput
            setValue={setWebsiteName}
            value={websiteName}
            errors={errors}
            validate={validate}
          />
          <DialogFooter className='pt-4'>
            <Button type='submit' disabled={!isValid}>
              {t('account.changeDomain.submitButton')}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
