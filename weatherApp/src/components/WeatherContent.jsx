import { useState } from "react";

const WeatherContent = () => {
    const [searchInput, setSearchInput] = useState('')
    const [weatherData, setWeatherData] = useState(null)

    const handleSearch = async () => {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_WEATHERKEY}&q=${searchInput}&aqi=no`)
        const data = await response.json()
        console.log(data)
        setWeatherData(data)
    }

    return (
        <div className="text-text bg-background h-full md:px-24 xsm:px-4 py-12 flex justify-center">
        <div className="border-2 h-full rounded-lg shadow-lg xsm:p-6 xsm:w-full xl:w-1/3">
          <div className="flex items-center justify-between mb-8">
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Enter city or country"
              className="border p-2 w-full rounded-lg"
            />
            <button onClick={handleSearch} className="ml-4 bg-blue-500 text-white p-2 rounded-lg">Search</button>
          </div>
          {weatherData && (
            <div className="flex flex-col">
              <h1 className="text-2xl mb-4">Today Overview</h1>
              <div className="grid grid-cols-1 gap-8">
                <div className="p-4 rounded-lg flex justify-between items-center gap-4 text-xl">
                  <div className="h-full flex flex-col justify-between">
                    <img src={weatherData.current.condition.icon} alt="Weather icon" />
                    <div>
                        <p className="text-xl">{weatherData.current.temp_c}°C</p>
                        <p>{weatherData.current.condition.text}</p>
                    </div>
                  </div>
                  <div className="h-full flex flex-col items-center justify-between">
                    <p>Location: {weatherData.location.name}</p>
                    <p>Country: {weatherData.location.country}</p>
                    <p>Date: {new Date(weatherData.location.localtime).toDateString()}</p>
                  </div>
                </div>
                <div className="p-4 rounded-lg flex flex-col items-center text-xl">
                  <p>Wind Speed: {weatherData.current.wind_kph} km/h</p>
                  <p>Humidity: {weatherData.current.humidity}%</p>
                  <p>Pressure: {weatherData.current.pressure_mb} hPa</p>
                  <p>Visibility: {weatherData.current.vis_km} km</p>
                  <p>Feels like: {weatherData.current.feelslike_c}°C</p>
                  <p>Feels like: {weatherData.current.feelslike_c}°C</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    )
}

export default WeatherContent