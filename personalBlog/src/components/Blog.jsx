import Navbar from "./Navbar"

const Blog = () => {
  return (
    <div className="bg-black text-text h-screen w-full flex flex-col items-center p-4 ">
      <div className="xl:w-2/5 xsm:w-full">
        <Navbar navtext={'blog'}/>
        
      </div>
    </div>
  )
}

export default Blog