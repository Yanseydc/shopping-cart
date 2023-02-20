import { createContext, useState } from 'react'

const FilterContext = createContext()

const FilterProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    category: 'all',
    price: 300
  })

  return (
    <FilterContext.Provider value={{
      filters,
      setFilters
    }}
    >
      {children}
    </FilterContext.Provider>
  )
}

export { FilterContext, FilterProvider }
