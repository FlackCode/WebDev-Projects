import { signInWithEmailAndPassword } from "firebase/auth"
import Navbar from "./Navbar"
import { auth } from "../lib/firebase"
import { useState } from "react"

const Login = () => {
  const [success, setSuccess] = useState('')


  const handleLogin = async e => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const { email, password } = Object.fromEntries(formData)
    try {
      await signInWithEmailAndPassword(auth, email, password)
      setSuccess('Successfully logged in, redirecting')
    } catch (error) {
      console.error(error)
    }

  }


  return (
    <div className="flex flex-col text-text h-screen bg-background">
      <Navbar/>
      <div className="flex flex-col items-center justify-center flex-grow px-4">
        <div className="bg-background p-8 rounded-md shadow-lg w-full max-w-md border-2">
          <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
          <form className="flex flex-col gap-4" autoComplete="off" onSubmit={handleLogin}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full rounded-md bg-gray-900 border border-gray-700 focus:border-blue-500 focus:ring-blue-500"
                autoComplete="off"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 p-2 w-full rounded-md bg-gray-900 border border-gray-700 focus:border-blue-500 focus:ring-blue-500"
                autoComplete="off"
              />
            </div>
            <button
              type="submit"
              className="mt-4 px-4 py-2 bg-primary rounded-full font-semibold transition-all duration-300 hover:scale-110 hover:bg-hover"
            >
              Login
            </button>
            <p className="text-center">{success}</p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login