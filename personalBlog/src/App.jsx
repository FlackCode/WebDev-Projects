import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Whoami from './components/Whoami'
import Projects from './components/Projects'
import Blog from './components/Blog'
import BlogDetails from './components/BlogDetails'
import Admin from './components/Admin'

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
  },
  {
    path: '/blog/:id',
    element: <BlogDetails/>
  },
  {
    path: '/admin',
    element: <Admin/>
  }
])

function App() {
  return (
    <RouterProvider router={routes}/>
  )
}
export default App
