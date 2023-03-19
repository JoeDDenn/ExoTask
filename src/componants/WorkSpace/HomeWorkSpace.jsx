import React from 'react'
import SideBar from './Side-bar/SideBar'
import NavWorkSpcae from './Nav/NavWorkSpcae'
import './HomeWorkSpace.css'
import AnimatedBackground from './bg/AnimatedBackground '
import Chatbot from '../Chat/ChatBot'
import AddCompList from '../AddComp/AddCompList'
import KanBanBoard from '../KanBanBoard/KanBanBoard'

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

      //decode token to get user id
      const token = localStorage.getItem('token')
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace('-', '+').replace('_', '/');
      const decodedToken = JSON.parse(window.atob(base64));
      const userID = decodedToken.uid;

      //get user workspaces
      const getUserWorkspaces = async () => {
        try {
          const response = await axios.get('https://localhost:7042/GetProjcts', 
            {
              headers: {
                authorization : "Bearer " + localStorage.getItem('token')
              }
            }
          );
          const workspaces = response.data.workSpacseRes2;
        } catch (error) {
          console.log(error);
        }
      };

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


let BlocksfromBackEnd =[];

if(localStorage.getItem('token') === null){
  // window.location.replace('/login')
}
else{
  try{
    const token = "Bearer " + localStorage.getItem('token')
    const response = await axios.get('https://localhost:7042/GetALLinWorkspascce?WorkspasceID=' + 1, {
      headers: {
        authorization: token
      }
    });
    
    BlocksfromBackEnd = response.data.blokListDtos;
  }catch(err){
    console.log(err)
  }
}

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




import { v4 as uuid } from 'uuid';
import { decode } from 'base64-arraybuffer';

function AddBlock(type, block, className) {

    //find workspace
    const workspace = document.getElementById('workspace');
    //create new block
    const newBlock = document.createElement('div');
    newBlock.className = "Block";
    const id = newBlock.id = uuid();
    switch (type) {
        case 'paragraph':
        case 'Paragraph':
            //add a paragraph to new block
            const newParagraph = document.createElement('p');
            newParagraph.innerHTML = block.text;
            newParagraph.contentEditable = true;
            newParagraph.className = className;
            newBlock.appendChild(newParagraph);
            break;
        case 'heading':
            const newHeading = document.createElement('h1');
            newHeading.innerHTML = block.text;
            newHeading.contentEditable = true;
            newHeading.className = className;
            newBlock.appendChild(newHeading);
            break;
        case 'image':
        case 'Image':
            //add a image to new block
            const newImage = document.createElement('img');
            if(block.phote === ""){
                //ask user for url
                const fileSelect = document.createElement('input');
                fileSelect.type = 'file';
                fileSelect.accept = 'image/*,video/*';
                fileSelect.click();
                fileSelect.onchange = () => {
                  const file = fileSelect.files[0];
                  const reader = new FileReader();
                  reader.readAsDataURL(file);
                  reader.onload = () => {
                    newImage.src = reader.result;
                    };
                };
            }
            else{
                //turn a byte array to an image
                const imageBytes = block.phote;
                const arrayBuffer = decode(imageBytes);
                const blob = new Blob([arrayBuffer], {type: 'image/jpeg'});
                const urlCreator = window.URL || window.webkitURL;
                const imageUrl = urlCreator.createObjectURL(blob);
                newImage.src = imageUrl;
            }   

            newImage.className = className + " WSImage";
            newBlock.appendChild(newImage);
            break;
        case 'video':
            //add a video to new block
            const newVideo = document.createElement('video');
            newVideo.controls = true;
            if(block.data.file.url === ""){
                //ask user for url
                const fileSelect = document.createElement('input');
                fileSelect.type = 'file';
                fileSelect.accept = 'video/*';
                fileSelect.click();
                fileSelect.onchange = () => {
                    const file = fileSelect.files[0];
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = () => {
                        newVideo.src = reader.result;
                    };
                };
            }

            else{
                newVideo.src = block.data.file.url;
            }
            newVideo.className = className;
            newBlock.appendChild(newVideo);
            break;      
        case 'webpage':
            const newIframe = document.createElement('iframe');
            newIframe.className = className;
            // ask user for url
            const url = block.data.url;
            //set src of iframe to url
            newIframe.src = url;
            newBlock.appendChild(newIframe);
            break;
        default:
            break;
    }
    //add new block to workspace
    workspace.appendChild(newBlock);
    //set focus on new block
    //add a delete button to new block with id
    const newDeleteButton = document.createElement('button');
    newDeleteButton.className = "del-but";
    //add child Icon to button
    const newDeleteIcon = document.createElement('i');
    newDeleteIcon.className = "fa fa-trash";
    newDeleteButton.appendChild(newDeleteIcon);
    newDeleteButton.onclick = () => {
        const block = document.getElementById(id);
        block.parentNode.removeChild(block);
    }
    newBlock.appendChild(newDeleteButton);
}



