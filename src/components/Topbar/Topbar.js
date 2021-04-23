import React from "react";
import classes from "./Topbar.module.css";
import { GrMenu } from "react-icons/gr";

const Topbar = () => {
  return (
    <div className={classes.main}>
      <div className={classes.topbar}>
        <div className={classes.toggle}>
          {/* <GrMenu
            style={{
              width: "40px",
              height: "40px",
              marginLeft: "auto",
              marginRight: "auto",
              paddingLeft: "5px",
              paddingTop: "15px",
            }}
          /> */}
        </div>
        <div className={classes.search}>
          <label>
            <input type="text" placeholder="Search" />
          </label>
        </div>
        <div className={classes.user}>
          <img
            className={classes.profile_photo}
            src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
