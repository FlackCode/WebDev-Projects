import { createContext, useContext, useState } from 'react'

const FilterContext = createContext()

export const FilterProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    department: [],
    category: [],
    size: []
  })

  const handleFilterChange = (filterType, filterValue, isChecked) => {
    setFilters(prevFilters => {
      const updatedFilters = { ...prevFilters }
      if (isChecked) {
        updatedFilters[filterType] = [...updatedFilters[filterType], filterValue]
      } else {
        updatedFilters[filterType] = updatedFilters[filterType].filter(value => value !== filterValue)
      }
      return updatedFilters
    })
  }

  return (
    <FilterContext.Provider value={{ filters, handleFilterChange }}>
      {children}
    </FilterContext.Provider>
  )
}

export const useFilterContext = () => useContext(FilterContext)
