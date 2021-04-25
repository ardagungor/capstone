import React from "react";
import classes from "./Cards.module.css";
import Card from "./Card/Card";

const Cards = () => {
  return (
    <div className={classes.main}>
      <Card number="0" text="Orders" />
      <Card number="1235" text="Adjfaf" />
      <Card number="751" text="Aajkshdasu" />
      <Card number="751" text="Aajkshdasu" />
    </div>
  );
};

export default Cards;
