import React from "react";
import classes from "./Home.module.css";
import Topbar from "../Topbar/Topbar";
import Cards from "../Cards/Cards";
import Details from "../Details/Details";

const Home = () => {
  return (
    <div className={classes.main}>
      <Topbar />
      <Cards />
      <Details />
    </div>
  );
};

export default Home;
