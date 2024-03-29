import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import ProjectCreator from './ProjectCreator'
import './Actions.css'
import WorkspaceCreator from './WorkspaceCreator'

const NewWorkspace = () => {

    const [showSelect, setshowSelect] = useState(false);
  
    const handleSelectClick = () => {
      setshowSelect(!showSelect);
    };

  return (
    <div className='btn form-control-sidebar btn-sidebar newProj-btn'>
        <span className="newProj-btn-text">New Workspace</span>
        <button className="newProj-btn" onClick={handleSelectClick}>
          <i className="fas fa-plus fa-fw newProj-btn-icon" />
        </button>
        <div>
          {showSelect && <WorkspaceCreator />}
        </div>
  </div>
  )
}

export default NewWorkspace
