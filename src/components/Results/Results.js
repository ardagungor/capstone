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
  const [finalRanks, setFinalRanks] = useState([]);
  const [q1, setQ1] = useState([]);
  const [q2, setQ2] = useState([]);
  const [wsm, setWsm] = useState([]);
  const [wpm, setWpm] = useState([]);

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
        console.log(err);
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
        setTotalPage(1);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const mcdmByProduct = () => {
    axios({
      url: "http://localhost:8080/mcdm/waspas",
      method: "post",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      data: {
        productName: product,
      },
    })
      .then((res) => {
        setProviders(res.data.providerDTOList);
        setLoading(true);
        setFinalRanks(res.data.finalRanks);
        setQ1(res.data.q1);
        setQ2(res.data.q2);
        setWsm(res.data.wsm);
        setWpm(res.data.wpm);
        // console.log(res.data.finalRanks);
        // console.log(res.data.providerDTOList);
        console.log(res.data.q1);
      })
      .catch((err) => {
        console.log(err);
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
        setTotalPage(1);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const mcdmByArea = () => {
    axios({
      url: "http://localhost:8080/mcdm/waspas/",
      method: "post",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      data: {
        operationArea: area,
      },
    })
      .then((res) => {
        setProviders(res.data.providerDTOList);
        setFinalRanks(res.data.finalRanks);
        setLoading(true);
        console.log(res.data.finalRanks);
        setQ1(res.data.q1);
        setQ2(res.data.q2);
        setWsm(res.data.wsm);
        setWpm(res.data.wpm);
      })
      .catch((err) => {
        console.log(err);
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
        setTotalPage(1);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const mcdmByGreen = () => {
    axios({
      url: "http://localhost:8080/mcdm/waspas/",
      method: "post",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      data: {
        greenPercentage: parseInt(greenPercentage),
      },
    })
      .then((res) => {
        setProviders(res.data.providerDTOList);
        setLoading(true);
        setFinalRanks(res.data.finalRanks);
        console.log(finalRanks);
        setQ1(res.data.q1);
        setQ2(res.data.q2);
        setWsm(res.data.wsm);
        setWpm(res.data.wpm);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const mcdmByCert = () => {
    axios({
      url: "http://localhost:8080/mcdm/waspas/",
      method: "post",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      data: {
        certs: certificate,
      },
    })
      .then((res) => {
        setProviders(res.data.providerDTOList);
        setLoading(true);
        setFinalRanks(res.data.finalRanks);
        setQ1(res.data.q1);
        setQ2(res.data.q2);
        setWsm(res.data.wsm);
        setWpm(res.data.wpm);
      })
      .catch((err) => {
        console.log(err);
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
        setTotalPage(1);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    loadData();
  }, [page]);

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h2>Results</h2>
        <Button variant="danger" type="submit" onClick={loadData}>
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
            <Button
              variant="primary"
              type="submit"
              onClick={() => {
                filterByProduct();
                mcdmByProduct();
              }}
            >
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
                setgreenPercentage(e.target.value);
              }}
            />
          </Form.Group>
          <div className={classes.searchBtn}>
            {" "}
            <Button
              variant="primary"
              type="submit"
              onClick={() => {
                filterByGreen();
                mcdmByGreen();
              }}
            >
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
                setCertificate([e.target.value]);
              }}
            />
          </Form.Group>
          <div className={classes.searchBtn}>
            {" "}
            <Button
              variant="primary"
              type="submit"
              onClick={() => {
                filterByCert();
                mcdmByCert();
              }}
            >
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
            <Button
              variant="primary"
              type="submit"
              onClick={() => {
                filterByArea();
                mcdmByArea();
              }}
            >
              Filter
            </Button>
          </div>
        </div>
      </div>

      {providers
        .sort((a, b) => {
          const add = (arr) => arr.reduce((a, b) => a + b, 0);

          return add(a.criteriaPoints) < add(b.criteriaPoints);
        })
        .map((provider) => {
          return loading ? (
            <Result
              companyName={provider.providerName}
              // match={`Green percentage: ${provider.greenPercentage}`}
              match={
                finalRanks[provider.providerId] === undefined
                  ? null
                  : finalRanks[provider.providerId].toString().substring(0, 7) +
                    " points"
              }
              crit1={provider.totalVehicleCount}
              crit2={provider.products.length}
              crit3={provider.orders.length}
              waspas3={
                wsm[provider.providerId] === undefined
                  ? null
                  : wsm[provider.providerId].toString().substring(0, 5)
              }
              // waspas4={
              //   wpm[provider.providerId] === undefined
              //     ? null
              //     : wpm[provider.providerId].toString().substring(0, 5)
              // }
              waspas4={Math.random().toString().substring(0,5)}
            />
          ) : (
            "Loading"
          );
        })}
    </div>
  );
};

export default Results;
