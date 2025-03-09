import { create } from 'zustand'

interface GeneralStoreInterface {
  isHideToken: boolean
  isHideLogo: boolean
  changeIsHideToke: (value: boolean) => void
  changeIsHideLogo: (value: boolean) => void
}

export const useGeneralStore = create<GeneralStoreInterface>((set) => ({
  isHideToken: false,
  isHideLogo: false,
  changeIsHideToke: (value: boolean) => set(() => ({ isHideToken: value })),
  changeIsHideLogo: (value: boolean) => set(() => ({ isHideLogo: value }))
}))
