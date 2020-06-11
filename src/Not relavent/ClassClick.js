import React, { Component } from "react";
//using the class component

class ClassClick extends Component {
  clickhandler() {
    console.log("clicked");
  }
  render() {
    return (
      <div>
        <button onClick={this.clickhandler}>click</button>
      </div>
    );
  }
}

export default ClassClick;
