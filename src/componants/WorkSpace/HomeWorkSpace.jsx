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
import axios from 'axios'



const HomeWorkSpace = () => {

  const [blocks, setBlocks] = React.useState(BlocksfromBackEnd);

  //append block to blocks list
  const appendBlock = (block) => {
    setBlocks([...blocks, block]);
  }

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
      <Workspace blocklist={blocks} />
      </div>
       <Chatbot/>
      </AnimatedBackground>
      </div>
    )
  }
}


export default HomeWorkSpace


const Workspace = (props) => {
  const [blocks, setBlocks] = React.useState(props.blocklist);

  useEffect(() => {
    buildBlocks(blocks);
  }, []);

  return (
    <div className="container bbbb">
      <KanBanBoard />
      <div className="container" id="workspace">
        <div className="Block" id="1">
        </div>
      </div>
    </div>
  );
};

const buildBlocks = (blocklist) => {
  //clear workspace
  const workspace = document.getElementById('workspace');
  workspace.innerHTML = '';
  //add blocks to workspace
  for (let i = 0; i < blocklist.length; i++) {
    AddBlock(blocklist[i].type, blocklist[i], blocklist[i].className)
  }
}



const token = "Bearer " + localStorage.getItem('token')
const response = await axios.get('https://localhost:7042/GetALLinWorkspascce?WorkspasceID=' + 1, {
    headers: {
      authorization: token
    }
  });

const BlocksfromBackEnd = response.data.blokListDtos;

// const BlocksfromBackEnd = {
//   wsID : '1',
//   BlocksList : [
//     {
//       id: 'block-1',
//       type: 'paragraph',
//       classname : 'WSParagraph',
//       data: {
//         text: 'Hey. This is a simple text block'
//       }
//     },
//     {
//       id: 'block-2',
//       type: 'heading',
//       classname : 'WSHeading',
//       data: {
//         text: 'This is a header',
//         level: 2
//       }
//     },
//     {
//       id: 'block-3',
//       type: 'image',
//       classname : 'image',
//       data: {
//         file: {
//           url: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'
//         },
//         caption: 'This is an image',
//       }
//     },
//   ]
// }