import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import classes from "./AddCertificate.module.css";
import axios from "axios";

const AddCertificate = () => {
  const [certName, setCertName] = useState("");

  return (
    <div className={classes.container}>
      <div className={classes.form}>
        <h3>Add Certificate</h3>
        <Form
          onSubmit={(e) => {
            e.preventDefault();

            axios({
              url: "http://localhost:8080/certificates/add",
              method: "post",
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
              data: { certName: certName },
            })
              .then((res) => {
                alert("Certificate " + certName + " added.");
              })
              .catch((err) => {
                console.log(err);
                alert(err);
              });
          }}
        >
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Certificate Name</Form.Label>
            <Form.Control
              type="text" required
              placeholder="Enter certificate name"
              onChange={(e) => {
                setCertName(e.target.value);
              }}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Add Certificate
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddCertificate;
