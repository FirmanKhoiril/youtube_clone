import { create } from "zustand";

type CategoryStore = {
  categoryValue: string;
  changeCategory: (newCategory: string) => void;
};

export const useCategoryStore = create<CategoryStore>((set) => ({
  categoryValue: "All",
  changeCategory: (newCategory) => set(() => ({ categoryValue: newCategory })),
}));
