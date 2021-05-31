import React from "react";
import classes from "./AdminPanel.module.css";
import AddUser from "./AddUser/AddUser";
import AddProduct from "./AddProduct/AddProduct";
import AddVehicle from "./AddVehicle/AddVehicle";
import AddCertificate from "./AddCertificate/AddCertificate";
import AddRoute from "./AddRoute/AddRoute";
import AddProvider from "./AddProvider/AddProvider";
import AddProductToProvider from "./AddProductToProvider/AddProductToProvider";
import AddCertToProvider from "./AddCertToProvider/AddCertToProvider";

const AdminPanel = () => {
  return localStorage.getItem("role") === "user" ? (
    <h1>You are not authorized to view this page.</h1>
  ) : (
    <div className={classes.adminPanel}>
      {localStorage.getItem("role") === "admin" ? <AddUser /> : null}
      <AddProvider />
      <AddProduct />
      <AddVehicle />
      <AddCertificate />
      <AddRoute />
      <AddProductToProvider />
      <AddCertToProvider />
    </div>
  );
};

export default AdminPanel;
