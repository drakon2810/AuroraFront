import { create } from 'zustand'

interface TokenomicsBlock {
  title: string
  value: string
}

interface TokenomicsState {
  isActiveRocet: boolean
  titleRocet: string
  blocks: TokenomicsBlock[]
  changeIsActiveRocet: (value: boolean) => void
  changeTitleRocet: (value: string) => void
  updateBlock: (index: number, field: 'title' | 'value', value: string) => void
}

export const useTokenomicsStoreRocet = create<TokenomicsState>((set) => ({
  isActiveRocet: false,
  titleRocet: 'Tokenomics',
  blocks: [
    { title: '', value: '' },
    { title: '', value: '' },
    { title: '', value: '' },
    { title: '', value: '' }
  ],
  changeIsActiveRocet: (value) => set({ isActiveRocet: value }),
  changeTitleRocet: (value) => set({ titleRocet: value }),
  updateBlock: (index, field, value) =>
    set((state) => {
      const blocks = [...state.blocks]
      blocks[index] = { ...blocks[index], [field]: value }
      return { blocks }
    })
}))
