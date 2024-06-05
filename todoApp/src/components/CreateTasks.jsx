import TaskForm from './TaskForm';
import ToDoNav from './ToDoNav'

const CreateTasks = () => {
  return (
    <div className="flex flex-col h-screen bg-background text-text">
      <ToDoNav />
      <TaskForm />
    </div>
  )
}

export default CreateTasks
