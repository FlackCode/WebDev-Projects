import { useNavigate } from "react-router-dom"

const BlogComponent = ({blog}) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/blog/${blog.id}`)
    }
  
    return (
      <div className="text-text border-2 p-2 cursor-pointer rounded-md" onClick={handleClick}>
        <div>
            <h1 className="md:text-4xl xsm:text-3xl font-bold tracking-wider">{blog.title}</h1>
            <p>Click to open!</p>
        </div>
      </div>
    )
}

export default BlogComponent