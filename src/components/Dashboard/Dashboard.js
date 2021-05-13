import React, { useEffect, useState } from "react";
import classes from "./Dashboard.module.css";
import axios from "axios";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const Dashboard = () => {
  const [providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(false);
  let [page, setPage] = useState(0);

  const loadData = () => {
    axios({
      url: "http://localhost:8080/providers?page=" + page,
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
    loadData();

    console.log(providers);
  }, [page]);
  return (
    <div className={classes.recentOrders}>
      <div className={classes.header}>
        <h2>Dashboard</h2>
        <div className={classes.pages}>
          <GrFormPrevious
            onClick={() => {
              if (page != 0) setPage(page - 1);
            }}
            className={classes.paginator}
          />
          <GrFormNext
            onClick={() => {
              if (page != 3) {
                setPage(page + 1);
              }
            }}
            className={classes.paginator}
          />
          <h4>{page + 1}/4</h4>
        </div>
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
          {providers.map((provider) => {
            return loading ? (
              <tr>
                <td>{provider.providerName}</td>
                <td>{provider.providerDesc}</td>
                <td>{provider.foundationYear}</td>
                <td>{provider.numberOfOrders}</td>
                <td>{provider.operationArea}</td>
                <td>{provider.products}</td>
                <td>{provider.certificates}</td>
              </tr>
            ) : (
              <h2>Loading</h2>
            );
          })}
          {/* <tr>
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
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
