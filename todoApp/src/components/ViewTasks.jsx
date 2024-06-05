import Task from "./Task";

const ViewTasks = () => {
    const tasks = [
        { 
          id: 1, 
          title: 'Finish this project', 
          description: 'Need to finish this project ASAP', 
          details: 'Create the create tasks page, handle creating tasks, hook-up a database, registration and ship it to github.' 
        },
        { 
          id: 2, 
          title: 'Go to the gym', 
          description: 'Hit the gym and do shoulders & forearms', 
          details: 'Detailed information about task 2' 
        },
      ];

      const handleCompleteTask = (taskId) => {
        console.log(`Task ${taskId} completed`);
      };
    
      return (
        <div className="h-full xl:px-48 md:px-24 xsm:px-6 py-12 flex flex-col gap-4">
          {tasks.map(task => (
            <Task 
              key={task.id}
              title={task.title}
              description={task.description}
              details={task.details}
              onComplete={() => handleCompleteTask(task.id)}
            />
          ))}
        </div>
      );
}

export default ViewTasks