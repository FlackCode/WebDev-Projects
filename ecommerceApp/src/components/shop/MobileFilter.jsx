import { useFilterContext } from '../context/FilterContext'
import FilterComponent from './FilterComponent'

const MobileFilter = ({ isOpen }) => {

  const { handleFilterChange, filters } = useFilterContext()

  return (
    <div className='border border-black mt-2'>
      
      <div className="px-2">
        <FilterComponent title={'Department'} options={["Men", "Women", "Unisex"]}
        onFilterChange={handleFilterChange} filterType={'department'} selectedFilters={filters.department}/>
        <FilterComponent title={'Category'} options={["Headwear", "Tops", "Bottoms", "Footwear"]}
        onFilterChange={handleFilterChange} filterType={'category'} selectedFilters={filters.category}/>
        <FilterComponent title={'Size'} options={["OS", "S", "M", "L", "XL"]}
        onFilterChange={handleFilterChange} filterType={'size'} selectedFilters={filters.size}/>
      </div>
      <div className="px-2 py-4">
        <button className="px-2 py-1 bg-black text-white font-semibold w-full" onClick={ isOpen }>Close</button>
      </div>
    </div>
  )
}

export default MobileFilter
