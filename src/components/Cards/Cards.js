import React from "react";
import classes from "./Cards.module.css";
import axios from "axios";
import Card from "./Card/Card";

const Cards = () => {
  return (
    <div className={classes.main}>
      <Card number="713" text="Orders" />
      <Card number="$29384" text="Spent" />
      <Card number="23" text="Companies" />
      <Card number="751" text="Something" />
    </div>
  );
};

export default Cards;
