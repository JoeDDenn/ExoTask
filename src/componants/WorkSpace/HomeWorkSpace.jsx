import React from 'react'
import SideBar from './Side-bar/SideBar'
import Main from './Main-workspace/Main'
import NavWorkSpcae from './Nav/NavWorkSpcae'
import './HomeWorkSpace.css'
import AnimatedBackground from './bg/AnimatedBackground '
import Chatbot from '../Chat/ChatBot'
import AddComp from '../AddComp/AddComp'
import TaskList from '../TaskList/TaskList'
import KanBanBoard from '../KanBanBoard/KanBanBoard'





const HomeWorkSpace = () => {
  if(localStorage.getItem('token') === null) window.location.replace('/login')
  else{
  return (
    <div className='wrapper'>
    <AnimatedBackground>
     <NavWorkSpcae/>
      <SideBar/>
     {/* <Main/>  */}

    <div className='container'>
     <AddComp/>
     <div className='workspace container' id='workspace'>
        <div className='Block' id="1">
          <KanBanBoard/>
        </div>
     </div>
    </div>
     <Chatbot/>
    </AnimatedBackground>
    </div>

  )
}
}

export default HomeWorkSpace
