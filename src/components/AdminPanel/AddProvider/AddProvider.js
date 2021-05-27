import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import classes from "./AddProvider.module.css";
import axios from "axios";

const AddProvider = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [year, setYear] = useState(0);
  const [operationArea, setOperationArea] = useState("");

  return (
    <div className={classes.container}>
      <div className={classes.form}>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            axios({
              url: "http://localhost:8080/providers/add",
              method: "post",
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
              data: {
                providerName: name,
                providerDesc: desc,
                foundationYear: year,
                operationArea: operationArea,
              },
            })
              .then((res) => {
                console.log(res);
                alert("Provider " + name + " is created.");
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          <h3>Add Provider</h3>

          <Form.Group controlId="formBasicUsername">
            <Form.Label>Provider Name</Form.Label>
            <Form.Control
              type="text"
              required
              placeholder="Enter provider name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group controlId="formBasicUsername">
            <Form.Label>Provider Description</Form.Label>
            <Form.Control
              type="text"
              required
              placeholder="Enter provider description"
              onChange={(e) => {
                setDesc(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group controlId="formBasicUsername">
            <Form.Label>Foundation Year</Form.Label>
            <Form.Control
              type="number"
              required
              step="any"
              placeholder="Enter foundation year"
              onChange={(e) => {
                setYear(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group controlId="formBasicUsername">
            <Form.Label>Operation Area</Form.Label>
            <Form.Control
              type="text"
              required
              placeholder="Enter operation area"
              onChange={(e) => {
                setOperationArea(e.target.value);
              }}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Add provider
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddProvider;
