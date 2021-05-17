import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import classes from "./AddProduct.module.css";
import axios from "axios";

const AddProduct = () => {
  const [productName, setProductName] = useState(null);
  const [temp, setTemp] = useState(null);
  const [tempUnit, setTempUnit] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [humidityUnit, setHumidityUnit] = useState(null);

  return (
    <div className={classes.container}>
      <div className={classes.form}>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            axios
              .post("http://localhost:8080/auth/signup", {
                productName: productName,
                temp: temp,
                tempUnit: tempUnit,
                humidity: humidity,
                humidityUnit: setHumidityUnit,
              })
              .then((res) => {
                if (res.status == "200") {
                  console.log(res);
                  alert("Product " + productName + " is created.");
                }
              })
              .catch((err) => {
                console.log(err);
                alert(
                  "User creation failed. Please check the username and password"
                );
              });
          }}
        >
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
              placeholder="Enter ideal temperature"
              onChange={(e) => {
                setTemp(e.target.value);
              }}
            />
          </Form.Group>

          {/* <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>Select role</Form.Label>
            <Form.Control
              as="select"
              custom
              onClick={(e) => {
                setRole(e.target.value);
              }}
            >
              <option>Admin</option>
              <option>Personnel</option>
              <option>User</option>
            </Form.Control>
          </Form.Group> */}

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddProduct;
