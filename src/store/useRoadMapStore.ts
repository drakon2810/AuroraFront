import { create } from 'zustand'

interface RoadMaplStoreInterface {
  isActiveRM: boolean
  titleRM: string
  stageOneRM: string
  stageTwoRM: string
  stageFreeRM: string
  teaxtAreaOneRM: string
  teaxtAreaTwoRM: string
  teaxtAreaFreeRM: string
  colorBackgrond: string
  setisActiveRM: (value: boolean) => void
  setTitleRM: (value: string) => void
  setStageOneRM: (value: string) => void
  setStageTwoRM: (value: string) => void
  setStageFreeRM: (value: string) => void
  setTeaxtAreaOneRM: (value: string) => void
  setTeaxtAreaTwoRM: (value: string) => void
  setTeaxtAreaFreeRM: (value: string) => void
  setColorBackgrond: (value: string) => void
}

export const useRoadMapStore = create<RoadMaplStoreInterface>((set) => ({
  isActiveRM: false,
  colorBackgrond: 'white',
  titleRM: '',
  stageOneRM: '',
  stageTwoRM: '',
  stageFreeRM: '',
  teaxtAreaOneRM: '',
  teaxtAreaTwoRM: '',
  teaxtAreaFreeRM: '',
  setisActiveRM: (value) => set(() => ({ isActiveRM: value })),
  setTitleRM: (value) => set(() => ({ titleRM: value })),
  setStageOneRM: (value) => set(() => ({ stageOneRM: value })),
  setStageTwoRM: (value) => set(() => ({ stageTwoRM: value })),
  setStageFreeRM: (value) => set(() => ({ stageFreeRM: value })),
  setTeaxtAreaOneRM: (value) => set(() => ({ teaxtAreaOneRM: value })),
  setTeaxtAreaTwoRM: (value) => set(() => ({ teaxtAreaTwoRM: value })),
  setTeaxtAreaFreeRM: (value) => set(() => ({ teaxtAreaFreeRM: value })),
  setColorBackgrond: (value) => set(() => ({ colorBackgrond: value }))
}))
