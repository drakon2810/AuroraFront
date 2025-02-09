import { Button } from '../ui/button'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog'
import { useToast } from '@/hooks/useToast'
import { deleteWebsite } from '@/services/api'
import { useWallet } from '@solana/wallet-adapter-react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

export const DeleteWebsite: FC<{ name: string }> = ({ name }) => {
  const { publicKey } = useWallet()
  const { toast } = useToast()
  const { t } = useTranslation()

  const queryClient = useQueryClient()
  const { mutate } = useMutation({
    mutationFn: deleteWebsite,
    onSuccess: () => {
      toast({
        title: t('account.delete.successMessage'),
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

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant='destructive'>{t('account.delete.button')}</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{t('account.delete.title')}</AlertDialogTitle>
          <AlertDialogDescription>
            {t('account.delete.description')}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>
            {t('account.delete.cancelButton')}
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={() =>
              mutate({ name, publicKey: publicKey?.toString() ?? '' })
            }
          >
            {t('account.delete.submitButton')}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
