import { create } from 'zustand'

interface MarqueeStoreInterface {
  isActiveMarquee: boolean
  marqueeUp: boolean
  marqueeDown: boolean
  marqueeMidle: boolean
  setIsActiveMarquee: (value: boolean) => void
  setMarqueeUp: (value: boolean) => void
  setMarqueeDown: (value: boolean) => void
  setMarqueeMidle: (value: boolean) => void
}

export const useMarqueeStore = create<MarqueeStoreInterface>((set) => ({
  isActiveMarquee: false,
  marqueeUp: false,
  marqueeDown: false,
  marqueeMidle: false,
  setIsActiveMarquee: (value) => set(() => ({ isActiveMarquee: value })),
  setMarqueeUp: (value) => set(() => ({ marqueeUp: value })),
  setMarqueeDown: (value) => set(() => ({ marqueeDown: value })),
  setMarqueeMidle: (value) => set(() => ({ marqueeMidle: value }))
}))
