import React from "react";
import classes from "./OrderSummary.module.css";

const OrderSummary = () => {
  return (
    <div className={classes.recentOrders}>
      <div className={classes.header}>
        <h2>Order Summary</h2>
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

export default OrderSummary;
