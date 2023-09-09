import React from 'react'

const DirectChats = () => {
  return (
    <div className='grid grid-cols-10 mt-2 px-4'>
        <div className="bg-slate-400 w-16 h-16 rounded-full col-start-1 col-end-2 "></div>
        <div className="w-full col-start-3 col-end-10 bg-yellow-300">
            <h3>Name of person</h3>
            <h4>Gig chat is related to</h4>
            <p>Previous chat</p>
        </div>
    </div>
  )
}

export default DirectChats