import { create } from 'zustand'

interface GallaryStoreInterface {
  isActiveGallary: boolean
  titleGallary: string
  toggleGallary: string
  photosGallary: (File | null)[]
  setIsActiveGallary: (value: boolean) => void
  setTitleGallary: (value: string) => void
  setToggleGallary: (value: string) => void
  setPhotosGallary: (index: number, value: File | null) => void
}

export const useGallaryStore = create<GallaryStoreInterface>((set) => ({
  isActiveGallary: false,
  titleGallary: 'Gallery',
  toggleGallary: 'grid',
  photosGallary: Array(8).fill(null),
  setIsActiveGallary: (value) => set(() => ({ isActiveGallary: value })),
  setTitleGallary: (value) => set(() => ({ titleGallary: value })),
  setToggleGallary: (value) => set(() => ({ toggleGallary: value })),
  setPhotosGallary: (index, value) =>
    set((state) => {
      const newPhotos = [...state.photosGallary]
      newPhotos[index] = value
      return { photosGallary: newPhotos }
    })
}))
