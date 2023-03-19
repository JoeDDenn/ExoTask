import React, {useState} from 'react';
import axios from 'axios';
import MessageBox from '../../MessageBox/MessageBox';
import FormData from 'form-data';

//create a window with a menu list of components to add to the workspace

class ProjectCreator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true,
            isLoading: false,
            projectName : '',
            prjectDescription: '',
            message: false,
            response: '',
        };
      }


      
    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
      
    CreateP = async e => {
        const projectName = document.getElementById('ProjectName').value;
        const projectDesc = document.getElementById('ProjectDescription').value;
        //send the form data to the server
        const token = 'Bearer ' + localStorage.getItem('token');
        try {
            const response = await axios.post('https://localhost:7042/CreateProject?Name=' + projectName+ '&Descrpiton=' + projectDesc,  null, {
                headers: {
                    'Authorization': token, 
                }
            });
        
            } catch (error) {
                console.log(error)
                this.setState({ error: error});
            }
        };


      toggleWindow = () => {
        this.setState(prevState => ({
          isOpen: !prevState.isOpen
        }));
      };
    
      render() {
          const {isOpen ,isLoading } = this.state;
          
        return (
          <div className="Select-window NewProjectWindow">
            {isOpen && (
                <div className="NewProjForm">
                    <input type="text" name="ProjectName" id='ProjectName' placeholder="Project Name"/>
                    <input type="text" name="ProjectDescription" id='ProjectDescription' placeholder="Project Description"/>

                    <button onClick={this.CreateP} className="btn btn-primary">Create Project</button>
                </div>
            )}
          </div>
        );
    }}

export default ProjectCreator;