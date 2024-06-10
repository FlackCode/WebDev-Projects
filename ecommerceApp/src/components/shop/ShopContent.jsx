import { useState } from 'react'
import Filter from './Filter'
import MobileFilter from './MobileFilter'
import Product from './Product'

const ShopContent = () => {
  const productArray = [
    {
      image: '/pic1.webp',
      brand: 'Chrome Hearts',
      size: 'OS',
      name: 'Chrome Hearts Glasses grey',
      price: '1260',
      category: 'Headwear',
      department: 'Men'
    },
    {
      image: '/pic2.webp',
      brand: 'Adidas x Maison Margiela',
      size: 'M',
      name: 'BW Sport GAT Leather Shoes Maison Margiela',
      price: '100',
      category: 'Outerwear',
      department: 'Unisex'
    },
    {
      image: '/pic3.webp',
      brand: 'Nike x Streetwear x Vintage',
      size: 'L',
      name: 'Y2K Nike nylon small swoosh black',
      price: '85',
      category: 'Bottoms',
      department: 'Unisex'
    },
    {
      image: '/pic4.webp',
      brand: 'Oakley x Japanese Brand',
      size: 'M',
      name: 'Vintage 2000`s Oakley T-Shirt',
      price: '45',
      category: 'Tops',
      department: 'Men'
    }
  ]

  const [filters, setFilters] = useState({
    department: [],
    category: [],
    size: [],
    priceRange: [0, 9999]
  })

  const [clothes, setClothes] = useState(productArray)
  const [filtered, setFiltered] = useState([])

  const [isOpen, setIsOpened] = useState(false)

  const handleMobileFilterOpen = () => {
    setIsOpened(!isOpen)
  }

  const calculateEmptyColumns = (columns) => {
    return (columns - (productArray.length % columns)) % columns
  }

  const emptyColumnsXsm = calculateEmptyColumns(2)
  const emptyColumnsMd = calculateEmptyColumns(4)
  const emptyColumnsXl = calculateEmptyColumns(5)

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
          <button className='text-white bg-black border border-black px-2 py-1 xsm:flex md:hidden 
            text-xxs md:text-base xl:text-sm font-semibold transition-all duration-300 hover:text-gray-200' 
            onClick={handleMobileFilterOpen}>FILTER</button>
        </div>
      </div>
      <div className={isOpen ? 'xsm:block md:hidden' : 'xsm:hidden md:hidden'}>
        <MobileFilter isOpen={handleMobileFilterOpen}/>
      </div>
      <div className="grid xsm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-4">
        <div className="col-span-1 xsm:hidden md:block">
          <Filter />
        </div>
        <div className="xsm:col-span-2 md:col-span-3 xl:col-span-4 py-2 h-fit flex flex-wrap">
          {clothes.map((product, index) => (
            <Product 
              key={index} 
              image={product.image} 
              brand={product.brand} 
              size={product.size}
              name={product.name}
              price={product.price} />
          ))}
          {Array.from({ length: emptyColumnsXsm }).map((_, index) => (
            <div key={`empty-xsm-${index}`} className="xsm:block md:hidden xl:hidden w-1/2 h-full xsm:p-1"></div>
          ))}
          {Array.from({ length: emptyColumnsMd }).map((_, index) => (
            <div key={`empty-md-${index}`} className="hidden md:block xl:hidden w-1/4 h-full md:p-2"></div>
          ))}
          {Array.from({ length: emptyColumnsXl }).map((_, index) => (
            <div key={`empty-xl-${index}`} className="hidden xl:block w-1/5 h-full xl:p-4"></div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ShopContent
