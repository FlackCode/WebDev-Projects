import { Link } from 'react-router-dom'
import { BsArrowRight, BsJournal } from 'react-icons/bs'
import { auth } from '../lib/firebase'

const ToDoNav = () => {
  return (
    <div className="text-text">
      <div className="xl:px-48 md:px-12 xsm:px-1 py-6 flex items-center justify-between bg-background">
        <Link to={'/'} className='flex items-center gap-2 cursor-pointer'>
            <BsJournal className='md:text-xl'/>
            <h1 className="font-bold md:text-3xl xsm:text-base">todoApp</h1>
        </Link>
        <div className='flex flex-row md:gap-4 xsm:gap-2 items-center'>
          <Link to={'/archived'} className='md:text-lg xsm:text-sm font-semibold cursor-pointer transition-all duration-300 hover:scale-110'>
            Archived Tasks
          </Link>
          <Link to={'/tasks'} className='md:text-lg xsm:text-sm font-semibold cursor-pointer transition-all duration-300 hover:scale-110'>
            View tasks
          </Link>
          <Link to={'/create'} className="md:px-6 xsm:px-4 md:py-2 xsm:py-1 bg-primary md:text-base xsm:text-sm rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:bg-hover">
            New
          </Link>
          <button className='flex items-center gap-2
          md:px-6 xsm:px-2 md:py-3 xsm:py-1 bg-red-600 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:bg-red-700'
          onClick={() => auth.signOut()}
          >
            <BsArrowRight />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ToDoNav