import { create } from 'zustand'

interface TokenomicsItem {
  id: string
  title: string
  value1: string
  value2: string
  placeholder1?: string
  placeholder2?: string
}

interface TokenomicsState {
  isActiveTK: boolean
  title: string
  textArea: string
  handleChooseTK: boolean
  colorTK: string
  items: TokenomicsItem[]

  toggleActive: () => void
  setTitle: (title: string) => void
  setTextArea: (text: string) => void
  addItem: () => void
  removeItem: (id: string) => void
  setColorTK: (value: string) => void
  setHandleChooseTK: (value: boolean) => void
  setIsActive: (value: boolean) => void
  updateItem: (id: string, field: keyof TokenomicsItem, value: string) => void
}

export const useTokenomicsStore = create<TokenomicsState>((set) => ({
  isActiveTK: false,
  title: '',
  textArea: '',
  colorTK: 'white',
  handleChooseTK: false,
  items: [
    { id: '1', title: 'Item 1', value1: 'Total Supply', value2: '5,000,000' },
    { id: '2', title: 'Item 2', value1: 'LP', value2: 'Burned' },
    { id: '3', title: 'Item 3', value1: 'Taxes', value2: 'Zero' }
  ],
  toggleActive: () => set((state) => ({ isActiveTK: !state.isActiveTK })),
  setTitle: (title) => set({ title }),
  setIsActive: (value) => set({ isActiveTK: value }),
  setTextArea: (text) => set({ textArea: text }),
  setHandleChooseTK: (value) => set({ handleChooseTK: value }),
  setColorTK: (value) => set({ colorTK: value }),
  addItem: () =>
    set((state) => {
      const newItem: TokenomicsItem = {
        id: Date.now().toString(),
        title: `Item ${state.items.length + 1}`,
        value1: '',
        value2: '',
        placeholder1: `Item ${state.items.length + 1} title`,
        placeholder2: `Item ${state.items.length + 1} value`
      }
      return { items: [...state.items, newItem] }
    }),
  removeItem: (id) =>
    set((state) => {
      const newItems = state.items.filter((item) => item.id !== id)
      const renumberedItems = newItems.map((item, index) => ({
        ...item,
        title: `Item ${index + 1}`,
        placeholder1: `Item ${index + 1} title`,
        placeholder2: `Item ${index + 1} value`
      }))
      return { items: renumberedItems }
    }),
  updateItem: (id, field, value) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    }))
}))
