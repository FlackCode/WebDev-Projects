import { useParams } from 'react-router-dom'
import Navbar from './Navbar'
import { useState } from 'react'

const BlogDetails = () => {
  const { id } = useParams()
  const blogArray = [
    {
        id: 1,
        title: 'Blog test 1',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptatum doloremque corrupti, blanditiis reiciendis repellat nihil fuga, totam odio rem ducimus consectetur corporis adipisci repellendus error omnis, perferendis earum sapiente.',
        comments: [
            {
                id: 1,
                name: 'test',
                text: 'this is a test comment!'
            },
            {
                id: 2,
                name: 'test',
                text: 'this is a test comment!'
            },
            {
                id: 3,
                name: 'test',
                text: 'this is a test comment!'
            }
        ]
    },
    {
        id: 2,
        title: 'Blog test 2',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptatum doloremque corrupti, blanditiis reiciendis repellat nihil fuga, totam odio rem ducimus consectetur corporis adipisci repellendus error omnis, perferendis earum sapiente.',
        comments: [
            {
                id: 1,
                name: 'test',
                text: 'this is a test comment!'
            }
        ]
    },
  ]

  const blog = blogArray.find(blog => blog.id === parseInt(id))

  const [comments, setComments] = useState(blog ? blog.comments : [])

  if (!blog) {
    return <p>Blog not found</p>
  }

  return (
    <div className="bg-black text-text min-h-screen w-full flex flex-col items-center p-4">
      <div className="xl:w-2/5 xsm:w-full">
        <Navbar navtext={'blog details'} />
        <div className="flex flex-col">
          <div className="py-8">
            <h1 className="font-bold md:text-5xl xsm:text-3xl">{blog.title}</h1>
          </div>
          <div className="py-4">
            <p className="font-medium tracking-wider xsm:textbase md:text-lg xl:text-xl">{blog.content}</p>
          </div>
          <div className="py-4">
            <h1 className="font-bold md:text-3xl xsm:text-xl mb-2">Leave a Comment</h1>
            <form className="flex flex-col gap-4">
            <input className="p-2 bg-gray-700 text-white" type="text" placeholder="Your name" name='name'/>
              <textarea className="p-2 bg-gray-700 text-white" rows="4" placeholder="Your comment" name='comment'></textarea>
              <button type="submit" className="p-2 bg-blue-500 text-white">Submit</button>
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