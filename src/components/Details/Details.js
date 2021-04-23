import classes from "./Details.module.css";
import OrderHistory from "./OrderHistory/OrderHistory";
import Companies from "./Companies/Companies"
import React from "react";

const Details = () => {
  return (
    <div className={classes.details}>
      <OrderHistory />
      <Companies />
    </div>
  );
};

export default Details;
