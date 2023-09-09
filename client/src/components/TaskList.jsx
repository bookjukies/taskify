import React, {useState} from 'react'
import TaskItem from './TaskItem'

const TaskList = () => {
    const [isOnline, setIsOnline] = useState(true)
    const toggleSite = () =>{
        setIsOnline(!isOnline)
    }
    const active = "place-self-center w-full  font-bold border-2 border-white border-b-black "
    const deactive = "place-self-center  text-slate-500 w-full"
  return (
    <div className='md:grid md:grid-cols-1 md:w-full'>

        <div className='grid grid-cols-1 px-5 relative w-full md:w-8/12 md:place-self-center'>
            <div className="grid grid-cols-2 w-full py-4 sticky top-14 bg-white z-20">
                <button className={isOnline? active : deactive } onClick={toggleSite}>Online</button>
                <button className={!isOnline? active : deactive} onClick={toggleSite}>OnSite</button>
            </div>
           
            <div>
                <TaskItem />
                <TaskItem />
                <TaskItem />
                <TaskItem />
            </div>
        </div>
    </div>
  )
}

export default TaskList