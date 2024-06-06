import { Link } from 'react-router-dom'
import { BsArrowRight, BsJournal } from 'react-icons/bs'
import { auth } from '../lib/firebase'

const ToDoNav = () => {
  return (
    <div className="text-text">
      <div className="xl:px-48 md:px-12 xsm:px-1 py-6 flex items-center justify-between bg-background">
        <Link to={'/'} className='items-center gap-2 cursor-pointer xsm:hidden md:flex'>
            <BsJournal className='md:text-xl'/>
            <h1 className="font-bold md:text-3xl">todoApp</h1>
        </Link>
        <div className='xsm:w-full md:w-fit flex flex-row xsm:justify-evenly md:justify-normal md:gap-4 xsm:gap-2 items-center xsm:px-4 md:px-0'>
          <Link to={'/archived'} className='md:text-lg xsm:text-sm font-semibold cursor-pointer transition-all duration-300 hover:scale-110'>
            Archived Tasks
          </Link>
          <Link to={'/tasks'} className='md:text-lg xsm:text-sm font-semibold cursor-pointer transition-all duration-300 hover:scale-110'>
            All tasks
          </Link>
          <Link to={'/create'} className="md:px-6 xsm:px-6 md:py-2 xsm:py-1 bg-primary md:text-base xsm:text-sm rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:bg-hover">
            New
          </Link>
          <button className='flex items-center gap-2
          md:px-6 xsm:px-4 md:py-3 xsm:py-1 bg-red-600 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:bg-red-700'
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