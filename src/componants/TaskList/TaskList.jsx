import React, { Component } from 'react'
import './TaskList.css' 

export class TaskList extends Component {
  render() {
    return (
      <div className='container TaskList'>
        <div className='row'>
            <div className='col-3'>
                <div className='TaskList-item'>
                    <div className='TaskList-item-title'>
                        <h3>Task 1</h3>
                    </div>
                    <div className='TaskList-item-body'>
                        <p>Task 1 description</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default TaskList
