import FilterComponent from './FilterComponent'
import PriceComponent from './PriceComponent'

const MobileFilter = ({ isOpen }) => {
    return (
      <div className='border border-black mt-2'>
        
        <div className="px-2">
          <FilterComponent title={'Department'} options={["Men", "Women", "Unisex"]} />
          <FilterComponent title={'Category'} options={["Headwear", "Tops", "Bottoms", "Outerwear", "Footwear"]} />
          <FilterComponent title={'Size'} options={["S", "M", "L", "XL"]} />
          <PriceComponent />
        </div>
        <div className="px-2 py-4">
          <button className="px-2 py-1 bg-black text-white font-semibold w-full" onClick={ isOpen }>Close</button>
        </div>
      </div>
    )
}

export default MobileFilter
