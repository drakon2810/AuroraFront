import { create } from 'zustand'

interface TokenomicsBlock {
  title: string
  value: string
}

interface TokenomicsState {
  isActiveRocet: boolean
  titleRocet: string
  blocksFirst: string
  blocksFirstTilte: string
  blocksSecond: string
  blocksSecondTilte: string
  blocksTherd: string
  blocksTherdTilte: string
  blocksFour: string
  blocksFourTilte: string

  changeIsActiveRocet: (value: boolean) => void
  changeTitleRocet: (value: string) => void
  setFirstBlock: (value: string) => void
  setFirstBlockTilte: (value: string) => void
  setSecondBlock: (value: string) => void
  setSecondBlockTilte: (value: string) => void
  setTherdBlock: (value: string) => void
  setTherdBlockTilte: (value: string) => void
  setFourBlock: (value: string) => void
  setFourBlockTilte: (value: string) => void
}

export const useTokenomicsStoreRocet = create<TokenomicsState>((set) => ({
  isActiveRocet: false,
  titleRocet: 'Tokenomics',
  blocksFirst: 'Total Supply ',
  blocksFirstTilte: '1000000000',
  blocksSecond: 'Buy Tax ',
  blocksSecondTilte: '5%',
  blocksTherd: 'Sell Tax ',
  blocksTherdTilte: '5%',
  blocksFour: 'LP Lock ',
  blocksFourTilte: '2 Years',
  changeIsActiveRocet: (value) => set({ isActiveRocet: value }),
  changeTitleRocet: (value) => set({ titleRocet: value }),
  setFirstBlock: (value) => set({ blocksFirst: value }),
  setFirstBlockTilte: (value) => set({ blocksFirstTilte: value }),
  setSecondBlock: (value) => set({ blocksSecond: value }),
  setSecondBlockTilte: (value) => set({ blocksSecondTilte: value }),
  setTherdBlock: (value) => set({ blocksTherd: value }),
  setTherdBlockTilte: (value) => set({ blocksTherdTilte: value }),
  setFourBlock: (value) => set({ blocksFour: value }),
  setFourBlockTilte: (value) => set({ blocksFourTilte: value })
}))
