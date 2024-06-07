import BlogComponent from "./BlogComponent"
import Navbar from "./Navbar"

const Blog = () => {
  const blogArray = [
    {
      id: 1,
      title: 'Blog Title',
      content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptatum doloremque corrupti, blanditiis reiciendis repellat nihil fuga, totam odio rem ducimus consectetur corporis adipisci repellendus error omnis, perferendis earum sapiente.'
    },
    {
      id: 2,
      title: 'Blog Title 2',
      content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptatum doloremque corrupti, blanditiis reiciendis repellat nihil fuga, totam odio rem ducimus consectetur corporis adipisci repellendus error omnis, perferendis earum sapiente.'
    }
  ]

  return (
    <div className="bg-black text-text min-h-screen w-full flex flex-col items-center p-4 ">
      <div className="xl:w-2/5 xsm:w-full">
        <Navbar navtext={'blog'}/>
        <div className="flex flex-col">
          <div className="py-8">
            <div className="flex flex-row items-center gap-4">
                <img src="/nerd.jpg" className="w-20 h-20 rounded-xl"/>
                <h1 className="font-bold md:text-5xl xsm:text-3xl xsm:leading-10 xl:leading-relaxed">My <span className="bg-highlight px-4 drop-shadow-glow">Blog</span> page.</h1>
            </div>
          </div>
          <div className="py-4">
            <p className="font-medium tracking-wider xsm:textbase md:text-lg xl:text-xl">Here I will be posting blogs on diverse topics that interest me.</p>
          </div>
          <div className="py-4 flex flex-col gap-4">
            {blogArray.map(blog => (
              <BlogComponent key={blog.id} blog={blog}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog