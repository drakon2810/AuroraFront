import { create } from 'zustand'

interface JoinTheMission {
  isActiveMissonJoin: boolean
  titleJoin: string

  firstBlockTitleJoin: string
  secondBlockTitleJoin: string
  thierdBlockTitleJoin: string

  firstBlockDescriptionJoin: string
  secondBlockDescriptionJoin: string
  thierdBlockDescriptionJoin: string

  firstBlockLinkJoin: string
  secondBlockLinkJoin: string
  thierdBlockLinkJoin: string

  changeIsActiveMissonJoin: (value: boolean) => void
  setTitleJoin: (value: string) => void

  setFirstBlockTitleJoin: (value: string) => void
  setSecondBlockTitleJoin: (value: string) => void
  setThierdBlockTitleJoin: (value: string) => void

  setFirstBlockDescriptionJoin: (value: string) => void
  setSecondBlockDescriptionJoin: (value: string) => void
  setThierdBlockDescriptionJoin: (value: string) => void

  setFirstBlockLinkJoin: (value: string) => void
  setSecondBlockLinkJoin: (value: string) => void
  setThierdBlockLinkJoin: (value: string) => void
}

export const useJoinTheMission = create<JoinTheMission>((set) => ({
  isActiveMissonJoin: true,
  titleJoin: 'Join the Mission',

  firstBlockTitleJoin: 'Telegram',
  secondBlockTitleJoin: 'Twitter',
  thierdBlockTitleJoin: 'Discord',

  firstBlockDescriptionJoin: 'Join our active community',
  secondBlockDescriptionJoin: 'Follow for updates',
  thierdBlockDescriptionJoin: 'Join our server',

  firstBlockLinkJoin: '',
  secondBlockLinkJoin: '',
  thierdBlockLinkJoin: '',

  changeIsActiveMissonJoin: (value) => set({ isActiveMissonJoin: value }),
  setTitleJoin: (value) => set({ titleJoin: value }),

  setFirstBlockTitleJoin: (value) => set({ firstBlockTitleJoin: value }),
  setSecondBlockTitleJoin: (value) => set({ secondBlockTitleJoin: value }),
  setThierdBlockTitleJoin: (value) => set({ thierdBlockTitleJoin: value }),

  setFirstBlockDescriptionJoin: (value) =>
    set({ firstBlockDescriptionJoin: value }),
  setSecondBlockDescriptionJoin: (value) =>
    set({ secondBlockDescriptionJoin: value }),
  setThierdBlockDescriptionJoin: (value) =>
    set({ thierdBlockDescriptionJoin: value }),

  setFirstBlockLinkJoin: (value) => set({ firstBlockLinkJoin: value }),
  setSecondBlockLinkJoin: (value) => set({ secondBlockLinkJoin: value }),
  setThierdBlockLinkJoin: (value) => set({ thierdBlockLinkJoin: value })
}))
