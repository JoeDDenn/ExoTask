import React from "react";
import axios from "axios";
import Swal from "sweetalert2";

//create a window with a menu list of components to add to the workspace

class WorkspaceCreator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
      isLoading: false,
      WorkspaceName: "",
      WorkspaceDescription: "",
      message: false,
      response: "",
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  Createws = async (e) => {
    const WorkSpaceName = document.getElementById("WorkSpaceName").value;
    const projectID = localStorage.getItem("defprojid");

    //send the form data to the server
    const token = "Bearer " + localStorage.getItem("token");
    try {
      const response = await axios.post(
        "http://joeddenn-001-site1.itempurl.com/CreateWorkSpace?WorkSpaceName=" +
          WorkSpaceName +
          "&projectID=" +
          projectID,
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
            text: 'Workspace Created Successfully',
            
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
        id="exampleModal2"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                New Workspace
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
                    WorkSpace Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="WorkSpaceName"
                  />
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
                onClick={this.Createws}
              >
                Create WorkSpace
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WorkspaceCreator;
