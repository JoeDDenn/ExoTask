import React from 'react'
import SideBar from './Side-bar/SideBar'
import Main from './Main-workspace/Main'
import NavWorkSpcae from './Nav/NavWorkSpcae'
import './HomeWorkSpace.css'
import AnimatedBackground from './bg/AnimatedBackground '
const HomeWorkSpace = () => {

  return (
    <div className='wrapper'>
    <AnimatedBackground>
     <NavWorkSpcae/>
      <SideBar/>
     <Main/> 
    </AnimatedBackground>
    </div>
  )
}

export default HomeWorkSpace
