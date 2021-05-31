import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import classes from "./AddCertToProvider.module.css";
import axios from "axios";

const AddCertToProvider = () => {
  const [providers, setProviders] = useState([]);
  const [provider, setProvider] = useState(null);
  const [providerId, setProviderId] = useState(1);
  const [productName, setProductName] = useState(null);
  const [loading, setLoading] = useState(false);
  const [certName, setCertName] = useState("");

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
              url: `http://localhost:8080/providers/${providerId}/insertCert`,
              method: "post",
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
              data: {
                certName: certName,
              },
            })
              .then((res) => {
                console.log(res);
                alert("Certificate " + certName + " added");
              })
              .catch((err) => {
                console.log(err);
                alert(
                  "Certificate does not exist. Please check the certificate name."
                );
              });
          }}
        >
          <h3> Add Certificate To Provider</h3>
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
            <Form.Label>Certificate</Form.Label>
            <Form.Control
              type="text"
              required
              placeholder="Enter product name"
              onChange={(e) => {
                setCertName(e.target.value);
              }}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Add Certificate To Provider
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddCertToProvider;
