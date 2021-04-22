import React from "react";
import classes from "./Percent.module.css";

const Percent = () => {
  return (
    <div className={classes.container}>
      <div className={classes.group}>
        <div className={classes.percentage}>
          <p>45%</p>
        </div>
        <div className={classes.desc}>
          <p>45% increase in productivity</p>
        </div>
      </div>

      <div className={classes.group}>
        <div className={classes.percentage}>
          <p>37%</p>
        </div>
        <div className={classes.desc}>
          <p>37% increase in customer satisfaction</p>
        </div>
      </div>

      <div className={classes.group}>
        <div className={classes.percentage}>
          <p>24%</p>
        </div>
        <div className={classes.desc}>
          <p>24% decrease in costs</p>
        </div>
      </div>
    </div>
  );
};

export default Percent;
