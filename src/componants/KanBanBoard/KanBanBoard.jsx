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
            boardtitle: boardFromBackEnd.title,
          taskLists: boardFromBackEnd.taskLists // Set the initial state with the task lists from boardFromBackEnd
        };
      }
 KanBanBoard = () => {
    const [board, setTaskLists] = useState(boardFromBackEnd);
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
        const { taskLists } = this.state;
        const { boardtitle } = this.state;
        console.log("this is a board title"+boardtitle);
        return (
            <DragDropContext onDragEnd={result => console.log(result)}>
            <div id='KanBan' className='KanBan Board'>
                <div className='KanBan-Header'>
                    <h2>{boardtitle}</h2>
                </div>
                {/* Button to create a TaskList component */}
                
                {/* Render all the TaskList components stored in the state */}
                <div className="board-body">
                {taskLists.map((list) => (
      <TaskList
        key={list.id}
        id={list.id}
        title={list.title}
        cards={list.cards}
      />
    ))}
      </div>
                <button className='KanBan-AddTaskList' onClick={this.AddTaskList}> <i className='fa fa-plus'></i></button>
            </div>
            </DragDropContext>
        )
    }
}



const boardFromBackEnd = {
    id: 'board-1',
    title: 'My board',
    taskLists : [
      {
        id: 'taskList-1',
        title: 'To do',
        cards: [
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
        cards: [
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
        cards: [
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
