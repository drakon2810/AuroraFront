import { create } from 'zustand'

interface MissionConrol {
  isActiveMissonControll: boolean
  titleControl: string

  firstBlockImg: File | null
  secondBlockImg: File | null
  thierdBlockImg: File | null

  firstBlockTitle: string
  secondBlockTitle: string
  thierdBlockTitle: string

  firstBlockDescription: string
  secondBlockDescription: string
  thierdBlockDescription: string

  changeIsActiveMissControl: (value: boolean) => void
  setTitleControl: (value: string) => void

  setFirstBlockImg: (file: File | null) => void
  setSecondBlockImg: (file: File | null) => void
  setThierdBlockImg: (file: File | null) => void

  setFirstBlockTitle: (value: string) => void
  setSecondBlockTitle: (value: string) => void
  setThierdBlockTitle: (value: string) => void

  setFirstBlockDescription: (value: string) => void
  setSecondBlockDescription: (value: string) => void
  setThierdBlockDescription: (value: string) => void
}

export const useMissionConrol = create<MissionConrol>((set) => ({
  isActiveMissonControll: true,
  titleControl: 'Mission Control',

  firstBlockImg: null,
  secondBlockImg: null,
  thierdBlockImg: null,

  firstBlockTitle: 'Meme Lord',
  secondBlockTitle: 'Diagen Dev',
  thierdBlockTitle: 'Ser Launch ',

  firstBlockDescription: 'Platform Architect',
  secondBlockDescription: 'Smart Contract Wizard',
  thierdBlockDescription: 'Community Lead',

  changeIsActiveMissControl: (value) => set({ isActiveMissonControll: value }),
  setTitleControl: (value) => set({ titleControl: value }),

  setFirstBlockImg: (file) => set({ firstBlockImg: file }),
  setSecondBlockImg: (file) => set({ secondBlockImg: file }),
  setThierdBlockImg: (file) => set({ thierdBlockImg: file }),

  setFirstBlockTitle: (value) => set({ firstBlockTitle: value }),
  setSecondBlockTitle: (value) => set({ secondBlockTitle: value }),
  setThierdBlockTitle: (value) => set({ thierdBlockTitle: value }),

  setFirstBlockDescription: (value) => set({ firstBlockDescription: value }),
  setSecondBlockDescription: (value) => set({ secondBlockDescription: value }),
  setThierdBlockDescription: (value) => set({ thierdBlockDescription: value })
}))
