import { useEffect, useState } from "react"
import BlogComponent from "./BlogComponent"
import Navbar from "./Navbar"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../lib/firebase"

const Blog = () => {
  const [blogs, setBlogs] = useState([])
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'posts'))
        const blogsArray = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        setBlogs(blogsArray)
      } catch (error) {
        console.error(error)
      }
    }

    fetchBlogs()
  }, [])

  return (
    <div className="bg-background text-text min-h-screen w-full flex flex-col items-center p-4">
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
            {blogs.map(blog => (
              <BlogComponent key={blog.id} blog={blog}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog