import { Link } from 'react-router-dom'

const Navbar = ({ navtext }) => {
  return (
    <div className='flex flex-row justify-between text-gray-300 py-4 font-medium'>
      <div className='flex gap-2'>
        <h1>flack...</h1>
        <p>{navtext}</p>
      </div>
      <div className='flex gap-2'>
        <Link className='transition-all duration-300 hover:text-highlight hover:drop-shadow-glow'>whoami</Link>
        <Link className='transition-all duration-300 hover:text-highlight hover:drop-shadow-glow'>projects</Link>
        <Link className='transition-all duration-300 hover:text-highlight hover:drop-shadow-glow'>blog</Link>
      </div>
    </div>
  )
}

export default Navbar