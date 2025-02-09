import { Button } from '../Button'
import { useWallet } from '@solana/wallet-adapter-react'
import { UserCircle2 } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export const UserInfo = () => {
  const { publicKey, disconnect } = useWallet()
  const { t } = useTranslation()

  return (
    <div className='flex items-center justify-between gap-4'>
      <div className='flex items-center gap-4'>
        <UserCircle2 size={64} />
        <span className='font-arial-black'>
          {t('account.walletAddressLabel')}: {publicKey?.toString()}
        </span>
      </div>
      <Button onClick={disconnect}>{t('account.signOutButton')}</Button>
    </div>
  )
}
