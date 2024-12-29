import { categories } from "../types/entities/Category";
import { useCategoryStore } from "../zustand/categoryStore";

const Category = () => {
  const { categoryValue, changeCategory } = useCategoryStore();

  return (
    <div className="w-full overflow-x-auto whitespace-nowrap scrollbar-none flex flex-row gap-4 py-4">
      <div className="flex gap-4 flex-row">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => changeCategory(category.name)}
            className={`px-8 py-2 rounded-full drop-shadow-sm transition ${
              categoryValue === category.name
                ? "bg-white text-black"
                : "bg-primary hover:bg-primaryHover"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Category;
