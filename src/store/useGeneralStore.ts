import { create } from 'zustand'

interface GeneralStoreInterface {
  isHideToken: boolean
  isHideLogo: boolean
  isLogo: boolean
  changeIsHideToke: (value: boolean) => void
  changeIsHideLogo: (value: boolean) => void
  changeisLogo: (value: boolean) => void
}

export const useGeneralStore = create<GeneralStoreInterface>((set) => ({
  isHideToken: false,
  isHideLogo: false,
  isLogo: false,
  changeIsHideToke: (value: boolean) => set(() => ({ isHideToken: value })),
  changeIsHideLogo: (value: boolean) => set(() => ({ isHideLogo: value })),
  changeisLogo: (value: boolean) => set(() => ({ isLogo: value }))
}))
