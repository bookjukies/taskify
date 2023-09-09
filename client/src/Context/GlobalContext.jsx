import React, { useState, createContext } from 'react'


const GlobalContext  = createContext()

export const GlobalProvider = ({children}) =>{
   const [menuToggle, setMenuToggle] = useState(false)   
   const toggle = (current) =>{
        setMenuToggle(!current)
   }  
    
    return <GlobalContext.Provider value={{menuToggle, toggle}}>
        {children}
    </GlobalContext.Provider>
}

export default GlobalContext
