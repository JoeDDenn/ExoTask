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
        const response2 = await axios
          .post(
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
          )
          .then((response) => {
            if (response.data == true) {
              Swal.fire({
                icon: "success",
                text: "User Invited Successfully",
              });
            }
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",

              text: error.response.data[0],
            });
          });
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getAllRequst();
  }, []);

  const getAllRequst = async () => {
    try {
      const token = "Bearer " + localStorage.getItem("token");
      const response = await axios.get(
        "https://localhost:7042/api/ProjectJoinRequestSer/GetAllRequst",
        { headers: { Authorization: token } }
      );

      const jrlist = JSON.parse(JSON.stringify(response.data));

      setJoinRequests(jrlist);
    } catch (error) {
      setJoinRequests([]);
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

  const handleAccept = async (item) => {
    try {
      const token = "Bearer " + localStorage.getItem("token");
      const response = await axios.post(
        "https://localhost:7042/api/ProjectJoinRequestSer/AccpetIvite",
        {
          projectid: item.projectID,
        },
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data === true) {
        Swal.fire({
          icon: "success",
          text: "Invite Accepted Successfully",
        });

        // Perform any additional actions after successful acceptance
        console.log(item.projectID);
        // For example, you can refresh the join requests or perform other updates
        getAllRequst();
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        text: "Failed to accept invite",
      });
      console.error(error);
    }
  };
  const handleDelete = async (item) => {
    try {
      const token = "Bearer " + localStorage.getItem("token");
      const response = await axios.post(
        "https://localhost:7042/api/ProjectJoinRequestSer/rejectRequset",
        {
          projectid: item.projectID,
        },
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data === true) {
        Swal.fire({
          icon: "success",
          text: "Invite Rejected Successfully",
        });

        // Perform any additional actions after successful acceptance
        console.log(item.projectID);
        // For example, you can refresh the join requests or perform other updates
        getAllRequst();
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        text: "Failed to Rejecte invite",
      });
      console.error(error);
    }
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

          <li className="nav-item dropdown">
            <a className="nav-link" data-toggle="dropdown" href="#">
              <i className="far fa-bell"></i>
              <span className="badge badge-warning navbar-badge">
                {joinRequests.length}
              </span>
            </a>
            <div className="dropdown-menu p-3 dropdown-menu-lg dropdown-menu-right">
              {/* Dropdown menu content */}
              <div className="notifHeader">
                <p className="notifText">
                  You have {joinRequests.length} requests
                </p>
              </div>
              {/* display items in joinrequests if they exist, otherwise an empty div */}
              {joinRequests.length > 0 ? (
                joinRequests.map((item) => (
                  <div className="dropdown-item notifItem">
                    {/* Message Start */}
                    <div className="notf">
                      <p className="notifText">
                        you have been invited to project
                        <span className="notifSpan">{item.name}</span>
                      </p>
                    </div>
                    <button
                      className="btn-small notifAccept m-2"
                      onClick={() => handleAccept(item)}
                    >
                      Accept
                    </button>
                    <button
                      className="btn-small notifReject m-2"
                      onClick={() => handleDelete(item)}
                    >
                      Reject
                    </button>
                  </div>
                ))
              ) : (
                <div>
                  <p>no requests</p>
                </div>
              )}
            </div>
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
