import React, { useEffect } from "react";
import classes from "./Dashboard.module.css";
import axios from "axios";

const Dashboard = () => {
  const options = {
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  };
  useEffect(() => {
    axios({
      url: "http://localhost:8080/providers",
      method: "get",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => {
       //console.log(res.data.content);
        res.data.content.forEach(element => {
          console.log(element.providerName)
        });
      })
      .catch((err) => {
        console.log(err);
      });

    // axios
    //   .get("localhost:8080/providers", options)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  });

  return (
    <div className={classes.recentOrders}>
      <div className={classes.header}>
        <h2
          onClick={() => {
            axios({
              url: "http://localhost:8080/providers",
              method: "get",
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
          }}
        >
          Dashboard
        </h2>
      </div>
      <table>
        <thead>
          <tr>
            <td>Provider Name</td>
            <td>Description</td>
            <td>Foundation Year</td>
            <td># of Orders</td>
            <td>Operation Area</td>
            <td>Product Names</td>
            <td>Certifications</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>X Logistics</td>
            <td>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </td>
            <td>1975</td>
            <td>453</td>
            <td>Istanbul</td>
            <td>Apple, melon, eggs, tomato, apple, melon, eggs, tomato </td>
            <td>Cert 1, Cert 2, Cert 3, Cert 4</td>
          </tr>
          <tr>
            <td>X Logistics</td>
            <td>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </td>
            <td>1975</td>
            <td>453</td>
            <td>Istanbul</td>
            <td>Apple, melon, eggs, tomato, apple, melon, eggs, tomato </td>
            <td>Cert 1, Cert 2, Cert 3, Cert 4</td>
          </tr>
          <tr>
            <td>X Logistics</td>
            <td>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </td>
            <td>1975</td>
            <td>453</td>
            <td>Istanbul</td>
            <td>Apple, melon, eggs, tomato, apple, melon, eggs, tomato </td>
            <td>Cert 1, Cert 2, Cert 3, Cert 4</td>
          </tr>
          <tr>
            <td>X Logistics</td>
            <td>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </td>
            <td>1975</td>
            <td>453</td>
            <td>Istanbul</td>
            <td>Apple, melon, eggs, tomato, apple, melon, eggs, tomato </td>
            <td>Cert 1, Cert 2, Cert 3, Cert 4</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
