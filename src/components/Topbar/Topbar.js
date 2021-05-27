import React from "react";
import classes from "./Topbar.module.css";

const Topbar = () => {
  return (
    <div className={classes.main}>
      <div className={classes.topbar}>
        <div className={classes.toggle}></div>
        {/* <div className={classes.search}>
          <label>
            <input type="text" placeholder="Search" />
          </label>
        </div> */}
        <div className={classes.user}>
          <img
            className={classes.profile_photo}
            src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" alt="Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
