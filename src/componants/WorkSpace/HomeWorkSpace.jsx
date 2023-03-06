import React from 'react'
import SideBar from './Side-bar/SideBar'
import Main from './Main-workspace/Main'
import NavWorkSpcae from './Nav/NavWorkSpcae'
import Bg from './Main-workspace/bg/Bg'
import './HomeWorkSpace.css'
import Chatbot from '../Chat/ChatBot'

const HomeWorkSpace = () => {
  if(localStorage.getItem('token') === null) window.location.replace('/login')
  else{
    return (
      <div className='wrapper'>
     <NavWorkSpcae/>
      <SideBar/>
     <Main/> 
     <Chatbot/>
    </div>
  )
}
}

export default HomeWorkSpace
