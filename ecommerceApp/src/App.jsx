import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Landing from './components/landing/Landing';
import Shop from './components/shop/Shop';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Landing/>
  },
  {
    path: '/shop',
    element: <Shop/>
  }
])

function App() {
  return (
    <RouterProvider router={routes}/>
  )
}
export default App;
