import React from 'react'

const TaskItem = () => {
  return (
    <div className="py-2 border border-white border-b-slate-400">
        <h1 className='capitalize text-lg font-bold italic'>create a web application</h1>
        <span className='text-sm italic'> Posted 33 min ago</span>
        <div className="grid grid-cols-2 my-2">
            <div className="leading-none">
              <span className='block text-lg font-semibold '>$5/hr</span>
              <span className='text-sm italic'>Hourly rate</span>
            </div>
            
            <div className="flex-col leading-none">
              <span className='block text-lg font-semibold '>2 days</span>
              <span className='text-sm italic'>Duration</span>
            </div>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sit quasi nostrum libero saepe.</p>
        <div className="mt-2">
          <span className='bg-slate-300 px-2 rounded mx-2'> Website </span>
          <span className='bg-slate-300 px-2 rounded mx-2'> Node </span>
          <span className='bg-slate-300 px-2 rounded mx-2'> React </span>
          <span className='bg-slate-300 px-2 rounded mx-2'> APP </span>
        </div>
    </div>
  )
}

export default TaskItem