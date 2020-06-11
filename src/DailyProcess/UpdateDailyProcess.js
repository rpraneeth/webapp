import React, { Component } from "react";
import axios from "axios";
class UpdateDailyProcess extends Component {
  constructor(props) {
    super(props);

    this.state = {
      idfromurl: "",

      sparesdeliveredtime: null,
      servicestarttime: null,
      servicecompletetime: null,
      vehicledeliverytime: null,
      customerupdates: "",
      notes: "",
      sparesordertype: "",
      servicetype: "",
      vehiclestatus: "",
      paidamt: 0,
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    console.log(
      "-------",
      "https://42b5080c5859.ngrok.io/api/inventory/update/" +
        this.state.idfromurl
    );
    axios
      .post(
        "https://7e746784e479.ngrok.io/dailyprocess/update/" +
          this.state.idfromurl,
        this.state
      )
      .then((Response) => {
        console.log(Response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const {
      idfromurl,

      sparesdeliveredtime,
      servicestarttime,
      servicecompletetime,
      vehicledeliverytime,
      customerupdates,
      notes,
      sparesordertype,
      servicetype,
      vehiclestatus,
      paidamt,
    } = this.state;
    return (
      <div>
        <h2> Update Daily Process:</h2>
        <h3>Enter the unique ID to update records!</h3>
        <form onSubmit={this.submitHandler}>
          <div>
            <label>
              ID:
              <input
                type="text"
                name="idfromurl"
                value={idfromurl}
                onChange={this.changeHandler}
              ></input>
            </label>
            <br></br>
          </div>
          <h4>
            <div>Update the require fields:</div>
          </h4>
          <br></br>
          <div>
            <label>
              sparesdeliveredtime
              <input
                type="text"
                name="sparesdeliveredtime"
                value={sparesdeliveredtime}
                onChange={this.changeHandler}
              ></input>
            </label>
          </div>

          <div>
            <label>
              servicestarttime
              <input
                type="text"
                name="servicestarttime"
                value={servicestarttime}
                onChange={this.changeHandler}
              ></input>
            </label>
          </div>

          <div>
            <label>
              servicecompletetime
              <input
                type="text"
                name="servicecompletetime"
                value={servicecompletetime}
                onChange={this.changeHandler}
              ></input>
            </label>
          </div>

          <div>
            <label>
              vehicledeliverytime
              <input
                type="text"
                name="vehicledeliverytime"
                value={vehicledeliverytime}
                onChange={this.changeHandler}
              ></input>
            </label>
          </div>

          <div>
            <label>
              customerupdates
              <input
                type="text"
                name="customerupdates"
                value={customerupdates}
                onChange={this.changeHandler}
              ></input>
            </label>
          </div>
          <div>
            <label>
              notes
              <input
                type="text"
                name="notes"
                value={notes}
                onChange={this.changeHandler}
              ></input>
            </label>
          </div>
          <div>
            <label>
              sparesordertype
              <input
                type="text"
                name="sparesordertype"
                value={sparesordertype}
                onChange={this.changeHandler}
              ></input>
            </label>
          </div>
          <div>
            <label>
              servicetype
              <input
                type="text"
                name="servicetype"
                value={servicetype}
                onChange={this.changeHandler}
              ></input>
            </label>
          </div>
          <div>
            <label>
              vehiclestatus
              <input
                type="text"
                name="vehiclestatus"
                value={vehiclestatus}
                onChange={this.changeHandler}
              ></input>
            </label>
          </div>
          <div>
            <label>
              paidamt
              <input
                type="text"
                name="paidamt"
                value={paidamt}
                onChange={this.changeHandler}
              ></input>
            </label>
          </div>

          <br></br>
          <button type="submit">
            <h4>Submit</h4>
          </button>
        </form>
      </div>
    );
  }
}

export default UpdateDailyProcess;
