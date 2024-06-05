import { Link } from 'react-router-dom'
import { BsJournal } from 'react-icons/bs'

const ToDoNav = () => {
  return (
    <div className="text-text">
      <div className="xl:px-48 md:px-24 xsm:px-4 py-6 flex items-center justify-between bg-background">
        <Link to={'/'} className='flex items-center gap-2 cursor-pointer'>
            <BsJournal className='md:text-xl'/>
            <h1 className="font-bold md:text-3xl xsm:text-xl">todoApp</h1>
        </Link>
        <div className='flex flex-row gap-4 items-center'>
          <Link to={'/tasks'} className='text-lg font-semibold cursor-pointer transition-all duration-300 hover:scale-110'>
            View tasks
          </Link>
          <Link to={'/create'} className="md:px-6 xsm:px-4 md:py-2 xsm:py-1 bg-primary rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:bg-hover">
            New Task
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ToDoNav