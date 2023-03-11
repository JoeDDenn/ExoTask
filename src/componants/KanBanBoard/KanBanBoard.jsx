import React, { Component } from 'react'
import TaskList from '../TaskList/TaskList'
import  './KanBan.css'


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
        taskLists.push(<TaskList key={uid()} />); // Add a new TaskList component to the array with a unique key
        this.setState({ taskLists }); // Update the state with the new array of TaskList components
    }
    AddTaskList = () => {
        const taskListId = uid();
        const newTaskList = (
          < TaskList
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
            <div id='KanBan' className='KanBan'>
                <div className='KanBan-Header'>
                    <h1>Header</h1>
                </div>
                {/* Button to create a TaskList component */}
                
                {/* Render all the TaskList components stored in the state */}
                {this.state.taskLists}
                <button className='KanBan-AddTaskList' onClick={this.AddTaskList}>Add Task List</button>
            </div>
        )
    }
}

const uid = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};