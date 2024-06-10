import FilterComponent from './FilterComponent'
import PriceComponent from './PriceComponent'
const Filter = () => {
  return (
    <div className="flex flex-col items-start">
        <FilterComponent title={'Department'} options={["Men", "Women", "Unisex"]}/>
        <FilterComponent title={'Category'} options={["Headwear", "Tops", "Bottoms", "Outerwear", "Footwear"]}/>
        <FilterComponent title={'Size'} options={["S", "M", "L", "XL"]}/>
        <PriceComponent />
    </div>
  )
}

export default Filter