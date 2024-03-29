import React, { useState } from "react";
import "./SideBar.css";
import { json, Link } from "react-router-dom";
import NewProject from "./Actions/NewProject";
import NewWorkspace from "./Actions/NewWorkspace";
import axios from "axios";

let projectList = [];
//get project list from backend
const reqq = async () => {
  try {
    const response = await axios.get("http://joeddenn-001-site1.itempurl.com/GetProjcts", {
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    projectList = response.data;
  } catch (error) {
    console.log(error);
  }
};

reqq();

const changeWS = (e) => {
  //when clicked on workspace change the workspace id in local storage
  localStorage.setItem("defwsid", e.target.id);
  window.location.replace("/workspace");
};

const ProjectItem = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);
  const id = project.id;

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleProjectRedirect = () => {
    localStorage.setItem("defprojid", id);
    console.log(id);
    window.location.replace("/project");
  };

  return (
    <>
      <li className="cust-li">
        <div onClick={handleToggle}>
          {project.workSpacseRes2.length > 0 && (
            <i className={`fas fa-caret-${isOpen ? "down" : "right"}`} />
          )}
          {project.name}

          <button
            className="projectPageRedirect"
            onClick={handleProjectRedirect}
          >
            <i className="fas fa-arrow-right" />
          </button>
        </div>
        {isOpen && (
          <ul className="cust-ul">
            {project.workSpacseRes2.map((workspace) => (
              <li
                key={workspace.workSpacseId}
                id={workspace.workSpacseId}
                onClick={changeWS}
              >
                {workspace.workSpacseName}
              </li>
            ))}
          </ul>
        )}
      </li>
    </>
  );
};

const SideBar = () => {
  const Username = localStorage.getItem("userName")
    ? localStorage.getItem("userName")
    : "Guest";

  return (
    <>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <Link to="/" className="brand-link">
          <img
            src="/Assets/Exotask4.png"
            alt="AdminLTE Logo"
            className="brand-image"
            style={{ opacity: ".8" }}
          />
          <span className="brand-text font-weight-light pl-1">ExoTask</span>
        </Link>

        <div className="sidebar">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src="/Assets/man.png"
                className="img-circle elevation-2"
                alt="User Image"
              />
            </div>
            <div className="info">
              <a href="#" className="d-block">
                {Username}
              </a>
            </div>
          </div>
          <div className="sidebar mt-2">
            <div className="form-inline">
              <div className="input-group" data-widget="sidebar-search">
                <input
                  className="form-control form-control-sidebar"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <div className="input-group-append">
                  <button className="btn btn-sidebar">
                    <i className="fas fa-search fa-fw" />
                  </button>
                </div>
              </div>
            </div>

            <NewProject />
            {/* <NewWorkspace/> */}
            <nav className="mt-2">
              <ul>
                {projectList.map((project) => (
                  <ProjectItem key={project.id} project={project} />
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
