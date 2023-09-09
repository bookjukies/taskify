import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const CreateTaskScope = () => {
    const divStyle = "grid col-span-1 my-4"
    const [contract, setContract] = useState("fixed")
    //hours to be worked and it's rates
    const [budgetedHours, setBudgetedHours] = useState(0)
    const [budgetedHourlyRate, setBudgetedHourlyRate] = useState(0)
    
    const totalBudget = budgetedHourlyRate * budgetedHours

  return (
    <div>
        <h1>Scope</h1>
        <div>
            <form action="">
                <div className={`${divStyle }`}>
                    <label htmlFor="">Contract Type</label>
                    <select name="contract" className='' onChange={(e)=> setContract(e.currentTarget.value ) }>
                        <option value="fixed">Fixed</option>
                        <option value="houly">Houly</option>
                    </select>
                </div>

                {contract === "fixed"? 
                    <div className="">
                        <div className={`${divStyle }`}>
                            <label htmlFor="">Budget</label>
                            <div className="">
                                <span>R </span><input type='number' className='border-2'/>
                            </div>
                        </div> 

                        <div>
                            <label>Due Date</label>
                            <div>
                                <input type="date" className="border-2" />
                            </div>
                        </div>
                    </div>
                    : 
                    <div className="">
                        <div>
                            <label>Budgeted hours</label>
                            <div>
                                <input type="number" className="border-2" onChange={(e)=> setBudgetedHours(e.currentTarget.value )}/>
                            </div>
                        </div>

                        <div>
                            <label>Rate Per Hours in Rands</label>
                            <div>
                                <input type="number" className="border-2" onChange={(e)=> setBudgetedHourlyRate(e.currentTarget.value )} />
                            </div>
                        </div>

                        <h2>Total Budget in Rands : R {totalBudget}</h2>
                    </div>

                }

            </form>
        </div>

        <button className='bg-sky-400 text-white text-md font-semibold px-10 py-2 rounded-md w-full my-4'> 
            <Link to="/client/create_task_requirements">Continue</Link>
        </button>

    </div>
  )
}

export default CreateTaskScope