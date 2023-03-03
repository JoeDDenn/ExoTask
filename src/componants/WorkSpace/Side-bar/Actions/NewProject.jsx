import React from 'react'
import { NavLink } from 'react-router-dom'

import './Actions.css'

const NewProject = () => {
  return (
    <div>
        <NavLink className="btn btn-sidebar newProj-btn" to="/CreateProjForum">
            <span className="newProj-btn-text">New Project</span>
          <i className="fas fa-plus fa-fw newProj-btn-icon" />
        </NavLink>
  </div>
  )
}

export default NewProject
