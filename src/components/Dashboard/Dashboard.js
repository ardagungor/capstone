import React, { useEffect, useState } from "react";
import classes from "./Dashboard.module.css";
import axios from "axios";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const Dashboard = (props) => {
  const [providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState();

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
        setTotalPage(res.data.totalPages);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  useEffect(() => {
    loadData();
  }, [page]);
  return (
    <div className={classes.recentOrders}>
      <div className={classes.header}>
        <h2>Dashboard</h2>
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
            <td>Provider Name</td>
            <td>Provider ID</td>

            <td>Description</td>
            <td>Foundation Year</td>
            <td># of Orders</td>
            <td>Operation Area</td>
            <td>Certifications</td>
          </tr>
        </thead>
        <tbody>
          {providers.map((provider) => {
            return loading ? (
              <tr
                key={provider.providerId}
                onClick={() => {
                  props.history.push("/profiles/" + provider.providerId);
                }}
              >
                <td>{provider.providerName}</td>
                <td>{provider.providerId}</td>

                <td>{provider.providerDesc}</td>
                <td>{provider.foundationYear}</td>
                <td>{provider.numberOfOrders}</td>
                <td>{provider.operationArea}</td>
                <td>{provider.certificates}</td>
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

export default Dashboard;
