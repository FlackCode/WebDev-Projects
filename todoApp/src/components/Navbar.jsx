import { BsJournal } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="text-text">
      <div className="md:px-48 xsm:px-4 py-6 flex items-center justify-between bg-background">
        <Link to={'/'} className='flex items-center gap-2 cursor-pointer'>
          <BsJournal className='md:text-xl'/>
          <h1 className="font-bold md:text-3xl xsm:text-xl">todoApp</h1>
        </Link>
        <div className='flex flex-row gap-4 items-center'>
            <Link to={'/login'} className='text-lg font-semibold cursor-pointer transition-all duration-300 hover:scale-110'>
                Login
            </Link>
            <Link to={'/register'} className="md:px-6 xsm:px-4 md:py-2 xsm:py-1 bg-primary rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:bg-hover">
                Register
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar