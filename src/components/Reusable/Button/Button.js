import classes from "./Button.module.css";
import React from "react";

const Button = (props) => {
  return (
    <button onClick={props.onClick} className={classes.button}>
      {props.text}
    </button>
  );
};

export default Button;
