import { usePayment } from './usePayment'
import { toast } from './useToast'
import { useValidateName } from './useValidateName'
import { templatesData } from '@/consts/templatesData'
import { TemplateContext } from '@/contexts/TemplateContext'
import { createWebsite } from '@/services/api'
import { TemplateContextValues } from '@/types/contexts'
import { useWallet } from '@solana/wallet-adapter-react'
import { useMutation } from '@tanstack/react-query'
import { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { useSearchParams } from 'react-router-dom'

export const useCreateWebsite = ({
  name,
  onSuccess,
  onError
}: {
  name: string
  onSuccess?: () => void
  onError?: () => void
}) => {
  const { errors, isValid, revalidate } = useValidateName(name)

  const [searchParams] = useSearchParams()
  const template = searchParams.get('template') ?? ''

  const { t } = useTranslation()
  const { publicKey } = useWallet()

  const { data, selectedTemplate } = useContext(
    TemplateContext
  ) as TemplateContextValues

  const {
    send,
    isLoading: isPaymentLoading,
    isError: isPaymentError
  } = usePayment()

  const {
    mutate,
    isPending: isCreatingLoading,
    isError: isCreatingError,
    isSuccess: isCreatingSuccess
  } = useMutation({
    mutationFn: createWebsite,
    onSuccess: () => {
      toast({
        title: t('builder.create.successMessage'),
        variant: 'successful'
      })
      onSuccess && onSuccess()
      revalidate()
    },
    onError: (error) => {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive'
      })
      onError && onError()
    }
  })

  const isLoading = isPaymentLoading || isCreatingLoading
  const isError = !isLoading && (isPaymentError || isCreatingError)
  const isSuccess = !isLoading && isCreatingSuccess && !isPaymentError

  const create = async () => {
    if (!isValid) return

    const price = templatesData[selectedTemplate].price
    const signature = await send(price)
    if (!signature) return

    mutate({
      name,
      templateName: template,
      templateData: data,
      publicKey: publicKey?.toString() ?? '',
      signature,
      uploadedFiles: data.uploads ?? {}
    })
  }

  return {
    name: { errors, isValid, revalidate },
    status: { isLoading, isError, isSuccess },
    create
  }
}
