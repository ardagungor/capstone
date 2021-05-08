import React from "react";
import classes from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";
import { MdBorderColor } from "react-icons/md";
import { GrDocumentPerformance } from "react-icons/gr";

const Sidebar = () => {
  return (
    <div>
      {/* <div className={classes.container}>
        <NavLink to="/">
          <h1 className={classes.sidebar_h1}>Capstone 1220</h1>
        </NavLink>
        <ul className={classes.sidebar_ul}>
          <li className={classes.sidebar_li}>
            <NavLink
              to="/order"
              className={classes.sidebar_li}
              activeClassName={classes.activeLink}
            >
              <MdBorderColor
                style={{
                  width: "30px",
                  height: "30px",
                  marginLeft: "auto",
                  marginRight: "auto",
                  paddingLeft: "5px",
                }}
              />
              <span className={classes.sidebar_a}>Order</span>
            </NavLink>
          </li>
          <li className={classes.sidebar_li}>
            <NavLink
              to="/home"
              className={classes.sidebar_li}
              activeClassName={classes.activeLink}
            >
              <GrDocumentPerformance
                style={{
                  width: "30px",
                  height: "30px",
                  marginLeft: "auto",
                  marginRight: "auto",
                  paddingLeft: "5px",
                }}
              />
              <span className={classes.sidebar_a}>Order Summary</span>
            </NavLink>
          </li>
          <li className={classes.sidebar_li}>
            <NavLink
              to="/results"
              className={classes.sidebar_li}
              activeClassName={classes.activeLink}
            >
              <GrDocumentPerformance
                style={{
                  width: "30px",
                  height: "30px",
                  marginLeft: "auto",
                  marginRight: "auto",
                  paddingLeft: "5px",
                }}
              />
              <span className={classes.sidebar_a}>Results</span>
            </NavLink>
          </li>
        </ul>
      </div> */}
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
                  <MdBorderColor
                  // style={{
                  //   width: "30px",
                  //   height: "30px",
                  //   marginLeft: "auto",
                  //   marginRight: "auto",
                  //   paddingLeft: "5px",
                  // }}
                  />
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
