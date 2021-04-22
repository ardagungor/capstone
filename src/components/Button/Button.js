import classes from "./Button.module.css";
import React from "react";

const Button = (props) => {
  return (
    <button className={classes.btn} onClick={props.clicked}>
      {props.text}
    </button>
  );
};

export default Button;
