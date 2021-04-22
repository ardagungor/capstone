import React from "react";
import classes from "./Boxes.module.css";
import { VscChevronRight } from "react-icons/vsc";
import { BsFillHouseFill } from "react-icons/bs";
import { FaTruckMoving } from "react-icons/fa";
import { HiDocumentReport } from "react-icons/hi";

const Boxes = () => {
  return (
    <div className={classes.container}>
      <div className={classes.box}>
        <BsFillHouseFill
          style={{
            width: "25px",
            height: "25px",
            marginLeft: "auto",
            marginRight: "auto",
            paddingBottom: "10px",
          }}
        />
        Choose what matters for your company
      </div>
      <VscChevronRight style={{ width: "150px", height: "150px" }} />

      <div className={classes.box}>
        <FaTruckMoving
          style={{
            width: "25px",
            height: "25px",
            marginLeft: "auto",
            marginRight: "auto",
            paddingBottom: "10px",
          }}
        />
        Find the best logistics provider for your needs
      </div>
      <VscChevronRight style={{ width: "150px", height: "150px" }} />

      <div className={classes.box}>
        <HiDocumentReport
          style={{
            width: "30px",
            height: "30px",
            marginLeft: "auto",
            marginRight: "auto",
            paddingBottom: "10px",
          }}
        />
        Track your transaction summary
      </div>
    </div>
  );
};

export default Boxes;
