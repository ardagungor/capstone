import React, { useState, useEffect } from "react";
import classes from "./OrderHistory.module.css";
import { NavLink } from "react-router-dom";
import axios from "axios";

const OrderHistory = () => {
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  const [providers, setProviders] = useState([]);

  const loadOrders = () => {
    axios({
      url: "http://localhost:8080/orders?size=7",
      method: "get",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => {
        setOrders(res.data.content);
        setLoading(true);
        console.log(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const loadProviders = () => {
    axios({
      url: "http://localhost:8080/providers/",
      method: "get",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => {
        setProviders(res.data.content);
        setLoading(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadOrders();
    loadProviders();
  }, []);

  return (
    <div className={classes.recentOrders}>
      <div className={classes.header}>
        <h2>Recent Orders</h2>
        <NavLink to="/order-summary">
          <span className={classes.view_link}>View All</span>
        </NavLink>
      </div>
      <table>
        <thead>
          <tr>
            <td>Order ID</td>
            <td>Provider ID</td>
            <td>Amount Delivered</td>
            <td>Amount Lost</td>
            <td>Paid Amount</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => {
            if (order.owner.userId == localStorage.getItem("id")) {
              return loading ? (
                <tr key={order.orderId}>
                  <td>{order.orderId}</td>
                  <td>{order.providerId}</td>
                  <td>
                    {order.amountDelivered} {order.unit.toLowerCase()}
                  </td>
                  <td>
                    {order.amountOrdered - order.amountDelivered}{" "}
                    {order.unit.toLowerCase()}
                  </td>
                  <td>
                    {order.paidAmount}{" "}
                    {order.currency != null
                      ? order.currency.toUpperCase()
                      : order.currency}
                  </td>
                  <td>
                    <div className={classes.state}>
                      {order.state.toUpperCase()}
                    </div>
                  </td>
                </tr>
              ) : (
                "Loading"
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
};

export default OrderHistory;
