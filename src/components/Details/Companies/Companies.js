import classes from "./Companies.module.css";
import React from "react";
import { NavLink } from "react-router-dom";

const Companies = () => {
  return (
    <div className={classes.companies}>
      <div className={classes.header}>
        <h2>Companies</h2>
        <NavLink to="/dashboard">
          <span className={classes.view_link}>View All</span>
        </NavLink>
      </div>
      <table>
        <thead>
          <tr>
            <td>Company</td>
            <td>Foundation Year</td>
            <td>Number of Orders</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>X Logistics</td>
            <td>2004</td>
            <td>43</td>
          </tr>
          <tr>
            <td>LeBron Logistics</td>
            <td>2005</td>
            <td>87</td>
          </tr>
          <tr>
            <td>Messi Limited</td>
            <td>2014</td>
            <td>23</td>
          </tr>
          <tr>
            <td>X Logistics</td>
            <td>2004</td>
            <td>43</td>
          </tr>
          <tr>
            <td>Aasdasd Logistics</td>
            <td>2021</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Companies;
