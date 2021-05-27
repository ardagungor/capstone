import React, { useState, useEffect } from "react";
import classes from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";
import { MdBorderColor } from "react-icons/md";

const Sidebar = () => {
  const [elements, setElements] = useState();

  useEffect(() => {
    setElements(
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
            {localStorage.getItem("id") ? (
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
            ) : null}
            {localStorage.getItem("id") &
            (localStorage.getItem("role") === "admin") ? (
              <li>
                <NavLink
                  to="/admin-panel"
                  className={classes.sidebar_li}
                  activeClassName={classes.activeLink}
                >
                  <span className={classes.icon}>
                    <MdBorderColor />
                  </span>
                  <span className={classes.title}>Admin Panel</span>
                </NavLink>
              </li>
            ) : null}
            {localStorage.getItem("id") ? (
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
            ) : null}
            {localStorage.getItem("id") ? (
              <li>
                <NavLink
                  to="/order-summary"
                  className={classes.sidebar_li}
                  activeClassName={classes.activeLink}
                >
                  <span className={classes.icon}>
                    <MdBorderColor />
                  </span>
                  <span className={classes.title}>Order Summary</span>
                </NavLink>
              </li>
            ) : null}
            {localStorage.getItem("id") ? (
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
            ) : null}
            {localStorage.getItem("id") ? (
              <li>
                <NavLink
                  to="/products"
                  className={classes.sidebar_li}
                  activeClassName={classes.activeLink}
                >
                  <span className={classes.icon}>
                    <MdBorderColor />
                  </span>
                  <span className={classes.title}>Products</span>
                </NavLink>
              </li>
            ) : null}

            {localStorage.getItem("id") ? (
              <li>
                <NavLink
                  to="/login"
                  className={classes.sidebar_li}
                  activeClassName={classes.activeLink}
                  onClick={() => {
                    localStorage.removeItem("token");
                    localStorage.removeItem("id");
                    localStorage.setItem("logged", false);
                    localStorage.removeItem("role");

                    window.location.reload();
                  }}
                >
                  <span className={classes.icon}>
                    <MdBorderColor />
                  </span>
                  <span className={classes.title}>Logout</span>
                </NavLink>
              </li>
            ) : null}
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
    );
  }, [localStorage.getItem("logged")]);

  return <div>{elements}</div>;
};

export default Sidebar;
