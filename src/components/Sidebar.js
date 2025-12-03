import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>My SaaS</h2>
      <ul>
        <li>
          <NavLink to="/" end className="nav-link">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" className="nav-link">
            Users
          </NavLink>
        </li>
        <li>
          <NavLink to="/reports" className="nav-link">
            Reports
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings" className="nav-link">
            Settings
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
