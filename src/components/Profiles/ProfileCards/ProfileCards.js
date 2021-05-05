import React from "react";
import classes from "./ProfileCards.module.css";
import axios from "axios";
import Card from "../../Cards/Card/Card";

const ProfileCards = () => {
  return (
    <div className={classes.main}>
      <Card number="4" text="Orders" />
      <Card number="74%" text="Reliability" />
      <Card number="158" text="Total vehicle count" />
      <Card number="142" text="Green Vehicle Count" />
    </div>
  );
};

export default ProfileCards;
