import React, { useState, useEffect } from "react";
import Result from "./Result/Result";
import axios from "axios";
import classes from "./Results.module.css";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const Results = () => {
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
    <div className={classes.container}>
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
      {providers.map((provider) => {
        return loading ? (
          <Result companyName={provider.providerName} match={provider.providerId}/>
        ) : (
          "Loading"
        );
      })}
      <Result
        companyName="Company 1"
        match="95"
        crit1="6"
        crit2="7"
        crit3="8"
      />
      <Result
        companyName="Company 2"
        match="74"
        crit1="2"
        crit2="7"
        crit3="8"
      />

      <Result
        companyName="Company 3"
        match="23"
        crit1="1"
        crit2="8"
        crit3="10"
      />

      <Result
        companyName="Company 4"
        match="54"
        crit1="4"
        crit2="8"
        crit3="1"
      />
    </div>
  );
};

export default Results;
