import { create } from 'zustand'

interface FallingImagesStore {
  fallingImages: File[]
  isCheckboxChecked: boolean
  isAudioaIcon: boolean
  color: string
  audioFile: File | null
  value: any
  isPopTicker: boolean
  addFallingImage: (file: File, count: number) => void
  statusCheckbox: (checked: boolean) => void
  addAudioIcon: (checked: boolean) => void
  addAudioIconColor: (color: string) => void
  addAudioFile: (file: File | null) => void
  addInputValue: (value: any) => void
  changePopTicker: (value: boolean) => void
  clearFallingImages: () => void
}

export const useFallingImagesStore = create<FallingImagesStore>((set) => ({
  fallingImages: [],
  isCheckboxChecked: false,
  isAudioaIcon: false,
  audioFile: null,
  color: '',
  value: null,
  isPopTicker: false,

  addFallingImage: (file, count) =>
    set((state) => ({
      fallingImages: [...state.fallingImages, ...new Array(count).fill(file)]
    })),

  statusCheckbox: (checked) =>
    set(() => ({
      isCheckboxChecked: checked
    })),

  addAudioIcon: (checked) =>
    set(() => ({
      isAudioaIcon: checked
    })),

  addAudioIconColor: (color) =>
    set(() => ({
      color: color
    })),

  addAudioFile: (file: File | null) =>
    set(() => ({
      audioFile: file
    })),

  addInputValue: (value) =>
    set(() => ({
      value: value
    })),

  changePopTicker: (value) =>
    set(() => ({
      isPopTicker: value
    })),

  clearFallingImages: () =>
    set(() => ({
      fallingImages: []
    }))
}))
