import Landing from "./components/Landing"
import Login from './components/Login'
import Register from './components/Register'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainPage from "./components/MainPage"
import CreateTasks from "./components/CreateTasks"
import { useUserStore } from "./lib/userStore"
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./lib/firebase"
import ArchivedTasks from "./components/ArchivedTasks"

let isLoggedIn = false




const App = () => {
  const { currentUser, fetchUserInfo } = useUserStore()

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, user => {
      fetchUserInfo(user?.uid)
    })

    return () => {
      unSub()
    }
  }, [fetchUserInfo])

  const routes = createBrowserRouter([
    {
      path: '/',
      element: currentUser ? <MainPage/> : <Landing/>
    },
    {
      path: '/register',
      element: currentUser ? <MainPage/> : <Register/>
    },
    {
      path: '/login',
      element: currentUser ? <MainPage/> : <Login/>
    },
    {
      path: '/tasks',
      element: currentUser ? <MainPage/> : <Landing/>
    },
    {
      path: '/create',
      element: currentUser ? <CreateTasks/> : <Landing/>
    },
    {
      path: '/archived',
      element: currentUser ? <ArchivedTasks/> : <Landing/>
    },
  ])
  
  return (
    <RouterProvider router={routes}/>
  )
}

export default App