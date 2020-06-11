import React, { Component } from "react";
import "./App.css";
import ReadInventory from "./inventory/ReadInventory";
import AddInventory from "./inventory/AddInventory";
import UpdateInventory from "./inventory/UpdateInventory";
import ReadDailyProcess from "./DailyProcess/ReadDailyprocess";
import AddDailyProcess from "./DailyProcess/AddDailyProcess";
import UpdateDailyProcess from "./DailyProcess/UpdateDailyProcess";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavigationBar from "./inventory/NavigationBar";
import "bootstrap/dist/css/bootstrap.min.css";

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href =
  "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavigationBar />

          <Switch>
            <Route path="/ReadInventory" component={ReadInventory} exact />
            <Route path="/AddInventory" component={AddInventory} />
            <Route path="/UpdateInventory" component={UpdateInventory} />
            <Route path="/ReadDailyProcess" component={ReadDailyProcess} />
            <Route path="/AddDailyProcess" component={AddDailyProcess} />
            <Route path="/UpdateDailyProcess" component={UpdateDailyProcess} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
