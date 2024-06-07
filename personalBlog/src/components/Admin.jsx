import Navbar from "./Navbar"

const Admin = () => {
  return (
    <div className="bg-background text-text min-h-screen w-full flex flex-col items-center p-4">
      <div className="xl:w-2/5 xsm:w-full">
        <Navbar navtext={'secret'}/>
        <div className="flex flex-col">
          <div className="py-8">
            <h1 className="font-bold md:text-5xl xsm:text-3xl xsm:leading-10 xl:leading-relaxed">Admin Blog Creator</h1>
          </div>
          <div className="py-4">
            <form className="flex flex-col gap-4">
              <input
                className="p-2 bg-gray-700 text-white"
                type="text"
                placeholder="Blog Title"
                name="title"
              />
              <textarea
                className="p-2 bg-gray-700 text-white"
                rows="10"
                placeholder="Blog Content"
                name="content"
              ></textarea>
              <input
                className="p-2 bg-gray-700 text-white"
                type="password"
                placeholder="Admin Key"
                name="key"
              />
              <button type="submit" className="p-2 bg-blue-500 text-white">Create Blog Post</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin