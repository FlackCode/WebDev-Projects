import Landing from "./components/Landing"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import WeatherPage from "./components/WeatherPage"

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Landing/>
  },
  {
    path: '/weather',
    element: <WeatherPage/>
  },
])

const App = () => {
  return (
    <RouterProvider router={routes}/>
  )
}

export default App