import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="text-text bg-background h-full
                    md:px-48 xsm:px-4 md:py-36">
      <div className="h-full flex flex-col items-center justify-center">
        <p className="md:text-xl font-bold text-gray-400">todoApp</p>
        <h1 className="font-bold md:text-5xl xsm:text-2xl mb-4 xsm:text-center md:text-left">
            All of your 
                <span className="text-highlight"> tasks </span> 
            in one place
        </h1>
        <p className="xsm:text-center md:text-left md:text-xl font-semibold text-gray-400">Create and manage all of your day-to-day tasks and access them all in one place!</p>
        <p className="md:text-xl font-semibold text-gray-400 mb-4">It's free, it's fast and it's secure.</p>
        <Link to={'/register'} className="flex flex-row items-center gap-2 md:px-8 xsm:px-8 md:py-4 xsm:py-4 bg-primary rounded-full font-semibold transition-all duration-300 
                            hover:scale-110 hover:bg-hover hover:drop-shadow-glow">
            Get Started <BsArrowRight/>
        </Link>
      </div>
    </div>
  )
}

export default Header