import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "hello",
    };
  }
  clickhandler() {
    this.setState({
      message: "bye",
    });
  }
  render() {
    return (
      <div>
        <div>
          <h1>{this.state.message}</h1>
        </div>
        {/* <button onClick={this.clickhandler.bind(this)}>click</button> */}
        {/* <button onClick={() => this.clickhandler()}>click</button> */}
  
</div>
    );
  }
}

export default EventBind;
