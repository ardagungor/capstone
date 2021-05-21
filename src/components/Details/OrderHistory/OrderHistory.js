import React, { useState, useEffect } from "react";
import classes from "./OrderHistory.module.css";
import { NavLink } from "react-router-dom";
import axios from "axios";

const OrderHistory = () => {
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);

  const loadData = () => {
    axios({
      url: "http://localhost:8080/orders",
      method: "get",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => {
        setOrders(res.data.content);
        setLoading(true);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  useEffect(() => {
    loadData();
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
            <td>Provider (request gelecek)</td>
            <td>Amount Delivered</td>
            <td>Amount Lost</td>
            <td>Paid Amount</td>
            <td>Status</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => {
            return loading ? (
              <tr key={order.orderId}>
                <td>{order.orderId}</td>
                <td>{order.providerId}</td>
                <td>{order.amountDelivered}</td>
                <td>{order.amountLost}</td>
                <td>{order.paidAmount}</td>
                <td>
                  <div className={classes.state}>{order.state}</div>
                </td>
                <td>
                  <button className={classes.btnConfirm}>
                    Confirm Arrival
                  </button>
                </td>
              </tr>
            ) : (
              "Loading"
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default OrderHistory;
