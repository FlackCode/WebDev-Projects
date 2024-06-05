import ToDoNav from "./ToDoNav"
import ViewArchived from "./ViewArchived"

const ArchivedTasks = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-text">
      <ToDoNav/>
      <ViewArchived/>
    </div>
  )
}

export default ArchivedTasks