import { NavLink, Link } from 'react-router-dom'

const Navbar = ({ navtext }) => {
  return (
    <div className='flex flex-row justify-between text-gray-300 py-4 font-medium'>
      <div className='flex gap-2'>
        <Link className='select-none cursor-default' to={'/admin'}>flack...</Link>
        <p>{navtext}</p>
      </div>
      <div className='flex gap-2'>
        <NavLink to={'/'} 
        className={({ isActive }) => isActive ? 'text-highlight transition-all duration-300 hover:drop-shadow-glow' : 
        'transition-all duration-300 hover:text-highlight hover:drop-shadow-glow'}>whoami</NavLink>
        <NavLink to={'/projects'}
        className={({ isActive }) => isActive ? 'text-highlight transition-all duration-300 hover:drop-shadow-glow' : 
        'transition-all duration-300 hover:text-highlight hover:drop-shadow-glow'}>projects</NavLink>
        <NavLink to={'/blog'}
        className={({ isActive }) => isActive ? 'text-highlight transition-all duration-300 hover:drop-shadow-glow' : 
        'transition-all duration-300 hover:text-highlight hover:drop-shadow-glow'}>blog</NavLink>
      </div>
    </div>
  )
}

export default Navbar