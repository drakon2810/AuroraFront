import { create } from 'zustand'

interface FallingImagesStore {
  fallingImages: File[]
  isCheckboxChecked: boolean
  addFallingImage: (file: File, count: number) => void
  statusCheckbox: (checked: boolean) => void
}

export const useFallingImagesStore = create<FallingImagesStore>((set) => ({
  fallingImages: [],
  isCheckboxChecked: false,
  addFallingImage: (file, count) =>
    set((state) => ({
      fallingImages: [...state.fallingImages, ...new Array(count).fill(file)]
    })),
  statusCheckbox: (checked) =>
    set(() => ({
      isCheckboxChecked: checked
    }))
}))
