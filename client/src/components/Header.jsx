import React, { useState } from 'react'
import {Link, useLocation}from 'react-router-dom' 
import {Burger, SearchIcon, Cross, Profile, ChatIcon} from './Icons'


const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const where = useLocation()

  const loggedIn = where.pathname.startsWith('/client') || where.pathname.startsWith('/contractor')

  const toggle = () =>{
    setIsOpen(!isOpen)
    props.toggle()
  }
  const goHome = ()=>{
    if(isOpen){
      toggle()
    }
  }


  return (
    <header className='flex w-full justify-between px-4 py-4 sticky top-0 bg-black z-50'>
        <nav className="flex w-1/2">
          <button className='mr-2' onClick={toggle}>{isOpen? <Cross /> : <Burger />}</button>
          <Link className='text-white text-xl italic font-semibold' to="/" onClick={goHome}>Taskify</Link>
        </nav>
        {isOpen? null : <nav className='flex w-1/2 justify-end'>
            {loggedIn? <Link to={'/contractor/chat'}><ChatIcon /> </Link>: null}
            {loggedIn? <Link className='mr-2'><Profile/></Link> : <Link className= 'bg-white px-5 rounded-xl mr-2' to="/signup">Sign Up</Link>}
            <SearchIcon className='text-white'/>
            
        </nav>}
    </header>
  )
}

export default Header