import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import classes from "./AddUser.module.css";
import axios from "axios";

const AddUser = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [email, setEmail] = useState(null);
  const [role, setRole] = useState(null);


  return (
    <div className={classes.container}>
      <div className={classes.form}>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            axios
              .post("http://localhost:8080/auth/signup", {
                username: username,
                password: password,
                email: email,
                role: role.toLowerCase(),
              })
              .then((res) => {
                if (res.status == "200") {
                  console.log(res);
                  alert("User " + username + " is created.");
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

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group controlId="exampleForm.SelectCustom">
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
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddUser;
