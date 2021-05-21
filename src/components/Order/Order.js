import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import classes from "./Order.module.css";
import axios from "axios";

const Order = () => {
  const [arrivalDate, setArrivalDate] = useState(null);
  const [orderDate, setOrderDate] = useState(null);
  const [amount, setAmount] = useState(0);
  const [unit, setUnit] = useState("");
  const [provider, setProvider] = useState(null);
  const [deliveryLocation, setDeliveryLocation] = useState("");
  const [orderState, setOrderState] = useState("PLACED");
  const [providers, setProviders] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [currency, setCurrency] = useState("TL");

  const loadData = () => {
    axios({
      url: "http://localhost:8080/providers",
      method: "get",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => {
        setProviders(res.data.content);
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
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth() + 1;
            var yyyy = today.getFullYear();
            if (dd < 10) {
              dd = "0" + dd;
            }
            if (mm < 10) {
              mm = "0" + mm;
            }
            today = yyyy + "-" + mm + "-" + dd;
            setOrderDate(today);
            axios({
              url: "http://localhost:8080/orders/add",
              method: "post",
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
              data: {
                arrivalDate: arrivalDate,
                orderDate: orderDate,
                amount: amount,
                unit: unit,
                deliveryLocation: deliveryLocation,
                state: orderState,
                providerId: provider.replace(/[^0-9]/g, ""),
                currency: currency,
              },
            })
              .then((res) => {
                if (res.status === 200) {
                  alert("Order added.");
                }
              })
              .catch((err) => {
                console.log(err);
              });

            // console.log(
            //   arrivalDate,
            //   orderDate,
            //   parseFloat(amount),
            //   unit,
            //   deliveryLocation,
            //   provider.replace(/[^0-9]/g, "")
            // );
            // console.log(
            //   typeof arrivalDate,
            //   typeof orderDate,
            //   typeof parseFloat(amount),
            //   typeof unit,
            //   typeof deliveryLocation,
            //   typeof parseInt(provider.charAt(0))
            // );
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
              {providers.map((provider) => {
                return loading ? (
                  <option>
                    {provider.providerId} - {provider.providerName}
                  </option>
                ) : (
                  "Loading"
                );
              })}
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
