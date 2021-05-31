import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import classes from "./AddRoute.module.css";
import axios from "axios";

const AddRoute = () => {
  const [certName, setCertName] = useState();
  const [vehicles, setVehicles] = useState([]);
  const [vehicle, setVehicle] = useState();
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [destinations, setDestinations] = useState("");
  const [arr, setArr] = useState([]);

  const [loading, setLoading] = useState(false);

  const loadData = () => {
    axios({
      url: "http://localhost:8080/vehicles?size=150",
      method: "get",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => {
        setVehicles(res.data.content);
        setLoading(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    loadData();
  }, []);
  return (
    <div className={classes.container}>
      <div className={classes.form}>
        <h3>Add Route to Vehicle</h3>

        <Form
          onSubmit={(e) => {
            e.preventDefault();
            axios({
              url: "http://localhost:8080/routes/add",
              method: "post",
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
              data: {
                vehicleId: vehicle.replace(/[^0-9]/g, ""),
                from: from,
                to: to,
                destinations: arr,
              },
            })
              .then((res) => {
                alert("Route added.");
              })
              .catch((err) => {
                console.log(err);
                alert(err);
              });
            // console.log(from, to, destinations, vehicle, arr);
            // console.log(
            //   typeof from,
            //   typeof to,
            //   typeof destinations,
            //   typeof vehicle,
            //   typeof arr
            // );
          }}
        >
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>Select Vehicle</Form.Label>
            <Form.Control
              as="select"
              required
              custom
              onClick={(e) => {
                setVehicle(e.target.value);
              }}
            >
              {" "}
              <option></option>
              {vehicles.map((vehicle) => {
                return loading ? (
                  <option key={vehicle.vehicleId}>
                    {vehicle.vehicleId} - {vehicle.vehicleType} -{" "}
                    {vehicle.vehicleModel}
                  </option>
                ) : (
                  "Loading"
                );
              })}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>From</Form.Label>
            <Form.Control
              type="text"
              required
              placeholder="From (e.g. Beşiktaş, İstanbul, Samsun)"
              onChange={(e) => {
                setFrom(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>To</Form.Label>
            <Form.Control
              type="text"
              required
              placeholder="To (e.g. Çankaya, Ankara, Antalya)"
              onChange={(e) => {
                setTo(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group controlId="formBasicUsername">
            <Form.Label>Destinations (seperate with a comma)</Form.Label>
            <Form.Control
              type="text"
              required
              placeholder="To (Sarıyer, Ortaköy, Beşiktaş, Taksim)"
              onChange={(e) => {
                setDestinations(e.target.value);
                setArr(destinations.split(" ,"));
              }}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Add Route
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddRoute;
