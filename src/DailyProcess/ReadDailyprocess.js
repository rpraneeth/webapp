import React, { Component } from "react";
import "../App.css";
import axios from "axios";
import ReactPaginate from "react-paginate";
import "../styles/Pagination.css";
import * as ReactBootstrap from "react-bootstrap";
class ReadDailyProcess extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      offset: 0,
      perPage: 10,
      currentPage: 0,
    };
    this.handlePageClick = this.handlePageClick.bind(this);
  }
  receivedData() {
    axios.get(`https://7e746784e479.ngrok.io/api/dailyprocess/`).then((res) => {
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
        <h2>DailyProcess</h2>
        <ReactBootstrap.Table responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>sparesdeliveredtime</th>
              <th>servicestarttime</th>
              <th>servicecompletetime</th>
              <th>vehicledeliverytime</th>
              <th>customerupdates</th>
              <th>notes</th>
              <th>sparesordertype </th>
              <th>servicetype</th>
              <th>vehiclestatus</th>
              <th>paidamt</th>
            </tr>
          </thead>

          <tbody>
            {results.map((result) => (
              <tr key={result.id}>
                <td>{result.id}</td>

                <td>{result.sparesDeliveredTime}</td>

                <td>{result.serviceStartTime}</td>

                <td>{result.serviceCompleteTime}</td>

                <td>{result.vehicleDeliveryTime}</td>

                <td>{result.customerUpdates}</td>

                <td>{result.notes}</td>

                <td>{result.sparesOrderType}</td>

                <td>{result.serviceType}</td>

                <td>{result.vehicleStatus}</td>

                <td>{result.paidAmt}</td>
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

export default ReadDailyProcess;
