import React from "react";
import classes from "./AdminPanel.module.css";
import AddUser from "./AddUser/AddUser";
import AddProduct from "./AddProduct/AddProduct";
import AddVehicle from "./AddVehicle/AddVehicle";
import AddCertificate from "./AddCertificate/AddCertificate";
import AddRoute from "./AddRoute/AddRoute";
import AddProvider from "./AddProvider/AddProvider";

const AdminPanel = () => {
  return (
    <div className={classes.adminPanel}>
      <AddUser />
      <AddProvider />
      <AddProduct />
      <AddVehicle />
      <AddCertificate />
      <AddRoute />
    </div>
  );
};

export default AdminPanel;
