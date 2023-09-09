import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import TechnicalQuesTions from './TechnicalQuesTions'

function CreateTaskRequirements() {
    const [questions, setQuestions] = useState([])
    
    const handleQuestions = () =>{
        const id = questions.length
        setQuestions(prev=>{
            return [...prev, {id}]
        })

    }

    const content = questions.map(entry => <TechnicalQuesTions key={entry.id} id={entry.id}/>)
  return (
    <div>
        <div>
            <h1>Ask Technical question</h1>
            <button onClick={handleQuestions}>add question</button>
            <form action="">
               {questions.length >= 0? content : null }
            </form>
        </div>

        <button className='bg-sky-400 text-white text-md font-semibold px-10 py-2 rounded-md w-full my-4'> 
            <Link to="/client/create_task_review">Review And Post</Link>
        </button>
    </div>
  )
}

export default CreateTaskRequirements