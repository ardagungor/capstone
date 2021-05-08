import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import classes from "./Login.module.css";
import axios from "axios";
import Cookies from "js-cookie";

const Login = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState("");

  return (
    <div className={classes.container}>
      <div className={classes.form}>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            axios
              .post("http://localhost:8080/auth/login", {
                username: username,
                password: password,
              })
              .then((res) => {
                console.log(res);
              })
              .catch((err) => {
                console.log(err);
              });
            

            
              // axios.get("http://localhost:8080/providers").then((res) =>
              //   console.log(res).catch((err) => {
              //     console.log(err);
              //   })
              // );
            
          }}
        >
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
