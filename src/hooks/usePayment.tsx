import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { SystemProgram, Transaction } from '@solana/web3.js'
import { useState } from 'react'

// https://github.com/anza-xyz/wallet-adapter/blob/master/APP.md
export const usePayment = () => {
  const { publicKey, sendTransaction } = useWallet()
  const { connection } = useConnection()

  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const send = async (amount: number) => {
    if (!publicKey) return

    try {
      setIsError(false)
      setIsLoading(true)

      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: import.meta.env.VITE_RECIPIENT_PUBLIC_KEY,
          lamports: amount * 1000000000 // Convert SOL to lamports
        })
      )

      const {
        context: { slot: minContextSlot },
        value: { blockhash, lastValidBlockHeight }
      } = await connection.getLatestBlockhashAndContext()

      const signature = await sendTransaction(transaction, connection, {
        minContextSlot
      })

      await connection.confirmTransaction({
        blockhash,
        lastValidBlockHeight,
        signature
      })

      setIsLoading(false)

      return signature
    } catch (error) {
      setIsError(true)
      setIsLoading(false)
    }
  }

  return { send, isLoading, isError }
}
