import React from 'react'
import './SideBar.css'
import { Link } from 'react-router-dom'
import NewProject from './Actions/NewProject'

const SideBar = () => {
  return (
    <>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <Link to="/" className="brand-link">
          <img src="/Assets/Exotask4.png" alt="AdminLTE Logo" className="brand-image" style={{opacity: '.8'}} />
          <span className="brand-text font-weight-light pl-1">ExoTask</span>
        </Link>
        
        {/* Sidebar */}
          <div className="sidebar">
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
              <div className="image">
                <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image"/>
              </div>
              <div className="info">
                <a href="#" className="d-block">Alexander Pierce</a>
              </div>
            </div>
        {/* Sidebar */}
          {/* Sidebar user panel (optional) */}
        <div className="sidebar mt-2">
          {/* Sidebar user panel (optional) */}
          
          {/* SidebarSearch Form */}
          <div className="form-inline">
            <div className="input-group" data-widget="sidebar-search">
              <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
              <div className="input-group-append">
                <button className="btn btn-sidebar">
                  <i className="fas fa-search fa-fw" />
                </button>
              </div>
            </div>
          </div>
           {/* /SidebarSearch Form */}

          {/* new project button*/}
          <NewProject />
          {/* /new project button*/}


          {/* Sidebar Menu */}
          <nav className="mt-2">
          </nav>
          {/* /.sidebar-menu */}
          
        </div>
        {/* /.sidebar */}
        </div>
      </aside>  
    </>
  )
}

export default SideBar
