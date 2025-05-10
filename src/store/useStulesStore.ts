import { create } from 'zustand'

interface StylesStoreInterface {
  primary: string
  secondary: string
  colorPrim: string
  colorSec: string
  colorBackground: string
  colorBackgroundSec: string
  imgBackgroundSec: string
  imgBackground: string
  gradientBackgroundSec: string
  toggle: string
  toggleSec: string
  activeSize: string
  activeSizeSec: string
  overlayColor: string
  overlayColorSec: string
  overlayOpacity: number
  overlayOpacitySec: number
  backgroundGradient: string
  setPrimary: (value: string) => void
  setSecondary: (value: string) => void
  setColorSecondary: (value: string) => void
  setColorPrimary: (value: string) => void
  setColorBackground: (value: string) => void
  setColorBackgroundSec: (value: string) => void
  setImgBackgroundSec: (value: string) => void
  setImgBackground: (value: string) => void
  setGradientBackgroundSec: (value: string) => void
  setToggle: (value: string) => void
  setToggleSec: (value: string) => void
  setActiveSizeBtn: (value: string) => void
  setActiveSizeBtnSec: (value: string) => void
  setOverlayColor: (value: string) => void
  setOverlayColorSec: (value: string) => void
  setOverlayOpacity: (value: number) => void
  setOverlayOpacitySec: (value: number) => void
  setBackgroundGradient: (value: string) => void
}

export const useStylesStore = create<StylesStoreInterface>((set) => ({
  primary: '',
  secondary: '',
  colorPrim: '',
  colorSec: '',
  colorBackground: '',
  colorBackgroundSec: '',
  imgBackgroundSec: '',
  imgBackground: '',
  gradientBackgroundSec: '',
  toggle: 'color',
  toggleSec: 'color',
  activeSize: 'none',
  activeSizeSec: 'none',
  overlayColor: '',
  overlayColorSec: '',
  overlayOpacity: 0,
  overlayOpacitySec: 0,
  backgroundGradient: '',
  setPrimary: (value) => set(() => ({ primary: value })),
  setSecondary: (value) => set(() => ({ secondary: value })),
  setColorSecondary: (value) => set(() => ({ colorSec: value })),
  setColorPrimary: (value) => set(() => ({ colorPrim: value })),
  setColorBackground: (value) => set(() => ({ colorBackground: value })),
  setColorBackgroundSec: (value) => set(() => ({ colorBackgroundSec: value })),
  setImgBackgroundSec: (value) => set(() => ({ imgBackgroundSec: value })),
  setImgBackground: (value) => set(() => ({ imgBackground: value })),
  setGradientBackgroundSec: (value) =>
    set(() => ({ gradientBackgroundSec: value })),
  setToggle: (value) => set(() => ({ toggle: value })),
  setToggleSec: (value) => set(() => ({ toggleSec: value })),
  setActiveSizeBtn: (value) => set(() => ({ activeSize: value })),
  setActiveSizeBtnSec: (value) => set(() => ({ activeSizeSec: value })),
  setOverlayColor: (value) => set(() => ({ overlayColor: value })),
  setOverlayColorSec: (value) => set(() => ({ overlayColorSec: value })),
  setOverlayOpacity: (value) => set(() => ({ overlayOpacity: value })),
  setOverlayOpacitySec: (value) => set(() => ({ overlayOpacitySec: value })),
  setBackgroundGradient: (value) => set(() => ({ backgroundGradient: value }))
}))
