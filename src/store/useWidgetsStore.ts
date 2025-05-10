import { create } from 'zustand'

interface FallingImagesStore {
  fallingImages: string[]
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
  isActiveAnimations: boolean
  customCursor: number | string | null // Изменено: поддерживает индекс или URL
  customPointer: number | string | null // Изменено: поддерживает индекс или URL
  isActiveCursor: boolean
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
  setisActiveAnimations: (value: boolean) => void
  setIsActiveCustomCursor: (value: boolean) => void
  setCustomCursor: (cursor: File | number | null) => void // Обновлено
  setCustomPointer: (pointer: File | number | null) => void // Обновлено
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
  isActiveAnimations: false,
  customCursor: null,
  customPointer: null,
  isActiveCursor: false,

  addFallingImage: (file, count) =>
    set((state) => ({
      fallingImages: [
        ...state.fallingImages,
        ...new Array(count).fill(URL.createObjectURL(file))
      ]
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

  addAudioFile: (file) =>
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
    })),

  setisActiveAnimations: (value) =>
    set(() => ({
      isActiveAnimations: value
    })),

  setIsActiveCustomCursor: (value) =>
    set(() => ({
      isActiveCursor: value
    })),

  setCustomCursor: (cursor) =>
    set(() => ({
      customCursor:
        cursor instanceof File ? URL.createObjectURL(cursor) : cursor
    })),

  setCustomPointer: (pointer) =>
    set(() => ({
      customPointer:
        pointer instanceof File ? URL.createObjectURL(pointer) : pointer
    }))
}))
