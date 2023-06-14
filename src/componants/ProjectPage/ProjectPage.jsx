import React, {useEffect, useState} from "react";
import "./ProjectPage.css";
import {FaDivide, FaUserCircle} from "react-icons/fa";
import NavWorkSpcae from "../WorkSpace/Nav/NavWorkSpcae";
import SideBar from "../WorkSpace/Side-bar/SideBar";
import axios from "axios";
import ProjectCreator from "../WorkSpace/Side-bar/Actions/ProjectCreator";
import WorkspaceCreator from "../WorkSpace/Side-bar/Actions/WorkspaceCreator";



const ProjectPage = () => {
    const [workspaces, setWorkspaces] = useState([]);
    const [projectname, setProjectname] = useState("");
    const [projectdesc, setProjectdesc] = useState("");

    useEffect(() => {
        const projectId = localStorage.getItem("defprojid");
        const token = localStorage.getItem("token");

        axios.get(`https://localhost:7042/GetProjct?projectID=${projectId}`, {
            headers: {
                authorization: `Bearer ${token}`
            }
        }).then((response) => {
            setWorkspaces(response.data[0].workSpasceforProject);
            setProjectname(response.data[0].projectName);
            setProjectdesc(response.data[0].descrtpion);
        }).catch((error) => {
            console.error(error);
        });
    }, []); // empty dependency array

    return (<div className="Pmain wrapper">
        <NavWorkSpcae/>
        <SideBar/>
        <ProjectCreator />
        <WorkspaceCreator />
        <div className="container pMain">
            <div className="row mb-4">
                <div className="col-12">
                    <div className="card styleCard ">
                        <div className="card-body p-2  Pcard">
                            <h3>{projectname}</h3>
                            <p className="card-text">
                                {projectdesc}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="workspaceSect">
                <h3 className="mb-4">Workspaces</h3>
                <button type="button" className=" ProjectAdd btn addWS  mb-4 me-3" 
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal2"
                    data-bs-whatever="AddProject"
          >
                    <i className="fas fa-plus"></i>
                </button>
                <hr className="verticalLine"/>
            </div>
                <div className="row">
                    {
                    workspaces.map((workspace, index) => (
                        <div key={index}
                            className="col-md-4 mb-4">
                            <div className="card styleCard">
                                <div className="card-body Pcard">
                                    <h4>{
                                        workspace.workSpaceName
                                    }</h4>
                                    <hr/>
                                    <div className="row">
                                        {
                                        workspace.userInWotkSpaces.map((user, index) => (
                                            <div key={index}
                                                className="col-6 mb-3">
                                                <div className="card styleCard">
                                                    <div className="card-body iconUser">
                                                        <FaUserCircle className="iconUser"
                                                            size={30}/>
                                                        <h6 className="iconUser">
                                                            {
                                                            user.userName
                                                        }</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    } </div>
                                </div>
                            </div>
                        </div>
                    ))
                } </div>
            </div>
        </div>
        );
        };
        
        export default ProjectPage;
