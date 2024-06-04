import { BsJournal } from 'react-icons/bs'

const Navbar = () => {
  return (
    <div className="text-white">
      <div className="md:px-48 xsm:px-4 py-6 flex items-center justify-between bg-black">
        <div className='flex items-center gap-2 select-none'>
          <BsJournal className='md:text-xl'/>
          <h1 className="font-bold md:text-3xl xsm:text-xl">todoApp</h1>
        </div>
        <div className='flex flex-row gap-4 items-center'>
            <p className='text-lg font-semibold cursor-pointer transition-all duration-300 hover:scale-110'>
                Login
            </p>
            <button className="md:px-6 xsm:px-4 md:py-2 xsm:py-1 bg-blue-600 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:bg-blue-700">
                Register
            </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar