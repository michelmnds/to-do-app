import './style.css'
import { SideBar } from '../SideBar'
import { Header } from '../Header'
import { Footer } from '../Footer'
import { useParams } from 'react-router-dom'
import data from "../../assets/data.json"

export const TaskPage = () => {
    const {taskId} = useParams()
    const currentTask= data.find((task)=> {
        return taskId == task.id
    })
    return (
     <>
      <Header />
      <main className='taskPageContainer'>
      <h1>{currentTask.task}</h1>
      <h4>{currentTask.completed}</h4>
      </main>
      <SideBar />
      <Footer />
     </>
    );
  };