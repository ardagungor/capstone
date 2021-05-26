import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import classes from "./AddVehicle.module.css";
import axios from "axios";

const AddVehicle = () => {
  const [providerName, setProviderName] = useState("");
  const [providerID, setProviderID] = useState("");
  const [type, setType] = useState("Green");
  const [model, setModel] = useState("");
  const [capacity, setCapacity] = useState("");
  const [capacityUnit, setCapacityUnit] = useState("m3");
  const [areaCoverage, setAreaCoverage] = useState("");
  const [coverageUnit, setCoverageUnit] = useState("km2");
  const [lowestTemp, setLowestTemp] = useState("");
  const [highestTemp, setHighestTemp] = useState("");
  const [tempUnit, setTempUnit] = useState("C");
  const [lowestHumidity, setLowestHumidity] = useState("");
  const [highestHumidity, setHighestHumidity] = useState("");
  const [humidityUnit, setHumidityUnit] = useState("%");
  const [temperatureMonitoringTech, setTemperatureMonitoringTech] =
    useState("");
  const [humidityMonitoringTech, setHumidityMonitoringTech] = useState("");
  const [tempMaintainingTech, setTempMaintainingTech] = useState("");
  const [humidityMaintainingTech, setHumidityMaintainingTech] = useState("");
  const [fuelType, setFuelType] = useState("Green");
  const [accidentCount, setAccidentCount] = useState(0);

  return (
    <div className={classes.container}>
      <div className={classes.form}>
        <h3>Add Vehicle</h3>

        <Form
          onSubmit={(e) => {
            e.preventDefault();
            axios({
              url: "http://localhost:8080/vehicles/add",
              method: "post",
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
              data: {
                providerName: providerName,
                providerID: parseInt(providerID),
                vehicleType: type,
                vehicleModel: model,
                vehicleCapacity: capacity,
                capacityUnit: capacityUnit,
                areaCoverage: areaCoverage,
                coverageUnit: coverageUnit,
                lowestTemp: lowestTemp,
                highestTemp: highestTemp,
                tempUnit: tempUnit,
                lowestHumidity: lowestHumidity,
                highestHumidity: highestHumidity,
                humidityUnit: humidityUnit,
                temperatureMonitoringTech: temperatureMonitoringTech,
                humidityMonitoringTech: humidityMonitoringTech,
                tempMaintainingTech: tempMaintainingTech,
                humidityMaintainingTech: humidityMaintainingTech,
                fuelType: fuelType,
                accidentCount: parseInt(accidentCount),
              },
            })
              .then((res) => {
                if (res.status == "200") {
                  console.log(res);
                  alert("Vehicle added.");
                }
              })
              .catch((err) => {
                console.log(err);
                alert(
                  "Could not add the vehicle. Please check the input fields."
                );
              });
          }}
        >
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Provider Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter provider name"
              onChange={(e) => {
                setProviderName(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Provider ID</Form.Label>
            <Form.Control
              type="long"
              placeholder="Enter provider ID"
              onChange={(e) => {
                setProviderID(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>Vehicle Type</Form.Label>
            <Form.Control
              as="select"
              custom
              onClick={(e) => {
                setType(e.target.value);
              }}
            >
              <option></option>
              <option>Green</option>
              <option>Non-green</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>Fuel Type</Form.Label>
            <Form.Control
              as="select"
              custom
              onClick={(e) => {
                setFuelType(e.target.value);
              }}
            >
              <option></option>
              <option>Green</option>
              <option>Non-green</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Vehicle Model</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter vehicle model"
              onChange={(e) => {
                setModel(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Accident Count</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter accident count"
              onChange={(e) => {
                setAccidentCount(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Capacity</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter vehicle capacity"
              onChange={(e) => {
                setCapacity(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Area Coverage</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter area coverage"
              onChange={(e) => {
                setAreaCoverage(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Lowest Temperature</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter lowest temperature"
              onChange={(e) => {
                setLowestTemp(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Highest Temperature</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter highest temperature"
              onChange={(e) => {
                setHighestTemp(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Lowest Humidity</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter lowest humidity"
              onChange={(e) => {
                setLowestHumidity(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Highest Humidity</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter highest humidity"
              onChange={(e) => {
                setHighestHumidity(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>Temperature Monitoring Tech</Form.Label>
            <Form.Control
              as="select"
              custom
              onClick={(e) => {
                setTemperatureMonitoringTech(e.target.value);
              }}
            >
              <option></option>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>Humidity Monitoring Tech</Form.Label>
            <Form.Control
              as="select"
              custom
              onClick={(e) => {
                setHumidityMonitoringTech(e.target.value);
              }}
            >
              <option></option>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </Form.Control>
          </Form.Group>{" "}
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>Temperature Maintaining Tech</Form.Label>
            <Form.Control
              as="select"
              custom
              onClick={(e) => {
                setTempMaintainingTech(e.target.value);
              }}
            >
              <option></option>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </Form.Control>
          </Form.Group>{" "}
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>Humidity Maintaining Tech</Form.Label>
            <Form.Control
              as="select"
              custom
              onClick={(e) => {
                setHumidityMaintainingTech(e.target.value);
              }}
            >
              <option></option>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Add Vehicle
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddVehicle;
