const Header = () => {
  return (
    <div className="header flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-8 max-w-xl">
        <h1 className="text-5xl font-bold text-center">FIND YOUR OWN STYLE</h1>
        <p className="text-xl font-semibold text-center">Buy and sell clothes, build your own style from our variety of clothes and accessories.</p>
        <div className="flex justify-center gap-8 w-full">
            <button className="w-1/2 border-1 border-black py-4 font-bold text-sm transition-all duration-300 hover:bg-black hover:text-white">
                SHOP MENSWEAR
            </button>
            <button className="w-1/2 border-1 border-black py-4 font-bold text-sm transition-all duration-300 hover:bg-black hover:text-white">
                SHOP WOMENSWEAR
            </button>
        </div>
      </div>
    </div>
  )
}

export default Header