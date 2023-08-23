import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <ul className="navbar">
        <li>
          <NavLink
            style={({ isActive }) => {
              return { Color: isActive ? "skyblue" : "" };
            }}
            className="nav-bar-link "
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return {  Color: isActive ? "skyblue" : "" };
            }}
            className="nav-bar-link "
            to="/about"
          >
            about
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return {  Color: isActive ? "skyblue" : "" };
            }}
            className="nav-bar-link "
            to="/contact"
          >
            Contact
          </NavLink>

          <NavLink
            style={({ isActive }) => {
              return {  Color: isActive ? "skyblue" : "" };
            }}
            className="nav-bar-link "
            to="/filter"
          >
            Filter
          </NavLink>

          <NavLink
          style={({ isActive }) => {
            return {  Color: isActive ? "skyblue" : "" };
          }}
          className="nav-bar-link "
          to="/login"
        >
          Login
        </NavLink>

     
        </li>
      </ul>
    </>
  );
}

export default NavBar;
