import { useMemo } from "react";

export const useSort = (products, selectedSort) => {
  const sortedProducts = useMemo(() => {
    if (selectedSort) {
      if (selectedSort === "price") {
        return [...products].sort((a, b) => a[selectedSort] - b[selectedSort]);
      } else if (selectedSort === "rating") {
        return [...products].sort(
          (a, b) => b[selectedSort].rate - a[selectedSort].rate
        );
      } else {
        return [...products].sort((a, b) =>
          a[selectedSort].localeCompare(b[selectedSort])
        );
      }
    }
    return products;
  }, [selectedSort, products]);

  return sortedProducts;
};

export const useProducts = (
  products,
  selectedSort,
  searchQuery,
  categoryFilter
) => {
  const sortedProducts = useSort(products, selectedSort);

  const sortedAndSearchedProducts = useMemo(() => {
    const categorySort = Object.entries(categoryFilter).filter(
      ([, value]) => value === true
    );
    const categorySortKeys = Object.keys(Object.fromEntries(categorySort));

    if (JSON.stringify(categorySortKeys) === "[]") {
      return sortedProducts.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else {
      return sortedProducts.filter(
        (product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
          categorySortKeys.some((el) => {
            if (product.category.indexOf(el) === 0)
              return product.category.toLowerCase().includes(el);
          })
      );
    }
  }, [searchQuery, categoryFilter, sortedProducts]);

  return sortedAndSearchedProducts;
};
