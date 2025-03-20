import { create } from 'zustand'

interface useBlocksStoreInterface {
  howToBuyBtn: boolean
  titleHowToBuy: string
  selectedNetwork: string
  isActiveEmbed: boolean
  emberVideo: string
  emberX: string
  emberTictok: string
  embedChoiseBtn: string
  embedTitle: string
  embedColorX: string
  toggleHowToBuy: (value: boolean) => void
  setTitleHowToBuy: (value: string) => void
  setSelectedNetwork: (value: string) => void
  setEmberVidoe: (value: string) => void
  setisActiveEmbed: (value: boolean) => void
  setEmberX: (value: string) => void
  setEmberTicTok: (value: string) => void
  setEmbedChoiseBtn: (value: string) => void
  setEmbedTitle: (value: string) => void
  setEmbedColorX: (value: string) => void
}

export const useBlocksStore = create<useBlocksStoreInterface>((set) => ({
  howToBuyBtn: false,
  titleHowToBuy: 'How to Buy',
  selectedNetwork: 'Solana',
  isActiveEmbed: false,
  emberVideo: 'https://www.youtube.com/embed/QCJGIz7ROUI?si=MxEWxZGg7xfoc4f1',
  emberX: 'https://x.com/aurorabuildd/status/1889418700249284715?s=46',
  emberTictok: 'https://vm.tiktok.com/ZNdda2pwC/',
  embedChoiseBtn: 'youtube',
  embedTitle: '',
  embedColorX: 'white',
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
    })),
  setEmberVidoe: (value) => set(() => ({ emberVideo: value })),
  setEmberX: (value) => set(() => ({ emberX: value })),
  setEmberTicTok: (value) => set(() => ({ emberTictok: value })),
  setEmbedChoiseBtn: (value) => set(() => ({ embedChoiseBtn: value })),
  setisActiveEmbed: (value) => set(() => ({ isActiveEmbed: value })),
  setEmbedTitle: (value) => set(() => ({ embedTitle: value })),
  setEmbedColorX: (value) => set(() => ({ embedColorX: value }))
}))
