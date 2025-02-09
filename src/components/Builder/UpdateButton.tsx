import { FancyButton } from '../FancyButton'
import { TemplateContext } from '@/contexts/TemplateContext'
import { useToast } from '@/hooks/useToast'
import { updateWebsite } from '@/services/api'
import { TemplateContextValues } from '@/types/contexts'
import { useWallet } from '@solana/wallet-adapter-react'
import { useMutation } from '@tanstack/react-query'
import { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { useSearchParams } from 'react-router-dom'

export const UpdateButton = () => {
  const { publicKey } = useWallet()
  const { toast } = useToast()
  const { t } = useTranslation()

  const { data } = useContext(TemplateContext) as TemplateContextValues

  const [searchParams] = useSearchParams()
  const name = searchParams.get('name') ?? ''

  const { mutate } = useMutation({
    mutationFn: updateWebsite,
    onSuccess: () => {
      toast({
        title: t('builder.update.successMessage'),
        variant: 'successful'
      })
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
    <FancyButton
      onClick={() => {
        mutate({
          currentName: name,
          data,
          uploadedFiles: data.uploads ?? {},
          publicKey: publicKey?.toString() ?? ''
        })
      }}
      className='mb-4 w-full max-w-64 self-center'
    >
      {t('builder.update.button')}
    </FancyButton>
  )
}
