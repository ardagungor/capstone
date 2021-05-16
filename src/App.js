import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login/Login";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Home/Home";
import Order from "./components/Order/Order";
import Results from "./components/Results/Results";
import Profiles from "./components/Profiles/Profiles";
import Dashboard from "./components/Dashboard/Dashboard";
import OrderSummary from "./components/OrderSummary/OrderSummary";
import PrivateRoute from "./PrivateRoute";
import { Switch, Route, BrowserRouter } from "react-router-dom";

function App() {
  let decisionFunction = () => {
    return localStorage.getItem("logged");
  };
  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar />
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
        </Switch>
        <Switch>
          <Route exact path="/login" component={Login} />
        </Switch>
        <Switch>
          <PrivateRoute exact path="/order" component={Order} />
        </Switch>
        <Switch>
          <PrivateRoute exact path="/results" component={Results} />
        </Switch>
        <Switch>
          <PrivateRoute exact path="/home" component={Home} />
        </Switch>
        <Switch>
          <PrivateRoute
            authed={localStorage.getItem("logged")}
            path="/profiles"
            component={Profiles}
          />
        </Switch>
        <Switch>
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
        {/* <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch> */}
        <Switch>
          <PrivateRoute exact path="/order-summary" component={OrderSummary} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
