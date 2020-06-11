import React, { Component } from "react";
import axios from "axios";
class AddInventory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      location: "",
      partNumber: 0,
      quantity: 0,
      inventoryType: "",
      invoiceId: "",
      invoiceDate: null,
      purchasePrice: 0,
      totalAmount: 0,
      purchaseTime: null,
      vehicleNo: "",
      mrp: 0,
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("https://7e746784e479.ngrok.io/api/inventory/add", this.state)
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
      location,
      partNumber,
      quantity,
      inventoryType,
      invoiceId,
      invoiceDate,
      purchasePrice,
      totalAmount,
      purchaseTime,
      vehicleNo,
      mrp,
    } = this.state;
    return (
      <div>
        <h2>Add Inventory :</h2>

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
              Location
              <input
                type="text"
                name="location"
                value={location}
                onChange={this.changeHandler}
              ></input>
            </label>
          </div>

          <div>
            <label>
              PartNumber
              <input
                type="text"
                name="partNumber"
                value={partNumber}
                onChange={this.changeHandler}
              ></input>
            </label>
          </div>

          <div>
            <label>
              Quantity
              <input
                type="text"
                name="quantity"
                value={quantity}
                onChange={this.changeHandler}
              ></input>
            </label>
          </div>

          <div>
            <label>
              InventoryType
              <input
                type="text"
                name="inventoryType"
                value={inventoryType}
                onChange={this.changeHandler}
              ></input>
            </label>
          </div>

          <div>
            <label>
              InvoiceId
              <input
                type="text"
                name="invoiceId"
                value={invoiceId}
                onChange={this.changeHandler}
              ></input>
            </label>
          </div>
          <div>
            <label>
              InvoiceDate
              <input
                type="text"
                name="invoiceDate"
                value={invoiceDate}
                onChange={this.changeHandler}
              ></input>
            </label>
          </div>
          <div>
            <label>
              PurchasePrice
              <input
                type="text"
                name="purchasePrice"
                value={purchasePrice}
                onChange={this.changeHandler}
              ></input>
            </label>
          </div>
          <div>
            <label>
              TotalAmount
              <input
                type="text"
                name="totalAmount"
                value={totalAmount}
                onChange={this.changeHandler}
              ></input>
            </label>
          </div>
          <div>
            <label>
              PurchaseTime
              <input
                type="text"
                name="purchaseTime"
                value={purchaseTime}
                onChange={this.changeHandler}
              ></input>
            </label>
          </div>
          <div>
            <label>
              VehicleNo
              <input
                type="text"
                name="vehicleNo"
                value={vehicleNo}
                onChange={this.changeHandler}
              ></input>
            </label>
          </div>
          <div>
            <label>
              MRP
              <input
                type="text"
                name="mrp"
                value={mrp}
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

export default AddInventory;
