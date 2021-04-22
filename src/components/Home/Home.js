import React from "react";
import classes from "./Home.module.css";
import { Link } from "react-router-dom";
import { BiSelectMultiple } from "react-icons/bi";
import { HiDocumentReport } from "react-icons/hi";

const Home = () => {
  return (
    <div className={classes.container}>
      {/* <Link to="/login">
        <div className={classes.card}>
          <a href="#">Login</a>
          <p>Make a logistics provider selection</p>
          <hr />
          <BiSelectMultiple
            style={{
              width: "75px",
              height: "75px",
              marginLeft: "auto",
              marginRight: "auto",
              paddingBottom: "10px",
            }}
          />
        </div>
      </Link>
      <Link to="/">
        <div className={classes.card}>
          <a href="#">Homepage</a>
          <p>View transaction summary</p>

          <hr />
          <HiDocumentReport
            style={{
              width: "75px",
              height: "75px",
              marginLeft: "auto",
              marginRight: "auto",
              paddingBottom: "10px",
            }}
          />
        </div>
      </Link> */}
      <p>Under Construction</p>
    </div>
  );
};

export default Home;
