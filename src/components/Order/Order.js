import React, { useState } from "react";
import classes from "./Order.module.css";
import Slider from "../Reusable/Slider/Slider";
import Button from "../Reusable/Button/Button";

const Order = () => {
  const [speed, setSpeed] = useState(1);
  const [cost, setCost] = useState(1);
  const [reliability, setReliability] = useState(1);

  return (
    <div className={classes.container}>
      <div className={classes.desc}>
        <h3 className={classes.order_h3}>Please make your selection below.</h3>
        <p style={{ color: "#fff" }}>
          On a scale of 1 to 10, you can score how important these criteria are
          to you.
        </p>
      </div>
      <div className={classes.inputArea}>
        <h5 className={classes.order_h5}>Speed</h5>
        <Slider
          onChange={(e) => {
            setSpeed(e.target.value);
          }}
          value={speed}
        />
        <h5 className={classes.indicator}>{speed}/10</h5>
      </div>
      <div className={classes.inputArea}>
        <h5 className={classes.order_h5}>Cost</h5>
        <Slider
          onChange={(e) => {
            setCost(e.target.value);
          }}
          value={cost}
        />
        <h5 className={classes.indicator}>{cost}/10</h5>
      </div>
      <div className={classes.inputArea}>
        <h5 className={classes.order_h5}>Reliability</h5>
        <Slider
          onChange={(e) => {
            setReliability(e.target.value);
          }}
          value={reliability}
        />
        <h5 className={classes.indicator}>{reliability}/10</h5>
      </div>
      <Button
        text="SEARCH"
        onClick={() => {
          console.log(speed, cost, reliability);
        }}
      />
    </div>
  );
};

export default Order;
