import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./NavWorkSpcae.css";
import axios from "axios";

const NavWorkSpcae = () => {
  const [searchValue, setSearchValue] = useState("");
  const [joinRequests, setJoinRequests] = useState([]);
  const addUser = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("UserNameOrEail", searchValue);
      const response = await axios.post(
        "https://localhost:7042/api/User/Search",
        formData
      );

      console.log(response.data);

      if (response.data.userName != null) {
        const token = "Bearer " + localStorage.getItem("token");
        const response2 = await axios.post(
          "https://localhost:7042/api/ProjectJoinRequestSer/InvatieUser",
          {
            projectid: localStorage.getItem("defprojid"),
            userId: response.data.userId,
          },
          {
            headers: {
              Authorization: token,
            },
          }
        );
        console.log(response2.data);
        // window.location.reload();
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    setJoinRequests(getAllRequests());
    
  }, []);
  const getAllRequests = async () => {
    try {
      const token = "Bearer " + localStorage.getItem("token");
      const response = await axios.get(
        "https://localhost:7042/api/ProjectJoinRequestSer/GetAllRequst",
        { headers: { Authorization: token } }
      );
      
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  const LogOut = () => {
    if (localStorage.getItem("token") != null) {
      localStorage.removeItem("token");
      localStorage.removeItem("userName");
      window.location.href = "/";
    }
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    
    <>
      <nav className="main-header nav-workspace navbar navbar-expand navbar-white navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="pushmenu"
              href="#"
              role="button"
            >
              <i className="fas fa-bars"></i>
            </a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
        </ul>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="navbar-search"
              href="#"
              role="button"
            >
              <i className="fas fa-plus"></i>
            </a>

            <div className="navbar-search-block">
              <form className="form-inline" onSubmit={addUser}>
                <div className="input-group input-group-sm">
                  <input
                    className="form-control form-control-navbar"
                    type="search"
                    placeholder="Find User"
                    aria-label="Search"
                    value={searchValue}
                    onChange={handleSearchChange}
                  />
                  <div className="input-group-append">
                    <button className="btn btn-navbar" type="submit">
                      <i className="fas fa-plus"></i>
                    </button>
                    <button
                      className="btn btn-navbar"
                      type="button"
                      data-widget="navbar-search"
                    >
                      <i className="fas fa-times"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link" data-toggle="dropdown" href="#">
              <i className="far fa-comments"></i>
              <span className="badge badge-danger navbar-badge">3</span>
            </a>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              {/* Dropdown menu content */}
              
            </div>
          </li>

          <li className="nav-item dropdown" >
            <a className="nav-link" data-toggle="dropdown" href="#">
              <i className="far fa-bell"></i>
              <span className="badge badge-warning navbar-badge">15</span>
            </a>
            <button className="dropdown-menu dropdown-menu-lg dropdown-menu-right"  >
              {joinRequests.map((item) => (
              <div className="dropdown-item">
                {/* Message Start */}
                <div className="notf">
                <p>you have been invited to project {item.name}</p>
                </div>
                <button className="btn btn-success">Accept</button>
                <button className="btn btn-danger">Reject</button>
                </div>
              ))}

              
            </button>
          </li>

          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="fullscreen"
              href="#"
              role="button"
            >
              <i className="fas fa-expand-arrows-alt"></i>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="control-sidebar"
              data-slide="true"
              href="#"
              role="button"
            >
              <i className="fas fa-th-large"></i>
            </a>
          </li>

          <li className="nav-item">
            <a
              onClick={LogOut}
              className="nav-link"
              data-widget="control-sidebar"
              data-slide="true"
              role="button"
            >
              <i className="fas fa-sign-out-alt"></i>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavWorkSpcae;
