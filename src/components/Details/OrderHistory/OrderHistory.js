import React from "react";
import classes from "./OrderHistory.module.css";
import { NavLink } from "react-router-dom";

const OrderHistory = () => {
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
            <td>Product</td>
            <td>Cost</td>
            <td>Company</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Apple</td>
            <td>$234</td>
            <td>X Limited</td>
          </tr>
          <tr>
            <td>Apple</td>
            <td>$234</td>
            <td>X Limited</td>
          </tr>
          <tr>
            <td>Apple</td>
            <td>$234</td>
            <td>X Limited</td>
          </tr>
          <tr>
            <td>Apple</td>
            <td>$234</td>
            <td>X Limited</td>
          </tr>
          <tr>
            <td>Apple</td>
            <td>$234</td>
            <td>X Limited</td>
          </tr>
          <tr>
            <td>Apple</td>
            <td>$234</td>
            <td>X Limited</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrderHistory;
