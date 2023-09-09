import React, {useState} from 'react'
import LocationSetter from './LocationSetter'
import {Link} from 'react-router-dom'

const CreateTask = () => {
    const [isOnline, setIsOnline] = useState(true)
    const [location, setLocation] = useState(null)

  

    const toggleSite = (e) =>{
        let id = e.target.id
        if(id === 'online'){
            setIsOnline(true)
        }else{
            setLocation(null)
            setIsOnline(false)
        }
    }

    const loger = (e)=>{
        if(e.target.value === 'add_location'){
            setLocation("add location")
        }else{
            setLocation("profile")
        }
    }

    const handleTask = () =>{

    }

    const active = "place-self-center w-full  font-bold border-2 border-white border-b-black "
    const deactive = "place-self-center  text-slate-500 w-full"

    //raiod buttons states
    const sharedStyles = "border-2 py-3 px-2 my-2 rounded" 
    const raidoActive = "border-blue-500"
    return (
        <div className='grid grid-cols-1 px-5 relative w-full md:w-8/12'>
            <div className="grid grid-cols-2 w-full py-4">
                <button className={isOnline? active : deactive } onClick={toggleSite} id='online'>Online</button>
                <button className={!isOnline? active : deactive} onClick={toggleSite} id='onsite'>OnSite</button>
            </div>
            <div className="">
                {isOnline? 
                <div>
                    <p>
                        Post a task that will be accesseble online to talented contractors all over the world.
                    </p>
                </div> : 
                <div>
                    <p className='text-justify'>Post a task that will be performed on a specific loaction by contractors.</p>
                    <form >
                        <h1 className='text-center py-2'>Choose Location</h1>
                        <div className={`${sharedStyles} ${location ==="profile"? raidoActive : ""}` }>
                            <input type="radio" id="profile_location" name="location_type" value="profile_location" onChange={loger}/>
                            <label htmlFor="profile_location">Use Profile Location</label>
                         </div>
                        <div className={`${sharedStyles} ${location ==="add location"? raidoActive : ""}`}>
                            <input type="radio" id="add_location" name="location_type" value="add_location" onChange={loger} />
                            <label htmlFor="add_location">Add Own Location</label>
                        </div>
                    </form>
                </div>
                }

               {location === 'add location' && !isOnline? <LocationSetter />  : null} 
            </div>
                <button className='bg-black text-white w-4/5 rounded-md py-2  place-self-center' onClick={handleTask}>
                    {isOnline? <span>create task</span> 
                        : location === 'profile'? <span>create task </span>
                            : <Link to="/client/create_task">  <span>set location</span> </Link>}
                </button>
        </div>
    )
}

export default CreateTask