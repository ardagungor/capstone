import React from "react";
import classes from "./AdminPanel.module.css";
import AddUser from "./AddUser/AddUser";
import AddProduct from "./AddProduct/AddProduct";
import AddVehicle from "./AddVehicle/AddVehicle";
import AddCertificate from "./AddCertificate/AddCertificate";

const AdminPanel = () => {
  return (
    <div className={classes.adminPanel}>
      <AddUser />
      <AddProduct />
      <AddVehicle />
      <AddCertificate />
    </div>
  );
};

export default AdminPanel;
