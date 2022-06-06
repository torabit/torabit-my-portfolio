import { atom, useRecoilState } from "recoil";

const categoryFilterState = atom<number[]>({
  key: "categoryFilterState",
  default: [],
});

export const useCategoryFilter = () => {
  const [categoryFilter, setCategoryFilter] = useRecoilState(categoryFilterState);

  const addFilter = (id: number) => {
    if (categoryFilter.find((categoryFilterId) => categoryFilterId === id)) return;

    const _categoryFilter = categoryFilter.concat();
    _categoryFilter.push(id);
    setCategoryFilter(_categoryFilter);
  };

  const removeFilter = (id: number) => {
    if (!categoryFilter.includes(id)) return;

    const _categoryFilter = categoryFilter.concat();
    const index = _categoryFilter.indexOf(id);

    _categoryFilter.splice(index, 1);
    setCategoryFilter(_categoryFilter);
  };

  return { addFilter, removeFilter, categoryFilter };
};
