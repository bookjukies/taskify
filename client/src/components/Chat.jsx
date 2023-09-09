import React, {useEffect, useState} from 'react'
import io from 'socket.io-client'
import { SendIcon } from './Icons'
// const socket = io.connect("http://192.168.43.159:3001")


const Chat = () => {
    const [message, setMessage] = useState('')
    const [messageList, setMessageList] = useState([])
    // socket.emit('join_room', 1) 
    
    
    const messageChangeHandle =(e)=>{
        let text = e.target.value
      
        setMessage(text);
 
    }
    const send_message = (e) =>{
        // e.preventDefault()
        // setMessageList(prev =>{
            
        //     return [...prev, {message, from: "this"}]
        // })
        
        // socket.emit('send_message', {message })
    }

    useEffect(()=>{
        // socket.on('recieve_message',(data)=>{
        //     setMessageList(prev =>{
        //         const words = {message : data.message, from : "other"}
        //         return [...prev, words]
        //     })
            
        // })
    },[])

    const fromThis = 'text-right'
    const fromOther = 'text-itali'
    return (
        
        <div className='grid grid-cols-1 relative h-cover grid-rows-6 pb-16'> 
            <div className="row-span-5 px-6">
            <h1 className='text-center text-xl italic font-bold'>Messeges</h1>
            {messageList.length > 0 ? <ul className=''>{messageList.map(item => <li className={item.from === 'this'? fromThis : fromOther}>{item.message } </li>)}</ul>: <p>No messages available</p>}
            </div>
            <div className="flex row-span-1 h-10 place-self-center">
                <input type="text" onChange={messageChangeHandle} className='bg-sky-100 px-4 rounded-xl' placeholder='Message . . . .'/>
                <button className= "mx-4" onClick={send_message}><SendIcon /></button>
            </div>
        </div>
    )
}

export default Chat