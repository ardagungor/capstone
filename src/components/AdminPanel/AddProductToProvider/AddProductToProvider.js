import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import classes from "./AddProductToProvider.module.css";
import axios from "axios";

const AddProductToProvider = () => {
  const [providers, setProviders] = useState([]);
  const [provider, setProvider] = useState(null);
  const [providerId, setProviderId] = useState(1);
  const [productName, setProductName] = useState(null);
  const [temp, setTemp] = useState(null);
  const [tempUnit, setTempUnit] = useState("C");
  const [humidity, setHumidity] = useState(null);
  const [humidityUnit, setHumidityUnit] = useState("%");
  const [loading, setLoading] = useState(false);

  const loadData = () => {
    axios({
      url: "http://localhost:8080/providers?size=150",
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
  }, []);
  return (
    <div className={classes.container}>
      <div className={classes.form}>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            axios({
              url: `http://localhost:8080/providers/${providerId}/insertProduct`,
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
                alert("Product " + productName + " is added.");
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          <h3>Add Product To Provider</h3>
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>Select Provider</Form.Label>
            <Form.Control
              as="select"
              custom
              onClick={(e) => {
                setProvider(e.target.value);
                setProviderId(e.target.value.replace(/[^0-9]/g, ""));
              }}
            >
              <option></option>
              {providers.map((provider) => {
                return loading ? (
                  <option>
                    {provider.providerId} - {provider.providerName}
                  </option>
                ) : (
                  "Loading"
                );
              })}
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formBasicUsername">
            <Form.Label>Product</Form.Label>
            <Form.Control
              type="text"
              required
              placeholder="Enter product name"
              onChange={(e) => {
                setProductName(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group controlId="formBasicUsername">
            <Form.Label>Ideal Temperature (°C)</Form.Label>
            <Form.Control
              type="number"
              required
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
            <Form.Label>Ideal Humidity (%)</Form.Label>
            <Form.Control
              type="number"
              step="any"
              required
              placeholder="Enter ideal humidity percentage"
              onChange={(e) => {
                setHumidity(e.target.value);
              }}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Add Product To Provider
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddProductToProvider;
