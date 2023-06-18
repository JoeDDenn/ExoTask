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
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState("");
    const [projectId, setProjectId] = useState("");
    const [wsId, setWsId] = useState("");

    useEffect(() => {
        setProjectId(localStorage.getItem("defprojid"));
        setWsId(localStorage.getItem("defwsid"));
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

        fetchUsersNotInWorkspace(wsId, projectId);
    }, [projectId, wsId]);

    const fetchUsersNotInWorkspace = async (workspaceId, projectId) => {
        const token = localStorage.getItem("token");

        try {
            const response = await axios.get(`https://localhost:7042/GetAllUsersNotInWorkspascce?WorkspasceID=${workspaceId}&projectId=${projectId}`, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            });
            setUsers(response.data);
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <div className="Pmain wrapper ">
            <NavWorkSpcae/>
            <SideBar/>
            <div className="overlay">

                <ProjectCreator/>
                <WorkspaceCreator/>
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
                        <button type="button" className=" ProjectAdd btn addWS  mb-4 me-3" data-bs-toggle="modal" data-bs-target="#exampleModal2" data-bs-whatever="AddProject">
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
                                        <UserSelector id={
                                            workspace.workspasceid
                                        }/>
                                    </div>
                                </div>
                            </div>
                        ))
                    } </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectPage;


function UserSelector(props) {
    const id = props.id;
    const [users, setUsers] = useState([]);
    const [projectId, setProjectId] = useState("");
    const [selectedUser, setSelectedUser] = useState("");


    useEffect(() => {
        setProjectId(localStorage.getItem("defprojid"));
        fetchUsersNotInWorkspace(id, projectId);
    }, [projectId]);


    const fetchUsersNotInWorkspace = async (workspaceId, projectId) => {
        const token = localStorage.getItem("token");

        try {
            const response = await axios.get(`https://localhost:7042/GetAllUsersNotInWorkspascce?WorkspasceID=${workspaceId}&projectId=${projectId}`, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            });
            setUsers(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    const inviteUserToWorkspace = async (projectId, workspaceId) => {
        const token = localStorage.getItem("token");

        try {
            const response = await axios.post(`https://localhost:7042/InviteUserInWorkSpasce2?projectid=${projectId}&userId=${selectedUser}&WorkSpacseId=${workspaceId}`, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            });

            window.location.reload();
            
        } catch (error) {
            console.error(error);
        }
    };

    const handleAddUserToWorkspace = (projectId, workspaceId) => {
        inviteUserToWorkspace(projectId, workspaceId);
        // You can add any additional logic here if needed
    };

    return (
        <div>

            <select value={selectedUser}
                onChange={
                    (e) => setSelectedUser(e.target.value)
            }>
                <option value="">Select User</option>
                {
                users.map((user) => (
                    <option key={
                            user.userId
                        }
                        value={
                            user.userId
                    }>
                        {
                        user.userName
                    } </option>
                ))
            } </select>
            <button onClick={
                () => inviteUserToWorkspace(projectId, id)
            }>
                Add User
            </button>
        </div>
    )
}
