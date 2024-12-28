import { create } from 'zustand'

type CategoryStore = {
  category: string,
  changeCategory: () => void
}

export const useCategoryStore = create<CategoryStore>()((set) => ({
  category: "All",
  changeCategory: () => set((state) => ({ category: state.category })),
}))
