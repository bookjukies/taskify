import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    const send = () =>{

    }

    return (
        <div className="md:grid md:grid-cols-1 md:place-content-center md:w-full">
            <div className='grid grid-cols-1 place-content-center  md:w-1/2 md:place-self-center'>
                <h1 className='text-xl text-center italic py-4 font-semibold'>Log In with Email</h1>
                <form className='place-self-center w-4/5'>
                    <input type='text' placeholder='E-mail or username' className='border w-full py-2 px-2 my-2' />
                    <input type='password' placeholder='Password' className='border w-full py-2 px-2 my-2'/>
                </form>
            
                    <button className='bg-sky-400 text-white text-md font-semibold px-10 py-2 rounded-xl w-4/5 my-6 place-self-center'>
                        <Link to={'/contractor'}> Log In with email </Link>
                    </button>
                
                <p className='text-center'>Don't have an account? <Link className='text-sky-400 text-lg font-semibold' to='/signup'>Sign Up</Link></p>
            </div>
        </div>
    )
}

export default Login