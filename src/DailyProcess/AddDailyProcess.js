import React, { Component } from "react";
import axios from "axios";
class AddDailyProcess extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      sparesDeliveredTime: null,
      serviceStartTime: null,
      serviceCompleteTime: null,
      vehicleDeliveryTime: null,
      customerUpdates: "",
      notes: "",
      sparesOrderType: "",
      serviceType: "",
      vehicleStatus: "",
      paidAmt: 0,
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("https://7e746784e479.ngrok.io/api/dailyprocess/add", this.state)
      .then((Response) => {
        console.log(Response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const {
      id,
      sparesDeliveredTime,
      serviceStartTime,
      serviceCompleteTime,
      vehicleDeliveryTime,
      customerUpdates,
      notes,
      sparesOrderType,
      serviceType,
      vehicleStatus,
      paidAmt,
    } = this.state;
    return (
      <div>
        <h2>Add DailyProcess :</h2>

        <form onSubmit={this.submitHandler}>
          <div>
            <label>
              ID:
              <input
                type="text"
                name="id"
                value={id}
                onChange={this.changeHandler}
              ></input>
            </label>
          </div>

          <div>
            <label>
              sparesdeliveredtime
              <input
                type="text"
                name="sparesDeliveredTime"
                value={sparesDeliveredTime}
                onChange={this.changeHandler}
              ></input>
            </label>
          </div>

          <div>
            <label>
              servicestarttime
              <input
                type="text"
                name="serviceStartTime"
                value={serviceStartTime}
                onChange={this.changeHandler}
              ></input>
            </label>
          </div>

          <div>
            <label>
              servicecompletetime
              <input
                type="text"
                name="serviceCompleteTime"
                value={serviceCompleteTime}
                onChange={this.changeHandler}
              ></input>
            </label>
          </div>

          <div>
            <label>
              vehicledeliverytime
              <input
                type="text"
                name="vehicleDeliveryTime"
                value={vehicleDeliveryTime}
                onChange={this.changeHandler}
              ></input>
            </label>
          </div>

          <div>
            <label>
              customerupdates
              <input
                type="text"
                name="customerUpdates"
                value={customerUpdates}
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
                name="sparesOrderType"
                value={sparesOrderType}
                onChange={this.changeHandler}
              ></input>
            </label>
          </div>
          <div>
            <label>
              servicetype
              <input
                type="text"
                name="serviceType"
                value={serviceType}
                onChange={this.changeHandler}
              ></input>
            </label>
          </div>
          <div>
            <label>
              vehiclestatus
              <input
                type="text"
                name="vehicleStatus"
                value={vehicleStatus}
                onChange={this.changeHandler}
              ></input>
            </label>
          </div>
          <div>
            <label>
              paidamt
              <input
                type="text"
                name="paidAmt"
                value={paidAmt}
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

export default AddDailyProcess;
