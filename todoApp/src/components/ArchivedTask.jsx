import { useState } from "react"

const ArchivedTask = ({ title, description, details }) => {

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
            </div>
          )}
        </div>
    )
}

export default ArchivedTask