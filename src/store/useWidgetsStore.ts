import { create } from 'zustand'

interface FallingImagesStore {
  fallingImages: File[]
  isCheckboxChecked: boolean
  isAudioaIcon: boolean
  color: string
  colorImg: string
  audioFile: File | null
  value: any
  isPopTicker: boolean
  isPopTickerFonts: string
  fontSize: string
  isPopTickerColor: string
  shape: string
  addFallingImage: (file: File, count: number) => void
  statusCheckbox: (checked: boolean) => void
  addAudioIcon: (checked: boolean) => void
  addAudioIconColor: (color: string) => void
  addAudioIconColorImg: (color: string) => void
  addAudioFile: (file: File | null) => void
  addInputValue: (value: any) => void
  changePopTicker: (value: boolean) => void
  changePopTickerFonts: (fonts: string) => void
  changePopTickerFontSize: (size: string) => void
  changePopTickerColor: (color: string) => void
  clearFallingImages: () => void
  changeShape: (str: string) => void
}

export const useFallingImagesStore = create<FallingImagesStore>((set) => ({
  fallingImages: [],
  isCheckboxChecked: false,
  isAudioaIcon: false,
  audioFile: null,
  color: '',
  colorImg: '',
  value: null,
  isPopTicker: false,
  isPopTickerFonts: '',
  fontSize: '',
  isPopTickerColor: '',
  shape: '',
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
  addAudioIconColorImg: (color) =>
    set(() => ({
      colorImg: color
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

  changePopTickerFonts: (fonts) =>
    set(() => ({
      isPopTickerFonts: fonts
    })),

  changePopTickerFontSize: (size) =>
    set(() => ({
      fontSize: size
    })),

  changePopTickerColor: (color) =>
    set(() => ({
      isPopTickerColor: color
    })),

  changeShape: (str) =>
    set(() => ({
      shape: str
    })),

  clearFallingImages: () =>
    set(() => ({
      fallingImages: []
    }))
}))
