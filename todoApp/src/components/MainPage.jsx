import ToDoNav from "./ToDoNav"
import ViewTasks from "./ViewTasks"

const MainPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-text">
      <ToDoNav/>
      <ViewTasks/>
    </div>
  )
}

export default MainPage