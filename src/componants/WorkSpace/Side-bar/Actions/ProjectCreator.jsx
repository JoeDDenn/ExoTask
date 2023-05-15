import React from "react";
import axios from "axios";
import FormData from "form-data";

//create a window with a menu list of components to add to the workspace

class ProjectCreator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
      isLoading: false,
      projectName: "",
      prjectDescription: "",
      message: false,
      response: "",
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  CreateP = async (e) => {
    const projectName = document.getElementById("ProjectName").value;
    const projectDesc = document.getElementById("ProjectDescription").value;
    //send the form data to the server
    const token = "Bearer " + localStorage.getItem("token");
    try {
      const response = await axios.post(
        "https://localhost:7042/CreateProject?Name=" +
          projectName +
          "&Descrpiton=" +
          projectDesc,
        null,
        {
          headers: {
            Authorization: token,
          },
        }
      ).then((response) => { 
        if(response.data==true){
          Swal.fire({
            icon: 'success',
            text: 'Project Created Successfully',
            
          }).then((result) => {
            window.location.reload();
          })
        }
       });
      
    } catch (error) {
      console.log(error);
      this.setState({ error: error });
    }
  };

  render() {
    return (
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                NewProject
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label for="recipient-name" className="col-form-label">
                    Project Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="ProjectName"
                  />
                </div>
                <div className="mb-3">
                  <label for="message-text" className="col-form-label">
                    Project Description:
                  </label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="ProjectDescription"
                  >
                    {" "}
                  </textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                formAction="submit"
                onClick={this.CreateP}
              >
                Create Project
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectCreator;
