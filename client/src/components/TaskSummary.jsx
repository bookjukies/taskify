import React from 'react'
import { Link } from 'react-router-dom'

function TaskSummary() {
  return (
    <div>TaskSummary
        <button className='bg-sky-400 text-white text-md font-semibold px-10 py-2 rounded-md w-full my-4'> 
        <Link to="/client/create_task_scope">Post</Link></button>
    </div>
  )
}

export default TaskSummary