import React from "react";

const Topbar = ({ darkMode, onToggleTheme }) => {
  return (
    <div className="topbar">
      <h1>Dashboard</h1>
      <div className="topbar-right">
        <button className="theme-toggle" onClick={onToggleTheme}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
        <span>Welcome, Admin</span>
      </div>
    </div>
  );
};

export default Topbar;
