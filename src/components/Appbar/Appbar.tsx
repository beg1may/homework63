import React from "react";
import {NavLink} from "react-router-dom";

const Appbar: React.FC = ({}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <span className="navbar-brand">Post</span>
          <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <NavLink to="/" className="nav-link">Home</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink to="/new-post" className="nav-link">New Post</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink to="/о" className="nav-link">About Us</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink to="/contacts" className="nav-link">Contact</NavLink>
              </li>
          </ul>
      </div>
    </nav>
  );
};

export default Appbar;