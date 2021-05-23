import classes from "./Companies.module.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Companies = (props) => {
  const [loading, setLoading] = useState(false);
  const [providers, setProviders] = useState([]);

  const loadData = () => {
    axios({
      url: "http://localhost:8080/providers?size=50",
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
        console.log(err.response.data);
      });
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <div className={classes.companies}>
      <div className={classes.header}>
        <h2>Recent Companies</h2>
        <NavLink to="/dashboard">
          <span className={classes.view_link}>View All</span>
        </NavLink>
      </div>
      <table>
        <thead>
          <tr>
            <td>Company</td>
            <td>Foundation Year</td>
            <td>Operation Area</td>
          </tr>
        </thead>
        <tbody>
          {providers.map((provider) => {
            return loading ? (
              <tr key={provider.providerId}>
                <td>{provider.providerName}</td>
                <td>{provider.foundationYear}</td>
                <td>{provider.operationArea}</td>
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

export default Companies;
