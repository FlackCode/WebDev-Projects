import Landing from "./components/Landing"
import Login from './components/Login'
import Register from './components/Register'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainPage from "./components/MainPage"
import CreateTasks from "./components/CreateTasks"

let isLoggedIn = false

const routes = createBrowserRouter([
  {
    path: '/',
    element: isLoggedIn ? <Landing/> : <MainPage/>
  },
  {
    path: '/register',
    element: <Register/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/tasks',
    element: <MainPage/>
  },
  {
    path: '/create',
    element: <CreateTasks/>
  }
])

const App = () => {
  return (
    <RouterProvider router={routes}/>
  )
}

export default App