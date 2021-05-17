import React from "react";
import classes from "./AdminPanel.module.css";
import AddUser from "./AddUser/AddUser";
import AddProduct from "./AddProduct/AddProduct";

const AdminPanel = () => {
  return (
    <div className={classes.adminPanel}>
      <AddUser />
      <AddProduct />
    </div>
  );
};

export default AdminPanel;
