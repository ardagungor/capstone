import classes from "./Products.module.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const Products = (props) => {
  const [loading, setLoading] = useState(false);
  const [products, setproducts] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState();
  const loadData = () => {
    axios({
      url: "http://localhost:8080/products?size=7&page=" + page,
      method: "get",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => {
        setproducts(res.data.content);
        setLoading(true);
        setTotalPage(res.data.totalPages);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const deleteProduct = (id) => {
    axios({
      url: "http://localhost:8080/products/delete/" + id,
      method: "delete",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept, Z-Key",
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadData();
  }, [page]);
  return (
    <div className={classes.products}>
      <div className={classes.header}>
        <h2>Products</h2>
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
            <td>Product</td>
            <td>Ideal Temperature</td>
            <td>Ideal Humidity</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return loading ? (
              <tr key={product.productId}>
                <td>{product.productName.toLowerCase()}</td>
                <td>
                  {product.idealTemp} {product.tempUnit}
                </td>
                <td>
                  {product.idealHumidity} {product.humidityUnit}
                </td>
                <td>
                  <button
                    key={product.productId}
                    className={classes.btnDdelete}
                    onClick={() => {
                      deleteProduct(product.productId);
                    }}
                  >
                    Delete
                  </button>
                </td>
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

export default Products;
