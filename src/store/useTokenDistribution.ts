import { create } from 'zustand'

interface TokenomicsItem {
  id: string
  title: string
  value1: string
  value2: string
  placeholder1?: string
  placeholder2?: string
  color: string
}

interface DistributionState {
  isActiveDes: boolean
  titleDes: string
  textAreaDes: string
  itemsDes: TokenomicsItem[]

  toggleActiveDes: () => void
  setTitleDes: (title: string) => void
  setTextAreaDes: (text: string) => void
  addItemDes: () => void
  removeItemDes: (id: string) => void
  setIsActiveDes: (value: boolean) => void
  updateItemDes: (
    id: string,
    field: keyof TokenomicsItem,
    value: string
  ) => void
  updateItemColor: (id: string, color: string) => void
}

const generateRandomColor = () => {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

export const useTokenDistributionStore = create<DistributionState>((set) => ({
  isActiveDes: false,
  titleDes: 'Distribution Chart',
  textAreaDes: '',
  itemsDes: [
    {
      id: '1',
      title: 'Item 1',
      value1: '40',
      value2: 'Presale',
      color: generateRandomColor()
    },
    {
      id: '2',
      title: 'Item 2',
      value1: '15',
      value2: 'Team',
      color: generateRandomColor()
    },
    {
      id: '3',
      title: 'Item 3',
      value1: '25',
      value2: 'Marketing',
      color: generateRandomColor()
    }
  ],
  toggleActiveDes: () => set((state) => ({ isActiveDes: !state.isActiveDes })),
  setTitleDes: (title) => set({ titleDes: title }),
  setIsActiveDes: (value) => set({ isActiveDes: value }),
  setTextAreaDes: (text) => set({ textAreaDes: text }),
  addItemDes: () =>
    set((state) => {
      const total = state.itemsDes.reduce(
        (sum, item) => sum + Number(item.value1),
        0
      )
      if (total >= 100) return state

      const newItem: TokenomicsItem = {
        id: Date.now().toString(),
        title: `Item ${state.itemsDes.length + 1}`,
        value1: '',
        value2: '',
        placeholder1: `Persent`,
        placeholder2: `Item ${state.itemsDes.length + 1} label`,
        color: generateRandomColor()
      }
      return { itemsDes: [...state.itemsDes, newItem] }
    }),
  removeItemDes: (id) =>
    set((state) => {
      const newItems = state.itemsDes.filter((item) => item.id !== id)
      const renumberedItems = newItems.map((item, index) => ({
        ...item,
        title: `Item ${index + 1}`,
        placeholder1: `Persent`,
        placeholder2: `Item ${index + 1} label`
      }))
      return { itemsDes: renumberedItems }
    }),
  updateItemDes: (id, field, value) =>
    set((state) => {
      const newItems = state.itemsDes.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )

      const total = newItems.reduce((sum, item) => sum + Number(item.value1), 0)
      if (total > 100) return state

      return { itemsDes: newItems }
    }),
  updateItemColor: (id, color) =>
    set((state) => ({
      itemsDes: state.itemsDes.map((item) =>
        item.id === id ? { ...item, color: color } : item
      )
    }))
}))
