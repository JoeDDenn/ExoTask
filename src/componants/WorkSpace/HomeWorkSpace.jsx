import React from 'react'
import SideBar from './Side-bar/SideBar'
import Main from './Main-workspace/Main'
import NavWorkSpcae from './Nav/NavWorkSpcae'
const HomeWorkSpace = () => {
  return (
    <div className='wrapper'>
     <NavWorkSpcae/>
      <SideBar/>
     {/* <Main/>  */}
    </div>
  )
}

export default HomeWorkSpace