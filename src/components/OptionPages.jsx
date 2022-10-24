import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./optionspage.css";
function OptionPages() {
  return (
    <>
      <nav className="options">
        <NavLink to={"/home/users"}>Users</NavLink>
        <NavLink to={"/home/projects"}>Projects</NavLink>
      </nav>
    </>
  );
}

export default OptionPages;
