import { useParams } from 'react-router-dom'
import Navbar from './Navbar'
import { useEffect, useState } from 'react'
import { arrayUnion, collection, doc, getDocs, updateDoc } from 'firebase/firestore'
import { db } from '../lib/firebase'

const BlogDetails = () => {
  const { id } = useParams()
  const [blogs, setBlogs] = useState([])
  const [comments, setComments] = useState([])

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

  useEffect(() => {
    const blog = blogs.find(blog => blog.id === id)
    if (blog) {
      setComments(blog.comments)
    }
  }, [blogs, id])

  const blog = blogs.find(blog => blog.id === parseInt(id))

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const { name, comment } = Object.fromEntries(formData)

    const newComment = {
        id: new Date().getTime(),
        name: name,
        text: comment
    }

    try {
        const postsDocRef = doc(db, 'posts', id)
        await updateDoc(postsDocRef, {
            comments: arrayUnion(newComment)
        })

        setComments(prevComments => [...prevComments, newComment])
        event.target.reset()
    } catch (error) {
        console.error(error)
    }
  }

  if (!blog) {
    return <p>Blog not found</p>
  }

  return (
    <div className="bg-background text-text min-h-screen w-full flex flex-col items-center p-4">
      <div className="xl:w-2/5 xsm:w-full">
        <Navbar navtext={'blog post'} />
        <div className="flex flex-col">
          <div className="py-8">
            <h1 className="font-bold md:text-5xl xsm:text-3xl">{blog.title}</h1>
          </div>
          <div className="py-4">
            <p className="font-medium tracking-wider xsm:textbase md:text-lg xl:text-xl">{blog.content}</p>
          </div>
          <div className="py-4">
            <h1 className="font-bold md:text-3xl xsm:text-xl mb-2">Leave a Comment</h1>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input className="p-2 bg-gray-700 text-white" type="text" placeholder="Your name" name='name'/>
              <textarea className="p-2 bg-gray-700 text-white" rows="4" placeholder="Your comment" name='comment'></textarea>
              <button type="submit" className="p-2 bg-blue-500 text-white transition-all duration-300 hover:bg-hover">Submit</button>
            </form>
          </div>
          <div className='py-4'>
            <h1 className="font-bold md:text-3xl xsm:text-xl mb-2">Comments</h1>
            {comments.map(comment => (
                <div key={comment.id} className="mb-4 p-4 bg-gray-800 rounded">
                    <p className="font-bold text-lg">{comment.name}</p>
                    <p className="text-gray-300">{comment.text}</p>
                </div>
            ))
            }
                
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogDetails