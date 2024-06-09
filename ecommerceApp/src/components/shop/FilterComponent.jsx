import { useState } from "react"
import { BsPlus, BsDash } from 'react-icons/bs'

const FilterComponent = ({ title, options }) => {
  const [isOpened, setIsOpened] = useState(false)

  const handleOpen = () => {
    setIsOpened(!isOpened);
  }

  return (
    <div className="py-4 w-full font-semibold text-left border-b-1 select-none">
      <div className="cursor-pointer" onClick={handleOpen}>
        <p className="flex justify-between w-full items-center">{title} {isOpened ? <BsDash className='text-xl'/> : <BsPlus className='text-xl'/>}</p>
      </div>
      {isOpened && (
        <div className="mt-4 flex flex-col gap-2">
          {options.map((option, index) => (
            <label key={index} className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span>{option}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  )
}

export default FilterComponent
