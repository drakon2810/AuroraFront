import { create } from 'zustand'

interface TimelineState {
  titleTimeline: string

  blocksFirstPhase: string
  blocksFirstTitle: string
  blocksFirstDesc: string
  blocksFirstData: string

  blocksSecondPhase: string
  blocksSecondTitle: string
  blocksSecondDesc: string
  blocksSecondData: string

  blocksThirdPhase: string
  blocksThirdTitle: string
  blocksThirdDesc: string
  blocksThirdData: string

  setTitleTimeline: (value: string) => void

  setFirstPhase: (value: string) => void
  setFirstTitle: (value: string) => void
  setFirstDesc: (value: string) => void
  setFirstData: (value: string) => void

  setSecondPhase: (value: string) => void
  setSecondTitle: (value: string) => void
  setSecondDesc: (value: string) => void
  setSecondData: (value: string) => void

  setThirdPhase: (value: string) => void
  setThirdTitle: (value: string) => void
  setThirdDesc: (value: string) => void
  setThirdData: (value: string) => void
}

export const useTimelineStore = create<TimelineState>((set) => ({
  titleTimeline: 'Mission Timeline',

  blocksFirstPhase: 'Phase 1',
  blocksFirstTitle: 'Concept & Vision',
  blocksFirstDesc:
    'Define your big idea and lay out the foundation for your project. 🚀',
  blocksFirstData: 'Q1 2024',

  blocksSecondPhase: 'Phase 2',
  blocksSecondTitle: 'Development',
  blocksSecondDesc:
    'Start coding your application and building your infrastructure.🌟',
  blocksSecondData: 'Q2 2024',

  blocksThirdPhase: 'Phase 3',
  blocksThirdTitle: 'Launch',
  blocksThirdDesc: 'Release your project to the public and gather feedback.🌟',
  blocksThirdData: 'Q3 2024',

  setTitleTimeline: (value) => set({ titleTimeline: value }),

  setFirstPhase: (value) => set({ blocksFirstPhase: value }),
  setFirstTitle: (value) => set({ blocksFirstTitle: value }),
  setFirstDesc: (value) => set({ blocksFirstDesc: value }),
  setFirstData: (value) => set({ blocksFirstData: value }),

  setSecondPhase: (value) => set({ blocksSecondPhase: value }),
  setSecondTitle: (value) => set({ blocksSecondTitle: value }),
  setSecondDesc: (value) => set({ blocksSecondDesc: value }),
  setSecondData: (value) => set({ blocksSecondData: value }),

  setThirdPhase: (value) => set({ blocksThirdPhase: value }),
  setThirdTitle: (value) => set({ blocksThirdTitle: value }),
  setThirdDesc: (value) => set({ blocksThirdDesc: value }),
  setThirdData: (value) => set({ blocksThirdData: value })
}))
