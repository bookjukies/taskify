import React, { useState } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Menu from './components/Menu'
import Client from './components/Client'
import Contractor from './components/Contractor'
import Profile from './components/Profile'
import CreateTask from './components/CreateTask'
import { Routes, Route } from 'react-router-dom';
import {GlobalProvider} from './Context/GlobalContext'
import TaskList from './components/TaskList'
import Chat from './components/Chat'
import LocationSetter from './components/LocationSetter'
import DirectChats from './components/DirectChats'
import CreateTaskOptions from './components/CreateTaskOptions'
import CreateTaskScope from './components/CreateTaskScope'
import CreateTaskRequirements from './components/CreateTaskRequirements'
import CreateTaskFund from './components/CreateTaskFund'
import TaskSummary from './components/TaskSummary'


function App() {
  const [toggleState, setToggleState] = useState(false)

  const toggle = () =>{
    setToggleState(!toggleState)
  }

  return (
    <div className="relative">
      <GlobalProvider >
        <Header toggle={toggle}/>
        {toggleState? <Menu toggle={toggle}/>: null}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />

          <Route path='/client' element={<Client />}>
            <Route path='' element={<CreateTask />} />
            <Route path='create_task' element={<CreateTaskOptions />} />
            <Route path='create_task_scope' element={<CreateTaskScope /> }/>
            <Route path='create_task_requirements' element={<CreateTaskRequirements /> }/>
            <Route path='create_task_review' element={<TaskSummary />} />
            <Route path='create_task_fund' element={<CreateTaskFund />} />
            <Route path='profile' element={<Profile />} /> 
          </Route>

          <Route path='/contractor' element={<Contractor />}>
             <Route path='' element={<TaskList />} />
             <Route path='chat' element={<Chat />} />
             <Route path='messages' element={<DirectChats />} />
          </Route>

          <Route path='/test' element={<LocationSetter />}  />

        </Routes>
        
      </GlobalProvider >
    </div>
  );
}

export default App;
