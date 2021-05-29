import React, { useState, useEffect } from "react";
import Result from "./Result/Result";
import axios from "axios";
import classes from "./Results.module.css";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { Form, Button } from "react-bootstrap";

const Results = () => {
  const [providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState();
  const [product, setProduct] = useState("");
  const [greenPercentage, setgreenPercentage] = useState(0);
  const [area, setArea] = useState("");
  const [certificate, setCertificate] = useState([]);

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
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const filterByProduct = () => {
    axios({
      url: "http://localhost:8080/mcdm/filter",
      method: "post",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      data: {
        productName: product,
      },
    })
      .then((res) => {
        setProviders(res.data.content);
        setLoading(true);
        setTotalPage(res.data.totalPages);
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const filterByArea = () => {
    axios({
      url: "http://localhost:8080/mcdm/filter/",
      method: "post",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      data: {
        operationArea: area,
      },
    })
      .then((res) => {
        setProviders(res.data.content);
        setLoading(true);
        setTotalPage(res.data.totalPages);
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const filterByGreen = () => {
    axios({
      url: "http://localhost:8080/mcdm/filter/",
      method: "post",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      data: {
        greenPercentage: parseInt(greenPercentage),
      },
    })
      .then((res) => {
        setProviders(res.data.content);
        setLoading(true);
        setTotalPage(res.data.totalPages);
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const filterByCert = () => {
    axios({
      url: "http://localhost:8080/mcdm/filter/",
      method: "post",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      data: {
        certs: certificate,
      },
    })
      .then((res) => {
        setProviders(res.data.content);
        setLoading(true);
        setTotalPage(res.data.totalPages);
        console.log(res);
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
        <Button variant="primary" type="submit" onClick={loadData}>
          Remove Filters{" "}
        </Button>
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
      <div className={classes.filter}>
        <div className={classes.filterElements}>
          <Form.Group controlId="formBasicUsername">
            <Form.Control
              type="text"
              required
              placeholder="Product name"
              onChange={(e) => {
                setProduct(e.target.value);
              }}
            />
          </Form.Group>
          <div className={classes.searchBtn}>
            {" "}
            <Button variant="primary" type="submit" onClick={filterByProduct}>
              Filter
            </Button>
          </div>
        </div>
        <div className={classes.filterElements}>
          <Form.Group controlId="formBasicUsername">
            <Form.Control
              type="number"
              step="any"
              required
              placeholder="Green percentage"
              onChange={(e) => {
                greenPercentage(e.target.value);
              }}
            />
          </Form.Group>
          <div className={classes.searchBtn}>
            {" "}
            <Button variant="primary" type="submit" onClick={filterByGreen}>
              Filter
            </Button>
          </div>
        </div>
        <div className={classes.filterElements}>
          <Form.Group controlId="formBasicUsername">
            <Form.Control
              type="text"
              required
              placeholder="Certificate"
              onChange={(e) => {
                setCertificate(e.target.value);
              }}
            />
          </Form.Group>
          <div className={classes.searchBtn}>
            {" "}
            <Button variant="primary" type="submit" onClick={filterByCert}>
              Filter
            </Button>
          </div>
        </div>
        <div className={classes.filterElements}>
          <Form.Group controlId="formBasicUsername">
            <Form.Control
              type="text"
              required
              placeholder="Operation area"
              onChange={(e) => {
                setArea(e.target.value);
              }}
            />
          </Form.Group>
          <div className={classes.searchBtn}>
            {" "}
            <Button variant="primary" type="submit" onClick={filterByArea}>
              Filter
            </Button>
          </div>
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
