import { Loading } from '../Loading'
import { Websites } from './Websites'
import { getUserWebsites } from '@/services/api'
import { useWallet } from '@solana/wallet-adapter-react'
import { useQuery } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'

export const UserWebsites = () => {
  const { publicKey: walletPublicKey } = useWallet()
  const publicKey = walletPublicKey?.toString() ?? ''

  const { t } = useTranslation()

  const { data, isLoading, isError } = useQuery({
    queryKey: ['userWebsites'],
    queryFn: () => getUserWebsites(publicKey)
  })

  if (isLoading) {
    return (
      <div className='flex justify-center py-12'>
        <Loading size={48} className='dark:fill-neutral-200' />
      </div>
    )
  }

  if (isError) {
    return (
      <span className='text-red-500'>{t('account.unableToFetchMessage')}</span>
    )
  }

  if (!data || !data.length) {
    return (
      <div className='flex justify-center'>
        {t('account.noWebsitesMessage')}
      </div>
    )
  }

  return <Websites data={data} />
}
