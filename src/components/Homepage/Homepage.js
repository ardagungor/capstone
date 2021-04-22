import React from "react";
import classes from "./Homepage.module.css";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className={classes.container}>
      <div className={classes.cards}>
        <div className={classes.card}>
          <h2>Have an account?</h2>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className={classes.card}>
          <h2>Have an account?</h2>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
