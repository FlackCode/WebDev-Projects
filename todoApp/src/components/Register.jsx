import Navbar from "./Navbar"

const Register = () => {
  return (
    <div className="flex flex-col text-white h-screen bg-background">
      <Navbar/>
      <div className="flex flex-col items-center justify-center flex-grow px-4">
        <div className="bg-background p-8 rounded-md shadow-lg w-full max-w-md border-2">
          <h2 className="text-3xl font-bold mb-6 text-center">Register</h2>
          <form className="flex flex-col gap-4" autoComplete="off">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-300">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="mt-1 p-2 w-full rounded-md bg-gray-900 border border-gray-700 focus:border-blue-500 focus:ring-blue-500"
                autoComplete="off"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
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
                className="mt-1 p-2 w-full rounded-md bg-gray-900 border border-gray-700 focus:border-blue-500 focus:ring-blue-500"
                autoComplete="off"
              />
            </div>
            <button
              type="submit"
              className="mt-4 px-4 py-2 bg-primary rounded-full font-semibold transition-all duration-300 hover:scale-110 hover:bg-hover"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register