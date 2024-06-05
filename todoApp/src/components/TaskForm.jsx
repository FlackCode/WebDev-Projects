const TaskForm = () => {
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("Task created")
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
                className="mt-1 p-2 w-full rounded-md bg-gray-900 border border-gray-700 focus:border-blue-500 focus:ring-blue-500"
                autoComplete="off"
              />
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-300">
                Short Description
              </label>
              <input
                type="text"
                id="description"
                className="mt-1 p-2 w-full rounded-md bg-gray-900 border border-gray-700 focus:border-blue-500 focus:ring-blue-500"
                autoComplete="off"
              />
            </div>
            <div>
              <label htmlFor="details" className="block text-sm font-medium text-gray-300">
                Details
              </label>
              <textarea
                id="details"
                className="mt-1 p-2 w-full rounded-md bg-gray-900 border border-gray-700 focus:border-blue-500 focus:ring-blue-500"
                rows="4"
                autoComplete="off"
              />
            </div>
            <button
              type="submit"
              className="mt-4 px-4 py-2 bg-primary rounded-full font-semibold transition-all duration-300 hover:scale-110 hover:bg-hover"
            >
              Create Task
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default TaskForm