import { getElementById } from 'domutils'
import React, { Component, useState } from 'react'
import TaskList from './TaskList/TaskList'
import  './KanBan.css'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { v4 as uuid } from 'uuid';


export default class KanBanBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskLists: [] // An array to store the TaskList components
        };
    }

    // Function to add a new TaskList component to the state
    addTaskList = () => {
        const taskLists = this.state.taskLists;
        taskLists.push(<TaskList key={uuid()} />); // Add a new TaskList component to the array with a unique key
        this.setState({ taskLists }); // Update the state with the new array of TaskList components
    }
    AddTaskList = () => {
        const taskListId = uuid();
        const newTaskList = (
                <TaskList
                    key={taskListId}
                    taskListId={taskListId}
                    onAddTask={this.handleAddTask}
                />
        );
        this.setState(prevState => ({
          taskLists: [...prevState.taskLists, newTaskList]
        }));
      }
      

    render() {
        return (
            <DragDropContext onDragEnd={result => console.log(result)}>
            <div id='KanBan' className='KanBan Board'>
                <div className='KanBan-Header'>
                    <h2>My Board</h2>
                </div>
                {/* Button to create a TaskList component */}
                
                {/* Render all the TaskList components stored in the state */}
                <div className=''>
                    <div className='tasklistContainer'> 
                        {this.state.taskLists}
                    </div>
                </div>
                <button className='KanBan-AddTaskList' onClick={this.AddTaskList}> <i className='fa fa-plus'></i></button>
            </div>
            </DragDropContext>
        )
    }
}

