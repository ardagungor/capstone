import React, { useState, useEffect } from "react";
import classes from "./Cards.module.css";
import axios from "axios";
import Card from "./Card/Card";

const Cards = () => {
  const [orders, setOrders] = useState(0);
  const [spent, setSpent] = useState(0);
  const [array, setArray] = useState([]);
  const [provs, setProvs] = useState(0);

  const loadOrders = () => {
    axios({
      url: "http://localhost:8080/orders?size=150",
      method: "get",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => {
        setOrders(res.data.totalElements);
        setArray(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const loadCompanies = () => {
    axios({
      url: "http://localhost:8080/providers?size=150",
      method: "get",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => {
        setProvs(res.data.totalElements);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    let total = 0;
    loadOrders();
    array.forEach((e) => (total += e.paidAmount));
    setSpent(total);
    loadCompanies();
  });
  return (
    <div className={classes.main}>
      <Card number={orders} text="Orders" icon="clipboard" />
      <Card number={spent} text="Spent" icon="money" />
      <Card number={provs} text="Companies" icon="company" />
      <Card number="751" text="Something" icon="clipboard" />
    </div>
  );
};

export default Cards;
