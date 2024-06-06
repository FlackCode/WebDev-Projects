import Navbar from "./Navbar"
import WeatherContent from "./WeatherContent"

const WeatherPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar/>
      <WeatherContent/>
    </div>
  )
}

export default WeatherPage