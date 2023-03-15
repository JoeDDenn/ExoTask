import React from 'react'
import SideBar from './Side-bar/SideBar'
import NavWorkSpcae from './Nav/NavWorkSpcae'
import './HomeWorkSpace.css'
import AnimatedBackground from './bg/AnimatedBackground '
import Chatbot from '../Chat/ChatBot'
import AddCompList from '../AddComp/AddCompList'
import KanBanBoard from '../KanBanBoard/KanBanBoard'
import AddBlock from './AddBlock'
import { useEffect } from 'react'





const buildBlocks = (blocklist) => {
  for (let i = 0; i < blocklist.length; i++) {
    AddBlock(blocklist[i].type, blocklist[i], blocklist[i].classname)
  }
}

const HomeWorkSpace = () => {

  if(localStorage.getItem('token') === null)
     window.location.replace('/login')

  else{
    return (
      <div className='wrapper'>
      <AnimatedBackground>
       <NavWorkSpcae/>
        <SideBar/>
       {/* <Main/>  */}
      <div className='container'>
      <AddCompList/>
      <Workspace/>
      </div>
       <Chatbot/>
      </AnimatedBackground>
      </div>
    )
  }
}


export default HomeWorkSpace




const Workspace = () => {

  const [blocks, setBlocks] = React.useState(BlocksfromBackEnd.BlocksList)
  console.log(blocks)
  
  useEffect(() => {
    buildBlocks(blocks)
  }, []);


  return (
    <div className='workspace container' id='workspace'>
      <div className='Block' id="1">
        <KanBanBoard state={boardFromBackEnd} />
      </div>
    </div>
  )
}


const boardFromBackEnd = {
  id: 'board-1',
  title: 'My board',
  taskLists : [
    {
      id: 'taskList-1',
      title: 'To do',
      tasks: [
        {
          id: 'task-1',
          title: 'Learn React',
          description: 'Learn how to use React to build web applications',
          status: 'todo'
        },
        {
          id: 'task-2',
          title: 'Learn Redux',
          description: 'Learn how to use Redux to manage the state of web applications',
          status: 'todo'
        }
      ]
    },
    {
      id: 'taskList-2',
      title: 'In progress',
      tasks: [
        {
          id: 'task-3',
          title: 'Learn Webpack',
          description: 'Learn how to use Webpack to bundle web applications',
          status: 'in-progress'
        }
      ]
    },
    {
      id: 'taskList-3',
      title: 'Done',
      tasks: [
        {
          id: 'task-4',
          title: 'Learn Node.js',
          description: 'Learn how to use Node.js to build web servers',
          status: 'done'
        }
      ]
    }
  ]
}

const BlocksfromBackEnd = {
  wsID : '1',
  BlocksList : [
    {
      id: 'block-1',
      type: 'paragraph',
      classname : 'WSParagraph',
      data: {
        text: 'Hey. This is a simple text block'
      }
    },
    {
      id: 'block-2',
      type: 'heading',
      classname : 'WSHeading',
      data: {
        text: 'This is a header',
        level: 2
      }
    },
    {
      id: 'block-3',
      type: 'image',
      classname : 'image',
      data: {
        file: {
          url: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'
        },
        caption: 'This is an image',
      }
    },
    {
      id: 'block-4',
      type: 'webpage',
      classname : 'WSFrame',
      data: {
        url: 'https://www.youtube.com/embed/Vqa9NMzF3wc',
      }
    },
  ]
}