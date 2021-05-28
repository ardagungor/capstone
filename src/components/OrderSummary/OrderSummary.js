import React, { useState, useEffect } from "react";
import classes from "./OrderSummary.module.css";
import axios from "axios";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const OrderSummary = () => {
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState();

  const deleteData = (id) => {
    axios({
      url: "http://localhost:8080/orders/delete/" + id,
      method: "delete",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const loadData = () => {
    axios({
      url: "http://localhost:8080/orders?size=10&page=" + page,
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
            <td>Provider ID</td>
            <td>Order Date</td>
            <td>Arrival Date</td>
            <td>Amount Delivered</td>
            <td>Amount Crushed</td>
            <td>Amount Spoiled</td>
            <td>Paid Amount</td>
            <td>Status</td>
            <td></td>
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
                    {order.promisedArrival
                      ? order.promisedArrival.slice(0, 10)
                      : "null"}
                  </td>
                  <td>
                    {order.actualArrival
                      ? order.actualArrival.slice(0, 10)
                      : "null"}
                  </td>
                  <td>
                    {order.amountDelivered} {order.unit.toLowerCase()}
                  </td>
                  <td>
                    {order.amountCrushed} {order.unit.toLowerCase()}
                  </td>
                  <td>
                    {order.amountSpoiled} {order.unit.toLowerCase()}
                  </td>
                  <td>
                    {order.paidAmount}{" "}
                    {order.currency != null
                      ? order.currency.toUpperCase()
                      : order.currency}
                  </td>
                  <td>
                    <div className={classes.state}>
                      {order.state ? order.state.toUpperCase() : null}
                    </div>
                  </td>
                  <td>
                    <button
                      className={classes.btnDdelete}
                      onClick={() => deleteData(order.orderId)}
                    >
                      Delete
                    </button>
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

export default OrderSummary;
