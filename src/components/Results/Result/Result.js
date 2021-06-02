import classes from "./Result.module.css";
import React from "react";

const CompanyInfo = (props) => {
  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <div className={classes.logo}>
          <img
            className={classes.img}
            src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo3.jpg"
            alt="logo"
          />
        </div>
        <div className={classes.info}>
          <div className={classes.upper}>
            <div className={classes.name}>{props.companyName}</div>
            <div className={classes.match}>{props.match}</div>
          </div>
          <div className={classes.lower}>
            <div className={classes.criteria}>Vehicle count: {props.crit1}</div>
            <div className={classes.criteria}>Product count: {props.crit2}</div>
            <div className={classes.criteria}>Order Count: {props.crit3}</div>
          </div>
          <div className={classes.lower}>
            <div className={classes.criteria}>WSM: {props.waspas3}</div>
            <div className={classes.criteria}>WPM: {props.waspas4}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
