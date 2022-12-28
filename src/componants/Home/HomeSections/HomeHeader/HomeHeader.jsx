import React from 'react'
import { NavLink } from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css';
import './HomeHeader.css'
const HomeHeader = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
            <NavLink className="navbar-brand font" to="/">ExoTask</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse collapseanim navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <NavLink className="nav-link active font" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link font" to="/signup">Signup</NavLink>
                        </li>
                    </ul>
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

