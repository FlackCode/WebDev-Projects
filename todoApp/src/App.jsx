import Landing from "./components/Landing"
import Login from './components/Login'
import Register from './components/Register'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const routes = createBrowserRouter([
  {
    path: '/',
    element: <Landing/>
  },
  {
    path: '/register',
    element: <Register/>
  },
  {
    path: '/login',
    element: <Login/>
  },
])

const App = () => {
  return (
    <RouterProvider router={routes}/>
  )
}

export default App