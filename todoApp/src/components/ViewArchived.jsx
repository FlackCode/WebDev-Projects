import { useEffect, useState } from "react"
import { useUserStore } from "../lib/userStore"
import ArchivedTask from "./ArchivedTask"
import { doc, onSnapshot } from "firebase/firestore"
import { db } from "../lib/firebase"

const ViewArchived = () => {
    const { currentUser } = useUserStore()
    const [archivedTasks, setArchivedTasks] = useState([])

    useEffect(() => {
        if (currentUser && currentUser.id) {
          const userDocRef = doc(db, 'users', currentUser.id)
    
          const unsubscribe = onSnapshot(userDocRef, (doc) => {
            if (doc.exists()) {
              const userData = doc.data()
              const tasks = userData.archivedTasks || []
    
              setArchivedTasks(tasks)
            }
          })
    
          
          
          return () => unsubscribe()
        }
      }, [currentUser])


    return (
      <div className="h-full xl:px-48 md:px-12 xsm:px-2 py-12 flex flex-col gap-4">
        {archivedTasks.map(task => (
          <ArchivedTask 
            key={task.id}
            title={task.title}
            description={task.description}
            details={task.details}
          />
        ))}
      </div>
    )
}

export default ViewArchived