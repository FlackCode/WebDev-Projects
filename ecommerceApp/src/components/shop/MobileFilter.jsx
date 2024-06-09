import FilterComponent from './FilterComponent'
import PriceComponent from './PriceComponent'

const MobileFilterComponent = ({ isOpen, onClose }) => {
    return (
      <div className={`xsm:flex flex-col items-start ${isOpen ? 'block' : 'hidden'} fixed top-0 left-0 w-full h-full bg-white z-10`}>
        <div className="px-2 py-4">
          <button className="px-2 py-1 bg-black text-white font-semibold" onClick={onClose}>Close</button>
        </div>
        <div className="px-2">
          <FilterComponent title={'Department'} options={["Menwear", "Womenwear"]} closeFilter={onClose} />
          <FilterComponent title={'Category'} options={["Tops", "Bottoms", "Outerwear", "Footwear"]} closeFilter={onClose} />
          <FilterComponent title={'Size'} options={["S", "M", "L", "XL"]} closeFilter={onClose} />
          <PriceComponent closeFilter={onClose} />
        </div>
      </div>
    )
}

export default MobileFilterComponent;
