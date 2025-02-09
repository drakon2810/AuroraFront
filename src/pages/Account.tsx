import { UserInfo } from '@/components/Account/UserInfo'
import { UserWebsites } from '@/components/Account/UserWebsites'
import { Header } from '@/components/Header'
import { useWallet } from '@solana/wallet-adapter-react'
import { useTranslation } from 'react-i18next'

export const Account = () => {
  const { publicKey } = useWallet()
  const { t } = useTranslation()

  return (
    <div className='flex h-full min-h-dvh flex-col'>
      <Header />
      <main className='container h-full flex-auto py-24'>
        {!publicKey && <span>{t('account.unauthorizedMessage')}</span>}
        {publicKey && (
          <>
            <UserInfo />
            <hr className='my-4 border-b border-neutral-200 dark:border-neutral-700' />
            <UserWebsites />
          </>
        )}
      </main>
    </div>
  )
}
