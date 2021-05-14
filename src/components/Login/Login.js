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
                  console.log("asd");
                  localStorage.setItem("token", res.data.token);
                  localStorage.setItem("logged", true);

                  setRedirect(true);
                }
              })
              .catch((err) => {
                console.log(err);
                alert("Login failed. Please check your username and password");
              });

            // axios({
            //   method: "post",
            //   url: "http://localhost:8080/auth/login",
            //   data: {
            //     username: username,
            //     password: password,
            //   },
            //   headers: { "Access-Control-Allow-Origin": "localhost:8080" },
            // }).then(
            //   (response) => {
            //     console.log(response);
            //   },
            //   (error) => {
            //     console.log(error);
            //   }
            // );

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
        {redirect ? <Redirect to="/" /> : null}
      </div>
    </div>
  );
};

export default Login;
