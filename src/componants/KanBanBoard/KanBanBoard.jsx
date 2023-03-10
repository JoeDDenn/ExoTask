import React, { Component } from 'react'
import TaskList from '../TaskList/TaskList'
import './KanBan.css'

export default class KanBanBoard extends Component {
  
    
    render() {
        return (
            <div id='KanBan'>
        <div className='KanBan-Header'>
            <h1>Header</h1>
            </div>
            {/* //button to create a task list component */}
            <button className='KanBan-AddTaskList' onClick={AddTaskList}>Add Task List</button>
      </div>
    )
}
}

function AddTaskList()  {
    //add a react component to the workspace
    //find workspace
    const workspace = document.getElementById('KanBan');
    //create new block
    const newBlock = document.createElement('div');
    newBlock.className = "Block";
    newBlock.id = uid();
    //add tasklist to new block
    const newTaskList = document.createElement('TaskList');
    newBlock.appendChild(newTaskList);
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


const uid = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  };