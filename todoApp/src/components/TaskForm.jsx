import { arrayUnion, doc, updateDoc } from "firebase/firestore"
import { useUserStore } from "../lib/userStore"
import { db } from "../lib/firebase"
import { useState } from "react"


const TaskForm = () => {
  const [success, setSuccess] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [details, setDetails] = useState('')
  const { currentUser } = useUserStore()

  const handleSubmit = async (event) => {
      event.preventDefault()
      const formData = new FormData(event.target)
      const { title, description, details } = Object.fromEntries(formData)
      const timestamp = new Date().getTime()
      const newTask = {
        id: timestamp,
        title,
        description,
        details
      }

      try {
        const userDocRef = doc(db, 'users', currentUser.id)
        await updateDoc(userDocRef, {
          activeTasks: arrayUnion(newTask)
        })

        setTitle('')
        setDescription('')
        setDetails('')
        setSuccess('New task created successfully.')
        setTimeout(() => {
          setSuccess('')
        }, 3000)
      } catch (error) {
        console.error(error)
        setSuccess('Error creating task!')
      }
  }

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value)
  }
  const handleDetailsChange = (e) => {
    setDetails(e.target.value)   
  }

  return (
    <div className="flex flex-grow">
      <div className="flex flex-col items-center justify-center flex-grow bg-background px-4">
        <div className="bg-background p-8 rounded-md shadow-lg w-full max-w-md border-2 mt-6">
          <h2 className="text-3xl font-bold mb-6 text-center">Create Task</h2>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit} autoComplete="off">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-300">
                Title
              </label>
              <input
                type="text"
                id="title"
                name='title'
                className="mt-1 p-2 w-full rounded-md bg-gray-900 border border-gray-700 focus:border-blue-500 focus:ring-blue-500"
                autoComplete="off"
                value={title}
                onChange={handleTitleChange}
              />
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-300">
                Short Description
              </label>
              <input
                type="text"
                id="description"
                name='description'
                className="mt-1 p-2 w-full rounded-md bg-gray-900 border border-gray-700 focus:border-blue-500 focus:ring-blue-500"
                autoComplete="off"
                value={description}
                onChange={handleDescriptionChange}
              />
            </div>
            <div>
              <label htmlFor="details" className="block text-sm font-medium text-gray-300">
                Details
              </label>
              <textarea
                id="details"
                name='details'
                className="mt-1 p-2 w-full rounded-md bg-gray-900 border border-gray-700 focus:border-blue-500 focus:ring-blue-500"
                rows="4"
                autoComplete="off"
                value={details}
                onChange={handleDetailsChange}
              />
            </div>
            <button
              type="submit"
              className="mt-4 px-4 py-2 bg-primary rounded-full font-semibold transition-all duration-300 hover:scale-110 hover:bg-hover"
            >
              Create Task
            </button>
            <p className="text-center">{success}</p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default TaskForm