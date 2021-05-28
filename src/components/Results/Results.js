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
        <h2>Results</h2>
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
          <Result
            companyName={provider.providerName}
            match={`Green percentage: ${provider.greenPercentage}`}
          />
        ) : (
          "Loading"
        );
      })}
    </div>
  );
};

export default Results;
