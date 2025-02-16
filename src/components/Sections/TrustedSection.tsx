import { Logos3 } from '../blocks/logos3'
import Aave from '@/assets/images/trusted/aave.svg'
import Coinbase from '@/assets/images/trusted/coinbase.svg'
import Crypto from '@/assets/images/trusted/crypto.svg'
import Curve from '@/assets/images/trusted/curve.svg'
import Ethereum from '@/assets/images/trusted/ethereum.svg'
import Kraken from '@/assets/images/trusted/kraken.svg'
import Phantom from '@/assets/images/trusted/phantom.svg'
import Solana from '@/assets/images/trusted/solana.svg'
import Uniswap from '@/assets/images/trusted/uniswap.svg'

const items = [
  {
    id: 'logo-1',
    description: 'Logo 1',
    image: Aave,
    className: 'h-20 w-auto'
  },
  {
    id: 'logo-2',
    description: 'Logo 2',
    image: Coinbase,
    className: 'h-7 w-auto'
  },
  {
    id: 'logo-3',
    description: 'Logo 3',
    image: Crypto,
    className: 'h-44 w-auto'
  },
  {
    id: 'logo-4',
    description: 'Logo 4',
    image: Curve,
    className: 'h-32 w-auto'
  },
  {
    id: 'logo-5',
    description: 'Logo 5',
    image: Ethereum,
    className: 'h-24 w-auto'
  },
  {
    id: 'logo-6',
    description: 'Logo 6',
    image: Kraken,
    className: 'h-36 w-auto'
  },
  {
    id: 'logo-7',
    description: 'Logo 7',
    image: Phantom,
    className: 'h-8 w-auto'
  },
  {
    id: 'logo-8',
    description: 'Logo 8',
    image: Solana,
    className: 'h-28 w-auto'
  },
  {
    id: 'logo-9',
    description: 'Logo 9',
    image: Uniswap,
    className: 'h-28 w-auto'
  }
]

export const TrustedSection = () => {
  return (
    <Logos3
      logos={items}
      className='bg-neutral-100 pb-24 pt-0 dark:bg-neutral-800'
    />
  )
}
