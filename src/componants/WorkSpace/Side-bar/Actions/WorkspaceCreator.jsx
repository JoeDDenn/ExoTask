import React, {useState} from 'react';
import axios from 'axios';
import MessageBox from '../../MessageBox/MessageBox';
import FormData from 'form-data';

//create a window with a menu list of components to add to the workspace

class WorkspaceCreator extends React.Component {
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
      
    CreateWS = async e => {
        const WorkspaceName = document.getElementById('WorkspaceName').value;
        //send the form data to the server
        const token = 'Bearer ' + localStorage.getItem('token');
        try {
            const response = await axios.post('https://localhost:7042/CreateWorkSpace?WorkSpaceName=' + WorkspaceName+ '&projectID=1' ,  null, {
                headers: {
                    'Authorization': token, 
                }
            });
            console.log(response)
        
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
                    <input type="text" name="WorkspaceName" id='WorkspaceName' placeholder="Workspace Name"/>
                    <div>
                        <br/>
                        <button onClick={this.CreateWS} className="btn btn-primary">Create Workspace</button>
                    </div>
                </div>
            )}
          </div>
        );
    }}

export default WorkspaceCreator;