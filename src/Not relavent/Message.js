import React, { Component } from "react";
class message extends Component {
  changeMessage() {
    return "heelo";
  }
  render() {
    return (
      <div>
        <button onClick={() => changeMessage()}>subscribe</button>
      </div>
    );
  }
}
export default message;
