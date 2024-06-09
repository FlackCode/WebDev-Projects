import Filter from './Filter'


const ShopContent = () => {
  return (
    <div className="xsm:px-2 xl:px-80 xsm:py-4 xl:py-16 flex flex-col">
      <div className="flex flex-row justify-between items-center">
        <p className="font-bold xsm:text-base md:text-lg">0 listings</p>
        <div className="flex gap-4 items-center">
            <select className='xsm:text-xs md:text-sm font-semibold border-1 border-black px-2 py-1 focus:outline-none'>
                <option value="">Sort By</option>
                <option value="cheapest">Cheapest</option>
                <option value="most_expensive">Most Expensive</option>
            </select>
        </div>
      </div>
      <div className="grid grid-cols-5">
        <div className="col-span-1">
            <Filter />
        </div>
        <div className="col-span-4">

        </div>
      </div>
    </div>
  )
}

export default ShopContent