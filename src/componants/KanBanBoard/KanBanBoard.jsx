import React, {Component} from 'react'
import TaskList from './TaskList/TaskList'
import './KanBan.css'
import {v4 as uuid} from 'uuid';
import axios from 'axios';


let boardFromBackEnd = [];

if (localStorage.getItem('token') === null) {
    // window.location.replace('/login')
} else {
    try {

        // get task list from backend
        const token = "Bearer " + localStorage.getItem('token')
        const defwsid = localStorage.getItem('defwsid')
        const response = await axios.get('https://localhost:7042/GetALLinWorkspascce?WorkspasceID=' + defwsid, {
            headers: {
                authorization: token
            }
        });


        const AllTasks = response.data.taskDtos ? response.data.taskDtos : [];
        // get each unique status in response
        const uniqueStatus = [...new Set(AllTasks.map(item => item.status))];
        // place each task in its status task list
        boardFromBackEnd = {
            title: "Kanban Board",
            taskLists: []
        };
        uniqueStatus.forEach(status => {
            const taskList = {
                id: uuid(),
                title: status,
                cards: []
            };
            AllTasks.forEach(task => {
                if (task.status === status) {
                    taskList.cards.push({id: task.id, title: task.title, description: task.descrpiton, status: task.status});
                }
            });
            boardFromBackEnd.taskLists.push(taskList);
        });
    } catch (error) {
        console.log(error)
    }
}

export default class KanBanBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boardtitle: boardFromBackEnd.title,
            taskLists: boardFromBackEnd.taskLists // Set the initial state with the task lists from boardFromBackEnd
        };
    }
    KanBanBoard = () => {
        const [board, setTaskLists] = boardFromBackEnd;
    }
    // Function to add a new TaskList component to the state
    addTaskList = () => {
        const taskLists = this.state.taskLists;
        taskLists.push (
            <TaskList key={
                uuid()
            }/>
        ); // Add a new TaskList component to the array with a unique key
        this.setState({taskLists}); // Update the state with the new array of TaskList components
    }
    AddTaskList = () => {
        const taskListId = uuid();
        const newTaskList = (
            <TaskList key={taskListId}
                taskListId={taskListId}
                onAddTask={
                    this.handleAddTask
                }/>
        );
        this.setState(prevState => ({
            taskLists: [
                ...prevState.taskLists,
                newTaskList
            ]
        }));
    }


    render() {
        const {taskLists} = this.state;
        const {boardtitle} = this.state;
        return (
            <div id='KanBan' className='KanBan Board '>
                <div className='KanBan-Header'>
                    <h2>{boardtitle}</h2>
                </div>
                {/* Button to create a TaskList component */}

                {/* Render all the TaskList components stored in the state */}
                <div className="board-body tasklistContainer ">
                    {
                    taskLists.map((list) => (
                        <TaskList key={
                                list.id
                            }
                            id={
                                list.id
                            }
                            title={
                                list.title
                            }
                            cards={
                                list.cards
                            }/>
                    ))
                } </div>
                <button className='KanBan-AddTaskList'
                    onClick={
                        this.AddTaskList
                }>
                    <i className='fa fa-plus'></i>
                </button>
            </div>
        )
    }
}
