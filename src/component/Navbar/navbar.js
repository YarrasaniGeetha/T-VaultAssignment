import React from "react";
import "./index.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="header_section">
      <div className="logo">
        <h1>T-VAULT</h1>
      </div>
      <div className="nav">
        <ul className="nav_list">
          <NavLink to="/safes" activeClassName="active">
            <li>Safes</li>
          </NavLink>

          <NavLink to="/vault?data=hello" activeClassName="active">
            <li>Vault AppRoles</li>
          </NavLink>

          <NavLink to="/service" activeClassName="active">
            <li>Service Accounts</li>
          </NavLink>

          <NavLink to="/iam" activeClassName="active">
            <li>IAM Service Accounts</li>
          </NavLink>

          <NavLink to="/azure" activeClassName="active">
            <li> Azure Active Directory</li>
          </NavLink>
        </ul>
      </div>
      <div className="profile">
        <span>Documentation</span>
        <span>(Admin) Davis R.</span>
      </div>
    </div>
  );
};

export default Navbar;
