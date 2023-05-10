import React, { useState } from "react";
import "./Actions.css";

const NewProject = () => {
  const handleAddProject = () => {};

  return (
    <div className="">
      <div className="ProjectAddText">
        <div className="ProjectsText">
          <p className="">Projects</p>
        </div>
        <button
          className="ProjectAdd"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          data-bs-whatever="AddProject"
          onClick={handleAddProject}
        >
          <div className="addProjicon">
            <i className="fas fa-plus" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default NewProject;
