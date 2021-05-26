import React, { useState, useEffect } from "react";
import classes from "./Profile.module.css";
import Card from "../../Cards/Card/Card";
import axios from "axios";

const Profile = (props) => {
  const [provider, setProvider] = useState({});

  const loadData = () => {
    let str = window.location.pathname;
    str = str.substring(str.lastIndexOf("/") + 1);

    axios({
      url: "http://localhost:8080/providers/" + str,
      method: "get",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => {
        console.log(res.data);
        setProvider(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className={classes.profile}>
      <div className={classes.name}>
        {provider.data ? provider.data.providerName : "Name"}
      </div>
      <div className={classes.year}>
        {provider.data ? provider.data.foundationYear : "Year"}
      </div>
      <div className={classes.desc}>
        {provider.data ? provider.data.providerDesc : "Description"}
      </div>
      <div className={classes.area}>
        {provider.data ? provider.data.operationArea : "Operation Area"}
      </div>
      <div className={classes.cards}>
        <Card
          number={provider.data ? provider.data.numberOfOrders : "0"}
          text="Total Orders"
          icon="clipboard"
        />
        <Card
          number={
            provider.data
              ? provider.data.reliabilityPercentage == null
                ? "47%"
                : provider.data.reliabilityPercentage
              : "47%"
          }
          text="Reliability Rate"
          icon="percent"
        />
        <Card
          number={provider.data ? provider.data.totalVehicleCount : "0"}
          text="Total vehicle count"
          icon="vehicle"
        />
        <Card
          number={provider.data ? provider.data.greenPercentage + "%" : "0%"}
          text="Green Vehicle Percentage"
          icon="green"
        />
      </div>
    </div>
  );
};

export default Profile;
