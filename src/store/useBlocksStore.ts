import { create } from 'zustand'

interface useBlocksStoreInterface {
  howToBuyBtn: boolean
  howToBuyBtnBlock: boolean
  titleHowToBuy: string
  titleHowToBuyBlock: string
  firstBlock: string
  secondBlock: string
  thirdBlock: string
  fourthBlock: string
  colorBackgrondBlock: string
  selectedNetwork: string
  colorBackgrond: string
  isActiveEmbed: boolean
  emberVideo: string
  emberX: string
  emberTictok: string
  embedChoiseBtn: string
  embedTitle: string
  embedColorX: string
  toggleHowToBuy: (value: boolean) => void
  setTitleHowToBuy: (value: string) => void
  toggleHowToBuyBlock: (value: boolean) => void
  setTitleHowToBuyBlock: (value: string) => void
  setFirstBlock: (value: string) => void
  setSecondBlock: (value: string) => void
  setThirdBlock: (value: string) => void
  setFourthBlock: (value: string) => void
  setColorBackgroundBlock: (value: string) => void
  setSelectedNetwork: (value: string) => void
  setColorBackground: (value: string) => void
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
  howToBuyBtnBlock: true,
  titleHowToBuy: 'How to Buy',
  titleHowToBuyBlock: 'How to Buy',
  firstBlock: 'Create any wallet of your choice, we recommend Phantom.',
  secondBlock:
    'Fund your wallet with Solana, you can buy Solana from an exchange.',
  thirdBlock:
    'Head to Jupiter & paste our Contract Address, and swap your Solana to our token.',
  fourthBlock: 'Welcome aboard degen!',
  selectedNetwork: 'Solana',
  colorBackgrond: 'white',
  colorBackgrondBlock: '#fa6f0c',
  isActiveEmbed: false,
  emberVideo: 'https://www.youtube.com/embed/QCJGIz7ROUI?si=MxEWxZGg7xfoc4f1',
  emberX: 'https://twitter.com/Interior/status/463440424141459456',
  emberTictok: 'https://vm.tiktok.com/ZNdda2pwC/',
  embedChoiseBtn: 'youtube',
  embedTitle: 'Embed',
  embedColorX: 'white',

  toggleHowToBuy: (value) => set({ howToBuyBtn: value }),
  toggleHowToBuyBlock: (value) => set({ howToBuyBtnBlock: value }),
  setTitleHowToBuy: (value) => set({ titleHowToBuy: value }),
  setTitleHowToBuyBlock: (value) => set({ titleHowToBuyBlock: value }),
  setFirstBlock: (value) => set({ firstBlock: value }),
  setSecondBlock: (value) => set({ secondBlock: value }),
  setThirdBlock: (value) => set({ thirdBlock: value }),
  setFourthBlock: (value) => set({ fourthBlock: value }),
  setSelectedNetwork: (value) => set({ selectedNetwork: value }),
  setColorBackground: (value) => set({ colorBackgrond: value }),
  setColorBackgroundBlock: (value) => set({ colorBackgrondBlock: value }),
  setEmberVidoe: (value) => set({ emberVideo: value }),
  setisActiveEmbed: (value) => set({ isActiveEmbed: value }),
  setEmberX: (value) => set({ emberX: value }),
  setEmberTicTok: (value) => set({ emberTictok: value }),
  setEmbedChoiseBtn: (value) => set({ embedChoiseBtn: value }),
  setEmbedTitle: (value) => set({ embedTitle: value }),
  setEmbedColorX: (value) => set({ embedColorX: value })
}))
