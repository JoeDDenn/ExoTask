import React, { Component } from 'react'
import TaskList from '../../TaskList/TaskList';

export class AddTaskList extends Component {
    addNewBlock = (className) => {
        const newBlockId = uid();
        AddBlock(className, newBlockId);
    }

  render() {
    return (
        <div className="ComponentList-item-title">
        <button className="ComponentList-item-title-button" onClick={() => this.addNewBlock("TaskList")}>
            TaskList
        </button>
        </div>
    )
  }
}

export default AddTaskList


function AddTaskList(){
    //add a react component to the workspace
    //find workspace
    const workspace = document.getElementById('workspace');
    //create new block
    const newBlock = document.createElement('div');
    newBlock.className = "Block";
    newBlock.id = id;
    //add tasklist to new block
    

}