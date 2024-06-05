import { useEffect, useState } from "react"
import { useUserStore } from "../lib/userStore"
import Task from "./Task"
import { arrayRemove, arrayUnion, doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore"
import { db } from "../lib/firebase"

const ViewTasks = () => {
  const { currentUser } = useUserStore()
  const [userTasks, setUserTasks] = useState([])

  useEffect(() => {
    if (currentUser && currentUser.id) {
      const userDocRef = doc(db, 'users', currentUser.id)

      const unsubscribe = onSnapshot(userDocRef, (doc) => {
        if (doc.exists()) {
          const userData = doc.data()
          const tasks = userData.activeTasks || []

          const sortedTasks = [...tasks].sort((a, b) => b.id - a.id)
          setUserTasks(sortedTasks)
        }
      })

      
      
      return () => unsubscribe()
    }
  }, [currentUser])




  const handleCompleteTask = async (taskId) => {
    try {
      const userDocRef = doc(db, 'users', currentUser.id)
      const userDocSnapshot = await getDoc(userDocRef)
  
      if (userDocSnapshot.exists()) {
        const userData = userDocSnapshot.data()
        const activeTasks = userData.activeTasks || []
        const completedTask = activeTasks.find(task => task.id === taskId)
  
        if (completedTask) {
          await updateDoc(userDocRef, {
            activeTasks: arrayRemove(completedTask),
            archivedTasks: arrayUnion(completedTask)
          })
        }
      }
    } catch (error) {
      console.log(error)
    }
  }  
  
  return (
    <div className="h-full xl:px-48 md:px-12 xsm:px-2 py-12 flex flex-col gap-4">
      {userTasks.map(task => (
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