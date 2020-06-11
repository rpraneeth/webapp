import React, { Component } from "react";
import "../App.css";
class NavigationBar extends Component {
  render() {
    return (
      <div class="dropdown">
        <button class="dropbtn">
          <a href="/"> Home </a>
        </button>
        <div class="dropdown-content">
          <a href="/ReadInventory"> ReadInventory </a>
          <a href="/AddInventory"> AddInventory </a>
          <a href="/UpdateInventory"> UpdateInventory</a>
          <a href="/ReadDailyProcess">ReadDailyProcess </a>
          <a href="/AddDailyProcess"> AddDailyProcess </a>
          <a href="/UpdateDailyProcess">UpdateDailyProcess</a>
        </div>
      </div>
    );
  }
}

export default NavigationBar;
