import React from 'react';
import { NavLink } from 'react-router-dom';
import './HomeHeader.css';
import { HashLink as Link } from 'react-router-hash-link';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JavaScript library

const signorname = () => {
  if (localStorage.getItem('token') === null) {
    return (
      <NavLink className="btn me-2 getStarted" type="submit" to="/signup">
        Sign Up
      </NavLink>
    );
  } else {
    return (
      <NavLink className="btn me-2 getStarted" type="submit" to="/Workspace">
        Workspace
      </NavLink>
    );
  }
};

const HomeHeader = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg homenavbar">
        <div className="container-fluid">
          <NavLink className="navbar-brand font" to="/">
            ExoTask
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span><i class="fas fa-bars"></i></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className="nav-link active font"
                  aria-current="page"
                  to="#hero"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active font"
                  aria-current="page"
                  to="#Services"
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active font"
                  aria-current="page"
                  to="#contactus"
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active font"
                  aria-current="page"
                  to="#aboutus"
                >
                  About Us
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              {signorname()}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HomeHeader;
