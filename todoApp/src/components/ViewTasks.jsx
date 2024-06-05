import Task from "./Task"

import tasks from './client/tasks.json'


const ViewTasks = () => {
    const taskArray = tasks

      const handleCompleteTask = (taskId) => {
        console.log(`Task ${taskId} completed`);
      }
    
      return (
        <div className="h-full xl:px-48 md:px-24 xsm:px-6 py-12 flex flex-col gap-4">
          {taskArray.map(task => (
            <Task 
              key={task.id}
              title={task.title}
              description={task.description}
              details={task.details}
              onComplete={() => handleCompleteTask(task.id)}
            />
          ))}
        </div>
      )
}

export default ViewTasks