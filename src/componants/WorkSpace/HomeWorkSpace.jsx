import React from 'react'
import SideBar from './Side-bar/SideBar'
import Main from './Main-workspace/Main'
import NavWorkSpcae from './Nav/NavWorkSpcae'
import './HomeWorkSpace.css'
import AnimatedBackground from './bg/AnimatedBackground '
import Chatbot from '../Chat/ChatBot'


const HomeWorkSpace = () => {
  if(localStorage.getItem('token') === null) window.location.replace('/login')
  else{
  return (
    <div className='wrapper'>
    <AnimatedBackground>
     <NavWorkSpcae/>
      <SideBar/>
     <Main/> 
     <Chatbot/>
    </AnimatedBackground>
    </div>

  )
}
}

export default HomeWorkSpace
