import { Link } from 'react-router-dom'
import { BsUmbrella } from 'react-icons/bs'

const Navbar = () => {
  return (
    <div className="text-text">
      <div className="md:px-24 xsm:px-4 py-6 flex items-center justify-between bg-background">
        <Link to={'/'} className='flex items-center gap-2 cursor-pointer'>
          <BsUmbrella className='text-xl'/>
          <h1 className="font-bold md:text-3xl xsm:text-xl">WeatherApp</h1>
        </Link>
      </div>
    </div>
  )
}

export default Navbar