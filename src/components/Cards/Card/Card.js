import React from "react";
import classes from "./Card.module.css";
import { GiAbstract027 } from "react-icons/gi";

const Card = (props) => {
  return (
    <div className={classes.card}>
      <div>
        <div className={classes.number}>{props.number}</div>
        <div className={classes.text}>{props.text}</div>
      </div>
      <div className={classes.icon}>
        <GiAbstract027 />
      </div>
    </div>
  );
};

export default Card;
