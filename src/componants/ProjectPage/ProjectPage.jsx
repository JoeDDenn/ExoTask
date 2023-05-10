import React from 'react';
import './ProjectPage.css';
import { FaUserCircle } from 'react-icons/fa';
import NavWorkSpcae from '../WorkSpace/Nav/NavWorkSpcae';
import SideBar from '../WorkSpace/Side-bar/SideBar';
const ProjectPage = () => {
  const workspaces = [
    {
      name: 'Workspace A',
      users: ['John Doe', 'Jane Smith']
    },
    {
      name: 'Workspace B',
      users: ['Mark Johnson', 'Joe Dellon']
    },
    {
      name: 'Workspace C',
      users: ['Salem']
    }
  ];

  return (
    
    <div className='Pmain wrapper'>
<NavWorkSpcae/>
<SideBar/> 
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
                <h4>{workspace.name}</h4>
                <hr />
                <div className="row">
                  {workspace.users.map((user, index) => (
                    <div key={index} className="col-6 mb-3">
                      <div className="card styleCard">
                        <div className="card-body">
                          <FaUserCircle size={30} />
                          <h6>{user}</h6>
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
