import { create } from 'zustand'

interface useBlocksStoreInterface {
  howToBuyBtn: boolean
  titleHowToBuy: string
  selectedNetwork: string
  toggleHowToBuy: (value: boolean) => void
  setTitleHowToBuy: (value: string) => void
  setSelectedNetwork: (value: string) => void
}

export const useBlocksStore = create<useBlocksStoreInterface>((set) => ({
  howToBuyBtn: false,
  titleHowToBuy: 'How to Buy',
  selectedNetwork: 'Solana',
  toggleHowToBuy: (value) =>
    set(() => ({
      howToBuyBtn: value
    })),
  setTitleHowToBuy: (value) =>
    set(() => ({
      titleHowToBuy: value
    })),
  setSelectedNetwork: (value) =>
    set(() => ({
      selectedNetwork: value
    }))
}))
