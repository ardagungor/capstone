import React from "react";
import classes from "./Card.module.css";
import { FaPercentage, FaTruckMoving, FaRecycle } from "react-icons/fa";
import { BsClipboardData } from "react-icons/bs";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { GiFactory } from "react-icons/gi";

const Card = (props) => {
  let icon = null;
  switch (props.icon) {
    case "percent":
      icon = <FaPercentage />;
      break;
    case "clipboard":
      icon = <BsClipboardData />;
      break;
    case "vehicle":
      icon = <FaTruckMoving />;
      break;
    case "green":
      icon = <FaRecycle />;
      break;
    case "money":
      icon = <RiMoneyDollarCircleFill />;
      break;
    case "company":
      icon = <GiFactory />;
      break;
    default:
      break;
  }
  return (
    <div className={classes.card}>
      <div>
        <div className={classes.number}>{props.number}</div>
        <div className={classes.text}>{props.text}</div>
      </div>
      <div className={classes.icon}>{icon}</div>
    </div>
  );
};

export default Card;
