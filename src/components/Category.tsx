import { categories } from '../types/entities/Category';

const Category = () => {
  return (
    <div className="w-full overflow-x-auto whitespace-nowrap scrollbar-none flex flex-row gap-4 py-4">
      <div className="flex gap-4 flex-row">
        {categories.map((category, index) => (
          <button
            key={index}
            className="px-8 py-2 rounded-full drop-shadow-sm hover:bg-primaryHover bg-primary transition"
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Category