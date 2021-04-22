import React from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={`${classes.container} ${classes.flex}`}>
      <Link to="/">
        <h1>Capstone 1220</h1>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/login">
              <a href="#" className={classes.a}>
                Login 
              </a>
            </Link>
          </li>
          <li>
            <Link to="/home">
              <a href="#" className={classes.a}>
                Home
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
