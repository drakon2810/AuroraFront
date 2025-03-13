import { create } from 'zustand'

interface StylesStoreInterface {
  primary: string
  secondary: string
  colorPrim: string
  colorSec: string
  colorBackground: string
  toggle: string
  activeSize: string
  overlayColor: string
  overlayOpacity: number
  setPrimary: (value: string) => void
  setSecondary: (value: string) => void
  setColorSecondary: (value: string) => void
  setColorPrimary: (value: string) => void
  setColorBackground: (value: string) => void
  setToggle: (value: string) => void
  setActiveSizeBtn: (value: string) => void
  setOverlayColor: (value: string) => void
  setOverlayOpacity: (value: number) => void
}

export const useStylesStore = create<StylesStoreInterface>((set) => ({
  primary: '',
  secondary: '',
  colorPrim: '',
  colorSec: '',
  colorBackground: '',
  toggle: 'color',
  activeSize: 'none',
  overlayColor: '',
  overlayOpacity: 0,
  setPrimary: (value) => set(() => ({ primary: value })),
  setSecondary: (value) => set(() => ({ secondary: value })),
  setColorSecondary: (value) => set(() => ({ colorSec: value })),
  setColorPrimary: (value) => set(() => ({ colorPrim: value })),
  setColorBackground: (value) => set(() => ({ colorBackground: value })),
  setToggle: (value) => set(() => ({ toggle: value })),
  setActiveSizeBtn: (value) => set(() => ({ activeSize: value })),
  setOverlayColor: (value) => set(() => ({ overlayColor: value })),
  setOverlayOpacity: (value) => set(() => ({ overlayOpacity: value }))
}))
