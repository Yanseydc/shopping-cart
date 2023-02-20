import { products } from './../mock/Products.json';
import { useContext, useMemo } from 'react';
import { FilterContext } from './../context/Filters';

function useFilters() {
  const { filters, setFilters } = useContext(FilterContext);

  const filteredProducts = products.filter(product => {
    return product.price >= filters.price &&
    (filters.category === 'all' || product.category === filters.category);
  });

  const filteredCategories = useMemo(() => {
    return [...new Set(products.map(product => product.category))];
  }, [products]);

  return { filters, setFilters, filteredProducts, filteredCategories };
}

export default useFilters;