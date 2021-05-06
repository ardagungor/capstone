import React from "react";
import classes from "./Cards.module.css";
import axios from "axios";
import Card from "./Card/Card";

const Cards = () => {
  return (
    <div className={classes.main}>
      <Card number="713" text="Orders" icon="clipboard"/>
      <Card number="$29384" text="Spent" icon="money"/>
      <Card number="23" text="Companies" icon="company"/>
      <Card number="751" text="Something" icon="clipboard"/>
    </div>
  );
};

export default Cards;
