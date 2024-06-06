import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Whoami from './components/Whoami'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Whoami/>
  }
])

function App() {
  return (
    <RouterProvider router={routes}/>
  )
}
export default App
