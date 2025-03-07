import { create } from 'zustand'

interface GeneralStoreInterface {
  isHide: boolean
  changeIsHide: (value: boolean) => void
}

export const useGeneralStore = create<GeneralStoreInterface>((set) => ({
  isHide: false,
  changeIsHide: (value: boolean) => set(() => ({ isHide: value }))
}))
