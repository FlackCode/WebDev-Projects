import { BsSearch, BsX } from 'react-icons/bs'

const Nav = () => {
  return (
    <div className="mainfont text-background py-4 px-48 flex flex-row items-center justify-between gap-8">
        <h1 className="logofont text-2xl font-semibold">STYLESHARE</h1>
        <form className="border-1 border-black flex flex-row items-center p-2 flex-grow">
            <label htmlFor="" className='px-2'>
                <BsSearch/>
            </label>
            <input type="text" className='flex-1 h-full px-2 py-2 border-none focus:outline-none' placeholder='Search...'/>
            <button className='border-1 px-2 py-1 text-sm font-semibold transition-all duration-300 hover:border-black'>
                SEARCH
            </button>
        </form>
        <div className='flex flex-row gap-4 items-center'>
            <button className='border-1 px-4 py-1 text-sm font-semibold transition-all duration-300 hover:border-black'>
                SELL
            </button>
            <p className='text-sm font-semibold cursor-pointer'>SHOP</p>
            <p className='text-sm font-semibold cursor-pointer'>ABOUT</p>
            <button className='border-1 px-2 py-1 text-sm font-semibold transition-all duration-300 hover:border-black'>LOGIN</button>
            <button className='text-white bg-black border-1 border-black px-2 py-1 text-sm font-semibold transition-all duration-300 hover:text-gray-200 hover:scale-110'>SIGN UP</button>

        </div>
    </div>
  )
}

export default Nav