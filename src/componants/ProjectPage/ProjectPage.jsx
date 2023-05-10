import React, { useEffect, useState } from "react";
import "./ProjectPage.css";
import { FaUserCircle } from "react-icons/fa";
import NavWorkSpcae from "../WorkSpace/Nav/NavWorkSpcae";
import SideBar from "../WorkSpace/Side-bar/SideBar";
import axios from "axios";

const ProjectPage = () => {
  const [workspaces, setWorkspaces] = useState([]);

  useEffect(() => {
    const request = async () => {
      try {
        const id = localStorage.getItem("defprojid");

        const response = await axios.get(
          "https://localhost:7042/GetProjct?projectID=" + id,

          {
            headers: {
              authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );

        if (response.data && response.data.workSpaceforProject) {
          setWorkspaces(response.data.workSpaceforProject);
        }
        console.log(response.data.workSpaceforProject);
      } catch (error) {
        console.log(error);
      }
    };

    request();
  }, []); // empty dependency array

  return (
    <div className="Pmain wrapper">
      <NavWorkSpcae />
      <SideBar />
      <div className="container pMain">
        <div className="row mb-4">
          <div className="col-12">
            <div className="card styleCard ">
              <div className="card-body p-2  Pcard">
                <h3>Project Name</h3>
                <p className="card-text">Description</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {workspaces.map((workspace, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card styleCard">
                <div className="card-body Pcard">
                  <h4>{workspace.workSpaceName}</h4>
                  <hr />
                  <div className="row">
                    {workspace.userInWotkSpaces.map((user, index) => (
                      <div key={index} className="col-6 mb-3">
                        <div className="card styleCard">
                          <div className="card-body">
                            <FaUserCircle size={30} />
                            <h6>{user.userName}</h6>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;