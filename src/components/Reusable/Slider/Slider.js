import classes from "./Slider.module.css";
import React from "react";

const Slider = (props) => {
  return (
    <div className={classes.container}>
      <input
        className={classes.slider}
        type="range"
        min="1"
        max="10"
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default Slider;
