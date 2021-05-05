import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Sidebar from "./components/Sidebar/Sidebar";
import Homepage from "./components/Homepage/Homepage";
import Hero from "./components/Hero/Hero";
import Boxes from "./components/Boxes/Boxes";
import Percent from "./components/Percent/Percent";
import Home from "./components/Home/Home";
import Order from "./components/Order/Order";
import Results from "./components/Results/Results";
import Topbar from "./components/Topbar/Topbar";
import Profiles from "./components/Profiles/Profiles"
import { Switch, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Header /> */}
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        {/* <Switch>
          <Route exact path="/" component={Boxes} />
        </Switch>
        <Switch>
          <Route exact path="/" component={Percent} />
        </Switch> */}

        <Switch>
          <Route exact path="/login" component={Login} />
        </Switch>
        <Switch>
          <Route exact path="/order" component={Order} />
        </Switch>
        <Switch>
          <Route exact path="/results" component={Results} />
        </Switch>
        <Switch>
          <Route exact path="/home" component={Home} />
        </Switch>
        <Switch>
          <Route exact path="/profiles" component={Profiles} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
