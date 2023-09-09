import React, {useState} from 'react'

const LocationSetter = () => {
    const divStyle = "grid col-span-1 my-2"
    const inputField = "border px-2 py-2"

	return (
		<div className="p-4 border-2 rounded-sm my-4">
            <h1 className='text-center '>Enter Task Location</h1>
            <form action="">
                <div className={divStyle}>
                    <label htmlFor="provinceg" >Province</label>
                    <input type="text" className={inputField}/>
                </div>
                <div className={divStyle}>
                    <label htmlFor="city" >City</label>
                    <input type="text" className={inputField}/>
                </div>
                <div className={divStyle}>
                    <label htmlFor="street" >Street</label>
                    <input type="text" className={inputField}/>
                </div>
                <div className={divStyle}>
                    <label htmlFor="unit" >Unit</label>
                    <input type="text" className={inputField}/>
                </div>
            </form>
		</div>
	);
}

export default LocationSetter