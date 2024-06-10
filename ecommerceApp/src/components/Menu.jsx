const Menu = () => {
  return (
    <div className="py-4 xsm:px-2 xl:px-80 flex items-center justify-between border-b-1">
        <p className="font-semibold text-xxs md:text-base xl:text-sm cursor-pointer underline-offset-4 transition-all duration-300 hover:underline">BRANDS</p> 
        <p className="font-semibold text-xxs md:text-base xl:text-sm cursor-pointer underline-offset-4 transition-all duration-300 hover:underline">MEN</p>
        <p className="font-semibold text-xxs md:text-base xl:text-sm cursor-pointer underline-offset-4 transition-all duration-300 hover:underline">WOMEN</p>
        <p className="font-semibold text-xxs md:text-base xl:text-sm cursor-pointer underline-offset-4 transition-all duration-300 hover:underline">SNEAKERS</p>
        <p className="font-semibold text-xxs md:text-base xl:text-sm cursor-pointer underline-offset-4 transition-all duration-300 hover:underline">COLLECTIONS</p>
    </div>
  )
}

export default Menu