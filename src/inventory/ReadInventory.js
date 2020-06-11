import React, { Component } from "react";
import "../App.css";
import axios from "axios";
import ReactPaginate from "react-paginate";
import "../styles/Pagination.css";
import * as ReactBootstrap from "react-bootstrap";

class ReadInventory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      results: [],
      perPage: 10,
      currentPage: 0,
    };
    this.handlePageClick = this.handlePageClick.bind(this);
  }
  receivedData() {
    axios.get(`https://7e746784e479.ngrok.io/api/inventory/`).then((res) => {
      const resultArray = res.data.data;
      const slice = resultArray.slice(
        this.state.offset,
        this.state.offset + this.state.perPage
      );
      this.setState({ results: slice });

      console.log(slice);
    });
  }
  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;
    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        this.receivedData();
      }
    );
  };

  componentDidMount() {
    this.receivedData();
  }

  render() {
    const { results } = this.state;
    return (
      <div className="total">
        <h2>Inventory list</h2>
        <ReactBootstrap.Table responsive>
          <thead>
            <tr>
              <th>Id</th>
              <th>InventoryType</th>
              <th>InvoiceId</th>
              <th>InvoiceDate</th>
              <th>PartNumber</th>
              <th>Location</th>
              <th>Quantity</th>
              <th>MRP</th>
              <th>PurchasePrice</th>
              <th>Totalamount</th>
              <th>PurchaseTime</th>
              <th>VehicleNo</th>
              <th>PaidAmount</th>
              <th>PaidTime</th>
              <th>DueBalance</th>
              <th>ModePayment</th>
              <th>TransactionId</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result) => (
              <tr key={result.id}>
                <td>{result.id}</td>
                <td>{result.inventoryType}</td>
                <td>{result.invoiceId}</td>
                <td>{result.invoiceDate}</td>
                <td>{result.partNumber}</td>
                <td>{result.location}</td>
                <td>{result.quantity}</td>
                <td>{result.mrp}</td>
                <td>{result.purchasePrice}</td>
                <td>{result.totalAmount}</td>
                <td>{result.purchaseTime}</td>
                <td>{result.vehicleNo}</td>
                <td>{result.payments.paidAmount}</td>
                <td>{result.payments.paidTime}</td>
                <td>{result.payments.dueBalance}</td>
                <td>{result.payments.modePayment}</td>
                <td>{result.payments.transactionId}</td>
              </tr>
            ))}
          </tbody>
        </ReactBootstrap.Table>
        <div>
          <div>
            <ReactPaginate
              previousLabel={"Prev"}
              nextLabel={"Next"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={this.state.pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={this.handlePageClick}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ReadInventory;
