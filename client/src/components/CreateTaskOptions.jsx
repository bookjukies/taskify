import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CreateTaskOptions = () => {
    const divStyle = "grid col-span-1 my-4"



  return (
    <div className='px-4 w-screen'>
        

        <div className="">
            <form action="" className=''>
                <div className={`${divStyle } `}>
                    <label htmlFor="title"> Task title </label>
                    <input type="text"className='border-2 py-2 rounded' />
                </div>
                <div className={`${divStyle } w-full`}>
                    <label> Task discription</label>
                    <textarea className='p-2 h-28 focus:h-52 border-2 text-sm rounded' 
                    placeholder='write a detailed discription of what you want the contractor to do for you....'>
                    </textarea>
                </div>
                <div className={`${divStyle }`}>
                    <label>Attectments</label>
                    <input type="file" 
                    className='file:border-none file:bg-slate-200 py-2 file:rounded-xl  file:text-sm file:font-semibold file:px-4 file:py-2'/>
                </div>
            </form>
        </div>
        <button className='bg-sky-400 text-white text-md font-semibold px-10 py-2 rounded-md w-full my-4'> 
            <Link to="/client/create_task_scope">Continue</Link>
        </button>
    </div>
  )
}

export default CreateTaskOptions