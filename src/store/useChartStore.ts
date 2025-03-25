import { create } from 'zustand'

interface ChartStoreInterface {
  titleChart: string
  contractChart: string
  isActiveChart: boolean
  toggleVariantChart: string
  toggleThemeChart: string
  optionChat: string

  setTitleChart: (value: string) => void
  setContractChart: (value: string) => void
  setIsActiveChart: (value: boolean) => void
  setToggleVariantChart: (value: string) => void
  setToggleThemeChart: (value: string) => void
  setOptionChat: (value: string) => void
}

export const useChartStore = create<ChartStoreInterface>((set) => ({
  titleChart: '',
  contractChart: '',
  isActiveChart: false,
  toggleVariantChart: 'dexscreener',
  toggleThemeChart: 'dark',
  optionChat: '',
  setTitleChart: (value) => set(() => ({ titleChart: value })),
  setContractChart: (value) => set(() => ({ contractChart: value })),
  setIsActiveChart: (value) => set(() => ({ isActiveChart: value })),
  setToggleVariantChart: (value) => set(() => ({ toggleVariantChart: value })),
  setToggleThemeChart: (value) => set(() => ({ toggleThemeChart: value })),
  setOptionChat: (value) => set(() => ({ optionChat: value }))
}))
