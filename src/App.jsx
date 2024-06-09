import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Landing from './components/landing/Landing';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Landing/>
  }
])

function App() {
  return (
    <RouterProvider router={routes}/>
  )
}
export default App;
