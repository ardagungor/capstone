import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import classes from "./Order.module.css";
import axios from "axios";

const Order = () => {
  const [arrivalDate, setArrivalDate] = useState("");
  const [orderDate, setOrderDate] = useState("");
  const [amount, setAmount] = useState(0);
  const [unit, setUnit] = useState("");
  const [provider, setProvider] = useState(null);
  const [deliveryLocation, setDeliveryLocation] = useState("");
  const [orderState, setOrderState] = useState("PLACED");
  const [providers, setProviders] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [currency, setCurrency] = useState("TL");
  const [paidAmount, setPaidAmount] = useState(0);
  const [amountDelivered, setAmountDelivered] = useState(0);
  const [amountCrushed, setAmountCrushed] = useState(0);
  const [amountSpoiled, setAmountSpoiled] = useState(0);

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

            axios({
              url: "http://localhost:8080/orders/add",
              method: "post",
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
              data: {
                promisedArrival: arrivalDate.toString(),
                actualArrival: orderDate.toString(),
                amountOrdered: amount,
                unit: unit.toString(),
                deliveryLocation: deliveryLocation,
                state: orderState,
                providerId: provider.replace(/[^0-9]/g, ""),
                currency: currency.toString(),
                paidAmount: paidAmount.toString(),
                ownerId: localStorage.getItem("id"),
                amountDelivered: amountDelivered,
                amountSpoiled: amountSpoiled,
                amountCrushed: amountCrushed,
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
          }}
        >
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Order Date</Form.Label>
            <Form.Control
              type="date"
              onChange={(e) => {
                setOrderDate(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Arrival Date</Form.Label>
            <Form.Control
              type="date"
              onChange={(e) => {
                setArrivalDate(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group controlId="formBasicUsername">
            <Form.Label>Amount Ordered</Form.Label>
            <Form.Control
              type="number"
              step="any"
              placeholder="Enter the amount ordered"
              onChange={(e) => {
                setAmount(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group controlId="formBasicUsername">
            <Form.Label>Amount Delivered</Form.Label>
            <Form.Control
              type="number"
              step="any"
              placeholder="Enter the amount delivered"
              onChange={(e) => {
                setAmountDelivered(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group controlId="formBasicUsername">
            <Form.Label>Amount Crushed</Form.Label>
            <Form.Control
              type="number"
              step="any"
              placeholder="Enter the amount crushed"
              onChange={(e) => {
                setAmountCrushed(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group controlId="formBasicUsername">
            <Form.Label>Amount Spoiled</Form.Label>
            <Form.Control
              type="number"
              step="any"
              placeholder="Enter the amount spoiled"
              onChange={(e) => {
                setAmountSpoiled(e.target.value);
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
            <Form.Label>Paid Amount</Form.Label>
            <Form.Control
              type="number"
              step="any"
              placeholder="Enter the paid amount"
              onChange={(e) => {
                setPaidAmount(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group controlId="formBasicUsername">
            <Form.Label>Currency</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the currency"
              onChange={(e) => {
                setCurrency(e.target.value);
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
            <Form.Label>Select Order Status</Form.Label>
            <Form.Control
              as="select"
              custom
              onClick={(e) => {
                setOrderState(e.target.value);
              }}
            >
              <option></option>
              <option>Fulfilled</option>
              <option>Placed</option>
              <option>Accepted</option>
              <option>Expired</option>
            </Form.Control>
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
