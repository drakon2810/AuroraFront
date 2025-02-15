import { Toaster } from './ui/toaster'
import { ThemeContextProvider } from '@/contexts/ThemeContext'
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom'
import {
  ConnectionProvider,
  WalletProvider
} from '@solana/wallet-adapter-react'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import '@solana/wallet-adapter-react-ui/styles.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PropsWithChildren, useMemo } from 'react'
import { BrowserRouter } from 'react-router-dom'

export const Providers = ({ children }: PropsWithChildren) => {
  const network = WalletAdapterNetwork.Mainnet
  const endpoint = useMemo(
    () => import.meta.env.VITE_SOLANA_NETWORK_ENDPOINT,
    [network]
  )
  const wallets = useMemo(() => [new PhantomWalletAdapter()], [network])

  const queryClient = new QueryClient()

  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <QueryClientProvider client={queryClient}>
          <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
              <WalletModalProvider>{children}</WalletModalProvider>
              <Toaster />
              {/*<ReactQueryDevtools />*/}
            </WalletProvider>
          </ConnectionProvider>
        </QueryClientProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  )
}
