import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import classes from "./AddProduct.module.css";
import axios from "axios";

const AddProduct = () => {
  const [productName, setProductName] = useState(null);
  const [temp, setTemp] = useState(null);
  const [tempUnit, setTempUnit] = useState("C");
  const [humidity, setHumidity] = useState(null);
  const [humidityUnit, setHumidityUnit] = useState("%");

  return (
    <div className={classes.container}>
      <div className={classes.form}>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            axios({
              url: "http://localhost:8080/products/add",
              method: "post",
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
              data: {
                productName: productName,
                idealTemp: parseFloat(temp),
                tempUnit: tempUnit,
                idealHumidity: parseFloat(humidity),
                humidityUnit: humidityUnit,
              },
            })
              .then((res) => {
                console.log(res);
                alert("Product " + productName + " is created.");
              })
              .catch((err) => {
                console.log(err);
              });
            console.log(
              typeof productName,
              typeof parseFloat(temp),
              typeof tempUnit,
              typeof humidityUnit,
              typeof parseFloat(humidity)
            );
          }}
        >
          <h3>Add User</h3>

          <Form.Group controlId="formBasicUsername">
            <Form.Label>Product</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter product name"
              onChange={(e) => {
                setProductName(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group controlId="formBasicUsername">
            <Form.Label>Ideal Temperature</Form.Label>
            <Form.Control
              type="number"
              step="any"
              placeholder="Enter ideal temperature"
              onChange={(e) => {
                setTemp(e.target.value);
              }}
            />
          </Form.Group>

          {/* <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>Temperature Unit</Form.Label>
            <Form.Control
              as="select"
              custom
              onChange={(e) => {
                setTempUnit(e.target.value);
              }}
            >
              <option>C</option>
              <option selected="selected">K</option>
              <option>F</option>
            </Form.Control>
          </Form.Group> */}

          <Form.Group controlId="formBasicUsername">
            <Form.Label>Ideal Humidity %</Form.Label>
            <Form.Control
              type="number"
              step="any"
              placeholder="Enter ideal humidity percentage"
              onChange={(e) => {
                setHumidity(e.target.value);
              }}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Add Product
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddProduct;
