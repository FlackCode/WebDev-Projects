import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Landing from './components/landing/Landing';
import Shop from './components/shop/Shop';
import { FilterProvider } from './components/context/FilterContext';

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
    <FilterProvider>
      <RouterProvider router={routes}/>
    </FilterProvider>
  )
}
export default App;
