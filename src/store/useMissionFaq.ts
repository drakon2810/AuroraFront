import { create } from 'zustand'

interface MissionFaq {
  isActiveMissonFaq: boolean
  titleFaq: string

  firstBlockTitleFaq: string
  secondBlockTitleFaq: string
  thierdBlockTitleFaq: string
  fourBlockTitleFaq: string

  firstBlockDescriptionFaq: string
  secondBlockDescriptionFaq: string
  thierdBlockDescriptionFaq: string
  fourBlockDescriptionFaq: string

  changeIsActiveMissonFaq: (value: boolean) => void
  setTitleFaq: (value: string) => void

  setFirstBlockTitleFaq: (value: string) => void
  setSecondBlockTitleFaq: (value: string) => void
  setThierdBlockTitleFaq: (value: string) => void
  setFourBlockTitleFaq: (value: string) => void

  setFirstBlockDescriptionFaq: (value: string) => void
  setSecondBlockDescriptionFaq: (value: string) => void
  setThierdBlockDescriptionFaq: (value: string) => void
  setFourBlockDescriptionFaq: (value: string) => void
}

export const useMissionFaq = create<MissionFaq>((set) => ({
  isActiveMissonFaq: true,
  titleFaq: 'Mission Faq',

  firstBlockTitleFaq: 'What is AURORA? 🚀',
  secondBlockTitleFaq: 'Why AURORA? 🌟',
  thierdBlockTitleFaq: 'How does it work? ⚡',
  fourBlockTitleFaq: 'How does it work? ⚡',

  firstBlockDescriptionFaq:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porttitor eget nunc vel rutrum. Nullam efficitur metus a nibh ullamcorper suscipit. Nullam eget aliquam turpis, sed aliquet orci. Nulla sit amet nisl in lectus dapibus fringilla vitae id turpis.',
  secondBlockDescriptionFaq:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porttitor eget nunc vel rutrum. Nullam efficitur metus a nibh ullamcorper suscipit. Nullam eget aliquam turpis, sed aliquet orci. Nulla sit amet nisl in lectus dapibus fringilla vitae id turpis.',
  thierdBlockDescriptionFaq:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porttitor eget nunc vel rutrum. Nullam efficitur metus a nibh ullamcorper suscipit. Nullam eget aliquam turpis, sed aliquet orci. Nulla sit amet nisl in lectus dapibus fringilla vitae id turpis.',
  fourBlockDescriptionFaq:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porttitor eget nunc vel rutrum. Nullam efficitur metus a nibh ullamcorper suscipit. Nullam eget aliquam turpis, sed aliquet orci. Nulla sit amet nisl in lectus dapibus fringilla vitae id turpis.',

  changeIsActiveMissonFaq: (value) => set({ isActiveMissonFaq: value }),
  setTitleFaq: (value) => set({ titleFaq: value }),

  setFirstBlockTitleFaq: (value) => set({ firstBlockTitleFaq: value }),
  setSecondBlockTitleFaq: (value) => set({ secondBlockTitleFaq: value }),
  setThierdBlockTitleFaq: (value) => set({ thierdBlockTitleFaq: value }),
  setFourBlockTitleFaq: (value) => set({ fourBlockTitleFaq: value }),

  setFirstBlockDescriptionFaq: (value) =>
    set({ firstBlockDescriptionFaq: value }),
  setSecondBlockDescriptionFaq: (value) =>
    set({ secondBlockDescriptionFaq: value }),
  setThierdBlockDescriptionFaq: (value) =>
    set({ thierdBlockDescriptionFaq: value }),
  setFourBlockDescriptionFaq: (value) => set({ fourBlockDescriptionFaq: value })
}))
