import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import classes from "./Order.module.css";
import axios from "axios";

const Order = () => {
  const [arrivalDate, setArrivalDate] = useState(null);
  const [orderDate, setOrderDate] = useState(null); //otomatik olarak değeri alıcaz
  const [amount, setAmount] = useState(0);
  const [unit, setUnit] = useState("");
  const [provider, setProvider] = useState(null); //dropdown menüden liste
  const [deliveryLocation, setDeliveryLocation] = useState("");
  const [orderState, setOrderState] = useState("PLACED");
  const [providers, setProviders] = useState([]);
  const [page, setPage] = useState(0);

  const loadData = () => {
    axios({
      url: "http://localhost:8080/providers",
      method: "get",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => {
        setPage(res.data.totalPages);
        setProviders(res.data.content);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.form}>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            axios({
              url: "http://localhost:8080/orders/add",
              method: "post",
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
              data: {
                arrivalDate: arrivalDate,
                orderDate: orderDate,
                amount: parseFloat(amount),
                unit: unit,
                deliveryLocation: deliveryLocation,
                state: orderState,
              },
            })
              .then((res) => {
                console.log(res);
              })
              .catch((err) => {
                console.log(err);
              });

            console.log(
              arrivalDate,
              orderDate,
              parseFloat(amount),
              unit,
              deliveryLocation
            );
            console.log(
              typeof arrivalDate,
              typeof orderDate,
              typeof parseFloat(amount),
              typeof unit,
              typeof deliveryLocation
            );
          }}
        >
          <Form.Group controlId="formBasicUsername">
            <Form.Label
              onClick={() => {
                console.log(providers);
              }}
            >
              Arrival Date
            </Form.Label>
            <Form.Control
              type="date"
              onChange={(e) => {
                setArrivalDate(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group controlId="formBasicUsername">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              type="number"
              step="any"
              placeholder="Enter the amount"
              onChange={(e) => {
                setAmount(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group controlId="formBasicUsername">
            <Form.Label>Unit</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the unit"
              onChange={(e) => {
                setUnit(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group controlId="formBasicUsername">
            <Form.Label>Delivery Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the delivery location"
              onChange={(e) => {
                setDeliveryLocation(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>Select Provider</Form.Label>
            <Form.Control
              as="select"
              custom
              onClick={(e) => {
                setProvider(e.target.value);
              }}
            >
              {
                (setTimeout(() => {
                  providers.map((prov) => {
                    <option>{prov.providerDesc}</option>;
                  });
                }),
                1500)
              }
              {/* <option>Admin</option>
              <option>Personnel</option>
              <option>User</option> */}
            </Form.Control>
          </Form.Group>

          <Button variant="primary" type="submit">
            Add Order
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Order;
