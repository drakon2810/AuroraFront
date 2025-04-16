import { create } from 'zustand'

interface RoadMapImpressiveStore {
  isActiveRMImp: boolean
  titleRMImp: string
  roadmapFirstStepTitle: string
  roadmapSecondStepTitle: string
  roadmapThirdStepTitle: string
  roadmapFirstStepDescription: string
  roadmapSecondStepDescription: string
  roadmapThirdStepDescription: string
  colorBackgrond: string
  setisActiveRMImp: (value: boolean) => void
  setTitleRMImp: (value: string) => void
  setStageOneRMImp: (value: string) => void
  setStageTwoRMImp: (value: string) => void
  setStageFreeRMImp: (value: string) => void
  setTeaxtAreaOneRMImp: (value: string) => void
  setTeaxtAreaTwoRMImp: (value: string) => void
  setTeaxtAreaFreeRMImp: (value: string) => void
  setColorBackgrond: (value: string) => void
}

export const useRoadMapImpressiveStore = create<RoadMapImpressiveStore>(
  (set) => ({
    isActiveRMImp: true,
    titleRMImp: 'Roadmap',
    roadmapFirstStepTitle: 'Phase 1',
    roadmapSecondStepTitle: 'Phase 2',
    roadmapThirdStepTitle: 'Phase 3',
    roadmapFirstStepDescription: '',
    roadmapSecondStepDescription: '',
    roadmapThirdStepDescription: '',
    colorBackgrond: '#ffffff',

    setisActiveRMImp: (value) => set({ isActiveRMImp: value }),
    setTitleRMImp: (value) => set({ titleRMImp: value }),
    setStageOneRMImp: (value) => set({ roadmapFirstStepTitle: value }),
    setStageTwoRMImp: (value) => set({ roadmapSecondStepTitle: value }),
    setStageFreeRMImp: (value) => set({ roadmapThirdStepTitle: value }),
    setTeaxtAreaOneRMImp: (value) =>
      set({ roadmapFirstStepDescription: value }),
    setTeaxtAreaTwoRMImp: (value) =>
      set({ roadmapSecondStepDescription: value }),
    setTeaxtAreaFreeRMImp: (value) =>
      set({ roadmapThirdStepDescription: value }),
    setColorBackgrond: (value) => set({ colorBackgrond: value })
  })
)
