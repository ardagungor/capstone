import React, { useState, useEffect } from "react";
import classes from "./OrderSummary.module.css";
import axios from "axios";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const OrderSummary = () => {
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState();
  const loadData = () => {
    axios({
      url: "http://localhost:8080/orders?page=" + page,
      method: "get",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => {
        setOrders(res.data.content);
        setLoading(true);
        setTotalPage(res.data.totalPages);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    loadData();
  }, [page]);
  return (
    <div className={classes.recentOrders}>
      <div className={classes.header}>
        <h2>Order Summary</h2>
        <div className={classes.pages}>
          <GrFormPrevious
            onClick={() => {
              if (page !== 0) setPage(page - 1);
            }}
            className={classes.paginator}
          />
          <GrFormNext
            onClick={() => {
              if (page !== totalPage - 1) {
                setPage(page + 1);
              }
            }}
            className={classes.paginator}
          />
          <h4>
            {page + 1}/{totalPage}
          </h4>
        </div>
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

export default OrderSummary;
