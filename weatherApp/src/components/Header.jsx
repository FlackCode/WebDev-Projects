import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="text-text bg-background h-full md:px-24 xsm:px-4 md:py-36">
      <div className="h-full flex flex-col items-center justify-center">
        <p className="md:text-xl font-bold text-gray-400">WeatherApp</p>
        <h1 className="font-bold md:text-5xl xsm:text-2xl mb-4 xsm:text-center md:text-center xl:text-left">
          Access the <span className="text-highlight">weather</span> information of any country!
        </h1>
        <Link to={'/weather'} className="text-background flex flex-row items-center gap-2 md:px-8 xsm:px-8 md:py-4 xsm:py-4 bg-primary rounded-full font-semibold transition-all duration-300 hover:scale-110 hover:bg-hover hover:drop-shadow-glow">
          Start searching! <BsArrowRight/>
        </Link>
      </div>
    </div>
  )
}

export default Header