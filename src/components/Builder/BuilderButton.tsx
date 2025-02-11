import { FancyButton } from '../FancyButton'
import { CreateButton } from './CreateButton'
import { UpdateButton } from './UpdateButton'
import { useWallet } from '@solana/wallet-adapter-react'
import { useWalletModal } from '@solana/wallet-adapter-react-ui'
import { useLocation } from 'react-router-dom'

export const BuilderButton = () => {
  const { connected } = useWallet()
  const { setVisible } = useWalletModal()

  const { pathname } = useLocation()
  const isCreator = pathname === '/create'

  if (!connected) {
    return (
      <FancyButton
        onClick={() => setVisible(true)}
        className='mb-4 w-full max-w-64 self-center'
      >
        Connect Wallet
      </FancyButton>
    )
  }

  if (isCreator) return <CreateButton />
  return <UpdateButton />
}
