import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import classes from "./Login.module.css";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [redirect, setRedirect] = useState(false);

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
                if (res.status == "200") {
                  localStorage.setItem("token", res.data.token);
                  localStorage.setItem("logged", true);
                  localStorage.setItem("id", res.data.id);
                  setRedirect(true);
                  window.location.reload();
                  if (res.data.roles.length === 6) {
                    localStorage.setItem("role", "admin");
                  } else if (res.data.roles.length === 4) {
                    localStorage.setItem("role", "personnel");
                  } else if (res.data.roles.length === 2) {
                    localStorage.setItem("role", "user");
                  }
                }
              })
              .catch((err) => {
                console.log(err);
                if (username.length > 0 && password.length > 0) {
                  alert(
                    "Login failed. Please check your username and password"
                  );
                }
              });
          }}
        >
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              required
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
              required
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
        {redirect ? <Redirect to="/" /> : null}
      </div>
    </div>
  );
};

export default Login;
