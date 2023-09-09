import {useState} from 'react'
import {Link} from 'react-router-dom'

const SignUp = () => {
  const [status, setStatus]= useState(null)
  const loger =(e)=>{
    setStatus(e.target.id)
  }

  return (
    <div className="md:w-full  md:grid md:grid-cols-1 md:mt-12 ">
    <div className='px-4 md:w-6/12 md:grid md:grid-cols-1 md:place-self-center'>
      <h1 className='text-xl text-center italic py-4 font-semibold'>Join as a client or Contractor</h1>
      <form>
        <div className="border py-8 my-4 md:px-8">
          <input type="radio" id="client" name="sign_up_as" value="client" onChange={loger}/>
          <label htmlFor="client">Client</label>
        </div>
        <div className="border py-8 md:px-8">
          <input type="radio" id="contractor" name="sign_up_as" value="contractor" onChange={loger}/>
          <label htmlFor="contractor">Contractor</label>
        </div>
      </form>

      {status? 
        <button className='bg-sky-400 text-white text-md font-semibold px-10 py-2 rounded-xl w-full my-6'>
            <Link to={`/${status}`} >Sign up as a <span className='capitalize'>{status}</span> </Link>
        </button>
       : <button disabled={true} className='bg-slate-300 text-slate-200 text-md font-semibold px-10 py-2 rounded-xl w-full my-6'>
            Create Account
          </button>}
      
      <p className='text-center'>Already have an account? <Link to='/login' className='text-sky-400 text-lg font-semibold'>Log In</Link></p>
    </div>
    </div>
  )
}

export default SignUp