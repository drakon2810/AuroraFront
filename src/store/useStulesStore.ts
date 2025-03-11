import { create } from 'zustand'

interface StylesStoreInterface {
  primary: string
  secondary: string
  colorPrim: string
  colorSec: string
  colorBackground: string
  toggle: string
  setPrimary: (value: string) => void
  setSecondary: (value: string) => void
  setColorSecondary: (value: string) => void
  setColorPrimary: (value: string) => void
  setColorBackground: (value: string) => void
  setToggle: (value: string) => void
}

export const useStylesStore = create<StylesStoreInterface>((set) => ({
  primary: '',
  secondary: '',
  colorPrim: '',
  colorSec: '',
  colorBackground: '',
  toggle: 'color',
  setPrimary: (value) =>
    set(() => ({
      primary: value
    })),
  setSecondary: (value) =>
    set(() => ({
      secondary: value
    })),
  setColorSecondary: (value) =>
    set(() => ({
      colorSec: value
    })),
  setColorPrimary: (value) =>
    set(() => ({
      colorPrim: value
    })),
  setColorBackground: (value) =>
    set(() => ({
      colorBackground: value
    })),
  setToggle: (value) =>
    set(() => ({
      toggle: value
    }))
}))
