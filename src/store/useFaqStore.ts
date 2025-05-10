import { create } from 'zustand'

interface FaqStoreInterface {
  isActiveFaq: boolean
  titleFaq: string
  firstFaq: string
  firstAnsw: string
  secondFaq: string
  secondAnsw: string
  thirdFaq: string
  thirdAnsw: string
  fourthFaq: string
  fourAnsw: string
  toggleIsActiveFaq: (value: boolean) => void
  setTitleFaq: (value: string) => void
  setFirstFaq: (value: string) => void
  setFirstAnsw: (value: string) => void
  setSecondFaq: (value: string) => void
  setSecondAnsw: (value: string) => void
  setThirdFaq: (value: string) => void
  setThirdAnsw: (value: string) => void
  setFourthFaq: (value: string) => void
  setFourthAnsw: (value: string) => void
}

export const useFaqStore = create<FaqStoreInterface>((set) => ({
  isActiveFaq: true,
  titleFaq: 'FAQ',
  firstFaq: 'FIRST QUESTION',
  firstAnsw: 'FIRST ANSWER',
  secondFaq: 'SECOND QUESTION',
  secondAnsw: 'SECOND ANSWER',
  thirdFaq: 'THIRD QUESTION',
  thirdAnsw: 'THIRD ANSWER',
  fourthFaq: 'FOURTH QUESTION',
  fourAnsw: 'FOURTH ANSWER',
  toggleIsActiveFaq: (value) => set(() => ({ isActiveFaq: value })),
  setTitleFaq: (value) => set(() => ({ titleFaq: value })),
  setFirstFaq: (value) => set(() => ({ firstFaq: value })),
  setFirstAnsw: (value) => set(() => ({ firstAnsw: value })),
  setSecondFaq: (value) => set(() => ({ secondFaq: value })),
  setSecondAnsw: (value) => set(() => ({ secondAnsw: value })),
  setThirdFaq: (value) => set(() => ({ thirdFaq: value })),
  setThirdAnsw: (value) => set(() => ({ thirdAnsw: value })),
  setFourthFaq: (value) => set(() => ({ fourthFaq: value })),
  setFourthAnsw: (value) => set(() => ({ fourAnsw: value }))
}))
