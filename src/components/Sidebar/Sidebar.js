import React, { useState, useEffect } from "react";
import classes from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";
import { MdBorderColor } from "react-icons/md";

const Sidebar = () => {
  const [logged, setLogged] = useState(false);

  useEffect(() => {});

  return (
    <div>
      <div className={classes.container}>
        <div className={classes.navigation}>
          <ul>
            <li>
              <NavLink
                to="/"
                className={classes.sidebar_li}
                activeClassName={classes.activeLink}
              >
                <span className={classes.icon}></span>
                <span className={classes.title}>Capstone 1220</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                className={classes.sidebar_li}
                activeClassName={classes.activeLink}
              >
                <span className={classes.icon}>
                  <MdBorderColor />
                </span>
                <span className={classes.title}>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/order"
                className={classes.sidebar_li}
                activeClassName={classes.activeLink}
              >
                <span className={classes.icon}>
                  {" "}
                  <MdBorderColor />
                </span>
                <span className={classes.title}>Order</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/home"
                className={classes.sidebar_li}
                activeClassName={classes.activeLink}
              >
                <span className={classes.icon}>
                  <MdBorderColor />
                </span>
                <span className={classes.title}>Order Summary</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/results"
                className={classes.sidebar_li}
                activeClassName={classes.activeLink}
              >
                <span className={classes.icon}>
                  <MdBorderColor />
                </span>
                <span className={classes.title}>Results</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/login"
                className={classes.sidebar_li}
                activeClassName={classes.activeLink}
                onClick={() => {
                  localStorage.removeItem("token");
                  localStorage.setItem("logged", false);
                }}
              >
                <span className={classes.icon}>
                  <MdBorderColor />
                </span>
                <span className={classes.title}>Logout</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/login"
                className={classes.sidebar_li}
                activeClassName={classes.activeLink}
              >
                <span className={classes.icon}>
                  <MdBorderColor />
                </span>
                <span className={classes.title}>Login</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
