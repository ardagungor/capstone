import classes from "./Result.module.css";
import Button from "../../Reusable/Button/Button";
import React from "react";

const CompanyInfo = (props) => {
  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <div className={classes.logo}>
          <img
            className={classes.img}
            src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo3.jpg"
          />
          <Button text="Select" />
        </div>
        <div className={classes.info}>
          <div className={classes.upper}>
            <div className={classes.name}>{props.companyName}</div>
            <div className={classes.match}>{props.match}%</div>
          </div>
          <div className={classes.lower}>
            <div className={classes.criteria}>Crit 1 - {props.crit1}/10</div>
            <div className={classes.criteria}>Crit 2 - {props.crit2}/10</div>
            <div className={classes.criteria}>Crit 3 - {props.crit3}/10</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
