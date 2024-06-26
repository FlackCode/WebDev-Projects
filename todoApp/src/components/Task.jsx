import { useState } from "react"

const Task = ({ title, description, details, onComplete }) => {
    const [isOpened, setIsOpened] = useState(false)

    const handleTaskToggle = () => {
        setIsOpened(!isOpened)
    }

    return (
        <div className="rounded-md md:px-8 xsm:px-4 md:py-4 xsm:py-2 border-2 cursor-pointer" onClick={handleTaskToggle}>
          <h1 className="text-3xl font-bold select-none">{title}</h1>
          <p className="font-semibold">{description}</p>
          {isOpened && (
            <div className="mt-4 cursor-default">
              <p>{details}</p>
              <button 
                className="mt-2 px-4 py-2 bg-primary text-text rounded-md transition-all duration-300 hover:bg-hover hover:scale-105" onClick={() => onComplete()}>
                Complete Task
              </button>
            </div>
          )}
        </div>
    )
}

export default Task