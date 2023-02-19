import React from 'react'
import { NavLink } from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css';
import './HomeHeader.css'
import {HashLink as Link} from 'react-router-hash-link';
const HomeHeader = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg homenavbar">
        <div className="container-fluid">
            <NavLink className="navbar-brand font" to="/">ExoTask</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse collapseanim navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <NavLink className="nav-link active font" aria-current="page" to="#hero">Home</NavLink>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link active font" aria-current="page" to="#Services">Services</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link active font" aria-current="page" to="#contactus">Contact</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link active font" aria-current="page" to="#aboutus">About Us</Link>
                        </li>
                    </ul>
                   
        <div className='d-flex'>
                <NavLink className="btn me-2 getStarted" type="submit" to="/signup">Sign Up</NavLink>
        </div>
                        
                    
                </div>
        </div>
    </nav>
      {/* <nav ClassName="navbar navbar-expand-lg bg-light">
        <div ClassName="container-fluid">
          <NavLink ClassName="navbar-brand" to="/">ExoTask</NavLink>
          <button ClassName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span ClassName="navbar-toggler-icon"></span>
          </button>
          <div ClassName="collapse navbar-collapse" id="navbarNavDropdown">
            <ul ClassName="navbar-nav">
              <li ClassName="nav-item">
                <NavLink ClassName="nav-link active" aria-current="page" to="/">Home</NavLink>
              </li>
              <li ClassName="nav-item">
                <NavLink ClassName="nav-link" to="/Login">Login</NavLink>
              </li>
              <li ClassName="nav-item">
                <NavLink ClassName="nav-link" to="/Signup">Signup</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
    </>
  )
}

export default HomeHeader

