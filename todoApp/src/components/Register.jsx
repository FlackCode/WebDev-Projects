import { createUserWithEmailAndPassword } from "firebase/auth"
import Navbar from "./Navbar"
import { doc, setDoc } from "firebase/firestore"
import { auth, db } from "../lib/firebase"
import { useState } from "react"

const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [success, setSuccess] = useState('')

  const handleRegister = async e => {
    e.preventDefault()
    console.log('test')
    const formData = new FormData(e.target)
    const { username, email, password } = Object.fromEntries(formData)

    try {
      const response = await createUserWithEmailAndPassword(auth, email, password)

      await setDoc(doc(db, 'users', response.user.uid), {
        username,
        email,
        id: response.user.uid,
        activeTasks: [],
        archivedTasks: [],
      })

      console.log('Test 2')
      setUsername('')
      setEmail('')
      setPassword('')
      setSuccess('New account created successfully!')
    } catch (error) {
      console.error()
    }
  }
  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }

  const handleEmailChange = e => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  return (
    <div className="flex flex-col text-white h-screen bg-background">
      <Navbar/>
      <div className="flex flex-col items-center justify-center flex-grow px-4">
        <div className="bg-background p-8 rounded-md shadow-lg w-full max-w-md border-2">
          <h2 className="text-3xl font-bold mb-6 text-center">Register</h2>
          <form className="flex flex-col gap-4" autoComplete="off" onSubmit={handleRegister}>
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-300">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="mt-1 p-2 w-full rounded-md bg-gray-900 border border-gray-700 focus:border-blue-500 focus:ring-blue-500"
                autoComplete="off"
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
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
                value={email}
                onChange={handleEmailChange}
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
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <button
              className="mt-4 px-4 py-2 bg-primary rounded-full font-semibold transition-all duration-300 hover:scale-110 hover:bg-hover"
            >
              Register
            </button>
            <p className="text-center">{success}</p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register