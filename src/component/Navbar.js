import React, { useEffect } from "react";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import noteContext from "../context/note/noteContext";


export default function Navbar() {
  let location = useLocation();
  let navigate = useNavigate();
  const {darkMode, setDarkMode} = useContext(noteContext)
  useEffect(() => {}, [location]);
  const handelLogout = () => {
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  };
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${darkMode ? "dark":"primary"} bg-${darkMode ? "dark":"primary"} bg-gradient bg-opacity-${darkMode ? "1":"25"}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            iNoteBook
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/home" ? "active" : ""}`} aria-current="page" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">
                  About
                </Link>
              </li>
            </ul>
            <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={()=>setDarkMode((x)=>!x)}/>  
</div>
            {!localStorage.getItem("token") && (
              <form className="d-flex">
                <Link role="button" className="btn btn-primary mx-1" to="/login">
                  Login
                </Link>
                <Link role="button" className="btn btn-primary mx-1" to="/signup">
                  Signup
                </Link>
              </form>
            )}

            {localStorage.getItem("token") && (
              <button type="button" className={`btn btn-${darkMode ? "dark":"light"} mx-1`} onClick={handelLogout}>
                Logout
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
