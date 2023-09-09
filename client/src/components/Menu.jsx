import React from 'react'
import { Link } from 'react-router-dom'


const Menu = (props) => {

  return (
    <div className='w-screen h-cover fixed top-14 z-30 bg-slate-900'>
      <nav className='grid grid-cols-1 text-white py-2  w-full'>
        <details className='px-6'>
          <summary>usefula</summary>       
          <Link className='block'>Find Contractor</Link>
          <Link className='block'>Find Gigs</Link>
        </details>

        <Link className='bg-white text-black rounded-md py-2 text-xl font-semibold w-4/5 place-self-center bottom-10 fixed text-center' to="/login" onClick={props.toggle}>Log In</Link>
      </nav>
    </div>
  )
}

export default Menu