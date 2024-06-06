import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Whoami from './components/Whoami'
import Projects from './components/Projects'
import Blog from './components/Blog'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Whoami/>
  },
  {
    path: '/projects',
    element: <Projects/>
  },
  {
    path: '/blog',
    element: <Blog/>
  }
])

function App() {
  return (
    <RouterProvider router={routes}/>
  )
}
export default App
